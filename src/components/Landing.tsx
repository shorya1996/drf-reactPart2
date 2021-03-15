import React, { Fragment } from 'react'

const Landing = (props:any) =>{
    let jj=0;
    let userDetails: any = []
    for(jj=0;jj<props.students.length;jj++){
        userDetails.push(
        <tr>
            <td><p>{props.students[jj].userid}</p></td>
            <td><p>{props.students[jj].email}</p></td>
            <td><p> {props.students[jj].fname}</p></td>
            <td><p> {props.students[jj].username}</p></td>
        </tr>)
    }
    return (
        <div className="container styled-table">
            <table>
                <thead>
                    <tr>
                        <th>userid</th>
                        <th>email</th>
                        <th>fname</th>
                        <th>username</th>
                    </tr>
                </thead>
            </table>
                <div >
                    <table>
                        {userDetails}
                    </table></div>
    </div>
    )
}
export default Landing;