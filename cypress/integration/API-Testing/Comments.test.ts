import { getCommmentsFunction } from "../../api-helpers/interface/GET/getCommentsDataResponse";

describe('GET Comments - HTTP Example', function () {
    it('GET Comments', function () {
        getCommmentsFunction('comments')
    });
});