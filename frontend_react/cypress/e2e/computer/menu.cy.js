

describe('menu_computer', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000/')
    })
    it('check_number', () => {
      cy.get('.app__navbar-links li').should('have.length', 5)
    })
    it('check_clickable_links', () => {
      function menu_exists (menuItem, shouldExist) {
        if (shouldExist) {
          cy.get('.app__navbar-links li')
          .contains(menuItem)
          .click()
          .url().should('include', '/#'+menuItem)
        }else{
          cy.get('.app__navbar-links li')
          .contains(menuItem)
          .should('not.exist')
        }
      }
      // The menu button should not be visible on the computer screen
      cy.get('.app__navbar-menu').should('not.be.visible')
      // check home, about, work, skills, contact
      menu_exists('home', true)
      menu_exists('about', true)
      menu_exists('work', true)
      menu_exists('skills', true)
      menu_exists('contact', true)
      menu_exists('test', false)
    })
})