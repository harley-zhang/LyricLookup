import React from 'react';
import useAuth from './useAuth';

export default function Dashboard() {
    const accessToken = useAuth(code)
    return (
        <div>
            {code}
        </div>
    )
}