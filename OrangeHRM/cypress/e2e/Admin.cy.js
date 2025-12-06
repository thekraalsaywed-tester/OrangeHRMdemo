
it.only('Admin', function(){ //Add and delete employee this is the name of sprint or function.

//...........................Admin Section.....................

cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() //click Admin button
cy.wait(4000)

//-------------User Management (Users)-----------------

cy.get('.orangehrm-header-container > .oxd-button').click() //click add button employee
cy.wait(4000)

cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click() // open dropdown list 
cy.wait(4000)

cy.get('.oxd-select-dropdown > :nth-child(2)').click() //choose from dropdown list
cy.wait(4000)

cy.get('.oxd-autocomplete-text-input > input').type('A') //open deropdownlist employee name
cy.wait(4000)

cy.get('.oxd-autocomplete-dropdown > :nth-child(4)').click()
cy.wait(4000)

cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
cy.wait(4000)

cy.get('.oxd-select-dropdown > :nth-child(2)').click() //choose from drop list Status
cy.wait(4000)

cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Arwaa') //Enter username
cy.wait(4000)

cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Aaaa123') //password
cy.wait(4000)

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Aaaa123') //confirm password
cy.wait(4000)

cy.get('.oxd-button--secondary').click() //click on save button
cy.wait(6000)

/*cy.get(':nth-child(2) > .oxd-input').type('Arwaa') // enter username for search
cy.wait(4000)

cy.get('.oxdform-actions > .oxd-button--secondary').click() //click search button
cy.wait(4000)

cy.get('.oxd-table-cell-actions > :nth-child(1)').click() //delete username
cy.wait(4000)

cy.get('.oxd-button--label-danger').click() //click yes,delete
cy.wait(4000) */



//--------------Another way for delete - User Management (Users)-------------
// assertion

        cy.get('.oxd-table-body').should('contain', 'Arwaa').then(() => cy.log('User Name verified'));
        cy.wait(4000);
        // First find the exact row containing your job title and scrollview
        cy.contains('.oxd-table-row', 'Arwaa')
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