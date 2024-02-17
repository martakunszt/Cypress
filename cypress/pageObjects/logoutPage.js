const selectors = {
	signInButton: '#signin_button',
};

class LogoutPage {
	SignInButtonIsVisible() {
		cy.get(selectors.signInButton).should('be.visible');
	}
}

export default LogoutPage;