import React, { useState } from 'react';
import axios from 'axios';
import MessageBox from '../components/MessageBox';

const Login = () => {
  const [email, setEmail] = useState('winnie.selzer@barmail.com');
  const [password, setPassword] = useState('1234');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_HOST}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('token', data.token);
      window.location.href = '/';
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <MessageBox type='danger' message={error} />
      <h1>Login</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="form-control form-control-lg" placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="form-control form-control-lg" placeholder="Password"
                  required
                />
              </div>
              <button type="submit" disabled={loading} className="btn btn-primary btn-lg">
                Login
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;