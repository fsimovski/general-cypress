import { getCommentsResponseFunctionModel } from "../../customHelpers/commentsResponseModel";

export const getCommmentsFunction = (comments: String) => {
  cy.request('GET', '/' + comments)
    .its("status")
    .then((statusCode) => {
      expect(statusCode).to.equals(200)
    })

  return cy.request('GET', '/' + comments)
    .its("body")
    .then((response) => {
      expect(response.length).to.eq(response.length)

      for (var i = 0; i < response.length; i++) {

        expect(getCommentsResponseFunctionModel().body).to.eq(String)
        expect(response[i]).to.have.property('body');

        expect(getCommentsResponseFunctionModel().id).to.eq(Number)
        expect(response[i]).to.have.property('id');

        expect(getCommentsResponseFunctionModel().postId).to.eq(Number)
        expect(response[i]).to.have.property('postId');

        expect(getCommentsResponseFunctionModel().name).to.eq(String)
        expect(response[i]).to.have.property('name');

        expect(getCommentsResponseFunctionModel().email).to.eq(String)
        expect(response[i]).to.have.property('email');
        validateEmailFunction(response[i].email)

        expect(response[i].id, ' property "id" is ').to.eq(i + 1);

      }
    })
}

export const validateEmailFunction = (email: String) => {
  const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;

  if (emailRegex.test(email.toString()) != true) {
    expect(emailRegex.test(email.toString())).to.eq(true);
  }
}