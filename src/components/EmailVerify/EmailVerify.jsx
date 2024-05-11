import React, { useContext, useEffect, useState } from 'react'
import './EmailVerify.css'
import { Link, useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StroreContext';
import axios from 'axios';

const EmailVerify = () => {

    const [validUrl, setValidUrl] = useState(false);
    const { url, setLoading } = useContext(StoreContext);
    const param = useParams();


    useEffect(() => {
        ; (async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`${url}/api/user/${param.id}/verify/${param.token}`);
                setLoading(false);
                setValidUrl(data.success);
            } catch (error) {
                console.log(error)
                setValidUrl(false)
                setLoading(false)
            }
        })();
    }, [])

    return (
        <>
            {validUrl ? (
                <div className="email-verify">
                    <h1>Email Verified Successfully.</h1>
                    <Link to='/'>
                        <button className='green-btn'>Login</button>
                    </Link>
                </div>
            ) : (
                <h1>404 Not Found</h1>
            )}
        </>
    )
}

export default EmailVerify
