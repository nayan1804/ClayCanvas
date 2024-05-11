import React, { useContext, useEffect, useState } from 'react'
import './EmailVerify.css'
import { Link, useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StroreContext';
import axios from 'axios';

const EmailVerify = () => {

    const [validUrl, setValidUrl] = useState(false);
    const { url } = useContext(StoreContext);
    const param = useParams();
    

    useEffect(() => {
        ; (async () => {
            try {
                const {data} = await axios.get(`${url}/api/user/${param.id}/verify/${param.token}`);
                console.log(data);
                setValidUrl(data.success);
            } catch (error) {
                console.log(error)
                setValidUrl(false)
            }
        })();
    },[])

    return (
        <div>
            {validUrl ? (
                <div className="container">
                    <h1>Email Verified Successfully.</h1>
                    <Link to='/'>
                        <button className='green-btn'>Login</button>
                    </Link>
                </div> 
            ): (
                <h1>404 Not Found</h1>
                )}
        </div>
    )
}

export default EmailVerify
