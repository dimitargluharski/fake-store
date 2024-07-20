import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const currentUser = localStorage.getItem('username');
    console.log(JSON.parse(currentUser));

    if (!localStorage.getItem('username')) {
      localStorage.setItem('username', JSON.stringify({
        username,
        password,
      }));
    }
  };

  return (
    <div className="relative h-full w-full bg-red-500 flex justify-center items-center">
      <div className="m-auto bg-slate-400 w-[500px] p-5 rounded-md">
        <form onSubmit={handleLogin}>
          <div className="p-2">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="w-full rounded-md p-2 focus:outline-cyan-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="p-2">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full rounded-md p-2 focus:outline-cyan-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {username === "" || password === "" && (
            <div className="p-2">
              <p className="text-red-500">Please fill in all fields!</p>
            </div>
          )}

          <div className="p-2">
            <button
              type="submit"
              className="w-full rounded-md p-2 bg-cyan-600 text-white uppercase font-bold hover:bg-cyan-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
