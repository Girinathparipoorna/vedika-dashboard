import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo.png'

const SignIn = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic form validation
        if (!userId || !password) {
            toast.error('Please fill in all fields', {
                autoClose: 3000,
            });
            return;
        }

        // Mock authentication logic
        if (userId === process.env.REACT_APP_USER_ID &&
            password === process.env.REACT_APP_PASSWORD) {
            localStorage.setItem('token', "Success");

            navigate('/dashboard')
            toast.success('Sign in successful!', {
                autoClose: 2000,
            });
        } else {
            toast.error('Invalid Id or password', {
                autoClose: 3000,
            });
        }
    };

    return (
        <div>
            <div style={styles.container}>
                <img src={logo} alt="company-logo" width={'250px'} />
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label>User Id:</label>
                        <input
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            style={styles.input}
                            placeholder="Enter your User Id"
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" style={styles.button}>Sign In</button>
                </form>
                <ToastContainer />


            </div>

        </div>
    );
};

// Styles object for inline CSS
const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    input: {
        padding: '10px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    button: {
        padding: '12px',
        border: 'none',
        borderRadius: '5px',
        background: '#007bff',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    },
};

export default SignIn;
