describe('App Routing', () => {
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

    cy.intercept('GET', '/api/v1/schedules', {
      statusCode: 200,
      body: {
        data: [
          { id: '1', attributes: { title: 'Johns Schedule', date: '2025-01-22' } },
          { id: '2', attributes: { title: 'Janes Schedule', date: '2025-01-22' } },
        ],
      },
    }).as('getSchedules');
  });

  it('should render the homepage', () => {
    cy.visit('/');
    cy.contains('Welcome to the Festival Manager').should('exist');
  });

  it('should navigate to the Users page', () => {
    cy.visit('/');
    cy.contains('View Users').click();
    cy.url().should('include', '/users');

    cy.wait('@getUsers');
    cy.contains('Users').should('exist');
  });

  it('should navigate to the Schedules page', () => {
    cy.visit('/');
    cy.contains('View Schedules').click();
    cy.url().should('include', '/schedules');

    cy.wait('@getSchedules');
    cy.contains('Schedules').should('exist');
  });

  it('should display a 404 page for an unknown route', () => {
    cy.visit('/non-existent-route');
    cy.contains('Page Not Found').should('exist');
  });
});
