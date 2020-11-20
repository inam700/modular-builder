import fetchIntercept from "fetch-intercept";
import { baseUrl } from "../redux/BaseUrl";

export const unregister = fetchIntercept.register({
  request: function (url, config) {
    // Modify the url or config here
    //  console.log("intercept request")
    config.headers.token = "sagar ashraf";
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    console.log("error request");
    console.log(error);
    return Promise.reject(error);
  },

  response: function (response) {
    console.log("error response");
    console.log(response.status);
    console.log(response);
    if (response.status === 401) {
      //window.location = "/login"
      let value = {
        projectId: 2,
        jwtToken: localStorage.getItem("token"),
        refreshToken: localStorage.getItem("RefreshToken"),
        email: "",
        password: "",
      };

      console.log("values :");
      console.log(value);

      fetch(baseUrl + "Users/RefreshToken", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId: 5,
          jwtToken: localStorage.getItem("token"),
          refreshToken: localStorage.getItem("RefreshToken"),
          email: "sagar@ili.digital",
          password: "123456",
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          if (res.status === "Success") {
            localStorage.setItem("token", res.data.jwtToken);
          } else {
            console.log("Not Success ");
            console.log(res);
            if (res.status === 400) {
              localStorage.clear();
              window.location = "/login";
            }
          }
        })
        .catch((error) => {
          console.log("Error :" + error);
        });
    }
    // Modify the reponse object
    return response;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  },
});

// Call fetch to see your interceptors in action.
//fetch('http://google.com');

// Unregister your interceptor
//unregister();
