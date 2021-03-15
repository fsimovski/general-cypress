import { patchUserResponse } from './interface/patcUserResponse';

import { getUsersResponse } from "./interface/getUserDataResponse";
import { postUserResponse } from "./interface/postUserResponse";

export const getUsersFunction = (page: String) => {

    return cy.request('GET', '/users?page=' + page).its("body")
        .then((getUsersResponse: getUsersResponse) => {

            // expect(response.status).to.be.equal(200);
            // expect(response.duration).to.be.lessThan(5000);
            expect(getUsersResponse).to.have.property('page');
            expect(getUsersResponse).to.have.property('per_page');
            expect(getUsersResponse).to.have.property('total');
            expect(getUsersResponse).to.have.property('total_pages');
            expect(getUsersResponse).to.have.property('data');
            expect(getUsersResponse).to.have.property('ad');
            expect(getUsersResponse.ad).to.have.property('company');
            expect(getUsersResponse.ad).to.have.property('url');
            expect(getUsersResponse.ad).to.have.property('text');

        })
}


export const postUsers = (name: String, job: String) => {

    let body = {
        "name": name,
        "job": job
    }
    return cy.request('POST', '/users', body).its("body")
        .then((postUserResponse: postUserResponse) => {
            // expect(status).to.be.equal(201);
            expect(postUserResponse).to.have.property('name');
            expect(postUserResponse).to.have.property('job');
            expect(postUserResponse).to.have.property('id');
            expect(postUserResponse).to.have.property('createdAt');
            // expect(postUserResponse).to.be.lessThan(5000);
            expect(postUserResponse.name).to.be.equal(body.name);
            expect(postUserResponse.job).to.be.equal(body.job);


        })

}


export const patchUsers = (name: String, job: String) => {
    let body = {
        "name": name,
        "job": job
    }
    return cy.request('PATCH', '/user', body).its("body")
        .then((patchUserResponse: patchUserResponse) => {
            expect(patchUserResponse).to.have.property('name');
            expect(patchUserResponse).to.have.property('job');
            expect(patchUserResponse).to.have.property('updatedAt');
            // expect(response.status).to.be.equal(200);
            // expect(response.duration).to.be.lessThan(5000);
            expect(patchUserResponse.name).to.be.equal(body.name);
            expect(patchUserResponse.job).to.be.equal(body.job);


        })

}