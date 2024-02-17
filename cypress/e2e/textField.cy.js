/// <reference types="cypress" />

describe('Bank tests', () => {
	it('Login into bank account', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');
		cy.get('#user_login').as('myUsername'); //creates an alias

		cy.get('@myUsername').clear(); //clears input field //this one uses an alias that was created in line 6
		cy.get('#user_login').type('username', { delay: 100 }); //types in username

		cy.get('#user_password').as('myPassword'); //creates an alias //this one uses an alias that was created in line 6

		cy.get('@myPassword').clear(); //clears input field
		cy.get('#user_password').type('password', { delay: 100 }); //types in password

		cy.get('[name="submit"]').click(); //taps on the 'submit' button
		//cy.go(-1); //goes back to the previous page it can also go forward
		//cy.go('forward'); //goes back to the previous page it can also go forward

		cy.get('#account_summary_tab')
			.should('be.visible') //account summary should be visible - assertion that our test passed
			.and('contain', 'Account Summary'); //using chains to add multiple reqs
		//it is less readable but you can put that in one line instead of two lines

		cy.title().should('include', 'Zero - Account Summary'); //checks the tab title browser'
		cy.xpath('//*[@id="account_summary_tab"]')
			.should('be.visible')
			.and('contain', 'Account Summary');
	});

	it('Highlights >>Forgot Password<<', () => {
		cy.viewport(1600, 900); //changes screen resolution, you can run it for a specific test
		cy.visit('http://zero.webappsecurity.com/login.html');
		cy.get('div.container div div div a').focus(); //highlights selected element
	});

	it('Incorrect Password test', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');
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
