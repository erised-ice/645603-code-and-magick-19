'use strict';

// Константы

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101,137,164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215,210,55)', 'rgb(0,0,0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Селектора

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var setupSimilar = userDialog.querySelector('.setup-similar');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');

// Функции

var showDomElement = function (element) {
  element.classList.remove('hidden');
};

var randomArrayItem = function (array) {
  var randomInteger = Math.random() * array.length;

  return array[Math.floor(randomInteger)];
};

var createNames = function (firstNamesArray, surnamesArray) {
  var names = [];

  for (var i = 0; i < firstNamesArray.length; i++) {
    names[i] = randomArrayItem(firstNamesArray) + ' ' + randomArrayItem(surnamesArray);
  }

  return names;
};

var createSimilarCharacters = function (names, cloth, eyes, length) {
  var characters = [];

  for (var i = 0; i < length; i++) {
    characters[i] = {name: randomArrayItem(names), coatColor: randomArrayItem(cloth), eyesColor: randomArrayItem(eyes)};
  }

  return characters;
};

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizardsArray, container) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsArray.length; i++) {
    fragment.appendChild(createWizard(wizardsArray[i]));
  }

  container.appendChild(fragment);
};

setupOpen.addEventListener('click', function () {
  showDomElement(userDialog);
});

setupClose.addEventListener('click', function () {
  userDialog.classList.add('hidden');
});

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// Вызовы функций

showDomElement(userDialog);

var wizardNames = createNames(WIZARD_FIRST_NAMES, WIZARD_SURNAMES);
var wizards = createSimilarCharacters(wizardNames, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS, 4);

renderWizards(wizards, similarListElement);
showDomElement(setupSimilar);
