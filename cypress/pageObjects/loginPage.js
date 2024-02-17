const selectors = {
	//selectors is just a name that we come up with instead of selectors you can even use dingalinga
	loginTextbox: '#user_login',
	passwordTextbox: '#user_password', // those are actual id's or tags or classes etc
	signInButton: '[name="submit"]',
};

class LoginPage {
	//in this class we put methods, you can use ^ those selectors only by using methods described in this class
	verifyIfBasicElementsAreDisplayed() {
		//cy.get(selectors.loginTextbox).should('be.visible');
		cy.get(selectors.passwordTextbox).should('be.visible');
		cy.get(selectors.signInButton).should('be.visible');
	}
	fillCredentialsData(usernameData, passwordData) {
		//this method uses parameters username and password - name depends on us
		cy.get(selectors.loginTextbox).type(usernameData);
		cy.get(selectors.passwordTextbox).type(passwordData); //we are not hardcoding data here, we are creating a reusable method, thats why we are passing our parameters
	}
	clickSignInButton() {
		cy.get(selectors.signInButton).click(); //a method to click on the sign in button
	}
	verifyIfBannerIsVisible(){
		cy.get('.alert.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.');
	}

	CheckSignInButton(){
		cy.get(selectors.signInButton)
			.should('be.visible')
			.and('contain', 'Sign in');
	}

}

// this will export our class and then we can import it in the test.cy.js file
export default LoginPage;
