//commands and cypress methods will be recommended etc

/// <reference types="cypress" />

//every test suite should begin with describe
describe('My first Cypress tests', () => {
	// every test begins with it
	it('First passing test', () => {
		expect(true).to.equal(true); //asserts true equals true
	});

	//  it.only('First failing test', () => {
	//     expect(true).to.equal(false); //asserts true != true
	// })

	// it.skip('Another passing test', () => {
	//     expect(7).to.equal(7); //asserts false = false
	// })

	it('Visit page', () => {
		cy.visit('www.example.com', { timeout: 10000, failOnStatusCode: false }); //every cypress command starts with cy
		cy.url().should('include', 'example.com'); //checks whether we are on the correct page - method no.1 checks wther it is exactly example.com
		cy.url().should('match', /e..mple.com/); //using regex, checks if url matches and includes??
		//example.com -  you can use example... but the address e.g. could be example.com/products/main etc...
		cy.get('h1').should('be.visible'); //get relates to the element () -> which element in this case h1 is a selector
		cy.get('h2').should('not.exist');
	});
});
