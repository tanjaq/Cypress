import home from '../selectors/home.css'
import cart from '../selectors/cart.css'
import base from '../selectors/base.css'

describe('Amazon tests', () => {

  before(() => {
    cy.visit('https://www.amazon.com/')
    cy.wait(5000)
    cy.get(base.dismissLocation)
      .click()
  })

  it('Add item to shopping cart', () => {
    cy.get(base.searchBox)
      .type('keyboard')
    cy.get(base.searchButton)
      .click()
    cy.get(home.searchResult)
      .should('contain', 'keyboard')
    cy.get(home.addToCartButton)
      .click()
    cy.get(home.cartCount)
      .should('contain', '1')
    cy.get(home.cartIconButton)
      .click()
    cy.get(cart.header)
      .should('contain', 'Shopping Cart')
    //cy.get(cart.item).should('match' , /keyboard/i) - did not work
    cy.get(cart.item)
      .contains('keyboard', {matchCase: false})
      .should('be.visible')
  })
})