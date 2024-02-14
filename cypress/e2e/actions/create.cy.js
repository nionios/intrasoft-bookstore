context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });

    it('Testing creating a book with wrong title format', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('Null');
        cy.get('#subtitleInput').type('A Valid Book Title');
        cy.get('#ratingInput')
            .invoke('attr', 'value', 3.5)
            .should('have.attr', 'value', '3.5');
        cy.get('#isbnInput').type('1234567890');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Book Author Name');
        cy.get('#publisherInput').type('A Valid Publisher Name');
        cy.get('#publishedInput').type('1990');
        cy.get('#pagesInput').type('9998');
        cy.get('#descriptionInput').type("A Valid Book Description of the book's content");
        cy.get('#priceInput').type('500.50');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });

    it('Testing creating a book with wrong title format', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('Null');
        cy.get('#subtitleInput').type('A Valid Book Title');
        cy.get('#ratingInput')
            .invoke('attr', 'value', 3.5)
            .should('have.attr', 'value', '3.5');
        cy.get('#isbnInput').type('1234567890');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Book Author Name');
        cy.get('#publisherInput').type('A Valid Publisher Name');
        cy.get('#publishedInput').type('1990');
        cy.get('#pagesInput').type('9998');
        cy.get('#descriptionInput').type("A Valid Book Description of the book's content");
        cy.get('#priceInput').type('500.50');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });

    it('Testing creating a book without rating', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('A Valid Book Title');
        cy.get('#subtitleInput').type('A Valid Book Title');
        // Don't set rating
        cy.get('#isbnInput').type('1234567890');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Book Author Name');
        cy.get('#publisherInput').type('A Valid Publisher Name');
        cy.get('#publishedInput').type('1990');
        cy.get('#pagesInput').type('9998');
        cy.get('#descriptionInput').type("A Valid Book Description of the book's content");
        cy.get('#priceInput').type('500.50');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });

    it('Testing creating a book with wrong isdn', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('A Valid Book Title');
        cy.get('#subtitleInput').type('A Valid Book Title');
        cy.get('#ratingInput')
            .invoke('attr', 'value', 3.5)
            .should('have.attr', 'value', '3.5');
        cy.get('#isbnInput').type('123456789011');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Book Author Name');
        cy.get('#publisherInput').type('A Valid Publisher Name');
        cy.get('#publishedInput').type('1990');
        cy.get('#pagesInput').type('9998');
        cy.get('#descriptionInput').type("A Valid Book Description of the book's content");
        cy.get('#priceInput').type('500.50');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });

    it('Testing creating a book with a wrong publisher name', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('A Valid Book Title');
        cy.get('#subtitleInput').type('A Valid Book Title');
        cy.get('#ratingInput')
            .invoke('attr', 'value', 3.5)
            .should('have.attr', 'value', '3.5');
        cy.get('#isbnInput').type('1234567890');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Author Name');
        cy.get('#publisherInput').type('Null');
        cy.get('#publishedInput').type('1990');
        cy.get('#pagesInput').type('9998');
        cy.get('#descriptionInput').type("A Valid Book Description of the book's content");
        cy.get('#priceInput').type('500.50');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });

    it('Testing creating a book with a wrong published date', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('A Valid Book Title');
        cy.get('#subtitleInput').type('A Valid Book Title');
        cy.get('#ratingInput')
            .invoke('attr', 'value', 3.5)
            .should('have.attr', 'value', '3.5');
        cy.get('#isbnInput').type('1234567890');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Book Author Name');
        cy.get('#publisherInput').type('A Valid Publisher Name');
        cy.get('#publishedInput').type('20000');
        cy.get('#pagesInput').type('9998');
        cy.get('#descriptionInput').type("A Valid Book Description of the book's content");
        cy.get('#priceInput').type('500.50');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });

    it('Testing creating a book with a wrong page number', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('A Valid Book Title');
        cy.get('#subtitleInput').type('A Valid Book Title');
        cy.get('#ratingInput')
            .invoke('attr', 'value', 3.5)
            .should('have.attr', 'value', '3.5');
        cy.get('#isbnInput').type('1234567890');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Book Author Name');
        cy.get('#publisherInput').type('A Valid Publisher Name');
        cy.get('#publishedInput').type('1990');
        cy.get('#pagesInput').type('10000');
        cy.get('#descriptionInput').type("A Valid Book Description of the book's content");
        cy.get('#priceInput').type('500.50');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });

    it('Testing creating a book with a too-long description', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('A Valid Book Title');
        cy.get('#subtitleInput').type('A Valid Book Title');
        cy.get('#ratingInput')
            .invoke('attr', 'value', 3.5)
            .should('have.attr', 'value', '3.5');
        cy.get('#isbnInput').type('1234567890');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Book Author Name');
        cy.get('#publisherInput').type('A Valid Publisher Name');
        cy.get('#publishedInput').type('1990');
        cy.get('#pagesInput').type('9998');
        cy.get('#descriptionInput').type("Too Long ".repeat(100));
        cy.get('#priceInput').type('500.50');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });

    it('Testing creating a book without a price', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('A Valid Book Title');
        cy.get('#subtitleInput').type('A Valid Book Title');
        cy.get('#ratingInput')
            .invoke('attr', 'value', 3.5)
            .should('have.attr', 'value', '3.5');
        cy.get('#isbnInput').type('1234567890');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Book Author Name');
        cy.get('#publisherInput').type('A Valid Publisher Name');
        cy.get('#publishedInput').type('1990');
        cy.get('#pagesInput').type('9998');
        cy.get('#descriptionInput').type("Too Long ".repeat(100));
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });

    it('Testing creating a book without a price', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('A Valid Book Title');
        cy.get('#subtitleInput').type('A Valid Book Title');
        cy.get('#ratingInput')
            .invoke('attr', 'value', 3.5)
            .should('have.attr', 'value', '3.5');
        cy.get('#isbnInput').type('1234567890');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Book Author Name');
        cy.get('#publisherInput').type('A Valid Publisher Name');
        cy.get('#publishedInput').type('1990');
        cy.get('#pagesInput').type('9998');
        cy.get('#descriptionInput').type("A Valid Book Description of the book's content");
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });

    it('Testing creating a book', () => {
        cy.get('#email').type('bookStoreUs3r@intrasoft.com').should('have.value', 'bookStoreUs3r@intrasoft.com');
        cy.get('#password').type('ilov3b00ks');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', '/home');
        cy.get('.btn-create').first().click();
        cy.location('pathname').should('eq', '/book/create');

        cy.get('#titleInput').type('A Valid Book Title');
        cy.get('#subtitleInput').type('A Valid Book Title');
        cy.get('#ratingInput')
            .invoke('attr', 'value', 3.5)
            .should('have.attr', 'value', '3.5');
        cy.get('#isbnInput').type('1234567890');
        cy.get('#websiteInput').type('www.example.com');
        cy.get('#authorInput').type('A Valid Book Author Name');
        cy.get('#publisherInput').type('A Valid Publisher Name');
        cy.get('#publishedInput').type('1990');
        cy.get('#pagesInput').type('9998');
        cy.get('#descriptionInput').type("A Valid Book Description of the book's content");
        cy.get('#priceInput').type('500.50');
        cy.get('.btn-submit').first().click();
        cy.location('pathname').should('eq', `/book/create`);
    });
});
