const fetch = require("node-fetch");

const body = {
  email: "mohammad.faizaan@s.amity.edu",
  name: "Mohammad Faizaan",
  mobileNo: "7007973361",
  githubUsername: "faizaan35", 
  rollNo: "A023165822013",
  accessCode: "yvhdda"
};

fetch("http://20.244.56.144/evaluation-service/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Registered!");
    console.log(data);
  })
  .catch((err) => console.error("Error:", err));
