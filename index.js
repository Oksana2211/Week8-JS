const сarPrice = document.querySelector('.сar-price');//основной блок для вывода рассчетов div
const btnPrice = document.querySelector('.btn');//кнопка 

const photo = document.createElement('div');// контейнер для фото
сarPrice.appendChild(photo); //добавляем конейнер для фото в div

const nameAvto = document.createElement('h3');// контейнер для марки авто
const fuelAvto = document.createElement('span'); // контейнер для топлива
const volumeAvto = document.createElement('span'); // объём двигателя
const conditionAvto = document.createElement('span'); // состояние автомобиля
const paymentAvto = document.createElement('span');// способ оплаты
const email = document.createElement('span'); // майл пользователя


function addPrice() {
  photo.innerHTML += `<img class="img-avto" src="img/avto.png" alt="авто на продажу" >`;//выводим фото
  btnPrice.disabled = true;//делаем кнопку не активной
}
btnPrice.addEventListener('click', addPrice);