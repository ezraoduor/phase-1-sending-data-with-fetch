// Add your code here
function submitData(name, email) {
     return fetch("http://localhost:3000/users",{
        method: "POST",
        headers : {
            "Content-Type" : "application/json",
            Accept : "application/json"
        },
        body: JSON.stringify({name, email})
    })
    .then((response) => {
        if (!response.ok) {
          return new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        document.body.innerHTML += `<p>ID: ${data.id}</p>`;
      })
      .catch((error) => {
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }

