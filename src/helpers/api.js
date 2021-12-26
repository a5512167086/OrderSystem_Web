import axios from "axios";

const request = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signUpUser = (data) => {
  let requireData = {
    account: data.account,
    password: data.password,
    user_name: data.userName,
    user_email: data.userEmail,
  };
  return request.post("api/v1/createUser", requireData);
};

export const signInUser = (data) => {
  return request.post("api/v1/loginUser", data);
};
