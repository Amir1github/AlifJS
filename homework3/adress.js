user = {
  username: "Amir",
  email: "something@gmail.com",
  age: 15
};

adress = {
    city: "Dushanbe",
    state: "Tajikistan",
    postalCode: "992"
};
const userProfile = Object.assign(user, adress);
console.log(userProfile);
