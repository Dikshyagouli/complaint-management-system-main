import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage({ content }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { login, signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const switchMode = () => {
    setError("");
    setSuccessMsg("");
    setIsLogin(!isLogin);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMsg("");

    try {
      let result;
      
      if (isLogin) {
        result = await login(form.email, form.password);
      } else {
        result = await signup(form.name, form.email, form.password);
      }

      if (result.success) {
        setSuccessMsg(result.message);
        navigate("/");
      } else {
        setError(result.error);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        {/* Left Side - Form */}
        <div className="auth-form-section">
          <div className="form-container">
            <div className="form-header">
              <h2>{isLogin ? content.welcome : content.create }</h2>
              <p>{isLogin ? content.signInPrompt : content.signUpPrompt}</p>
          </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">{content.fullName}</label>
              <input
                type="text"
                    id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                    placeholder={content.namePlaceholder}
                required
              />
            </div>
          )}

              <div className="form-group">
                <label htmlFor="email">{content.email}</label>
              <input
                type="email"
                  id="email"
                name="email"
                value={form.email}
                onChange={onChange}
                  placeholder={content.emailPlaceholder}
                required
              />
            </div>

              <div className="form-group">
                <label htmlFor="password">{content.password}</label>
              <input
                type="password"
                  id="password"
                name="password"
                value={form.password}
                onChange={onChange}
                  placeholder={content.passwordPlaceholder}
                required
                minLength={6}
              />
            </div>

              {error && <div className="error-message">{error}</div>}

              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {content.loading}
                </span>
                ) : (
                  isLogin ? content.signInButton : content.createButton
                )}
            </button>
          </form>

            <div className="form-footer">
              <p>
                {isLogin ? content.noAccount : content.hasAccount}
                <button 
                  type="button" 
                  className="switch-mode-btn"
                  onClick={switchMode}
                >
                  {isLogin ? content.switchSignUp : content.switchSignUp }
          </button>
              </p>
      </div>
          </div>
        </div>

        {/* Right Side - Image/Content */}
        <div className="auth-content-section">
          <div className="content-overlay">
            <div className="content-text">
              <h1>{content.title}</h1>
              <p>
                {content.loginParagraph}
              </p>
              <div className="features">
                <div className="feature-item">
                  <span className="feature-icon">📋</span>
                  <span>{content.text1}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>{content.text2}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <span>{content.text3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}