# Vytváření webových aplikací v Reactu

- Začátek: 18:05
- Přestávka (10 minut): 19:30 - 19:40
- Struktura
  - Intro
  - 6 navazujících bloků
  - Každý blok
    - ~= 30 minut
    - Teoretický úvod
    - Praktická ukázka
    - Krátké samostatné cvičení

---

## HTML + CSS + JavaScript ~= Webová aplikace @Honza

- Webové stránky a aplikace se skládají z několika částí
  - HTML - obsah
  - CSS - Vzhled
  - JavaScript - interaktivita/změny

### HTML

```html
<html>
  <head>
    <title>Testovací stránka</title>
  </head>
  <body>
    <div>
      <header>
        Logo
      </header>
      <div>
        Obsah
      </div>
      <footer>
        MIT License
      </footer>
    </div>
  </body>
</html>
```

### CSS

```css
h1 {
  color: blue;
}
```

### Javascript

```js
document.getElementsByTagName('input')[0].value = 'abc'
```

or

```js
$('input').val('abc')
```

> Ukázka 0: [00-no-react/index.html](./src/exercises/00-no-react/index.html)

---

## React - Hello World @honza 30 mins

- JavaScriptová knihovna pro tvorbu uživatelských rozhraní
- Kombinuje JavaScript a HTML => JSX
- Komponenty
  - Hlavní stavební bloky
  - Lze je vytvářet dvěma hlavními způsoby

*pomocí tříd - tzv. "class component"*

```js
class Search extends React.Component {
  render() {
    return (
      <div>Search</div>
    );
  }
}
```

*pomocí funkcí - tzv. "function component"*

```js
function Search() {
  return (
    <div>Search</div>
  );
}
```

V Reactu se často používá alternativní způsob zápisu funkce, a to pomocí šipkové notace ("arrow function").
Tento kód je (až na malé rozdíly, ktefé pro teď ignorujeme) ekvivalentí zápisu výše.

```js
const Search => () {
  return (
    <div>Search</div>
  );
}
```

* Zanořování (skládání) komponent

```js
const SearchButton => () {
  return (
    <button><i className="search-icon" />Search</button>
  );
}

const Search => () {
  return (
    <input placeholder="search" />
    <SearchButton />
  );
}

```

> Ukázka 1: [01-hello-world/App.jsx](./src/exercises/01-hello-world/App.jsx)
> - Add few static search results shown in a `<table></table>`

> Cvičení 1:
> - Extrahuj `<input>` do samostatné komponenty `SearchInput`
> - Přesuň 2 tlačítka `<button>` do zvláštní komponenty `SearchButtons`

---

## Props @kuba 30 mins

### K čemu jsou propsy a jak je používat

Dobrým zvykem v Reactu je mít co nejmenší komponenty, které přepoužíváme na různých místech a skládáme
je do sebe. Začneme-li ale vytvářet obecnější komponenty, začneme také potřebovat způsob, jak komponentám
předat informace.

K tomu v Reactu používáme tzv. "propsy" - jsou to informace, které komponentě řeknou, co má vykreslit.

Řekněme například, že chceme vytvořit seznam studentů ve třídě i s obrázky a odkazy na sociální sítě.

```jsx
class StudentsList extends React.Component {
  render() {
    return (
      <div className="students-list">
        <div className="students-list__item-wrapper">
          <img className="students-list__profile-image" src="./public/james-bond.jpg" />
          <a href="https://www.friendface.com/james-bond" className="students-list__friendface-link">
            <div className="students-list__name">James Bond</div>
          </a>
        </div>
        <div className="students-list__item-wrapper">
          <img className="students-list__profile-image" src="./public/bruce-wayne.jpg" />
          <a href="https://www.friendface.com/bruce-wayne" className="students-list__friendface-link">
            <div className="students-list__name">Bruce Wayne</div>
          </a>
        </div>
        <div className="students-list__item-wrapper">
          <img className="students-list__profile-image" src="./public/lara-croft.jpg" />
          <a href="https://www.friendface.com/lara-croft" className="students-list__friendface-link">
            <div className="students-list__name">Lara Croft</div>
          </a>
        </div>
      </div>
    );
  }
}
```

Můžeme si všimnout, že v **kódu se hodně opakujeme** - to je obvykle známka, že je třeba extrahovat opakující
se kód do komponenty a tu přepoužít.

