function makeRequest(ur, params) {
    return new Promise(function (resolve, reject) {
      fetch(url, params).then((response) => {
        let status = response.status;    
        if (status >= 200 && status < 300) {
          response.json().then((data) => {
            resolve(data);
          });
        } else {
          if (status === 401) {
            redirectToLoginPage();
          } else {
            response.json().then((error) => {
              if (!error.message) {
                error.message = constants.SERVER_ERROR;
              }
              reject({ status, error });
            });
        }
    }
  });
});
}