/// <reference types="cypress" />

describe('dropdown tests', () => {
	it('Visit page and select from dropdown', () => {
		cy.viewport(1024, 600);
		cy.visit('https://devexpress.github.io/testcafe/example/');
		//cy.get('#preferred-interface').click(); //!won't work cause it's a dropdown
		cy.get('#preferred-interface').select('JavaScript API');
		cy.get('#preferred-interface').should('have.value', 'JavaScript API'); //assertion
		cy.get('#preferred-interface').select(2); //counting starts from 0
		cy.get('#preferred-interface').should('not.have.value', 'JavaScript API'); //assertion

		cy.screenshot(); //default full page screenshot
		cy.screenshot('FullPage screenshot', { capture: 'fullPage' });
		cy.screenshot('viewPort screenshot', { capture: 'viewport' });
		cy.screenshot('runner screenshot', { capture: 'runner' });

		cy.get('.col-2').screenshot('onlycolumn');

		cy.get('h1').scrollIntoView(); //this function will scroll to h1 selector
	});
});
