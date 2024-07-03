describe("My Test Suite", function()
{
    it("Verify the title of the page", function()
    {
        cy.visit("https://app.hexient.io/")
        cy.title().should('eq','Hexient Solutions')
    })
})