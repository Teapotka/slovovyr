[:ukraine:](#ua) [:us:](#us)
# <a name='ua'>Внесок до проєкту</a>
:yellow_heart:Насамперед вельми дякуємо за ваш час та роботу:blue_heart: 

### Навігація
+ [Старт](#start-ua)
+ [Завдання](#task-ua)
+ [Стилі](#style-ua)
+ [Структура](#stucture-ua)
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

### <a name='task-ua'>Завдання</a>
Тут будуть розміщуватися завдання з плином часу. 
| Завдання    |  Виконано  |
| ----------- |   :----:   |
|Пристосувати vyr.svg<br/>та logo.svg до розмірів<br/>(мінімум 320х500) екрану.|:x:|
|Оптимізувати стилі.|:x:|
|~~Зробити функцію зміни теми<br/>(світла/темна/дальтонізм).~~|:heavy_check_mark:|
|~~Рефакторинг функції toggle<br/>(components/Content/Landing/<br/>Map.tsx). Бажано використати<br/>state.css та classnames.~~|:heavy_check_mark:|
|Видалити console.log()|:x:|
|~~Реалізувати запис інформації в localstorage~~|:heavy_check_mark:|
|Вдосконалити API|:x:|
|Оптимізувати алгоритм внесення/очищення/підтвердження (components/Game/Field/)|:x:|
|таймер до нового слова|:x:|
|~~пауза гри та виграш/програш~~|:heavy_check_mark:|
|затримка api більше 3сек - відміна|:x:|

---

### <a name='style-ua'>Стилі</a>

Ми використовуємо методологію SMACSS з доповненням (animation.css). При роботі з:
+ base.css - використовуйте селектори тегів (button, div, *)
+ layout.css - використовуйте селектори класів з префіксом l- (.l-header, .l-content)
+ modules.css - використовуйте селектори класів та запотреби псевдокласи (.keyboard div, .keyboard div:last-child)
+ state.css - використовуйте селектори класів з префіксом is- (.is-hidden, .is-wrong, .is-right)
+ theme.css - використовуйте селектори класів та дочірніх елементів (.dark .modal, .color-blindness .is-right)
+ animation.css - використовуйте будь-які селектори

:page_with_curl: [Документація (EN)](http://smacss.com/book/)
:page_with_curl: [Блог (RU)](https://medium.com/@companjero/%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-smacss-e601222cd4eb)

Ідентифікатори використовуються для svg (з суфіксом SVG: vyrSVG, crossSVG) та специфічних елементів (клавіатура, мапа). В усіх інших випадках старайтеся уникати їх

---

### <a name='stucture-ua'>Структура</a>

```mermaid
graph TD;
    Page-->Provider;
    Provider-->Grid.tsx;
    Grid.tsx-->ModalContainer.tsx;
    Grid.tsx-->children;
    children-->/Header;
    /Header-- or-->Header.tsx;
    /Header-- or-->HeaderGame.tsx;
    children-->/Content;
    /Content-- or--> Landing.tsx;
    /Content-- or--> Game.tsx;

```

---

### <a name='test-ua'>Тестування</a>

Намагайтесь писати тести там, де це можливо.<br/> Структура: 
```
describe('/*Назва компоненту*/', () => {
    test('should /*перевірка фунціоналу*/'){
        /*тестування*/
    }
})
```
:page_with_curl: [Документація](https://jestjs.io/docs/getting-started)<br/>
Розміщуйте тести в одній папці разом з компонентою.

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
"Fix header aligment"
2) Контекст:
    + В чому була проблема
    + Які додаткові бібліотеки ви використали
    + Яких методологій або практик ви дотримувалися

---
---

# <a name='us'>Project contribution</a>
:yellow_heart:First of all, thank you in advance for your time and work:blue_heart:

### Navigation
+ [Start](#start-us)
+ [Task](#task-us)
+ [Style](#style-us)
+ [Структура](#stucture-ua)
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

### <a name='task-us'>Task</a>
Tasks will be posted here over time.

| Task        |  Completed |
| ----------- |   :----:   |
|Adapt vyr.svg and logo.svg<br/> to size screen(minimum 320x500).|:x:|
|Optimize styles.|:x:|
|~~Make a theme change feature<br/>(light/dark/color-blindness).~~|:heavy_check_mark:|
|~~Refactoring of the toggle function<br/>(components/Content/Landing/<br/>Map.tsx). It is recommended to use<br/>state.css and classnames.~~|:heavy_check_mark:|
|Delete console.log()|:x:|
|~~Implement the recording of information in the localstorage~~|:heavy_check_mark:|
|Improve API|:x:|
|Optimize input/clear/submit algorithms(components/Game/Field/)|:x:|
|timer to new word|:x:|
|~~game pause and win/loss~~|:heavy_check_mark:|
|api delay more than 3 seconds - cancellation|:x:|

---

### <a name='style-us'>Styles</a>

We use the SMACSS methodology with the addition (animation.css). When working with:
+ base.css - use tag selectors (button, div, *)
+ layout.css - use class selectors with the prefix l- (.l-header, .l-content)
+ modules.css - use class selectors and use pseudo-classes (.keyboard div, .keyboard div:last-child)
+ state.css - use class selectors with the prefix is- (.is-hidden, .is-wrong, .is-right)
+ theme.css - use selectors of classes and child elements (.dark .modal, .color-blindness .is-right)
+ animation.css - use any selectors

:page_with_curl: [Docs (EN)](http://smacss.com/book/)
:page_with_curl: [Blog (RU)](https://medium.com/@companjero/%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-smacss-e601222cd4eb)

Identifiers are used for svg (with SVG suffix: vyrSVG, crossSVG) and individual elements (keyboard, map). In all other cases, try to avoid them

---

### <a name='stucture-us'>Stucture</a>

```mermaid
graph TD;
    Page-->Provider;
    Provider-->Grid.tsx;
    Grid.tsx-->ModalContainer.tsx;
    Grid.tsx-->children;
    children-->/Header;
    /Header-- or-->Header.tsx;
    /Header-- or-->HeaderGame.tsx;
    children-->/Content;
    /Content-- or--> Landing.tsx;
    /Content-- or--> Game.tsx;

```

---

### <a name='test-us'>Testing</a>
Try to write tests wherever possible.<br/>Structure:
```
describe('/*Component name*/', () => {
    test('should /*functionality check*/'){
        /*testing*/
    }
})
```
:page_with_curl: [Docs](https://jestjs.io/docs/getting-started)<br/>Place the tests in the same folder as the component.

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
