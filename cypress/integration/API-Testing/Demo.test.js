/// <reference types="cypress" />
describe('HTTP Example', function () {
    let getUsersFunctionResponse;
    let postUsersResponse;

    it('GET Users', function () {

        cy.getUsersFunction('5').then(function (response) {
            getUsersFunctionResponse = response.body;
        })
    });

    it('POST User', function () {

        cy.postUsers("Name Example", "QA Engineer" + getUsersFunctionResponse.page).then(function (response) {
            postUsersResponse = response.body;
            console.log(postUsersResponse.name);

        });
    });

});