> **DRY (Don't Repeat Yourself)** je jedním ze základních principů programování. Ten říká, že bychom se v kódu
> neměli opakovat - jakmile duplikujeme nějaký kód, znamená to, že jakoukoli jeho úpravu budeme také muset
> provést vícekrát. Náš kód se tak stává špatně udržitelným a náchylným k chybám. Duplikaci logiky bychom se měli
> vyhýbat jejím extrahováním do samostaných funkcí nebo komponent.
> ![Don't Repeat Yourself](./public/dry.png)

Rozhodneme se tedy vytvořit komponentu `<Student />`, které ale budeme potřebovat předat vždy tři informace:
jméno, link profilového obrázku a odkaz na sociální síť. To provedeme pomocí propsů:

```jsx
class StudentsList extends React.Component {
  render() {
    return (
      <div className="students-list">
        <Student name="James Bond" profileImage="./public/james-bond.jpg" friendfacePath="/james-bond" />
        <Student name="Bruce Wayne" profileImage="./public/bruce-wayne.jpg" friendfacePath="/bruce-wayne" />
        <Student name="Lara Croft" profileImage="./public/lara-croft.jpg" friendfacePath="/lara-croft" />
      </div>
    );
  }
}
```

To je mnohem přehlednější. Zbývá už jen implementovat komponentu `<Student />` a použít v ní poskytnuté informace:

```jsx
class Student extends React.Component {
  render() {
    // V class komponentě jsou propsy přístupné přes this.props a lze je jen číst, nejde je přepisovat
    const {name, profileImage, friendfacePath} = this.props;

    // Stojí za povšimnutí: proměnné používáme ve složených závorkách
    return (
      <div className="students-list__item-wrapper">
        <img className="students-list__profile-image" src={profileImage} />
        <a href={`https://www.friendface.com/${friendfacePath}`} className="students-list__friendface-link">
          <div className="students-list__name">{name}</div>
        </a>
      </div>
    );
  }
}
```

> **Destrukturování** je způsob, jakým lze v moderním JavaScriptu definovat proměnnou a zároveň jí
> přiřadit vlastnost nějakého objektu. Například
>
> ```js
> const color = shape.color;
> const size = shape.size;
> ```
>
> je to samé, jako
>
> ```js
> const {color, size} = shape;
> ```
>
> Destruturovat lze i pole:
>
> ```js
> const myFavoriteNumber = myFavoriteNumbers[0];
> const mySecondFavoriteNumber = myFavoriteNumbers[1];
> ```
>
> je to samé, jako
>
> ```js
> const [myFavoriteNumber, mySecondFavoriteNumber] = myFavoriteNumbers;
> ```
>
> **Template literal** nebo také "template string" je alternativní způsob zadávání textových řetězců v moderním
> JavaScriptu pomocí zpětných uvozovek. Uvnitř těchto uvozovek lze jednoduše používat hodnoty proměnných, je však
> třeba je zabalit do `${}`
>
> ```js
> const name = "Fantomas";
> const message = `Byl jsem zde, ${name}!`;
> ```

### Předávání funkcí

Pomocí propsů můžeme předat jakýkoli typ. Je velice časté, že dceřinné komponentě předáme funkci, kterou chceme,
aby ta komponenta v určitou chvíli vykonala - tzv. "callback".

```jsx
class Student extends React.Component {
  render() {
    const {name, onClick} = this.props;

    // Stojí za povšimnutí - definujeme anonymní funkci inline
    return (
      <div className="students-list__item-wrapper" onClick={() => onClick(name)}>
        <img className="students-list__profile-image" src={profileImage} />
        <div className="students-list__name">{name}</div>
      </div>
    );
  }
}

class StudentsList extends React.Component {
  // Stojí za povšimnutí - používáme šipkovou notaci
  handleStudentClick = (name) => {
    console.log(name);
  }

  render() {
    return (
      <div className="students-list">
        <Student name="James Bond" onClick={this.handleStudentClick} />
        <Student name="Bruce Wayne" onClick={this.handleStudentClick} />
        <Student name="Lara Croft" onClick={this.handleStudentClick} />
      </div>
    );
  }
}
```

### Bonus: children

V Reactu je `children` speciální propsa, kterou nepředáváme standardním způsobem, ale React nám
ji předá automaticky - jedná se o komponenty, které jsou v té naší zabalené.

```jsx
<StudentsList>
  <div>Student 1</div>
  <div>Student 1</div>
  <div>Student 1</div>
</StudentList>
```

```jsx
class StudentsList extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <div className="students-list">
        {children}
      </div>
    );
  }
}
```

> Cvičení 2:
>
> - Predani hledaneho textu z SearchInput do App
> - Zpracovani callbacku z SearchButtons

Poznámky:

- Nesmíme zapomínat na importování Reactu v JSX souborech, i když tuto proměnnou explicitně nepoužíváme
- Každá komponenta vytvořená jako třída (class component) musí mít metodu `render`
- CSS lze vkládat mnoha způsoby. Nejjednodušší je přímý import css modulů. Pozor na `class` vs `className`

---

## State @honza

* "Memory" in which we can save variable values
  * Form values
  * State of dynamic elements - open/close, hidden/visible
  * Information about anything dynamic
* Components re-render when state changes
* !!! Always change the whole state object, not only its values !!!
* Several ways how to use state:


*class constructor*

```
class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: 'abc'
    };
  }

  render() {
    return (
      <div>Search {this.state.searchText}</div>
    );
  }
}
```

*class field*

```
class Search extends React.Component {

  state = {
    searchText: 'abc'
  }

  render() {
    return (
      <div>Search {this.state.searchText}</div>
    );
  }
}
```

*hook*

```
const Search => () {

  const [searchText, setSearchText] = useState('abc');

  return (
    <div>Search {searchText}</div>
  );
}
```

> Ukázka 3: 03-state/App.jsx
> - TBD

> Cvičení 3:
> - TBD

---

## Shared State @kuba 30 mins

---

## React Router @honza 30 mins

---

## React Create App @kuba 30 mins

## Zmínit

* Základní použití CSS stylů
* Použití linterů
* Testování
* Pro import `index.jsx` souborů stačí uvést složku, ve které ten soubor je