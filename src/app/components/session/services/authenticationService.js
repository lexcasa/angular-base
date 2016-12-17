var tokenKey = "vivela-token";

app.factory('authentication', function() {
  var service = {
    setToken: function(token) {
      localStorage.setItem(tokenKey, token);
    },
    setUser: function(user) {
      localStorage.setItem("user", JSON.stringify(user));
    },
    removeToken: function(token) {
      localStorage.setItem(tokenKey, "");
    },
    isAuthenticated: function() {
      return localStorage.getItem(tokenKey);
    },
    getToken: function() {
      return localStorage.getItem(tokenKey);
    },
    getUser: function() {
      return JSON.parse(localStorage.getItem("user"));
    }
  };
  return service;
});