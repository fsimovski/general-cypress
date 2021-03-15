import { getPostsResponseFunctionModel } from "../../customHelpers/postsResponseModel";

let postsRequestModel = {
  "body": "Test Body",
  "id": 1,
  "title": "Test title",
  "userId": 1
}

export const postPostsFunction = (posts: String) => {
  cy.request('POST', '/' + posts, postsRequestModel)
    .its("status")
    .then((statusCode) => {
      expect(statusCode).to.equals(201)
    })

  return cy.request('POST', '/' + posts, postsRequestModel)
    .its("body")
    .then((response) => {

      expect(getPostsResponseFunctionModel().body).to.eq(String)
      expect(response).to.have.property('body');
      expect(response.body).to.eq(postsRequestModel.body)

      expect(getPostsResponseFunctionModel().id).to.eq(Number)
      expect(response).to.have.property('id');
      expect(response.id).to.eq(101)

      expect(getPostsResponseFunctionModel().title).to.eq(String)
      expect(response).to.have.property('title');
      expect(response.title).to.eq(postsRequestModel.title)

      expect(getPostsResponseFunctionModel().userId).to.eq(Number)
      expect(response).to.have.property('userId');
      expect(response.userId).to.eq(postsRequestModel.userId)
    })
}