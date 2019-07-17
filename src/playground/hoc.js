import ReactDOM from 'react-dom';
import React from 'react';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is :{props.info}</p>
    </div>
);
const withAdminInfo=(WrappedComponent)=>{
 return (props)=>(
     <div>
        {props.isAdmin && <p>This is private info. Please dont shARE</p>}
        <WrappedComponent {...props} />
     </div>
 )    
};
const requireAuth = (WrappedComponent)=>{
    return (props)=>(
        <div>
           {props.isAuthenticated?( <WrappedComponent {...props}/>):(<p>User is not Authenticated</p>)}
        </div>
    )
}
const AdminInfo = withAdminInfo(Info);
const AuthInfo = requireAuth(Info);
ReactDOM.render( < AuthInfo isAuthenticated={false} info = "this is the info2333" / > , document.getElementById('app'));
// ReactDOM.render( < AdminInfo isAdmin={true} info = "this is the info12" / > , document.getElementById('app'));
