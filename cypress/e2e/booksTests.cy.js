/// <reference types="cypress" />
describe('books tests', () => {
	it('Visit page', () => {
		cy.visit('http://books.toscrape.com');
		cy.log('Start of testing'); //prints output to the console - useful for headless tests
		cy.get('.nav li ul li').first().should('be.visible'); //checks if the 1st one is visible
		//cy.wait(5000)
		//cy.pause(); //tap on the resume button to resume testing
		cy.get('.nav li ul li').last().should('be.visible'); //checks if the last one is visible
		cy.get('.nav li ul li').eq(7).should('be.visible'); //checks if the 7nth element is visible --> remember that it counts from 0
		cy.get('.nav li ul li').eq(-7).should('be.visible'); //checks if the 7nth element from the end is visible --> remember that it counts from 0, and it's actually a 7nth element from the end
		cy.get('.nav li ul li').its('length').should('eq', 50); //checks if the selector has indeed 50 elements
		cy.get('a').contains('Fiction').should('be.visible');
		//cy.contains('Fiction').click(); // don't use this method
		cy.log('End of testing'); //prints output to the console - useful for headless tests
		cy.reload(); //refreshes the page
	});
});
