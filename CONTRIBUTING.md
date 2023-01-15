[:ukraine:](#ua) [:us:](#us)
# <a name='ua'>Внесок до проєкту</a>
:yellow_heart:Насамперед вельми дякуємо за ваш час та роботу:blue_heart:

### Навігація

+ [Старт](#start-ua)
+ [Стилі](#style-ua)
+ [Структура](#structure-ua)
+ [Тестування](#test-ua)
+ [Шаблони](#template-ua)

---

### <a name='start-ua'>Старт</a>

1) Зробіть fork проєкту в GitHub
2) Склонуйте репозиторій командою `git clone https://github.com/Ваш_Нікнейм/slovovyr.git`
3) Введіть команду `npm install` або `yarn install`
4) Запустіть локальний сервер командою `npm run dev`
5) Зробіть свою гілку - `git checkout -b feature`
6) Внесіть зміни в код
7) Відправте коригування в репозиторій командою `git push -u origin feature`
8) Відправте PR згідно з [шаблоном](#template-ua)
9) Готово! :tada:

---

### <a name='style-ua'>Стилі</a>

Ми використовуємо методологію **SMACSS** з доповненням (animation.sass та media.sass). При роботі з:
+ `base.sass` - використовуйте селектори тегів (button, div, *)
+ `layout.sass` - використовуйте селектори класів з префіксом l- (.l-header, .l-content)
+ `modules.sass` - використовуйте селектори класів та запотреби псевдокласи (.keyboard div, .keyboard div:last-child)
+ `state.sass` - використовуйте селектори класів з префіксом is- (.is-hidden, .is-wrong, .is-right)
+ `theme.sass` - використовуйте селектори класів та дочірніх елементів (.dark .modal, .colorBlind .is-right)
+ `animation.sass` та `media.sass` - використовуйте будь-які селектори

