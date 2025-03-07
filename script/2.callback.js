// ! Callback Function
// function that is passed as a parameter of an another function is called a callback function

function ghotok(callback, patriName) {
  callback(patriName);
}

function patri(patriName) {
  console.log("first marriage will be with", patriName);
}

ghotok(patri, "hena");
ghotok(patri, "rohima");
