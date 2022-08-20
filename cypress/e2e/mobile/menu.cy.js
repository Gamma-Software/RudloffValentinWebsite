describe('menu_mobile', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000/')
      cy.viewport('iphone-6') // Set viewport to 375px x 667px
    })
    it('check_menu_open_close', () => {
      // On mobile, the menu is hidden
      cy.get('.app__navbar-links')
        .should('not.be.visible')
      // The menu button should be visible on the mobile screen
      cy.get('.app__navbar-menu').should('be.visible')
        .click()
        .get('.list-item li')
        .should('have.length', 5)
        .get('ul > svg')
        .click()
    })
    it('check_clickable_links', () => {
      function menu_click (menuItem) {
        cy.get('.app__navbar-menu').should('be.visible')
          .click()
          .get('.list-item li')
          .contains(menuItem)
          .click()
          .url().should('include', '/#'+menuItem)
        cy.visit('http://localhost:3000/')
      }
      menu_click('home')
      menu_click('about')
      menu_click('work')
      menu_click('skills')
      menu_click('contact')
    })
})