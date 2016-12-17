var BASE_URL = '';
var PRIMARY_COLOR = 'red';

var K = {};
K.URL = BASE_URL;
K.progressFlag = true;

app.factory('RestClient', function($http, $state, ngProgressFactory){

  var progressbar = ngProgressFactory.createInstance();
  progressbar.setHeight('2px');
  progressbar.setColor(PRIMARY_COLOR);

  var factory = {
    get: function(url, callback) {

      progressbar.start();

      var config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token") + ""
        }
      };

      $http.get(K.URL + url, config).
        success(function(data, status, headers, config) {
          progressbar.complete();
          callback(null, data);
        }).
        error(function(data, status, headers, config) {
          progressbar.complete();
          if (status == 401 && $state.current.name != "login" && $state.current.name!= "recovery") { //Go to login
            $state.go('login');
          } else {
            callback(data);
          }
        });
    },
    post: function(url, data, callback) {
      progressbar.start();

      var config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token") + ""
        }
      };

      $http.post(K.URL + url,data,  config).
        success(function(data, status, headers, config) {
          progressbar.complete();
          callback(null, data);
        }).
        error(function(data, status, headers, config) {
          progressbar.complete();
          if (status == 401 && $state.current.name != "login" && $state.current.name!= "recovery") { //Go to login
            $state.go('login');
          } else {
            callback(data);
          }
        });
    },
    put: function(url, data,  callback) {
      if (K.progressFlag) {
        progressbar.start();
      }
      var config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token") + ""
        }
      };

      $http.put(K.URL + url,data,  config).
        success(function(data, status, headers, config) {
          if (K.progressFlag) {
            progressbar.complete();
          }
          callback(null, data);
        }).
        error(function(data, status, headers, config) {
          if (K.progressFlag) {
            progressbar.complete();
          }
          if (status == 401 && $state.current.name != "login" && $state.current.name!= "recovery") { //Go to login
            $state.go('login');
          } else {
            callback(data);
          }
        });
    },
    delete: function(url,  callback) {
      progressbar.start();
      var config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token") + ""
        }
      };
      $http.delete(K.URL + url,  config).
        success(function(data, status, headers, config) {
          progressbar.complete();
          callback(null, data);
        }).
        error(function(data, status, headers, config) {
          progressbar.complete();
          if (status == 401 && $state.current.name != "login" && $state.current.name!= "recovery") { //Go to login
            $state.go('login');
          } else {
            callback(data);
          }
        });
    }
  };
  return factory;
});