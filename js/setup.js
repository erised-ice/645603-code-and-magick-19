'use strict';

var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер']; /* Массив с именами волшебников */
var WIZARD_COAT_COLORS = ['rgb(101,137,164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215,210,55)', 'rgb(0,0,0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup'); /* Находим окно настроек в доме */
userDialog.classList.remove('hidden'); /* Показываем окно настроек */

var similarListElement = userDialog.querySelector('.setup-similar-list'); /* находим в окне настроек блок с похожими персонажами */
var similarWizardTemplate = document.querySelector('#similar-wizard-template') /* находим в блоке похожих персонажей шаблон похожих персонажей */
  .content                                                                             /* ????? находим его контент */
  .querySelector('.setup-similar-item');                                      /* В контенте шаблона похожих персонажей находим элемент одного персонажа */


var wizards = [                                            /* Создаем массив персонажей */
  {
    name: WIZARD_NAMES[0],                          /* создаем объект одного персонажа - имя из массива имен и цвет плаща из массива цветов плащей */
    coatColor: WIZARD_COAT_COLORS[0],
    eyesColor: WIZARD_EYES_COLORS[0]
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: WIZARD_COAT_COLORS[1],
    eyesColor: WIZARD_EYES_COLORS[1]
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: WIZARD_COAT_COLORS[2],
    eyesColor: WIZARD_EYES_COLORS[2]
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: WIZARD_COAT_COLORS[3],
    eyesColor: WIZARD_EYES_COLORS[3]
  }
];

var renderWizard = function (wizard) {                    /* Создаем функцию создания волшебника. Параметр - волшебник */
  var wizardElement = similarWizardTemplate.cloneNode(true); /* Создаем переменную для ???? */

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;  /* Указываем, куда мы пишем имя волшебника и куда цвет */
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment(); /* создаем фрагмент ??? */
for (var i = 0; i < wizards.length; i++) {            /* цикл, количество итераций которого будет зависеть от длина массива волшебников */
  fragment.appendChild(renderWizard(wizards[i])); /* добавляем к фрагменту элементы, создаваемые функцией рендер визард */
}
similarListElement.appendChild(fragment); /* Добавляем в окно похожих волшебников созданные выше фрагменты */
userDialog.querySelector('.setup-similar').classList.remove('hidden'); /* Показываем в окне настройки персонажа блок похожих волшебников  */
