function submitData(usersName, usersEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: usersName,
      email: usersEmail
    })
  })
  .then(response => response.json()) 
  .then(data => {
    
    const newElement = document.createElement('p');
    newElement.textContent = `User ID: ${data.id}`;
    document.body.appendChild(newElement);
  })
  .catch(error => {
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorElement);
  });
}
    