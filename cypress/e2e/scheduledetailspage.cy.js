describe('ScheduleDetailsPage', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/schedules/1', {
      statusCode: 200,
      body: {
        data: {
          id: '1',
          type: 'schedule',
          attributes: {
            title: "Bari's Schedule",
            date: '2025-01-22',
            shows: [
              {
                id: 5,
                artist: 'Keith Moon',
                location: 'Side Stage',
                time: '19:00:00',
              },
              {
                id: 6,
                artist: 'Blondie',
                location: 'Electronic Stage',
                time: '19:30:00',
              },
            ],
          },
        },
      },
    }).as('getScheduleDetails');

    cy.intercept('DELETE', '/api/v1/schedules/1/shows/5', {
      statusCode: 200,
      body: {},
    }).as('deleteShow');

    cy.intercept('GET', '/api/v1/schedules/9999', {
      statusCode: 404,
      body: {
        errors: [
          {
            status: '404',
            title: 'Not Found',
            detail: 'The requested schedule could not be found.',
          },
        ],
      },
    }).as('getInvalidSchedule');
  });

  it('should display schedule details', () => {
    cy.visit('/schedules/1');
    cy.wait('@getScheduleDetails');
    cy.contains('Shows').should('exist');
    cy.contains("Bari's Schedule").should('exist');
    cy.contains('Date: 2025-01-22').should('exist');
    cy.contains('Keith Moon - Side Stage at 19:00:00').should('exist');
    cy.contains('Blondie - Electronic Stage at 19:30:00').should('exist');
  });

  it('should allow removing a show from the schedule', () => {
    cy.visit('/schedules/1');
    cy.wait('@getScheduleDetails');

    cy.get('.show-item').should('have.length', 2);
    cy.get('.show-item').first().find('.remove-show-button').click();
    cy.wait('@deleteShow');

    cy.get('.show-item').should('have.length', 1);
    cy.contains('Keith Moon - Side Stage at 19:00:00').should('not.exist');
  });

  it('should display a 404 page if the schedule is not found', () => {
    cy.visit('/schedules/9999');
    cy.wait('@getInvalidSchedule');
    cy.contains('Page Not Found').should('exist');
  });
});
