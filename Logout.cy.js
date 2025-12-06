//................Logout..................
it.only('Logout', function(){ //Logout this is the name of sprint or function.
    
cy.get('.oxd-userdropdown-tab').click() //click profile to open dropdown list
cy.wait(4000)
cy.get(':nth-child(4) > .oxd-userdropdown-link').click() //click logout
cy.wait(4000)

})