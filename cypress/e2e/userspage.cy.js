describe('UserDetailsPage', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/users/1', {
      statusCode: 200,
      body: {
        data: {
          id: '1',
          type: 'user',
          attributes: {
            first_name: 'Bari',
            last_name: 'Miller',
            email: 'frederick@christiansen.example',
            schedules: [
              {
                id: 1,
                title: "Bari's Schedule",
                date: '2025-01-22',
              },
            ],
          },
        },
      },
    }).as('getUserDetails');

    cy.visit('/users/1');
  });

  it('should display user details', () => {
    cy.wait('@getUserDetails');
    cy.contains('Bari Miller').should('exist');
    cy.contains('frederick@christiansen.example').should('exist');
  });

  it('should display the user’s schedules', () => {
    cy.wait('@getUserDetails');
    cy.contains("Bari's Schedule - 2025-01-22").should('exist');
  });
});
