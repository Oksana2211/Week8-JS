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

const carLists = document.querySelectorAll('.carList');//весь список с марками авто


const сarModelAudi = document.querySelector('#car').elements.сarModelAudi;//список с марками авто Audi
const сarModelBMW = document.querySelector('#car').elements.сarModelBMW;//список с марками авто BMW
const сarModelHyunda = document.querySelector('#car').elements.сarModelHyunda;//список с марками авто Hyunda
const сarModelHonda = document.querySelector('#car').elements.сarModelHonda;//список с марками авто Honda
const сarModelJeep = document.querySelector('#car').elements.сarModelJeep;//список с марками авто Jeep
const сarModelMazda = document.querySelector('#car').elements.сarModelMazda;//список с марками авто Mazda
const сarModelToyota = document.querySelector('#car').elements.сarModelToyota;//список с марками авто Toyota




сarBrand.addEventListener('change', function () {

  if (this.value == "Audi") {
    [...carLists].forEach(i => i.classList.add("carList"));
    сarModelAudi.classList.remove('carList');
  }
  if (this.value == "BMW") {
    [...carLists].forEach(i => i.classList.add("carList"));
    сarModelBMW.classList.remove('carList');
  }
  if (this.value == "Hyundai") {
    [...carLists].forEach(i => i.classList.add("carList"));
    сarModelHyunda.classList.remove('carList');
  }
  if (this.value == "Honda") {
    [...carLists].forEach(i => i.classList.add("carList"));
    сarModelHonda.classList.remove('carList');
  }
  if (this.value == "Jeep") {
    [...carLists].forEach(i => i.classList.add("carList"));
    сarModelJeep.classList.remove('carList');
  }
  if (this.value == "Mazda") {
    [...carLists].forEach(i => i.classList.add("carList"));
    сarModelMazda.classList.remove('carList');
  }
  if (this.value == "Toyota") {
    [...carLists].forEach(i => i.classList.add("carList"));
    сarModelToyota.classList.remove('carList');
  }

});





const fuels = document.querySelectorAll('input[name="fuel"]');





function addPrice() {
  btnPrice.disabled = true;//делаем кнопку не активной

  photo.innerHTML += `<img class="img-avto" src="img/avto.png" alt="авто на продажу">`;//выводим фото

  brandAvto.innerHTML += `${сarBrand.value}`;// выводим марку авто в div



  // console.log(carLists);

  console.log(carLists);
  for (const carList of carLists) {//выводим выбранную модель авто в div
    if (carList.checked) {
      nameAvto.innerHTML += `${carList.value}`;
      break;
    }
  }



  for (const fuel of fuels) { // выводим выбранное топливо в div
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