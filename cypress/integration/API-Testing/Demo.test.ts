import { patchUserResponse } from './../../api-helpers/interface/patcUserResponse';
// <reference types="cypress"/>



import { SaveUserAndEdit } from "../../api-helpers/customHelpers/createAndEditUser";
import { getUsersResponse } from "../../api-helpers/interface/getUserDataResponse";
import { getUsersFunction, postUsers, patchUsers } from "../../api-helpers/services";




describe('HTTP Example', function () {
    let getUsersFunctionResponse: getUsersResponse;
    let patchUserResponse: patchUserResponse;

    it('GET Users', function () {

        getUsersFunction('5').then((response: getUsersResponse) => {
            getUsersFunctionResponse = response;

        });
    });

    it('POST and Patch User with function', function () {

        SaveUserAndEdit();

    });

});

