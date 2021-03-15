import { doLoginPost} from '../utils/httpRequest';
import { ENDPOINTS } from '../utils/appEndpoints'
export const USER_DETAILS = "USER_DETAILS";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAILURE = "USER_DETAILS_FAILURE";


export const INVITELINK = "INVITELINK";
export const INVITELINK_SUCCESS = "INVITELINK_SUCCESS";
export const INVITELINK_FAILURE = "INVITELINK_FAILURE";

export const SIGNUPUSER = "SIGNUPUSER";
export const SIGNUPUSER_SUCCESS = "SIGNUPUSER_SUCCESS";
export const SIGNUPUSER_FAILURE = "SIGNUPUSER_FAILURE";


export const LOGOUTUSER = "LOGOUTUSER";
export const LOGOUTUSER_SUCCESS = "LOGOUTUSER_SUCCESS";
export const LOGOUTUSER_FAILURE = "LOGOUTUSER_FAILURE";


export const GETUSERDATABYGUID = "GETUSERDATABYGUID";
export const GETUSERDATABYGUID_SUCCESS = "GETUSERDATABYGUID_SUCCESS";
export const GETUSERDATABYGUID_FAILURE = "GETUSERDATABYGUID_FAILURE";

/**
 * action to post user credentials
 * @param(@userDetails)
 */
export const loginUser = (userDetails) => {
    const request = doLoginPost({ url: ENDPOINTS.LOGINUSER1, data: userDetails });
    return {
        type: USER_DETAILS,
        payload: request
    };
}

/**
 * action to save user credentials
 */
export const loginUserSuccess = (userDetails) => {
    return {
        type: USER_DETAILS_SUCCESS,
        payload: userDetails
    };
}

export const loginUserFailure = (err) => {
    return {
        type: USER_DETAILS_FAILURE,
        payload: err
    };
}


export const postInviteLink = (data) => {
    const request = doLoginPost({ url: `users/isinvitelinkValid/${data}` });
    return {
        type: INVITELINK,
        payload: request,
    };
}

export const postInviteLinkSuccess = (loanObj) => {
    return {
        type: INVITELINK_SUCCESS,
        payload: loanObj

    };
}

export const postInviteLinkFailure = (error) => {
    return {
        type: INVITELINK_FAILURE,
        payload: error
    };
}


export const signUpUser = (signUpDetails) => {
    const request = doLoginPost({ url: ENDPOINTS.SIGNUP, data: signUpDetails });
    return {
        type: SIGNUPUSER,
        payload: request,
    };
}

export const signUpUserSuccess = (signUpDetails) => {
    return {
        type: SIGNUPUSER_SUCCESS,
        payload: signUpDetails

    };
}

export const signUpUserFailure = (error) => {
    return {
        type: SIGNUPUSER_FAILURE,
        payload: error
    };
}