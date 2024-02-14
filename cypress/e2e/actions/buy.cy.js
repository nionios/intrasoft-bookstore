context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  });

  it('Testing buying a book', () => {
    cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
    cy.get('#password').type('ilov3b00ks');
    cy.get('.btn-submit').click();
    cy.location('pathname').should('eq', '/home');
    cy.get('.btn-readmore').first().click();
    cy.get('.btn-submit').click();
    cy.location('pathname').should('eq', '/success');
  });
})
