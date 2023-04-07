import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Login
async function login(payload) {
  try {
    let response = await axios({
      method: "POST",
      baseURL: BASE_URL,
      url: "/login",
      data: payload,
    });
    return response;
  } catch (e) {
    throw e;
  }
}

// Register new user
async function register(payload) {
  try {
    let response = await axios({
      method: "POST",
      baseURL: BASE_URL,
      url: "/signup",
      data: payload,
    });
    return response;
  } catch (e) {
    throw e;
  }
}

// Verify account
async function verify_account(payload) {
  try {
    let response = await axios({
      method: "POST",
      baseURL: BASE_URL,
      url: "/verify-account",
      params: {
        email: payload.email,
        otp: payload.otp,
      },
    });
    return response;
  } catch (e) {
    throw e;
  }
}
// Resend account verification otp
async function resend_verification_otp(payload) {
  try {
    let response = await axios({
      method: "POST",
      baseURL: BASE_URL,
      url: "/resend-account-verification-otp",
      data: payload,
    });
    return response;
  } catch (e) {
    throw e;
  }
}

// Creating AuthServices Object
export const AuthServices = {
  login,
  register,
  verify_account,
  resend_verification_otp,
};
