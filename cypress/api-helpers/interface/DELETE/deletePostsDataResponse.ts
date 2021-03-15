let postsRequestModel = {
  "body": "Test Body",
  "id": 1,
  "title": "Test title",
  "userId": 1
}

export const deletePostsFunction = (posts: String, number: String) => {
  cy.request('DELETE', '/' + posts + number, postsRequestModel)
    .its("status")
    .then((statusCode) => {
      expect(statusCode).to.equals(200)
    })

  return cy.request('DELETE', '/' + posts + number, postsRequestModel)
    .its("body")
    .then((response) => {
      expect(response).to.deep.equal({})
    })
}