:page_with_curl: [Документація (EN)](http://smacss.com/book/)
:page_with_curl: [Блог (RU)](https://medium.com/@companjero/%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-smacss-e601222cd4eb)

Ідентифікатори використовуються для svg (з суфіксом SVG: vyrSVG, crossSVG) та специфічних елементів (клавіатура, таймер). В усіх інших випадках старайтеся уникати їх

Старайтеся зберігати макети, розміри та інші специфічні параметри в `layout.sass`. Повторювані класи, позиціонування, відступи - в `modules.sass`.

---

### <a name='structure-ua'>Структура</a>

#### Ідея

Структурна одиниця проєкту - модуль. Він втілює у собі ідею ізольованості та абстракції. Кожний модуль несе в собі мінімум (а в ідеалі зовсім не має) логічного функціоналу, обробки данних, внутрішнього стану, доступу до Redux сховища. Усі необхідні CSS класи, функції та обробники подій передаються через `props`. Також модулі не залежать один від одного.<br/>
Для прив'язування логіки до модуля використовуються контролери - класи з інкапсульованим функціоналом. Інкапсуляція забезпечується завдяки приватним методам і полям, геттерам. Ціль інкапсуляції - забезпечити закритість системи від втручань, мутацій.

#### Структура директорій

Компоненти програми знаходяться в папці `/components`, де є кожна з дочірніх директорій має специфічний зміст:
+ в `/Container`, `/Header` знаходяться відповідно контейнер контенту і заголовок. Вони елементи загального макету сайту та отримують в `props` інші модулі для відображення.
+ в `/Grid` знаходиться головний елемент макету, що є батьківським по відношенню до попередніх. Він отримує їх у вигляді вкладених елементів (`children`).
+ в `/Modules` знаходяться вищезгадані модулі. Вони мають подібну структуру і повертають `jsx` розмітку.
+ в `/Modal` знаходяться модальні вікна, їх макети, елементи. Вони різняться від модулів меншим ступенем абстракції.

Контролери знаходяться в однойменній папці `/controllers`. Вони представлені `.ts` файлами.

Усі інші директорії описані в `README.md`

#### Найменування файлів та фукціоналу

+ ***/assets***
  + Для найменування файлів директорії `/assets` використовується суфікс SVG (TimerSVG, EnterSVG). Так само називаються і головні функції, що вертають `jsx` розмітку. `id`, `data-testid` теж, але з малої літери.
+ ***/сomponents***
  + Для найменування файлів директорій `/сomponents/Container`, `/сomponents/Grid`, `/сomponents/Header` використовується суфікс Component (GridComponent, HeaderComponent). `data-testid` теж, але з малої літери.
  + Для найменування файлів директорії `/components/Modal`, що стосуються макету використовується префікс Modal + назва елемента макета. Елементи контенту модальних вікон іменуються зворотним порядком: назва елемента + суфікс Modal. Для `data-testid` використовується назва елемента з малої літери + суфікс Modal.
  + Для найменування файлів директорії `/components/Modules` використовується просто назва елемента (Timer, Keyboard), але для `data-testid` - назва елемента з малої літери + суфікс Module.
+ ***/controllers***
  + Для найменування файлів директорії `/controllers` використовується назва елемента + суфікс Controller.
+ ***/data***
  +  Для найменування функцій файлу `LocalStorage.ts` використовується назва завдання (read, write) + об'єкт обробки (Data, Region) + суфікс FromLS для процесів зчитування і ToLS для процесів запису.
+ ***/redux***
  + Найменування відбувається відповідно до принципів описаних в документації Redux Toolkit.
+ ***/styles***
  + Файли стилів знаходяться в директорії `/styles/SMACSS` та іпортуються до загального файлу `style.sass`. Найменування відбувається відповідно до принципів описаних вище ([Стилі](#style-ua)).
+ ***/tests***
  + Фунціонал, що тестується має аналогічну структуру папок як і структура всього проєкту. Для найменування файлів використовується назва батьківської папки + _ + назва функціоналу.

---

### <a name='test-ua'>Тестування</a>

Кожен нововведений функціонал повинен мати тести.<br/> Структура:
```
describe('/*Назва фунціоналу + Назва батьківської папки*/', () => {
    test('should /*перевірка фунціоналу*/'){
        /*тестування*/
    }
})
```
:page_with_curl: [Документація](https://jestjs.io/docs/getting-started)<br/>
Тести знаходяться в спеціальній директорії `/tests`

---

### <a name='template-ua'>Шаблони</a>

#### Issue
1) Контекст
    + Суть проблеми
    + Актуальність
    + Умови виникнення
2) Процес <br/>Поетапно розписаний процес виникнення:
    1) Користувач видаляє дані
    2) З'являється модальне вікно
    3) Користувач скасовує дію
    4) Дані видаляються
3) Можливе виправлення <br/>Ваші будь-які ідеї та здогадки

#### Pull
1) Заголовок <br/>Що виправлено:
   "Fix header alignment"
2) Контекст:
    + В чому була проблема
    + Які додаткові бібліотеки ви використали
    + Яких методологій або практик ви дотримувалися

---

# <a name='us'>Project contribution</a>
:yellow_heart:First of all, thank you in advance for your time and work:blue_heart:

### Navigation

