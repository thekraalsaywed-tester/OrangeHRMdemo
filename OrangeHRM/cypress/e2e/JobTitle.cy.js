it.only('Job Title', function(){ //Add and delte job title this is the name of sprint or function.
//-------------------Job (Job Title)---------------------

cy.get(':nth-child(1) > .oxd-main-menu-item').click() //click Admin section
cy.wait(4000)

cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click() //click job section
cy.wait(4000)

cy.get('.oxd-dropdown-menu > :nth-child(1)').click() //choose job title from dropdown list 
cy.wait(4000)

cy.get('.oxd-button').click() //click Add button
cy.wait(4000)

cy.get(':nth-child(2) > .oxd-input').type('Software') //type job title
cy.wait(4000)

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Software Quality Assurance Testing QA') //type job description
cy.wait(4000)

cy.get('[type="file"]').selectFile('cypress/fixtures/ISTQB_CTFL_v4.0_Sample-Exam-D-Questions_v1.5.pdf',{force: true}); //upload file command
cy.wait(4000)

cy.get('.oxd-button--secondary').click() //click save button
cy.wait(5000)

// assertion
        cy.get('.oxd-table-body').should('contain', 'Software').then(() => cy.log('Job title verified'));
        cy.wait(4000);
        // First find the exact row containing your job title and scrollview
        cy.contains('.oxd-table-row', 'Software')
            .scrollIntoView({ duration: 300 })
            .should('exist')
            .within(() => {
                // checkbox click
                cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                    .click({ force: true });
                // click trash
                cy.get(':nth-child(1) > .oxd-icon')
                    .should('be.visible')
                    .click({ force: true, multiple: true });
            });
        cy.wait(1000);
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete 
})