import React from "react";
import "./styles.css";
import Modal from "../Modal/Modal";

const LoginForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div>
      <button
        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mt-4"
        onClick={handleOpen}
      >
        Login
      </button>
      <Modal isOpen={open}>
        <button className="btn-close" onClick={handleClose}>
          X
        </button>
        <div className="form-container">
          <h2>Login</h2>
          <form className="form">
            <div className="form__input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                name="username"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="form__input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button className="login">Login</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default LoginForm;
