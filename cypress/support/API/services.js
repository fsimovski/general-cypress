// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('getUsersFunction', (page) => {
    return cy.request('GET', '/users?page=' + page)
        .then(function (response) {
            expect(response.status).to.be.equal(200);
            expect(response.duration).to.be.lessThan(5000);
            expect(response.body).to.have.property('page');
            expect(response.body).to.have.property('per_page');
            expect(response.body).to.have.property('total');
            expect(response.body).to.have.property('total_pages');
            expect(response.body).to.have.property('data');
            expect(response.body).to.have.property('ad');
            expect(response.body.ad).to.have.property('company');
            expect(response.body.ad).to.have.property('url');
            expect(response.body.ad).to.have.property('text');

        })
})

Cypress.Commands.add('postUsers', (name, job) => {
    let body = {
        "name": name,
        "job": job
    }
    return cy.request('POST', '/user', body)
        .then(function (response) {
            expect(response.body).to.have.property('name');
            expect(response.body).to.have.property('job');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('createdAt');
            expect(response.status).to.be.equal(201);
            expect(response.duration).to.be.lessThan(5000);
            expect(response.body.name).to.be.equal(body.name);
            expect(response.body.job).to.be.equal(body.job);


        })
})