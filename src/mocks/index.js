import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const baseApiDomain = "http://irongamesmockapilogin.com"
let users = self.localStorage.getItem("users") ?
  JSON.parse(self.localStorage.getItem("users")) : [];

const handleUserRegister = http.post(`${baseApiDomain}/users`, async (data) => {
  const user = await data.request.json();
  const isAlreadyRegistered = users.find((registeredUser) => 
    registeredUser.username === user.username &&
     registeredUser.password === user.password);
  if (isAlreadyRegistered) {
    return HttpResponse.json(
      {
        message: "Invalid user register",
        errors: {
          username: "Already registered",
        }
      },
      { status: 400 }
    );
  } else {
    user.id = self.crypto.randomUUID();
    users.push(user);
    self.localStorage.setItem("users", JSON.stringify(users));
    return HttpResponse.json(user, { status: 201 });
  }
})

const handleUserLogin = http.post(`${baseApiDomain}/login`, async (data) => {
  const { username, password } = await data.request.json();
  console.log(username, password);
  const user = users.find((registeredUser) => 
    registeredUser.username === username && registeredUser.password === password
  )
  if (user) {
    return HttpResponse.json(user, { status: 201 });
  } else {
    return HttpResponse.json(
      {
        message: "Unauthorized",
        errors: {
          password: "Invalid username or password"
        }
      },
      { status: 401 }
    ); 
  }
})

const worker = setupWorker(
  handleUserLogin,
  handleUserRegister
);

export default worker;