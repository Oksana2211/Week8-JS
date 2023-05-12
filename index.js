const сarPrice = document.querySelector('.сar-price');//основной блок для вывода рассчетов div
const btnPrice = document.querySelector('.btn');//кнопка "рассчить стоимость"


const photo = document.createElement('div');// контейнер для фото

const brandAvto = document.createElement('h2'); //контейнер для марки авто
const nameAvto = document.createElement('h2');// контейнер для модели авто
const fuelAvto = document.createElement('span'); // контейнер для топлива
const volumeAvto = document.createElement('span'); // контейнер для объёма двигателя
const conditionAvto = document.createElement('span'); // контейнер для состояние автомобиля
const paymentAvto = document.createElement('span');// контейнер для способа оплаты
const email = document.createElement('span'); // контейнер для майла пользователя
const price = document.createElement('span'); // контейнер для цены авто
// console.log(conditionAvto);

сarPrice.appendChild(photo); // добавляем контейнеры в div
сarPrice.appendChild(brandAvto);
сarPrice.appendChild(nameAvto);
сarPrice.appendChild(fuelAvto);
сarPrice.appendChild(volumeAvto);
сarPrice.appendChild(conditionAvto);
сarPrice.appendChild(paymentAvto);
сarPrice.appendChild(email);
сarPrice.appendChild(price);

const сarBrand = document.querySelector('#car').elements['сarBrand']; //марки авто

const carLists = document.querySelectorAll('.carList');//весь список с моделями авто

const сarModelAudi = document.querySelector('#car').elements.сarModelAudi;//список с моделями авто Audi
сarModelAudi.classList.remove('carList');
const сarModelBMW = document.querySelector('#car').elements.сarModelBMW;//список с моделями авто BMW
const сarModelHyunda = document.querySelector('#car').elements.сarModelHyunda;//список с моделями авто Hyunda
const сarModelHonda = document.querySelector('#car').elements.сarModelHonda;//список с моделями авто Honda
const сarModelJeep = document.querySelector('#car').elements.сarModelJeep;//список с моделями авто Jeep
const сarModelMazda = document.querySelector('#car').elements.сarModelMazda;//список с моделями авто Mazda
const сarModelToyota = document.querySelector('#car').elements.сarModelToyota;//список с моделями авто Toyota

const fuels = document.querySelectorAll('input[name="fuel"]');//радиокнопки с топливом
const volume = document.querySelector('input[name="volume"]');// input для ввода объема двигателя


const divC = document.querySelector('.condition');//контейнер с радиокнопками состояния авто
const conditions = document.querySelectorAll('input[name="condition"]'); // радиокнопки с состоянием авто



сarBrand.addEventListener('change', function () {//удаляем класс carList(display: none;) с выпадающего списка моделей выбранной марки авто

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


function divCondition() {//если авто Подержанный появляются радиокнопки для выбора кол-ва владельцев
  const divCondition = document.createElement('div');
  const pCondition = document.createElement('p');
  pCondition.textContent = "Количество владельцев:";
  const radio1 = document.createElement('span');
  radio1.innerHTML += `1-2 владельца <input type="radio" name="condition" value="1-2 владельца"><br/>`;
  const radio2 = document.createElement('span');
  radio2.innerHTML += `3 и более владельца <input type="radio" name="condition" value="3 и более владельца"><br/>`;
  divC.appendChild(divCondition);
  divCondition.appendChild(pCondition);
  divCondition.appendChild(radio1);
  divCondition.appendChild(radio2);
}


function addPrice() {

  btnPrice.disabled = true;//делаем кнопку не активной

  photo.innerHTML += `<img class="img-avto" src="img/avto.png" alt="авто на продажу">`;//выводим фото

  brandAvto.innerHTML += `${сarBrand.value}`;// выводим марку авто в div

  if (brandAvto.textContent == "Audi") {//выводим модель авто в div
    nameAvto.innerHTML += `${сarModelAudi.value}`;
  } else if (brandAvto.textContent == "BMW") {
    nameAvto.innerHTML += `${сarModelBMW.value}`;
  } else if (brandAvto.textContent == "Hyundai") {
    nameAvto.innerHTML += `${сarModelHyunda.value}`;
  } else if (brandAvto.textContent == "Honda") {
    nameAvto.innerHTML += `${сarModelHonda.value}`;
  } else if (brandAvto.textContent == "Jeep") {
    nameAvto.innerHTML += `${сarModelJeep.value}`;
  } else if (brandAvto.textContent == "Mazda") {
    nameAvto.innerHTML += `${сarModelMazda.value}`;
  } else { nameAvto.innerHTML += `${сarModelToyota.value}`; }

  for (const fuel of fuels) { // выводим выбранное топливо в div
    if (fuel.checked) {
      fuelAvto.innerHTML += `${fuel.value}<br/>`;
      break;
    }
  }

  volumeAvto.innerHTML += `${volume.value}<br/>`; // выводим объем двигателя в div

  for (const condition of conditions) {
    if (condition.checked) {
      conditionAvto.innerHTML += `${condition.value}<br/>`;// выводим состояние авто в div
    }
  }

  const btnСlean = document.createElement('button');//создаем кнопку "очистить"
  btnСlean.textContent = "Очистить"
  сarPrice.appendChild(btnСlean);
  function cleanPrice() {//при нажатии на кнопку очищаем поля в div
    photo.textContent = "";
    nameAvto.textContent = "";
    brandAvto.textContent = "";
    fuelAvto.textContent = "";
    volumeAvto.textContent = "";;
    btnPrice.disabled = false;
    btnСlean.style.display = "none";
  }
  btnСlean.addEventListener('click', cleanPrice);


  document.querySelector('#car').reset();
}
btnPrice.addEventListener('click', addPrice);