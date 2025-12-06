before(' visit login   ' ,function(){

    //...........................Log in....................

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //bring and open the website
cy.wait(4000) //mean wait while capturing the video

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') //type the username.  I take the locator of register from cypress and paste here then cause I click on register so I call click() action. I take the locator and then I put it in visual studio to give it the action
cy.wait(4000)

cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123') //type the password
cy.wait(4000)

cy.get('.oxd-button').click() // click on the login button
cy.wait(4000)

})




it(' Add & Delete Admin   ' ,function(){

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

cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Arwaaf') //Enter username
cy.wait(4000)

cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Aaaa123') //password
cy.wait(4000)

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Aaaa123') //confirm password
cy.wait(4000)

cy.get('.oxd-button--secondary').click() //click on save button
cy.wait(6000)

cy.get(':nth-child(2) > .oxd-input').type('Arwaa') // enter username for search
cy.wait(4000)

cy.get('.oxdform-actions > .oxd-button--secondary').click() //click search button
cy.wait(4000)

cy.get('.oxd-table-cell-actions > :nth-child(1)').click() //delete username
cy.wait(4000)

cy.get('.oxd-button--label-danger').click() //click yes,delete
cy.wait(4000) 


})


it('Add & Delete Job Title' ,function(){

//-------------------Job (Job Title)---------------------

cy.get(':nth-child(1) > .oxd-main-menu-item').click() //click Admin section
cy.wait(4000)

cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click() //click job section
cy.wait(4000)

cy.get('.oxd-dropdown-menu > :nth-child(1)').click() //choose job title from dropdown list 
cy.wait(4000)

cy.get('.oxd-button').click() //click Add button
cy.wait(4000)

cy.get(':nth-child(2) > .oxd-input').type('Softwaree') //type job title
cy.wait(4000)

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Software Quality Assurance Testing QA') //type job description
cy.wait(4000)

cy.get('[type="file"]').selectFile('cypress/fixtures/ISTQB_CTFL_v4.0_Sample-Exam-D-Questions_v1.5.pdf',{force: true}); //upload file command
cy.wait(4000)

cy.get('.oxd-button--secondary').click() //click save button
cy.wait(5000)

// assertion
        cy.get('.oxd-table-body').should('contain', 'Softwareh').then(() => cy.log('Job title verified'));
        cy.wait(4000);
        // First find the exact row containing your job title and scrollview
        cy.contains('.oxd-table-row', 'Softwareh')
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


it('My Info' ,function(){

//..............................My Info (Personal Details)......................

cy.get(':nth-child(6) > .oxd-main-menu-item').click() //click my info section
cy.wait(4000)

cy.get(':nth-child(1) > .orangehrm-tabs-item').click() //click personal details
cy.wait(4000)

cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('Thekra') //first employee name
cy.wait(5000)

cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Abdullah') //middle employee name
cy.wait(5000)

cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('AlSaywed') //last employee name
cy.wait(5000)

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click() //click License Expiry Date
cy.wait(4000)

cy.get('.oxd-calendar-selector-year-selected').click() //click to open dropdown list of the year
cy.wait(4000)
cy.get(':nth-child(56)').click() //click 2025 the year
cy.wait(4000)

cy.get('.oxd-calendar-selector-month-selected').click() //click to open dropdown list of the month
cy.wait(4000)
cy.get('.oxd-calendar-dropdown > :nth-child(12)').click() //click choose December month
cy.wait(4000)

cy.get(':nth-child(30) > .oxd-calendar-date').click() //click day 30
cy.wait(4000)

cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click() //click to open dropdown list of the nationality
cy.wait(4000)
cy.get('.--selected').click() //click Saudi
cy.wait(4000)

cy.get('.orangehrm-edit-employee-image > .employee-image').click() //click on the photo
cy.wait(4000)
cy.get('.oxd-file-div > .oxd-icon-button').click() //click on the + button 
cy.wait(4000)

cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click() //click save button
cy.wait(4000)

cy.get('[type="file"]').selectFile('cypress/fixtures/profilephoto.jpg',{force: true}); //upload photo command
cy.wait(4000)
cy.get('.oxd-button').click() //click save button
cy.wait(4000)


})



after(' Logout' ,function(){

cy.get('.oxd-userdropdown-tab').click() //click profile to open dropdown list
cy.wait(4000)
cy.get(':nth-child(4) > .oxd-userdropdown-link').click() //click logout
cy.wait(4000)


})