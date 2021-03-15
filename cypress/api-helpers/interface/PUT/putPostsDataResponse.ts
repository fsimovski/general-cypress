import { getPostsResponseFunctionModel } from "../../customHelpers/postsResponseModel";

let postsRequestModel = {
  "body": "Test Body",
  "id": 1,
  "title": "Test title",
  "userId": 1
}

export const putPostsFunction = (posts: String, number: String) => {
  cy.request('PUT', '/' + posts + number, postsRequestModel)
    .its("status")
    .then((statusCode) => {
      expect(statusCode).to.equals(200)

    })

  return cy.request('PUT', '/' + posts + number, postsRequestModel)
    .its("body")
    .then((response) => {

      expect(getPostsResponseFunctionModel().body).to.eq(String)
      expect(response).to.have.property('body');
      expect(response.body).to.equals(postsRequestModel.body, ' "body" parameter should be ' + '"' + response.body + '"')

      expect(getPostsResponseFunctionModel().id).to.eq(Number)
      expect(response).to.have.property('id');
      expect((response.id).toString()).to.equals(number, ' "id" parameter should be ' + '"' + (response.id).toString() + '"')

      expect(getPostsResponseFunctionModel().title).to.eq(String)
      expect(response).to.have.property('title');
      expect(response.title).to.equals(postsRequestModel.title, ' "title" parameter should be ' + '"' + response.title + '"')

      expect(getPostsResponseFunctionModel().userId).to.eq(Number)
      expect(response).to.have.property('userId');
      expect(response.userId).to.equals(postsRequestModel.userId, ' "userId" parameter should be ' + '"' + response.userId + '"')
    })
}