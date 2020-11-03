import { patchUserResponse } from './../interface/patcUserResponse';
import { postUserResponse } from './../interface/postUserResponse';
import { patchUsers, postUsers } from "../services";


export const SaveUserAndEdit = () => {
    let postUsersResponse;

    postUsers("Name Example", "QA Engineer").then((postUserResponse: postUserResponse) => {

        
        patchUsers(postUserResponse.id, postUserResponse.name).then((patchUserResponse: patchUserResponse) => {
            
            return patchUserResponse;
    
        });

        

    });
    

   


}