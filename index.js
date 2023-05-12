const сarPrice = document.querySelector('.сar-price');//основной блок для вывода рассчетов div
const btnPrice = document.querySelector('.btn');//кнопка 


const photo = document.createElement('div');// контейнер для фото

const brandAvto = document.createElement('h2'); //контейнер для марки авто
const nameAvto = document.createElement('h2');// контейнер для модели авто
const fuelAvto = document.createElement('span'); //  топливо
const volumeAvto = document.createElement('span'); // объём двигателя
const conditionAvto = document.createElement('span'); // состояние автомобиля
const paymentAvto = document.createElement('span');// способ оплаты
const email = document.createElement('span'); // майл пользователя


сarPrice.appendChild(photo); // добавляем контейнеры в div
сarPrice.appendChild(brandAvto);
сarPrice.appendChild(nameAvto);
сarPrice.appendChild(fuelAvto);
сarPrice.appendChild(volumeAvto);
сarPrice.appendChild(conditionAvto);
сarPrice.appendChild(paymentAvto);
сarPrice.appendChild(email);
// console.log(fuelAvto);

const сarBrand = document.querySelector('#car').elements['сarBrand']; //список авто
const сarModel = document.querySelector('#car').elements['сarModel'];//список с марками авто
const fuels = document.querySelectorAll('input[name="fuel"]');

// console.log(сarBrand);


function addPrice() {
  btnPrice.disabled = true;//делаем кнопку не активной


  photo.innerHTML += `<img class="img-avto" src="img/avto.png" alt="авто на продажу">`;//выводим фото

  brandAvto.innerHTML += `${сarBrand.value}`;// выводим марку авто в div
  nameAvto.innerHTML += `${сarModel.value}`;//выводим модель авто в div
  for (const fuel of fuels) {
    if (fuel.checked) {
      fuelAvto.innerHTML += `${fuel.value}`;
      break;
    }
  }


  const btnСlean = document.createElement('button');
  btnСlean.textContent = "Очистить"
  сarPrice.appendChild(btnСlean);
  function cleanPrice() {
    photo.textContent = "";
    nameAvto.textContent = "";
    fuelAvto.textContent = "";
    btnPrice.disabled = false;
    btnСlean.style.display = "none";
  }
  btnСlean.addEventListener('click', cleanPrice);
}
btnPrice.addEventListener('click', addPrice);