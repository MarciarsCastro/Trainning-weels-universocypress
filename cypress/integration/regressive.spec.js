

it('deve exibir a home page', function () {
    cy.visit('/')

    cy.title()
        .should('eq', 'Training Wheels | QAninja')
    cy.get('ul[class=menu-list]')
        .should('be.visible')

})

it('deve logar com sucesso', function () {
    cy.visit('/login')

    cy.get('#nickId').type('papitorocks')
    cy.get('#passId').type('pwd123')

    cy.get('button[type=submit]').click()

    cy.get('h3[class^="title"]')
        .should('have.text', 'Olá Papito, bem-vindo ao Orkut')

    const expectedText = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'

    cy.get('p[class="subheader"]')
        .should('have.text', expectedText)

})

it('deve marcar os top 5 filmes da Marvel', function () {
    cy.visit('/checkboxes')

    const movies = [
        'avengers',
        'cap2',
        'guardians',
        'blackpanther',
        'thor3'
    ]

    movies.forEach(function (m) {
        cy.get(`input[name=${m}]`)
            .click()
            .should('be.checked')
    })
     
    cy.visit('/radios')

        cy.get('input[value=thor3]')
            .click()
            .should('be.checked')
    })

it('deve arrastar o cypress para a caixinha do node', function () {
        cy.visit('/drag_and_drop')

        const dataTransfer = new DataTransfer

    })

it('selecionar bucky por id', function () {
        cy.visit('/select')

        cy.get('#avengerList')
            .select('Bucky')
            .should('have.value', '2')

    })

it('selecionar tony stark sem ser pelo id', function () {
        cy.visit('/select')

        cy.contains('option', 'Selecione um personagem')
            .parent()
            .select('Tony Stark')
            .should('have.value', '3')

    })

