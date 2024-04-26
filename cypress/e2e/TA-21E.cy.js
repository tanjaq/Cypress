import navbar from '../selectors/navbar.css'
import results from '../selectors/results.css'
import cart from '../selectors/cart.css'

describe('Amazon tests', () => {
  
  before(() => {
    cy.visit('https://www.amazon.com/')
    cy.wait(5000)
    cy.get(navbar.dismissLocation)
      .click()
  })

  it('Add item to shopping cart', () => {
    cy.get(navbar.searchBox)
      .type('mouse')
    cy.get(navbar.searchButton)
      .click()
    cy.get(results.searchedKeyword)
      .should('contain', 'mouse')
    cy.get(results.addToCart)
      .click()
    cy.get(navbar.cartCounter)
      .should('contain', '1')
    cy.get(navbar.cartIcon)
      .click()
    cy.get(cart.header)
      .should('contain', 'Shopping Cart')
    cy.get(cart.item)
      .contains('mouse', { matchCase: false })
      .should('be.visible')
  })

  //add more tests

})