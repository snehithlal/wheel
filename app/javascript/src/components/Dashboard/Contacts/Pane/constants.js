import * as yup from "yup";

export const CONTACT_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  email: yup.string().email("Invalid email address").required("Required"),
  role: yup.object().required("Required"),
});

export const CONTACT_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

export const ROLE_OPTIONS = [
  {
    label: "Owner",
    value: 1,
  },
];
