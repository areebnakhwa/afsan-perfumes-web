import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const LoginModal = ({ isOpen, onClose, theme, user }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // NEW STATES: Remember Me & Terms Checkbox
  const [rememberMe, setRememberMe] = useState(true);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [error, setError] = useState("");
  const [resetMsg, setResetMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Email/Password Submit Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResetMsg("");

    // Sign Up check for Terms & Conditions
    if (!isLogin && !agreedToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        // Remember Me persistence setup
        await setPersistence(
          auth,
          rememberMe ? browserLocalPersistence : browserSessionPersistence,
        );
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      onClose();
      setEmail("");
      setPassword("");
      setShowPassword(false);
      setAgreedToTerms(false);
    } catch (err) {
      let errorMessage = err.message;
      if (err.code === "auth/invalid-credential") {
        errorMessage = "Invalid email address or password.";
      } else if (err.code === "auth/email-already-in-use") {
        errorMessage = "An account with this email already exists.";
      }
      setError(errorMessage.replace("Firebase:", "").trim());
    } finally {
      setLoading(false);
    }
  };

  // Forgot Password Logic
  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address first to reset password.");
      setResetMsg("");
      return;
    }
    setError("");
    setResetMsg("");
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMsg(
        "Password reset link sent! Please check your spam or junk folder as well.",
      );
    } catch (err) {
      let errorMessage = err.message;
      if (err.code === "auth/user-not-found") {
        errorMessage = "No account found with this email address.";
      }
      setError(errorMessage.replace("Firebase:", "").trim());
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setResetMsg("");
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (err) {
      setError(err.message.replace("Firebase:", "").trim());
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    onClose();
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setResetMsg("");
    setShowPassword(false);
    setAgreedToTerms(false);
  };

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className={`relative w-full max-w-md p-8 rounded-3xl shadow-2xl border ${theme === "dark" ? "bg-[#111] border-white/10 text-white" : "bg-white border-black/10 text-black"}`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/50 text-white hover:bg-red-500 rounded-full transition-colors"
          >
            ✕
          </button>

          {user ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-yellow-500 text-black text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                {user.displayName
                  ? user.displayName.charAt(0).toUpperCase()
                  : user.email.charAt(0).toUpperCase()}
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2">
                Welcome Back!
              </h2>
              <p className="text-sm text-gray-400 mb-8">{user.email}</p>
              <button
                onClick={handleLogout}
                className="w-full py-3 rounded-xl font-bold tracking-widest uppercase bg-red-500/10 text-red-500 border border-red-500/30 hover:bg-red-500 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-2">
                  {isLogin ? "Welcome Back" : "Create Account"}
                </h2>
                <p className="text-sm text-gray-400">
                  Experience true luxury with AFSAN.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs text-center">
                  {error}
                </div>
              )}
              {resetMsg && (
                <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-xs text-center">
                  {resetMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl outline-none border transition-colors ${theme === "dark" ? "bg-[#1a1a1a] border-white/10 focus:border-yellow-500" : "bg-gray-50 border-black/10 focus:border-yellow-600"}`}
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl outline-none border transition-colors pr-12 ${theme === "dark" ? "bg-[#1a1a1a] border-white/10 focus:border-yellow-500" : "bg-gray-50 border-black/10 focus:border-yellow-600"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-500 transition-colors p-2"
                  >
                    {showPassword ? (
                      <span className="text-lg leading-none block">👁️</span>
                    ) : (
                      <span className="text-lg leading-none block opacity-50">
                        👁️‍🗨️
                      </span>
                    )}
                  </button>
                </div>

                {/* SIGN IN: Remember Me & Forgot Password */}
                {isLogin ? (
                  <div className="flex items-center justify-between mt-1 text-xs text-gray-400">
                    <label className="flex items-center gap-2 cursor-pointer select-none hover:text-gray-300">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded accent-yellow-500 bg-transparent border-gray-600 cursor-pointer"
                      />
                      <span>Remember Me</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="hover:text-yellow-500 transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                ) : (
                  /* SIGN UP: Terms & Conditions Checkbox */
                  <div className="flex items-start gap-2 mt-2 text-xs text-gray-400">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded accent-yellow-500 bg-transparent border-gray-600 cursor-pointer shrink-0"
                    />
                    <label
                      htmlFor="terms"
                      className="cursor-pointer leading-relaxed select-none"
                    >
                      I agree to the{" "}
                      <span className="text-yellow-500 font-semibold underline">
                        Terms of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-yellow-500 font-semibold underline">
                        Privacy Policy
                      </span>
                      .
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 mt-2 rounded-xl font-bold tracking-widest uppercase bg-[#EAB308] text-black transition-colors hover:bg-yellow-400 disabled:opacity-50"
                >
                  {loading ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
                </button>
              </form>

              <div className="mt-6 mb-4 flex items-center justify-between">
                <span className="w-1/4 border-b border-gray-600/50"></span>
                <span
                  className={`text-xs uppercase font-bold tracking-wider ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                >
                  Or continue with
                </span>
                <span className="w-1/4 border-b border-gray-600/50"></span>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className={`w-full flex items-center justify-center gap-3 py-3 rounded-xl font-bold tracking-widest uppercase border transition-colors disabled:opacity-50 ${theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-white text-black border-gray-300 hover:bg-gray-50 shadow-sm"}`}
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Google
              </button>

              <div className="mt-6 text-center text-sm">
                <span className="text-gray-400">
                  {isLogin
                    ? "Don't have an account? "
                    : "Already have an account? "}
                </span>
                <button
                  onClick={toggleMode}
                  className="text-yellow-500 font-bold hover:underline"
                >
                  {isLogin ? "Create one" : "Sign in"}
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body,
  );
};

export default LoginModal;
