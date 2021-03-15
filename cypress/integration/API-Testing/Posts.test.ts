import { getPostsFunction } from "../../api-helpers/interface/GET/getPostsDataResponse";
import { postPostsFunction } from '../../api-helpers/interface/POST/postPostsDataResponse';
import { putPostsFunction } from '../../api-helpers/interface/PUT/putPostsDataResponse';
import { patchPostsFunction } from '../../api-helpers/interface/PATCH/patchPostsDataResponse';
import { deletePostsFunction } from '../../api-helpers/interface/DELETE/deletePostsDataResponse';

describe('GET Posts - HTTP Example', function () {
    it('GET Posts', function () {
        getPostsFunction('posts')
    });

    it('POST Posts', function () {
        postPostsFunction('posts')
    });

    it('PUT Posts with ID 0', function () {
        putPostsFunction('posts/', '0')
    });

    it('PUT Posts with ID 1', function () {
        putPostsFunction('posts/', '1')
    });

    it('PATCH Posts', function () {
        patchPostsFunction('posts/', '2')
    });

    it('DELETE Posts', function () {
        deletePostsFunction('posts/', '1')
    });
});