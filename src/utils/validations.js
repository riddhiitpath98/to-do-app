import * as Yup from "yup";
import {
  EMAIL_REGEX,
  LOWERCASE_REGEX,
  NUMBER_REGEX,
  PASSWORD_LENGTH,
  SPACIAL_CHAR_REGEX,
  UPPERCASE_REGEX,
} from "./constants";

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .trim()
    .max(255, "Email cannot exceed 255 characters !")
    .required("Email can't be empty !")
    .matches(EMAIL_REGEX, "Must be a valid email !"),
  password: Yup.string()
    .trim()
    .max(20, "Password cannot exceed 20 characters !")
    .required("Password can't be empty !"),
});

export const registerValidation = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name can't be empty !")
    .min(3, "Name must contain at least 3 characters !")
    .max(50, "Name cannot exceed 50 characters !")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces !"),
  email: Yup.string()
    .trim()
    .max(255, "Email cannot exceed 255 characters !")
    .required("Email can't be empty !")
    .matches(EMAIL_REGEX, "Must be a valid email !"),
  contact_number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot exceed 10 digits")
    .required("Phone number is required"),
  //role: Yup.string().trim().required("Role can't be empty !"),
  password: Yup.string()
    .trim()
    .required("Password can't be empty !")
    .min(PASSWORD_LENGTH, "Must contain at least 8 characters !")
    .max(20, "Password cannot exceed 20 characters !")
    .matches(UPPERCASE_REGEX, "Must contain uppercase letters !")
    .matches(LOWERCASE_REGEX, "Must contain lowercase letters !")
    .matches(NUMBER_REGEX, "Must contain numbers !")
    .matches(SPACIAL_CHAR_REGEX, "Must contain one special character !"),
  // confirm_password: Yup.string()
  //   .trim()
  //   .max(20, "Confirm Password cannot exceed 20 characters !")
  //   .required("Confirm Password can't be empty !")
  //   .oneOf([Yup.ref("password")], "Confirm password does not match !"),
});

export const createUserValidation = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name can't be empty !")
    .min(3, "Name must contain at least 3 characters !")
    .max(50, "Name cannot exceed 50 characters !")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces !"),
  email: Yup.string()
    .trim()
    .max(255, "Email cannot exceed 255 characters !")
    .required("Email can't be empty !")
    .matches(EMAIL_REGEX, "Must be a valid email !"),
  contact_number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot exceed 10 digits")
    .required("Phone number is required"),
});

export const resetPasswordValidation = Yup.object().shape({
  password: Yup.string()
    .trim()
    .required("Password can't be empty !")
    .min(PASSWORD_LENGTH, "Must contain at least 8 characters !")
    .max(20, "Password cannot exceed 20 characters !")
    .matches(UPPERCASE_REGEX, "Must contain uppercase letters !")
    .matches(LOWERCASE_REGEX, "Must contain lowercase letters !")
    .matches(NUMBER_REGEX, "Must contain numbers !")
    .matches(SPACIAL_CHAR_REGEX, "Must contain one special character !"),
  confirm_password: Yup.string()
    .trim()
    .max(20, "Confirm Password cannot exceed 20 characters !")
    .required("Confirm Password can't be empty !")
    .oneOf([Yup.ref("password")], "Confirm password does not match !"),
});

export const createAgentValidation = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name can't be empty !")
    .min(3, "Name must contain at least 3 characters !")
    .max(50, "Name cannot exceed 50 characters !")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces !"),
  email: Yup.string()
    .trim()
    .max(255, "Email cannot exceed 255 characters !")
    .required("Email can't be empty !")
    .matches(EMAIL_REGEX, "Must be a valid email !"),
  password: Yup.string()
    .trim()
    .required("Password can't be empty !")
    .min(PASSWORD_LENGTH, "Must contain at least 8 characters !")
    .max(20, "Password cannot exceed 20 characters !")
    .matches(UPPERCASE_REGEX, "Must contain uppercase letters !")
    .matches(LOWERCASE_REGEX, "Must contain lowercase letters !")
    .matches(NUMBER_REGEX, "Must contain numbers !")
    .matches(SPACIAL_CHAR_REGEX, "Must contain one special character !"),
  features: Yup.array()
    .min(1, "Select at least one item")
    .of(Yup.string().required()),
  contact_number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot exceed 10 digits")
    .required("Phone number is required"),
});

export const createPlansValidation = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name can't be empty !")
    .min(3, "Name must contain at least 3 characters !")
    .max(50, "Name cannot exceed 50 characters !")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces !"),
  price: Yup.string()
    .matches(/^[0-9]+$/, "Plan Price must contain only digits")
    .required("Plan Price is required"),
  description: Yup.string()
    .trim()
    .required("Description can't be empty !")
    .min(3, "Description must contain at least 3 characters !")
    .max(50, "Description cannot exceed 50 characters !")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Description can only contain letters and spaces !"
    ),
  interval: Yup.string().required("Please select plan duration"),
  agentLimit: Yup.string().required("Please select an agent limit"),
  features: Yup.array()
    .of(
      Yup.string()
        .trim()
        .required("Feature can't be empty!")
        .min(3, "Feature must contain at least 3 characters!")
        .max(50, "Feature cannot exceed 50 characters!")
    )
    .min(1, "At least one feature is required"),
});
