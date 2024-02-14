context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  });

  it('Testing Infinite Scrolling', () => {
    cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
    cy.get('#password').type('ilov3b00ks');
    cy.get('.btn-submit').click();
    cy.location('pathname').should('eq', '/home')
    cy.window().scrollTo('bottom');
    cy.get('.spinner-text').should('have.text', ' loading more books ')
    //cy.get('.end-message > b').should('have.text', 'You are all caught up!');
  });
})
