context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  });

  it('Testing Infinite Scrolling', () => {
    cy.get('#email').type('john.doe@netcompany.gr').should('have.value', 'john.doe@netcompany.gr');
    cy.get('#password').type('Kar1era!');
    cy.get('.btn-submit').click();
    cy.location('pathname').should('eq', '/home')
    cy.window().scrollTo('bottom');
    cy.get('.spinner-text').should('have.text', ' loading more books ')
    //cy.get('.end-message > b').should('have.text', 'You are all caught up!');
  });
})
