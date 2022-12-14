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
|помилка dayword API<br/>під час гри о 00:00|:x:|
|затримка word API - помилка 408|:x:|
|Unit тести|:x:|
|Висота .l-game-grid<br/>(layout.css) - розмір в'юпорта|:x:|
|Видалити всі console.log fn|:x:|

---

### <a name='style-ua'>Стилі</a>

Ми використовуємо методологію **SMACSS** з доповненням (animation.css та media.css) і CSS модулі. При роботі з:
+ `base.css` - використовуйте селектори тегів (button, div, *)
+ `layout.css` - використовуйте селектори класів з префіксом l- (.l-header, .l-content)
+ `modules.css` - використовуйте селектори класів та запотреби псевдокласи (.keyboard div, .keyboard div:last-child)
+ `state.css` - використовуйте селектори класів з префіксом is- (.is-hidden, .is-wrong, .is-right)
+ `theme.css` - використовуйте селектори класів та дочірніх елементів (.dark .modal, .color-blindness .is-right)
+ `animation.css` та `media.css` - використовуйте будь-які селектори

:page_with_curl: [Документація (EN)](http://smacss.com/book/)
:page_with_curl: [Блог (RU)](https://medium.com/@companjero/%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-smacss-e601222cd4eb)

Ідентифікатори використовуються для svg (з суфіксом SVG: vyrSVG, crossSVG) та специфічних елементів (клавіатура, мапа). В усіх інших випадках старайтеся уникати їх

**СSS Модулі** - це ізольовані стилі компонети, які не потребують анімацій, пошуку за допомогою .querySelector, медіа запитів та прямого зв'язку з `theme.css`.

Завжди варто зберігати баланс між модулями і звичайними стилями. Також розміщуйте СSS модулі в одній папці з компонентою (назва каталога + .module.css) та намагайтеся мінімізувати повторення стилів. 

---

### <a name='stucture-ua'>Структура</a>
#### Умовні позначення
? - необов'язково
/ - каталог
.tsx - компонента

```mermaid
graph TD;
    Page-->GridTemp.tsx;
    Page--?-->NextSeo.tsx;
    GridTemp.tsx-->ModalContainer.tsx;
    ModalContainer.tsx-->WinModal.tsx;
    ModalContainer.tsx-->LoseModal.tsx;
    ModalContainer.tsx-->SettingsModal.tsx;
    ModalContainer.tsx-->InfoModal.tsx;
    GridTemp.tsx-->children;
    children-->/Header;
    /Header-->HeaderTemp.tsx;
    children-->/Content;
    /Content-- або--> /About;
    /Content-- або--> /Development;
    /Content-- або--> /Game;
    /Content-- або--> /History;
    /Content-- або--> /Landing;
    /About--> About.tsx;
    /Development--> Development.tsx;
    /Game--> Game.tsx;
    /History--> History.tsx;
    /Landing--> Landing.tsx;
    About.tsx--> /Blocks;
    /Blocks--> LinkBlock.tsx;
    /Blocks--> PhotoBlock.tsx;
    /Blocks--> TextBlock.tsx;
    Development.tsx--> /Blocks`;
    /Blocks`--> /ApiBlock.tsx;
    /Blocks`--> /ExBlock.tsx;
    Game.tsx--> /Field;
    Game.tsx--> /Keyboard;
    Game.tsx--> /Timer;
    /Field--> Field.tsx;
    /Keyboard--> Keyboard.tsx;
    /Timer--> TimerTemp.tsx;
    Landing.tsx--> /GameStart;
    Landing.tsx--> /GameLand;
    /GameStart--> GameStart.tsx;
    GameStart.tsx--> Map.tsx;
    Map.tsx--> Center.tsx;
    Map.tsx--> East.tsx;
    Map.tsx--> West.tsx;
    /GameLand--> GameLand.tsx;

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
+ [Stucture](#stucture-us)
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
|dayword API error<br/>while playing at 00:00|:x:|
|word API response delay - 408 error|:x:|
|Unit tests|:x:|
|.l-game-grid (layout.css)<br/>height - viewport size|:x:|
|Delete all console.log fn|:x:|

---

### <a name='style-us'>Styles</a>

We use the **SMACSS** methodology with the addition (animation.css). When working with:
+ `base.css` - use tag selectors (button, div, *)
+ `layout.css` - use class selectors with the prefix l- (.l-header, .l-content)
+ `modules.css` - use class selectors and use pseudo-classes (.keyboard div, .keyboard div:last-child)
+ `state.css` - use class selectors with the prefix is- (.is-hidden, .is-wrong, .is-right)
+ `theme.css` - use selectors of classes and child elements (.dark .modal, .color-blindness .is-right)
+ `animation.css` and `media.css` - use any selectors

:page_with_curl: [Docs (EN)](http://smacss.com/book/)
:page_with_curl: [Blog (RU)](https://medium.com/@companjero/%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-smacss-e601222cd4eb)

Identifiers are used for svg (with SVG suffix: vyrSVG, crossSVG) and individual elements (keyboard, map). In all other cases, try to avoid them.

**CSS Modules** are isolated component styles that do not require animations, search using .querySelector, media queries and direct communication with `theme.css`.

Always keep a balance between modules and regular styles. Also, place CSS modules in the same folder as the component (directory name + .module.css) and try to minimize duplicate styles.

---

### <a name='stucture-us'>Stucture</a>

#### Legend
? - optional
/ - directory
.tsx - component

```mermaid
graph TD;
    Page-->GridTemp.tsx;
    Page--?-->NextSeo.tsx;
    GridTemp.tsx-->ModalContainer.tsx;
    ModalContainer.tsx-->WinModal.tsx;
    ModalContainer.tsx-->LoseModal.tsx;
    ModalContainer.tsx-->SettingsModal.tsx;
    ModalContainer.tsx-->InfoModal.tsx;
    GridTemp.tsx-->children;
    children-->/Header;
    /Header-->HeaderTemp.tsx;
    children-->/Content;
    /Content-- or--> /About;
    /Content-- or--> /Development;
    /Content-- or--> /Game;
    /Content-- or--> /History;
    /Content-- or--> /Landing;
    /About--> About.tsx;
    /Development--> Development.tsx;
    /Game--> Game.tsx;
    /History--> History.tsx;
    /Landing--> Landing.tsx;
    About.tsx--> /Blocks;
    /Blocks--> LinkBlock.tsx;
    /Blocks--> PhotoBlock.tsx;
    /Blocks--> TextBlock.tsx;
    Development.tsx--> /Blocks`;
    /Blocks`--> /ApiBlock.tsx;
    /Blocks`--> /ExBlock.tsx;
    Game.tsx--> /Field;
    Game.tsx--> /Keyboard;
    Game.tsx--> /Timer;
    /Field--> Field.tsx;
    /Keyboard--> Keyboard.tsx;
    /Timer--> TimerTemp.tsx;
    Landing.tsx--> /GameStart;
    Landing.tsx--> /GameLand;
    /GameStart--> GameStart.tsx;
    GameStart.tsx--> Map.tsx;
    Map.tsx--> Center.tsx;
    Map.tsx--> East.tsx;
    Map.tsx--> West.tsx;
    /GameLand--> GameLand.tsx;

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