+ [Start](#start-us)
+ [Style](#style-us)
+ [Structure](#structure-us)
+ [Testing](#test-us)
+ [Templates](#template-us)

---

### <a name='start-us'>Start</a>

1) Make a "fork" of the project in GitHub
2) Clone the repository with the command `git clone https://github.com/Your_Nickname/slovovyr.git'
3) Enter `npm install` or `yarn install` command
4) Start the local server with `npm run dev` command
5) Make your branch - `git checkout -b feature`
6) Make changes to the code
7) Push the tweaks to the repository with `git push -u origin feature` command
8) Send PR according to [template](#template-us)
9) Done! :tada:

---

### <a name='style-us'>Styles</a>

We use the **SMACSS** methodology with the addition (animation.sass and media.sass). When working with:
+ `base.sass` - use tag selectors (button, div, *)
+ `layout.sass` - use class selectors with the prefix l- (.l-header, .l-content)
+ `modules.sass` - use class selectors and use pseudo-classes (.keyboard div, .keyboard div:last-child)
+ `state.sass` - use class selectors with the prefix is- (.is-hidden, .is-wrong, .is-right)
+ `theme.sass` - use selectors of classes and child elements (.dark .modal, .colorBlind .is-right)
+ `animation.sass` and `media.sass` - use any selectors

:page_with_curl: [Docs (EN)](http://smacss.com/book/)
:page_with_curl: [Blog (RU)](https://medium.com/@companjero/%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-smacss-e601222cd4eb)

Identifiers are used for svg (with SVG suffix: vyrSVG, crossSVG) and individual elements (keyboard, map). In all other cases, try to avoid them.

Try to store layouts, sizes, and other specific settings in `layout.sass`. Duplicate classes, positioning, padding - in `modules.sass`.

---

### <a name='structure-us'>Structure</a>

#### Idea

The structural unit of the project is a module. It embodies the idea of isolation and abstraction. Each module carries a minimum (and ideally does not have at all) logical functionality, data processing, internal state, access to Redux storage. All necessary CSS classes, functions and event handlers are passed through `props`. Also, the modules do not depend on each other.<br/>
To bind the logic to the module, controllers are used - classes with encapsulated functionality. Encapsulation is provided by private methods and fields, getters. The purpose of encapsulation is to ensure that the system is closed from interventions and mutations.

#### Directory structure

The program components are located in the `/components` folder, where each of the child directories has a specific content:
+ in `/Container`, `/Header` are the content container and the header, respectively. They are elements of the overall layout of the site and receive in `props` other modules for display.
+ in `/Grid` is the main element of the layout, which is the parent of the previous ones. It receives them in the form of nested elements (`children`).
+ in `/Modules` are the aforementioned modules. They have a similar structure and return `jsx` markup.
+ in `/Modal` there are modal windows, their layouts, elements. They differ from modules by a lower degree of abstraction.

The controllers are located in the `/controllers` folder of the same name. They are represented by `.ts` files.

All other directories are described in `README.md`

#### Name of files and function

+ ***/assets***
    + The suffix SVG (TimerSVG, EnterSVG) is used to name files in the `/assets` directory. The same is the name of the main functions that return the `jsx` markup. `id`, `data-testid` too, but with a lowercase first letter.
+ ***/components***
    + The suffix Component (GridComponent, HeaderComponent) is used to name files in the `/components/Container`, `/components/Grid`, and `/components/Header` directories. `data-testid` too, but with a lowercase letter.
    + The Modal prefix + the name of the layout element is used to name the files of the `/components/Modal` directory related to the layout. Content elements of modal windows are named in reverse order: element name + Modal suffix. For `data-testid`, the name of the element with a lowercase letter + Modal suffix is used.
    + To name the files of the `/components/Modules` directory, just the name of the element (Timer, Keyboard) is used, but for `data-testid` - the name of the element with a lowercase letter + the suffix Module.
+ ***/controllers***
    + To name the files of the directory `/controllers`, the element name + suffix Controller is used.
+ ***/data***
    + Task name (read, write) + processing object (Data, Region) + suffix FromLS for reading processes and ToLS for writing processes are used to name the functions of the `LocalStorage.ts` file.
+ ***/redux***
    + Naming follows the principles described in the Redux Toolkit documentation.
+ ***/styles***
    + The style files are located in the directory `/styles/SMACSS` and are imported into the common file `style.sass`. Naming occurs in accordance with the principles described above ([Styles](#style-us)).
+ ***/tests***
    + The functional being tested has a similar folder structure as the structure of the entire project. The name of the parent folder + _ + the name of the function is used to name the files.

---

### <a name='test-us'>Testing</a>

Each newly introduced functionality must have tests.<br/>Structure:
```
describe('/*Name of the functional + Name of the parent folder*/', () => {
    test('should /*functionality check*/'){
        /*testing*/
    }
})
```
:page_with_curl: [Docs](https://jestjs.io/docs/getting-started)<br/>
Tests are located in a special directory `/tests`

---

### <a name='template-us'>Templates</a>

#### Issue
1) Context
    + The essence of the problem
    + Topicality
    + Occurrence conditions
2) Process<br/>The process of emergence is described step by step:
    1) User deletes data
    2) A modal window appears
    3) The user cancels the action
    4) Data is deleted
3) Possible fix<br/>Any ideas and guesses you have

#### Pull
1) Title <br/>What is fixed:
   "Fix header alignment"
2) Context:
    + What was the problem?
    + What additional libraries did you use?
    + What methodologies or practices did you follow?