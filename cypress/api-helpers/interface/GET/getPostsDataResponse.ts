
import { getPostsResponseFunctionModel } from "../../customHelpers/postsResponseModel";

export const getPostsFunction = (posts: String) => {
  cy.request('GET', '/' + posts)
    .its("status")
    .then((statusCode) => {
      expect(statusCode).to.equals(200)
    })

  cy.request('GET', '/' + posts)
    .its("body")
    .should('be.an', 'array')
    .and('have.length', 100)
    .then((response) => {
      expect(response.length).to.eq(100)

      for (var i = 0; i < response.length; i++) {
        expect(getPostsResponseFunctionModel().body).to.eq(String)
        expect(response[i]).to.have.property('body');

        expect(getPostsResponseFunctionModel().id).to.eq(Number)
        expect(response[i]).to.have.property('id');

        expect(getPostsResponseFunctionModel().title).to.eq(String)
        expect(response[i]).to.have.property('title');

        expect(getPostsResponseFunctionModel().userId).to.eq(Number)
        expect(response[i]).to.have.property('userId');

        expect(response[i].id, ' property "id" is ').to.eq(i + 1);

        if (i < 10) {
          expect(response[i].userId, ' property "userId" is ').to.eq(1);
        }
        else if (i < 20) {
          expect(response[i].userId, ' property "userId" is ').to.eq(2);
        }
        else if (i < 30) {
          expect(response[i].userId, ' property "userId" is ').to.eq(3);
        }
        else if (i < 40) {
          expect(response[i].userId, ' property "userId" is ').to.eq(4);
        }
        else if (i < 50) {
          expect(response[i].userId, ' property "userId" is ').to.eq(5);
        }
        else if (i < 60) {
          expect(response[i].userId, ' property "userId" is ').to.eq(6);
        }
        else if (i < 70) {
          expect(response[i].userId, ' property "userId" is ').to.eq(7);
        }
        else if (i < 80) {
          expect(response[i].userId, ' property "userId" is ').to.eq(8);
        }
        else if (i < 90) {
          expect(response[i].userId, ' property "userId" is ').to.eq(9);
        }
        else if (i < response.length) {
          expect(response[i].userId, ' property "userId" is ').to.eq(10);
        }
      }
    })
}