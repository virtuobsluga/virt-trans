"use client";
import React, { useState } from 'react';

const Login = () => {
    const [userName, setUserName] = useSessionStorage('userName', '');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name:
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;