const сarPrice = document.querySelector('.сar-price');//основной блок для вывода рассчетов div
const btnPrice = document.querySelector('.btn');//кнопка "рассчить стоимость"


const photo = document.createElement('div');// контейнер для фото

const brandAvto = document.createElement('h2'); //контейнер для марки авто
const nameAvto = document.createElement('h2');// контейнер для модели авто
const fuelAvto = document.createElement('span'); // контейнер для топлива
const volumeAvto = document.createElement('span'); // контейнер для объёма двигателя
const conditionAvto = document.createElement('span'); // контейнер для состояние автомобиля
const conditionAvtoOwner = document.createElement('span'); // контейнер для количества владельцев
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
сarPrice.appendChild(conditionAvtoOwner);
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

const divCondition = document.createElement('div');// радиокнопки с количеством владельцев
divCondition.className = 'carList';
divC.appendChild(divCondition);
const pCondition = document.createElement('p');
pCondition.textContent = "Количество владельцев:";
const radio1 = document.createElement('span');
radio1.innerHTML += `1-2 владельца <input type="radio" name="condition1" value="1-2 владельца"><br/>`;
const radio2 = document.createElement('span');
radio2.innerHTML += `3 и более владельца <input type="radio" name="condition1" value="3 и более владельца"><br/>`;
divCondition.appendChild(pCondition);
divCondition.appendChild(radio1);
divCondition.appendChild(radio2);

const conditions = document.querySelectorAll('input[name="condition"]'); // радиокнопки с состоянием авто

const payments = document.querySelectorAll('input[name="payment"]'); // радиокнопки с выбором оплаты

const mail = document.querySelector('input[name="email"]'); // поле для ввода почты

const priceModelAudi = {
  'Audi 90': 1200000,
  'Audi Coupе': 1500000,
  'Audi Cabriolet': 1700000,
  'Audi V8': 1800000,
  'Audi A4': 1600000,
  'Audi Q3': 1700000
};
const priceModelBMW = {
  'BMW 4': 1200000,
  'BMW 5': 1400000,
  'BMW E34': 1500000,
  'BMW F01': 1600000,
  'BMW F10': 1700000,
  'BMW G11': 1800000,
  'BMW X2': 1900000,
  'BMW Z': 2000000,
  'BMW Z4': 2200000
};
const priceModelHyundai = {
  'Hyundai Accent': 1200000,
  'Hyundai Atos': 1300000,
  'Hyundai Casper': 1400000,
  'Hyundai Excel': 1500000,
  'Hyundai Getz': 1600000,
  'Hyundai Kona': 1700000,
  'Hyundai Solaris': 1800000,
  'Hyundai Tucson': 1700000
};
const priceModelHonda = {
  'Honda Accord': 1200000,
  'Honda Crosstour': 1300000,
  'Honda Grace': 1400000,
  'Honda Jazz': 1500000,
  'Honda Legend': 1600000,
  'Honda Logo': 1500000,
  'Honda Pilot': 1600000,
  'Honda Stream': 1700000
};
const priceModelJeep = {
  'Jeep Grand Commander': 1800000,
  'Jeep Commander (XK)': 1900000,
  'Jeep Cherokee (KL)': 2000000,
  'Jeep Liberty': 2200000
};
const priceModelMazda = {
  'Mazda 2': 1500000,
  'Mazda 3': 1600000,
  'Mazda CX 5': 1700000,
  'Mazda CX 50': 1800000
};
const priceModelToyota = {
  'Toyota Tercel': 1500000,
  'Toyota SAI': 1600000,
  'Toyota Rush': 1700000,
  'Toyota Probox': 1800000,
  'Toyota Camry': 2000000,
  'Toyota Corolla': 1800000
};
const fuelA = {
  'Бензин': +350000,
  'Дизель': -150000,
  'Газ': +450000,
  'Электричество': +350000,
}



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

function conditionOwners() { // удаляем класс carList (display: none;) c радиокнопок с кол-вом владельцев
  divCondition.classList.remove('carList');
}
function conditionOwnersClose() { // добавляем carList (display: none;) обратно
  divCondition.classList.add('carList');
}



