describe("Login", function()
{
    it("Verify Login", function()
    {
        cy.visit("https://app.hexient.io/")
        cy.wait(5000)
        cy.get("#email").type("shawnhexienttester@yopmail.com")
        cy.get("#password").type("Test1234!")
        cy.get(".button[type='submit']").click
    })
})