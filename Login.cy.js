/*beforeEach(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
})
*/

//..........................Visite Website...................

it.only('Visit and Login', function(){ //visit and login this is the name of sprint or function.

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