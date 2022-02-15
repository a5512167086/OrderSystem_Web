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

  return request.post("api/v1/user/create", requireData);
};

export const signInUser = (data) => {
  return request.post("api/v1/user/login", data);
};

export const getAllFoodClass = () => {
  return request.get("api/v1/food/get");
};

export const createFoodClass = (data) => {
  return request.post("api/v1/food/create", data);
};
