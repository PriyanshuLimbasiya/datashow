import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from './Services/ApiService';
import '../App.css'; 

const LoginLogout = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        Email: '', // Your Email Data
        Password: ''//Your Password Data
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value }); //data on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ApiService.login(data);
            if (response.success) {
                navigate('/brainlyAiScreener');
            } else {
                console.log("Invalid credentials");
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="vh-100 d-flex beg justify-content-center align-items-center bg-image vw-100">
            <div className="card bg-transparent p-4 shadow-lg beg1">
                <div className="card-body ">
                    <form onSubmit={handleSubmit}>
                        <div className="text-center mb-4">
                            <img
                                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                                alt="Bootstrap logo"
                                width="72"
                                height="57"
                            />
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        </div>
                        <div className="form-floating mb-3">
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
                        <div className="form-floating mb-3">
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
                        <button className="btn btn-warning  w-100" type="submit">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginLogout;
