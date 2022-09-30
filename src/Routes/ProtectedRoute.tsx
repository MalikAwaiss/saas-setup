import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// import { camelToTitleCase } from '../Components/Shared/SharedFunctions';
// import ErrorPage from '../Screens/ErrorPage';

const ProtectedRoute = (props:any) => {
    const {path} = props;
// const ProtectedRoute = ({ dispatch, user, component: Component, permissionCheck, path, isAuthenticated, ...rest }) => {
    // let comp = isAuthenticated ? 'component' : 'Login';
    useEffect(() => {
        let splittedPath = path.split('/');
        if (splittedPath?.length > 1 && splittedPath[1] !== '') {
        }
       
    }, [path])
    
    return (
        <div>
            {/* <Route path={path} {...rest} render={(props) => {
                return isAuthenticated ? (permissionCheck !== undefined && permissionCheck !== null ? (permissionCheck === true ? (<Component {...props} {...rest.componentProps??{}} />) : (<ErrorPage errorCode={403} message={'UnAuthorized'} />)) : (<Component {...props} />)) : (<Redirect to={{ pathname: '/Login', state: { from: sessionStorage.setItem('user_from', JSON.stringify(props.location.pathname)) } }} />)
            }} /> */}
        </div>
    )
}

export default ProtectedRoute;