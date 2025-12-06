it.only('MyInfo', function(){ //My Info this is the name of sprint or function.
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

cy.get('[type="file"]').selectFile('cypress/fixtures/Mine logo.png',{force: true}); //upload photo command
cy.wait(4000)
cy.get('.oxd-button').click() //click save button
cy.wait(4000)

})