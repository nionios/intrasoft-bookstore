context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  });

  it('Testing Incorrect Email Entry', () => {
    cy.get('#email').type('wrong@email.com').should('have.value', 'wrong@email.com');
    cy.get('#password').type('placeholder');
    cy.get('.btn-submit').click();
    cy.get('.error-text').should('have.text', 'Wrong Password and/or Email.');
  });

  it('Testing Corrent Email Entry with Wrong Password', () => {
    cy.get('#email').type('john.doe@netcompany.gr').should('have.value', 'john.doe@netcompany.gr');
    cy.get('#password').type('wrong!');
    cy.get('.btn-submit').click();
    cy.get('.error-text').should('have.text', 'Wrong Password and/or Email.');
  });

  it('Testing Corrent Email Entry With Correct Password', () => {
    cy.get('#email').type('john.doe@netcompany.gr').should('have.value', 'john.doe@netcompany.gr');
    cy.get('#password').type('Kar1era!');
    cy.get('.btn-submit').click();
    cy.location('pathname').should('eq', '/home')
  });
})
