import React from "react";
import "./index.scss";

const ForgotPasswordForm = ({ closeForm }) => {
  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="close-button" onClick={closeForm}>
          X
        </button>
        <form className="forgot-password-form">
          <h2>Quên mật khẩu</h2>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <button type="submit">Xác nhận</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
