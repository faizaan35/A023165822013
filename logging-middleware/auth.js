import fetch from "node-fetch";

const body = {
  email: "mohammad.faizaan@s.amity.edu",
  name: "mohammad faizaan",
  rollNo: "a023165822013",
  accessCode: "yvhdda",
  clientID: "2c0c6b36-61bd-479a-8e1f-0db9c168e79d",
  clientSecret: "gdKXHFsUapnphhBy"
};

fetch("http://20.244.56.144/evaluation-service/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Access Token:");
    console.log(data);
  })
  .catch((err) => console.error("Auth error:", err));
