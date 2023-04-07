import * as yup from "yup";

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Enter an email to continue"),
  password: yup.string().required("Enter a password to continue"),
});

export const REGISTER_SCHEMA = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const VERIFICATION_SCHEMA = yup.object({
  email: yup.string().email().required(),
  otp: yup.string().max(6).required(),
});

export const RESEND_VERIFICATION_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
