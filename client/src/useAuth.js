import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('http://localhost:3001/refresh', {
            refreshToken,
        }).then(res => {
            //setAccessToken(res.data.accessToken);
            //setRefreshToken(res.data.refreshToken);
            //setExpiresIn(res.data.expiresIn);
            //window.history.pushState({}, null, '/');
        }).catch(() => {
            window.location = '/'
        })
        effect
    }, [code])

    useEffect(() => {

    }, [refreshToken, expiresIn])

    return accessToken;
};