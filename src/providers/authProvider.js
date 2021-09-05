import { baseURL } from "../settings/config";
import { fetchUtils } from "ra-core";

const httpClient = fetchUtils.fetchJson;

export const authServices = {
  login: ({ username, password }) => {
    const email = username;
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const request = new Request(baseURL + "admin/login", {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.message);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("authenticated", "true");
      });
  },

  checkError: (error) => {
    return Promise.resolve();
  },
  checkAuth: () => {
    if (localStorage.getItem("authenticated") !== "true")
      return Promise.reject();
    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("authenticated");
    window.location.href = "http://localhost:3000/#/login";
  },

  getIdentity: () => {
    if (localStorage.getItem("authenticated") !== "true")
      return Promise.reject();
    return Promise.resolve({
      id: 1,
      fullName: `Admin`,
      avatar: null,
    });
  },

  getPermissions: () => {
    if (localStorage.getItem("authenticated") !== "true")
      return Promise.reject();
    return Promise.resolve();
  },
};

export default authServices;
