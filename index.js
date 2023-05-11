const сarPrice = document.querySelector('.сar-price');//основной блок для вывода рассчетов div
const btnPrice = document.querySelector('.btn');//кнопка 

const photo = document.createElement('div');// контейнер для фото


const nameAvto = document.createElement('h3');// контейнер для марки авто
const fuelAvto = document.createElement('span'); //  топливо
const volumeAvto = document.createElement('span'); // объём двигателя
const conditionAvto = document.createElement('span'); // состояние автомобиля
const paymentAvto = document.createElement('span');// способ оплаты
const email = document.createElement('span'); // майл пользователя

сarPrice.appendChild(photo); //добавляем конейнер для фото в div
сarPrice.appendChild(nameAvto);// добавляем контейнеры в div
сarPrice.appendChild(fuelAvto);
сarPrice.appendChild(volumeAvto);
сarPrice.appendChild(conditionAvto);
сarPrice.appendChild(paymentAvto);
сarPrice.appendChild(email);
// console.log(fuelAvto);

const nameA = document.querySelector('#car').elements['сarModel'];//находим список с марками авто
const fuels = document.querySelectorAll('input[name="fuel"]');




function addPrice() {
  btnPrice.disabled = true;//делаем кнопку не активной


  photo.innerHTML += `<img class="img-avto" src="img/avto.png" alt="авто на продажу">`;//выводим фото


  nameAvto.innerHTML += `${nameA.value}`;//выводим марку авто в div
  // fuelAvto.innerHTML += `${fuelA.value}`;
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