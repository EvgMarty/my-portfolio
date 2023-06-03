const darkModeBtn = document.querySelector('.dark-mode-btn');

//Смотрим что в localStorage Если Дарк то добавляем тему и делаем кнопку активной
if(localStorage.getItem('DarkMode') === 'dark'){
   darkModeBtn.classList.add('dark-mode-btn--active');
   const isDark = document.body.classList.add('dark');
}


//Включение ночного режима по кнопке
darkModeBtn.onclick = function(){
   darkModeBtn.classList.toggle('dark-mode-btn--active');
   const isDark = document.body.classList.toggle('dark');

   if(isDark){
      localStorage.setItem('DarkMode', 'dark');
   }else{
      localStorage.setItem('DarkMode', 'light');
   }
}

console.log('Привет Денис Думаю Да!')
