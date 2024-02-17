const selectors = {
    transferTabLink: '#transfer_funds_tab',
};

class TransferPage {
    verifyIfBasicElementsAreDisplayed() {
        cy.get(selectors.transferTabLink).should('be.visible');
    }

    clickOnTransferTab() {
        cy.get('#transfer_funds_tab').click();
    }

    tapOnDropdown(){
        cy.get('#tf_fromAccountId').select('Loan(Avail. balance = $ 780)');
        cy.get('#tf_fromAccountId').should('not.have.value', 'Savings(Avail. balance = $ 1000)')
    }

    tapOnUsername(){
        cy.get('.dropdown').click({multiple:true}).get('.dropdown.open')
        cy.get('#logout_link').trigger('mousemove').click();



    }
}
export default TransferPage;

