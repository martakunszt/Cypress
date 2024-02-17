/// <reference types="cypress" />

beforeEach(() => {
	//before each test the viewport will change from the default and it will load data from json file
	cy.viewport(400, 300);
	cy.fixture('credentials').then((loginData) => {
		cy.visit(loginData.website);
		cy.get('#user_login').clear();
		cy.get('#user_login').type(loginData.myLogin);

		cy.get('#user_password').clear();
		cy.get('#user_password').type(loginData.myPassword);
	});
});

afterEach(() => {
	cy.log('End of testing'); //after every tests console will log - 'end of testing'
	cy.clearAllCookies();
	cy.clearAllLocalStorage();
});

after(() => {
	cy.log('End of the set of testing'); //after the last test it will log this result
});

describe('Login but with hooks changing viewport', () => {
	it('Login into bank account', () => {
		cy.get('[name="submit"]').click();

		cy.get('#account_summary_tab')
			.should('be.visible') //account summary should be visible - assertion that our test passed
			.and('contain', 'Account Summary');
		//cy.title().should('include', 'Zero - Account Summary 123'); //checks the tab title (browser's)
	});

	it('Highlights >>Forgot Password<<', () => {
		//cy.visit('http://zero.webappsecurity.com/login.html');
		cy.get('div.container div div div a').focus(); //highlights selected element
	});

	it('Incorrect Password test', () => {
		//cy.visit('http://zero.webappsecurity.com/login.html');
		cy.get('#user_login').clear();
		cy.get('#user_login').type('wronguser');

		cy.get('#user_password').clear();
		cy.get('#user_password').type('password');

		cy.get('[name="submit"]').click();

		cy.get('.alert.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.');
	});
});
