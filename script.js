let userData = {};

let name = prompt('Введите ваше имя:');
let id = prompt('Введите ваш ID:');
let password = prompt('Введите ваш пароль:');
function getUserData() {

  userData.name = name;
  userData.id = id;
  userData.password = password;

}
getUserData(name,id,password)
console.log('Полученные данные:', userData);