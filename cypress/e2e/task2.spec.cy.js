import {faker} from '@faker-js/faker'
import HomePage from '../support/pages.js/homepage'

const home = new HomePage()

describe('Signup test scenarios', () => {

  it.only("Visit mima signup and fill all fields", () =>{
    cy.fixture('elements').then((info) => {
      cy.clickHomePageSignupButton(info.signUpButton)
      cy.typeAnyTextAnywhere(info.fullNameField, faker.person.fullName())
      cy.typeAnyTextAnywhere(info.businessNameField, faker.company.buzzVerb())
      cy.typeAnyTextAnywhere(info.businessEmailNameField, faker.internet.email({provider:'yopmail.com'}))
      cy.typeAnyTextAnywhere(info.businessPhoneNo, faker.phone.number('+234########'))
      cy.typeAnyTextAnywhere(info.businessRegNumberField,('RC-70126')) 


      // cy.insertFullName()
      // cy.insertBusinessName()
      // cy.insertBusinessEmail()
      // cy.insertBusinessPhoneNo()
      // cy.insertBusinessRegNumber()
      // cy.clickNextButton()
      // cy.get(info.fullNameField).should('be.visible').type('Oyindamola Sulaimon')
      // cy.get(info.businessNameField).should('be.visible').type('The House')
      // cy.get(info.businessEmailNameField).should('be.visible').type(faker.internet.email({provider:'yopmail.com'}))
      // cy.get(info.businessPhoneNo).should('be.visible').type(faker.phone.number('+234########'))
      // cy.get(info.businessRegNumberField).should('be.visible').type('BN4302196')
      // cy.get('button[type="button"]').should('be.visible').click()
      // cy.get('#website').should('be.visible').type('www.google.com')
      // cy.get('#instagramHandle').should('be.visible').type('thehouse_')
      // cy.get('#twitterHandle').should('be.visible').type('thehouse_')
      // cy.get('div[placeholder]').should('be.visible').click()
      // cy.get('.MimaDropdown_select__options__xLi7K:nth-child(3)').should('be.visible').click()
      // cy.get('#password').should('be.visible').type('Pa$sword1')
      // cy.get('button[type="submit"]').should('be.visible').click()
    })

  })

  
  it.skip("Visit mima signup and fill one optional field [Business reg Number]", () =>{
    it("Visit mima signup and fill one optional field", () =>{
      cy.clickHomePageSignupButton()
      cy.get('#fullname').should('be.visible').type('Oyindamola Sulaimon')
      cy.get('#businessname').should('be.visible').type('The House')
      cy.get('#businessemail').should('be.visible').type(faker.internet.email({provider:'yopmail.com'}))
      cy.get('#businessphonenumber').should('be.visible').type(faker.phone.number('+234########'))
      cy.get('#businessRegNum').should('be.visible').type('BN4302196')
      cy.get('button[type="button"]').should('be.visible').click()
      cy.get('button[type="button"]').should('be.visible').click()
      cy.get('#.MimaDropdown_select__options__xLi7K:nth-child(3)').should('be.visible').click()
      cy.get('#password').should('be.visible').type('Pa$sword1')
      cy.get('#button[type="submit"]').should('be.visible').click()
    })
  })

  it.skip("Visit mima signup and fill one optional field[Website]", () =>{
    it("Visit mima signup and fill one optional field", () =>{
      home.clickHomePageLoginButton()
      cy.get('#fullname').should('be.visible').type('Oyindamola Sulaimon')
      cy.get('#businessname').should('be.visible').type('The House')
      cy.get('#businessemail').should('be.visible').type(faker.internet.email({provider:'yopmail.com'}))
      cy.get('#businessphonenumber').should('be.visible').type(faker.phone.number('+234########'))
      cy.get('button[type="button"]').should('be.visible').click()
      cy.get('#website').should('be.visible').type('www.google.com')
      cy.get('button[type="button"]').should('be.visible').click()
      cy.get('#.MimaDropdown_select__options__xLi7K:nth-child(3)').should('be.visible').click()
      cy.get('#password').should('be.visible').type('Pa$sword1')
      cy.get('#button[type="submit"]').should('be.visible').click()
    })
  })

  it.skip("Visit mima signup and fill one optional field [Instagram]", () =>{
    it("Visit mima signup and fill one optional field", () =>{
      cy.get('#fullname').should('be.visible').type('Oyindamola Sulaimon')
      cy.get('#businessname').should('be.visible').type('The House')
      cy.get('#businessemail').should('be.visible').type(faker.internet.email({provider:'yopmail.com'}))
      cy.get('#businessphonenumber').should('be.visible').type(faker.phone.number('+234########'))
      cy.get('button[type="button"]').should('be.visible').click()
      cy.get('#instagramHandle').should('be.visible').type('thehouse_')
      cy.get('button[type="button"]').should('be.visible').click()
      cy.get('#.MimaDropdown_select__options__xLi7K:nth-child(3)').should('be.visible').click()
      cy.get('#password').should('be.visible').type('Pa$sword1')
      cy.get('#button[type="submit"]').should('be.visible').click()
    })
  })

  it.skip("Visit mima signup and fill one optional field [Twitter]", () =>{
    it("Visit mima signup and fill one optional field", () =>{
      cy.get('#fullname').should('be.visible').type('Oyindamola Sulaimon')
      cy.get('#businessname').should('be.visible').type('The House')
      cy.get('#businessemail').should('be.visible').type(faker.internet.email({provider:'yopmail.com'}))
      cy.get('#businessphonenumber').should('be.visible').type(faker.phone.number('+234########'))
      cy.get('button[type="button"]').should('be.visible').click()
      cy.get('#twitterHandle').should('be.visible').type('thehouse_')
      cy.get('button[type="button"]').should('be.visible').click()
      cy.get('#.MimaDropdown_select__options__xLi7K:nth-child(3)').should('be.visible').click()
      cy.get('#password').should('be.visible').type('Pa$sword1')
      cy.get('#button[type="submit"]').should('be.visible').click()
    })
  })

  it.skip("Visit mima signup successfully and filling all required optional how you heard about us", () =>{
    cy.get('#fullname').should('be.visible').type('Oyindamola Sulaimon')
    cy.get('#businessname').should('be.visible').type('The House')
    cy.get('#businessemail').should('be.visible').type(faker.internet.email({provider:'yopmail.com'}))
    cy.get('#businessphonenumber').should('be.visible').type(faker.phone.number('+234########'))
    cy.get('#businessRegNum').should('be.visible').type('BN4302196')
    cy.get('button[type="button"]').should('be.visible').click()
    cy.get('#website').should('be.visible').type('www.google.com')
    cy.get('#instagramHandle').should('be.visible').type('thehouse_')
    cy.get('#twitterHandle').should('be.visible').type('thehouse_')
    cy.get('button[type="button"]').should('be.visible').click()
    cy.get('#.MimaDropdown_select__options__xLi7K:nth-child(3)').should('be.visible').click()
    cy.get('#password').should('be.visible').type('Pa$sword1')
    cy.get('#button[type="submit"]').should('be.visible').click()
  })

}) 