function addPrice() {

  btnPrice.disabled = true;//делаем кнопку не активной

  photo.innerHTML += `<img class="img-avto" src="img/avto.png" alt="авто на продажу">`;//выводим фото

  brandAvto.innerHTML += `${сarBrand.value}`;// выводим марку авто в div

  if (brandAvto.textContent == "Audi") {//выводим модель авто в div
    nameAvto.innerHTML += `Модель: ${сarModelAudi.value}`;
  } else if (brandAvto.textContent == "BMW") {
    nameAvto.innerHTML += `Модель: ${сarModelBMW.value}`;
  } else if (brandAvto.textContent == "Hyundai") {
    nameAvto.innerHTML += `Модель: ${сarModelHyunda.value}`;
  } else if (brandAvto.textContent == "Honda") {
    nameAvto.innerHTML += `Модель: ${сarModelHonda.value}`;
  } else if (brandAvto.textContent == "Jeep") {
    nameAvto.innerHTML += `Модель: ${сarModelJeep.value}`;
  } else if (brandAvto.textContent == "Mazda") {
    nameAvto.innerHTML += `Модель: ${сarModelMazda.value}`;
  } else { nameAvto.innerHTML += `Модель: ${сarModelToyota.value}`; }



  let Fuel = 0;


  for (const fuel of fuels) { // выводим выбранное топливо в div
    if (fuel.checked) {
      fuelAvto.innerHTML += `Топливо: ${fuel.value}<br/>`;
    }
    if (fuel.value == 'Бензин') {
      Fuel = `${fuelA['Бензин']}`;
    }
    if (fuel.value == 'Дизель') {
      Fuel = `${fuelA['Дизель']}`;
    }
    if (fuel.value == 'Газ') {
      Fuel = `${fuelA['Газ']}`;
    }
    if (fuel.value == 'Электричество') {
      Fuel = `${fuelA['Электричество']}`;
    }
  }




  if (brandAvto.textContent == "Audi") {//выводим сумму авто в div
    price.innerHTML += priceModelAudi[`${сarModelAudi.value}`] + (+Fuel);
  } else if (brandAvto.textContent == "BMW") {
    price.innerHTML += priceModelBMW[`${сarModelBMW.value}`] + (+Fuel);
  } else if (brandAvto.textContent == "Hyundai") {
    price.innerHTML += priceModelHyundai[`${сarModelHyunda.value}`] + (+Fuel);
  } else if (brandAvto.textContent == "Honda") {
    price.innerHTML += priceModelHonda[`${сarModelHonda.value}`] + (+Fuel);
  } else if (brandAvto.textContent == "Jeep") {
    price.innerHTML += priceModelJeep[`${сarModelJeep.value}`] + (+Fuel);
  } else if (brandAvto.textContent == "Mazda") {
    price.innerHTML += priceModelMazda[`${сarModelMazda.value}`] + (+Fuel);
  } else {
    price.innerHTML += priceModelToyota[`${сarModelToyota.value}`] + (+Fuel);
  }




  volumeAvto.innerHTML += `Объем двигателя: ${volume.value} литра<br/>`; // выводим объем двигателя в div

  for (const condition of conditions) {
    if (condition.checked) {
      conditionAvto.innerHTML += `Состояние авто: ${condition.value}<br/>`;// выводим состояние авто в div
    }
  }

  const conditions1 = document.querySelectorAll('input[name="condition1"]'); // радиокнопки кол-во владельцев
  for (const condition1 of conditions1) {
    if (condition1.checked) {
      conditionAvtoOwner.innerHTML += `${condition1.value}<br/>`;// выводим количество владельцев в div
    }
  }


  for (const payment of payments) {
    if (payment.checked) {
      paymentAvto.innerHTML += `Способ оплаты: ${payment.value}<br/>`;// выводим способ оплаты в div
    }
  }

  email.innerHTML += `Ваша почта: ${mail.value}<br/>`; //выводим майл пользователя





  const btnСlean = document.createElement('button');//создаем кнопку "очистить"
  btnСlean.textContent = "Очистить"
  сarPrice.appendChild(btnСlean);
  function cleanPrice() {//при нажатии на кнопку очищаем поля в div
    photo.textContent = "";
    nameAvto.textContent = "";
    brandAvto.textContent = "";
    fuelAvto.textContent = "";
    volumeAvto.textContent = "";
    conditionAvto.textContent = "";
    conditionAvtoOwner.textContent = "";
    paymentAvto.textContent = "";
    email.textContent = "";
    price.textContent = "";
    btnPrice.disabled = false;
    btnСlean.style.display = "none";
  }
  btnСlean.addEventListener('click', cleanPrice);


  document.querySelector('#car').reset();
}
btnPrice.addEventListener('click', addPrice);