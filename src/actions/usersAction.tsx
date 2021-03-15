import { doActionGetDevCore} from '../utils/httpRequest';
import { ENDPOINTS } from '../utils/appEndpoints'
export const USER_DETAILS = "USER_DETAILS";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAILURE = "USER_DETAILS_FAILURE";


export const FetchUserDetails = () => {
    const request = doActionGetDevCore({ url:ENDPOINTS.GETUSERDETAILS});
    return {
        type: USER_DETAILS,
        payload: request
    };
}

export const FetchUserDetailsSuccess = (setting) => {
    return {
        type: USER_DETAILS_SUCCESS,
        payload: setting
    };
}

export const FetchUserDetailsFailure = (err) => {
    return {
        type: USER_DETAILS_FAILURE,
        payload: err
    };
}