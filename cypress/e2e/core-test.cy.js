const arrLanguage = ['en-GB']
arrLanguage.forEach(() => {
describe (
    `Testing core suit for `,() =>
    {
        it('SAN_001 - Test #1',() =>
        {
            // Step 1
            cy.visit('https://www.bancosantander.es/particulares')

            // Step 2
            cy.get('header').find('[title="Seleccione idioma Inglés"]').first().click({force:true})
            cy.wait(2000)

            // Step 3
            cy.get('header').find('[title="Choose language Catalan"]').first().click({force:true})
            cy.wait(2000)

            // Step 4
            cy.get('header').find('[title="Seleccioneu idioma Espanyol"]').first().click({force:true})
            cy.wait(2000)
        })

        it('SAN_002 - Test #2',() =>
        {
            // Step 1
            cy.visit('https://www.bancosantander.es/particulares')

            // Step 2
            cy.get('header').find('[title="Hazte Cliente"]').first().click({force:true})
            cy.url().should('eq','https://www.bancosantander.es/particulares/hazte-cliente')
        })
        it('SAN_003 - Test #3',() =>
        {
            // Step 1
            cy.visit('https://www.bancosantander.es/particulares')
        
        })
    })
})