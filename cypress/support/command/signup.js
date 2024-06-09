import { Faker, faker } from "@faker-js/faker"


Cypress.Commands.add('insertFullName', () => { 
    cy.fixture('elements').then(info => {
        cy.get(info.fullNameField).should('be.visible').type(faker.person.fullName())
    })
   
 })

Cypress.Commands.add('insertBusinessName', () => { 
    cy.fixture('elements').then(info => {
        cy.get(info.businessNameField).should('be.visible').type(faker.company.buzzVerb())
    })
 })

Cypress.Commands.add('insertBusinessEmail', () => { 
    cy.fixture('elements').then(info => {
        cy.get(info.businessEmailNameField).should('be.visible').type(faker.internet.email({provider:'yopmail.com'}))
    })     
})

Cypress.Commands.add('insertBusinessPhoneNo', () => { 
    cy.fixture('elements').then(info => {
        cy.get(info.businessPhoneNo).should('be.visible').type(faker.phone.number('+234########'))
    })      
})

Cypress.Commands.add('insertBusinessRegNumber', () => { 
    cy.fixture('elements').then(info => {
        cy.get(info.businessRegNumberField).should('be.visible').type('RC-789')
    })      
})

Cypress.Commands.add('clickNextButton', () => { 
    cy.fixture('elements').then(info => {
        cy.get('button[type="button"]').should('be.visible').click()
    })      
})