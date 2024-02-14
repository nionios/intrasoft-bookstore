context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  });

  it('Testing Searching a Book', () => {
    cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
    cy.get('#password').type('ilov3b00ks');
    cy.get('.btn-submit').click();
    cy.location('pathname').should('eq', '/home')
    cy.get('#bookQuery').type('Git');
    cy.get('.book-box-title').first().should('have.text', 'Pro Git');
  });
})
