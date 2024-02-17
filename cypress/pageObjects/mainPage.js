const selectors = {
	accountSummaryTabLink: '#account_summary_tab',
};

class MainPage {
	verifyIfBasicElementsAreDisplayed() {
		cy.get(selectors.accountSummaryTabLink).should('be.visible');
	}
}

export default MainPage;
