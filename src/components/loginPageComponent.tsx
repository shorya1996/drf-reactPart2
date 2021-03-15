import React from 'react';
import LoginForm from './loginForm';
import { connect } from 'react-redux';
import { loginUser, loginUserSuccess, loginUserFailure } from '../actions/loginAction';
import { AppMessages } from '../utils/appmessages';
import { withRouter } from 'react-router-dom';
import {validatePassword, getCypherString } from '../common/util';
import jwt_decode from 'jwt-decode';

export class LoginComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null,
            errorMsg: '',
            loginProgress: false,
            brandColor: '',
            brandLogo: '',
            brandLogoName: '',
            brandType:''
        }
    }
   
    componentDidMount() {
    }

    loginUser = (e) => {
        e.preventDefault();
        if (!this.state.username) {
            this.setState({ error: true, errorMsg: AppMessages.U0001 })
            return false;
        } else if (!this.state.password) {
            this.setState({ error: true, errorMsg: AppMessages.U0002 })
            return false;
        }
        else if (!validatePassword(this.state.password)){
            this.setState({ error: true, errorMsg: AppMessages.U0087 })
            return false;
        }
         else {
            this.setState({ loginProgress: true })
        }   
        this.props.loginUser({ email: this.state.username, password: getCypherString(this.state.password)}).then(res => {
            if (res.data.token) {
                localStorage.setItem('user', JSON.stringify({data:res.data}));
                this.props.history.push("/landingpage");
                    }
            else {
                this.setState({ error: true});
                return false;
            }
        }).catch(err => {
            this.setState({ error: true});
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        let trimmedValue = value.trim();
        this.setState({ [name]: trimmedValue });
        if (this.state.error) {
            this.setState({ error: false });
        }
    }

    handleSignup = () => {
        this.props.history.push("/signup");
    }

    render() {
        return (
            <LoginForm
                {...this.state}
                handleChange={this.handleChange}
                loginUser={this.loginUser}
                handleSignup={this.handleSignup}
            />
        );
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (userInfo) => {
            return new Promise((resolve, rej) => {
                dispatch(loginUser(userInfo))
                    .then(res => {
                        dispatch(loginUserSuccess(res.payload.data))
                        resolve(res.payload.data)
                    }).catch(err => {
                        dispatch(loginUserFailure(err))
                        rej(err)
                    })
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(withRouter(LoginComponent));