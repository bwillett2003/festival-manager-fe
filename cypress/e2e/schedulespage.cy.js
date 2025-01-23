describe('SchedulesPage', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/schedules', {
      statusCode: 200,
      body: {
        data: [
          { id: '1', attributes: { title: 'Johns Schedule', date: '2025-01-22' } },
          { id: '2', attributes: { title: 'Janes Schedule', date: '2025-01-22' } },
        ],
      },
    }).as('getSchedules');

    cy.intercept('GET', '/api/v1/schedules/1', {
      statusCode: 200,
      body: {
        data: {
          id: '1',
          type: 'schedule',
          attributes: {
            title: 'Johns Schedule',
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
  });

  it('should display a list of schedules', () => {
    cy.visit('/schedules');
    cy.wait('@getSchedules');
    cy.get('.schedule-card').should('have.length', 2);
  });

  it('should navigate to a Schedule Details page when a schedule is clicked', () => {
    cy.visit('/schedules');
    cy.wait('@getSchedules');

    cy.get('.schedule-card').first().click();

    cy.url().should('include', '/schedules/1');
    cy.wait('@getScheduleDetails');
    cy.get('.schedule-details-container').should('exist');

    cy.contains('Johns Schedule').should('exist');
    cy.contains('Date: 2025-01-22').should('exist');
    cy.contains('Keith Moon - Side Stage at 19:00:00').should('exist');
    cy.contains('Blondie - Electronic Stage at 19:30:00').should('exist');
  });
});
