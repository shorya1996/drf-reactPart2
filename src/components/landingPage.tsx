import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FetchUserDetails, FetchUserDetailsFailure, FetchUserDetailsSuccess } from '../actions/usersAction';
import Landing from './Landing';


export class LandingPageComponent extends React.Component<any, any>{
    constructor(props) {
        super(props) 
        this.state = { 
           students: [],
           loading:true
        }
     }
     componentDidMount(){
        this.getDetails()
    }
    getDetails = () =>{
        this.props.FetchUserDetails().then(response => {
            if(response.isSuccess){ 
                this.setState({
                    students:response.data, loading:false
            })}
            else{
                this.setState({
                    students:[]
                }) 
            }
        }).catch(() => {
            this.setState({
                students:[]
            }) 
        });
        return false;
    }
 
     render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <Fragment>
                <Landing {...this.state}/>
            </Fragment>
         )
     }
  }

export const mapDispatchToProps = (dispatch) => {
    return {
        FetchUserDetails: () => {
            return new Promise((resolve, rej) => {
                dispatch(FetchUserDetails())
                    .then(res => {
                        dispatch(FetchUserDetailsSuccess(res.payload.data))
                        resolve(res.payload.data)
                    }).catch(err => {
                        dispatch(FetchUserDetailsFailure(err))
                        rej(err)
                    })
            })
        }
    }
}
export default withRouter(connect(null, mapDispatchToProps)(withRouter(LandingPageComponent)));