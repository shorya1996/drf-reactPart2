import React, { Component, Fragment } from 'react';
import SignupPage from './signupPage';
import { validatePassword,getCypherString, emailValidation } from '../common/util'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signUpUser, signUpUserSuccess, signUpUserFailure } from '../actions/loginAction';
import { AppMessages } from '../utils/appmessages';

export class SignupContainer extends Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            profileImg: "",
            ProfilePicture: null,
            signUpCompleted: false,
            imageBase64String: "",
            brandColor: '',
            brandLogo: '',
            brandLogoName: '',
            notification: false,
            isSignup:true
        }
    }

    handleValidation = (arr1:any) => {
        let fields = this.state.fields;
        let errors :any = {};
        let formIsValid = true;

        for(let i=0;i<arr1.length;i++){
            if(!fields[arr1[i]]){
                formIsValid = false;
                errors[arr1[i]] = AppMessages.U0032;    
            }
        }
        if (typeof fields["EmailAddress"] !== "undefined") {
            if (!emailValidation(fields["EmailAddress"])) {
                formIsValid = false;
                errors["EmailAddress"] = AppMessages.U0034;
            }
        }
        if (typeof fields["Password"] !== "undefined") {
            if (!validatePassword(fields["Password"])) {
                formIsValid = false;
                errors["Password"] = AppMessages.U0005;
            }
        }
        if (typeof fields["ConfirmPassword"] !== "undefined") {
            if (fields["Password"] !== fields["ConfirmPassword"]) {
                formIsValid = false;
                errors["ConfirmPassword"] = AppMessages.U0039;
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    handleChange = (field:any, event:any) => {
        let fields = this.state.fields;
        let errors = this.state.errors;
        fields[field] = event.target.value;
        errors[field] = "";
        this.setState({ fields, errors });
    }
    signupSumit = (e:any) => {
        e.preventDefault();
        let arr1 = ["EmailAddress","FirstName","LastName","Password","ConfirmPassword"]
        if (this.handleValidation(arr1)) {
            let formData = {
                email:this.state.fields.EmailAddress,
                fname: this.state.fields.FirstName,
                username:this.state.fields.LastName,
                password: getCypherString(this.state.fields.Password),
            }
            this.props.signupUser(formData).then((res:any) => {
                if (res) {
                    this.setState({ signUpCompleted: true, isSignup: false, res: {} })
                }
                else {
                    this.setState({ signUpErr: true})
                }
            }).catch((err:any) => {
                this.setState({ signUpErr: true})
            });
        } else {
            return false;
        }
    }

    closeMessageBar = () => {
        this.setState({ signUpErr: false,notification: false, fields : {EmailAddress : "",FirstName:"",LastName:"",Password:"",ConfirmPassword:""} })
    }

    handleLogin = () => {
        this.props.history.push("/login");
    }
    render() {
        return (
            <Fragment>
                    <SignupPage
                        {...this.state}
                        signupSumit={this.signupSumit}
                        handleChange={this.handleChange}
                        closeMessageBar={this.closeMessageBar}
                        handleLogin = {this.handleLogin}
                    />
            </Fragment>
        );
    }
}

export const mapDispatchToProps = (dispatch:any) => {
        return {
            signupUser: (data:any) => {
                return new Promise((resolve, reject) => {
                    dispatch(signUpUser(data)).then((res:any) => {
                        dispatch(signUpUserSuccess(res.payload.data));
                        resolve(res.payload.data)
                    }).catch((err:any) => {
                        dispatch(signUpUserFailure(err))
                        reject(err);
                    })
                });
            }
        }
    }
export default connect(null, mapDispatchToProps)(withRouter(SignupContainer));
