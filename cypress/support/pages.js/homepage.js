class HomePage {
    clickHomePageLoginButton(){
        cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(1)').should('be.visible').click()
    }

}

export default HomePage