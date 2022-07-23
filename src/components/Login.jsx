import React from 'react';
import MainButton from "./UI/button/MainButton";

const Login = () => {
    const user = true

    return user
        ?   <MainButton>LogIn</MainButton>
        :   <MainButton>LogOut</MainButton>
};

export default Login;