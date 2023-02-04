const submitData = (name, email) => {
    return fetch(window.location.origin+"/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name,email,
      }),
    })
      .then((response) => response.json())
      .then((object) => {
        document.body.innerHTML = object.id;
      })
      .catch((error) => {
        document.body.innerHTML = error.message;
      });
  };
  
  submitData("Byron", "Byron@gmail.com");