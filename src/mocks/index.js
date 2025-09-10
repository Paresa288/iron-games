import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

let currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null;

const baseApiDomain = "https://irongamesmockapilogin.com";

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
    user.watchedGames = [];
    users.push(user);
    self.localStorage.setItem("users", JSON.stringify(users));
    return HttpResponse.json(user, { status: 201 });
  }
})

const handleUserLogin = http.post(`${baseApiDomain}/login`, async (data) => {
  const { username, password } = await data.request.json();
  const user = users.find((registeredUser) => 
    registeredUser.username === username && registeredUser.password === password
  )
  if (user) {
    currentUser = user
    localStorage.setItem("currentUser", JSON.stringify(user))
    return HttpResponse.json(currentUser, { status: 201 });
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

const handleGetUser = http.get(`${baseApiDomain}/profile`, () => {
  return HttpResponse.json(currentUser || {}, { status: currentUser ? 200 : 404 });
})

const handleWatchedGames = http.post(`${baseApiDomain}/games/:id/watched`, async (data) => {
  const game = await data.request.json();
  
  if (!currentUser) {
    return HttpResponse.json(
      { message: "Unauthorized, please login" },
      { status: 401 }
    );
  }

  const targetGame = currentUser.watchedGames
    ?.find((watchedGame) => watchedGame.id === game.id)
  if (!targetGame) {
    currentUser.watchedGames.push(game);
  } else {
    currentUser.watchedGames = currentUser.watchedGames
      .filter((watchedGame) => watchedGame.id !== game.id)
  }

  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  
  return HttpResponse.json(
    currentUser,
    { status: 201 }
  );
})

const worker = setupWorker(
  handleUserLogin,
  handleUserRegister,
  handleGetUser,
  handleWatchedGames
);

export default worker;