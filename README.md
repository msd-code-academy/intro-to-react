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
```
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
```
h1 {
  color: blue;
}
```

### Javascript
```
document.getElementsByTagName('input')[0].value = 'abc'
```
or
```
$('input').val('abc')
```

> Ukázka 0: 00-no-react/index.html

---

## React - Hello World @honza 30 mins

* JavaScript library for building user interfaces
* Combines JavaScript and HTML => JSX
* Components
  * Main building blocks
  * Several ways how to create components

*class*
```
class Search extends React.Component {
  render() {
    return (
      <div>Search</div>
    );
  }
}
```

*function*
```
function Search() {
  return (
    <div>Search</div>
  );
}
```
```
const Search => () {
  return (
    <div>Search</div>
  );
}
```

* Components nesting

```

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



> Ukázka 1: 01-hello-world/index.html
> - Add few static search results shown in a `<table></table>`

> Cvičení 1:
> - Přesunout `<input>` do zvlastni komponenty SearchInput
> - Přesunout 2 tlačítka `<button>` do zvlastni komponenty SearchButtons

---

## Props @kuba 30 mins

* K čemu jsou propsy a jak je používat
* Základní použití CSS stylů
  * class / className

> Cvičení 2:
> - Predani hledaneho textu z SearchInput do App
> - Zpracovani callbacku z SearchButtons

## State @honza 30 mins

## Shared State @kuba 30 mins

## React Router @honza 30 mins

## React Create App @kuba 30 mins

## Zmínit

* Základní použití CSS stylů
* Použití linterů
* Testování
* Pro import `index.jsx` souborů stačí uvést složku, ve které ten soubor je