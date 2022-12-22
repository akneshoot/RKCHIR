let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } 
  else if (pass === 'я главный') {
    alert( 'Здравствуйте!' );
  } 
  else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  }
   else {
    alert( 'Неверный пароль, поэтому вы сможете зайти на сайт только в качестве гостя' );
  }

} 
else if (userName === 'админ') {

    let pass = prompt('Пароль?', '');
  
    if (pass === 'Я главный') {
      alert( 'Здравствуйте!' );
    } 
    else if (pass === 'я главный') {
      alert( 'Здравствуйте!' );
    } 
    else if (pass === '' || pass === null) {
      alert( 'Отменено' );
    }
     else {
      alert( 'Неверный пароль, поэтому вы сможете зайти на сайт только в качестве гостя' );
    }
  
} 
else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} 
else {
  alert( "Я вас не знаю" );
}