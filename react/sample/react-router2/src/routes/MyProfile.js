import React from 'react';
import { redirect, Redirect } from 'react-router-dom';

const isSignedin = false;

const MyProfile = () => {

    return (
        <div>
            {
                !isSignedin && <Redirect to="/login" />
            }
            MyProfile
        </div>
    );
};

export default MyProfile;