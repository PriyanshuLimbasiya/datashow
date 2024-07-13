import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from './ApiService';
import '../App.css'


const LoginLogout = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        Email: '',
        Password: ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ApiService.login(data);
            if (response.success) {
                navigate('/dashboard');
            } else {
                console.log("Invalid ");
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className=' vh-100 '>
            <div className="container-fluid w-25 ">
                <div className="row d-flex justify-content-center align-items-center pt-5  ">
                    <div className="col-md pt-5 ">
                        <form onSubmit={handleSubmit}>
                            <img
                                className="mb-4"
                                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                                alt=""
                                width="72"
                                height="57"
                            />
                            <h1 className="h3 mb-3 fw-normal ">Please sign in</h1>
                            <div className="form-floating">
                                <input
                                    name='Email'
                                    value={data.Email}
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={handleChange}
                                    required

                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mt-2">
                                <input
                                    name='Password'
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={data.Password}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="ms-4">
                                <button className="btn btn-grad w-50 mt-2 ms-5 d-flex align=items-center justify-content-center" type="submit">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginLogout;
