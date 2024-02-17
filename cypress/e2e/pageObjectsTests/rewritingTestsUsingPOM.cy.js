/// <reference types="cypress" />

import LoginPage from '../../pageObjects/loginPage'; //this imports file
//import MainPage from '../../pageObjects/mainPage';
import TransferPage from '../../pageObjects/transferPage';
import LogoutPage from '../../pageObjects/LogoutPage';

const loginPage = new LoginPage(); //access to the one instance of this class, be careful - when using capital letters etc
//const mainPage = new MainPage();
const transferPage = new TransferPage();
const logoutPage = new LogoutPage();

beforeEach(() => {
    cy.fixture('credentials').then((loginData) => {
        cy.visit(loginData.website);
    });
});

describe('Rewriting tests using POM', ()=>{

    it('Checks Sign in button text',()=>{

        loginPage.CheckSignInButton();
    })

    it('Logs in and redirects to Transfer Money & Make Payments',() => {
        loginPage.fillCredentialsData('username', 'password');
        loginPage.clickSignInButton();
        transferPage.clickOnTransferTab();
        transferPage.verifyIfBasicElementsAreDisplayed();
    })

    it('Clicks on dropdown menu', () => {
        loginPage.fillCredentialsData('username', 'password');
        loginPage.clickSignInButton();
        transferPage.clickOnTransferTab();
        transferPage.tapOnDropdown();
})

    it('Verify if Error banner is displayed', () =>{

        loginPage.fillCredentialsData('wrong', 'password'); // those are hardcoded values
        loginPage.clickSignInButton();
        loginPage.verifyIfBasicElementsAreDisplayed();
        loginPage.verifyIfBannerIsVisible();
    })

    it('Logs out',() => {
        loginPage.fillCredentialsData('username', 'password');
        loginPage.clickSignInButton();
        transferPage.tapOnUsername();
        logoutPage.SignInButtonIsVisible();
    })

})