import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from './Services/ApiService';
import '../App.css';

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
                navigate('/brainlyAiScreener');
            } else {
                console.log("Invalid credentials");
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center bg-light bg-gradient beg">
            <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px', borderRadius: '15px' }}>
                <div className="card-body">
                    <div className="text-center mb-4">
                        <img
                            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                            alt="Bootstrap logo"
                            width="72"
                            height="57"
                        />
                        <h1 className="h4 mb-3 fw-normal">Sign in to your account</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                name="Email"
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
                                name="Password"
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
                        <button className="btn btn-primary w-100" type="submit">
                            Sign in
                        </button>
                    </form>
                    <hr className="my-4" />
                    <div className="text-center">
                        <p className="mb-1">Don't have an account?</p>
                        <button className="btn btn-outline-secondary" onClick={() => navigate('/register')}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginLogout;
