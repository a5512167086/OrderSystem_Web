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

export const getUsers = () => {
  return request.get("api/v1/user/get");
};

export const getUserById = (data) => {
  return request.get("api/v1/user/get/" + data);
};

export const deleteUserById = (data) => {
  return request.delete("api/v1/user/delete", { params: { id: data } });
};

export const updateUserById = (data) => {
  return request.patch("api/v1/user/update", data);
};

export const getAllFoodClass = () => {
  return request.get("api/v1/food/get");
};

export const createFoodClass = (data) => {
  return request.post("api/v1/food/create", data);
};

export const deleteFoodClassById = (data) => {
  return request.delete("api/v1/food/delete", { params: { id: data } });
};

export const createFoodType = (data) => {
  return request.post("api/v1/food/type/create", data);
};

export const getAllFoodType = () => {
  return request.get("api/v1/food/type/get");
};

export const getFoodClassById = (data) => {
  return request.get("api/v1/food/get/" + data);
};

export const deleteFoodTypeById = (data) => {
  return request.delete("api/v1/food/delete", data);
};

export const updateFoodClassById = (data) => {
  return request.patch("api/v1/food/update", data);
};

export const createNewOrder = (data) => {
  return request.post("api/v1/order/create", data);
};

export const getAllOrders = () => {
  return request.get("api/v1/order/get");
};

export const deleteOrderById = (data) => {
  return request.delete("api/v1/order/delete", { params: { id: data } });
};
