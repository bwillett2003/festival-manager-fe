describe('Header Navigation', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/users', {
      statusCode: 200,
      body: {
        data: [
          { id: '1', attributes: { first_name: 'John', last_name: 'Doe' } },
          { id: '2', attributes: { first_name: 'Jane', last_name: 'Smith' } },
        ],
      },
    }).as('getUsers');
  });

  it('should hide the header on the homepage', () => {
    cy.visit('/');
    cy.get('header').should('not.exist');
  });

  it('should display the header on the Users page and navigate back to the homepage using the home icon', () => {
    cy.visit('/');

    cy.contains('View Users').click();
    cy.wait('@getUsers');
    cy.url().should('include', '/users');

    cy.get('header').should('exist');
    cy.get('header a.nav-link img.home-icon')
      .should('have.attr', 'alt', 'Home')
      .and('have.attr', 'src')
      .and('include', 'data:image/png;base64');

    cy.get('header a.nav-link').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});
