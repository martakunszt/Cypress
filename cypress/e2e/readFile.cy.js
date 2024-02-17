/// <reference types="cypress" />
describe('Bank tests', () => {
	it('Login into bank account using fixtures', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');

		cy.fixture('credentials').then((loginData) => {
			//loginData is the name we chose to refer to this json file
			//access to this file is only within the brackets!

			cy.get('#user_login').clear(); //clears input field //this one uses an alias that was created in line 6
			cy.get('#user_login').type(loginData.myLogin); //types in username from the json file

			cy.get('#user_password').clear(); //clears input field
			cy.get('#user_password').type(loginData.myPassword); //types in password from the json file
		});

		cy.get('[name="submit"]').click(); //taps on the 'submit' button

		cy.get('#account_summary_tab')
			.should('be.visible') //account summary should be visible - assertion that our test passed
			.and('contain', 'Account Summary');
	});

	it('Login into bank account using readFile', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');

		cy.readFile('cypress/fixtures/credentials.json').then((loginData) => {
			//paste the relative path to the file to use readFile, but need to change \ to /
			//access to this file is only within the brackets!

			cy.get('#user_login').clear(); //clears input field //this one uses an alias that was created in line 6
			cy.get('#user_login').type(loginData.myLogin); //types in username from the json file

			cy.get('#user_password').clear(); //clears input field
			cy.get('#user_password').type(loginData.myPassword); //types in password from the json file
		});

		cy.get('[name="submit"]').click(); //taps on the 'submit' button

		cy.get('#account_summary_tab')
			.should('be.visible') //account summary should be visible - assertion that our test passed
			.and('contain', 'Account Summary');
	});

	it('Write file test', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');

		cy.fixture('credentials.json').then((loginData) => {
			cy.get('#user_login').clear();
			cy.get('#user_login').type(loginData.myLogin);

			cy.get('#user_password').clear();
			cy.get('#user_password').type(loginData.myPassword);
		});

		cy.writeFile('cypress/fixtures/credentials.json', {
			myLogin: 'WRONG_NAME',
			myPassword: 'WRONG_PASS',
		});

		//cy.fixture('credentials.json').then((loginData) => { //!credential file was overwrote but it still uses the old data, fixture used the old buffered data, not the new one
		cy.readFile('cypress/fixtures/credentials.json').then((loginData) => {
			//! readFile does not buffer old data
			cy.get('#user_login').clear();
			cy.get('#user_login').type(loginData.myLogin);

			cy.get('#user_password').clear();
			cy.get('#user_password').type(loginData.myPassword);
		});

		cy.get('[name="submit"]').click(); //taps on the 'submit' button

		cy.get('#account_summary_tab')
			.should('be.visible') //account summary should be visible - assertion that our test passed
			.and('contain', 'Account Summary');
	});
});
