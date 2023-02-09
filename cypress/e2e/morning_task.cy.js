/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const username = faker.internet.userName();
const password = faker.internet.password();



describe('Morning task', () => {
  it('should', () => {
    cy.visit('https://www.demoblaze.com/');

    cy.get('#signin2').click();

    cy.get('#sign-username').type(username);

    cy.get('#sign-password').type(password);

    cy.contains('Sign up').click();
    
    cy.get('#login2').click({force: true});
    
    cy.get('#loginusername').type(username);
    
    cy.get('#loginpassword').type(password);
    
    cy.contains('Log in').click();
    
    cy.checkLogin();
    
    cy.contains('Samsung galaxy s6').click({force: true});
    
    cy.contains('Add to cart').click();
    
    cy.addProductAlert();
  });
});