/// <reference types="cypress" />

import LoginPage from '../../pageObjects/loginPage'; //this imports file
import MainPage from '../../pageObjects/mainPage';

const loginPage = new LoginPage(); //access to the one instance of this class, be careful - when using capital letters etc
const mainPage = new MainPage();

beforeEach(() => {
	cy.fixture('credentials').then((loginData) => {
		cy.visit(loginData.website);
	});
});

describe('POM test', () => {
	it('Check if basic elements are displayed', () => {
		loginPage.verifyIfBasicElementsAreDisplayed(); //here we are calling out method that is located in LoginPage class
	});

	it('Log into bank account using hardcoded data', () => {
		loginPage.fillCredentialsData('username', 'password'); // those are hardcoded values
		loginPage.clickSignInButton();
		mainPage.verifyIfBasicElementsAreDisplayed(); //as you can see it's the same name of the method as ^, but it's from a different class, so it does something different
	});

	it('Log into bank account using parsed data', () => {
		cy.fixture('credentials').then((loginData) => {
			loginPage.fillCredentialsData('username', 'password'); // those are hardcoded values
			loginPage.clickSignInButton();
			loginPage.verifyIfBasicElementsAreDisplayed();
		});
	});


});
