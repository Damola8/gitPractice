
Cypress.Commands.add('clickHomePageLoginButton', () => { 

    cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(1)').should('be.visible').click()
    
 })
 
 Cypress.Commands.add('clickHomePageSignupButton', () => { 

    cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(2)').should('be.visible').click()
    
 })