import { baseUrl } from "../redux/BaseUrl";

export function callWithoutAuthToken(type, UserData) {
  return new Promise((resolve, reject) => {
    fetch(baseUrl + type, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserData),
    })
      .then((response) => response.json())
      .then((responsejson) => {
        resolve(responsejson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}


export function callWithMethodAndData(type, method, UserData) {
  return new Promise((resolve, reject) => {
    var token = localStorage.getItem("token");
    // console.log("api token",obj.data.token);
    fetch(baseUrl + type, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(UserData),
    })
      .then((response) => response.json())
      .then((responsejson) => {
        resolve(responsejson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function callWithMethodAndNoData(type, method) {
  var token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    fetch(baseUrl + type, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      // body: JSON.stringify(UserData)
    })
      .then((response) => response.json())
      .then((responsejson) => {
        resolve(responsejson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function forgetPassApi(type, method) {
  return new Promise((resolve, reject) => {
    fetch(baseUrl + type, {
      method: method,
      headers: { "Content-Type": "application/json", projectId: "2" },
    })
      .then((response) => response.json())
      .then((responsejson) => {
        resolve(responsejson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
