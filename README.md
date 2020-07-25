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
    - Krátké cvičení

---

## HTML + CSS + JavaScript ~= Webová aplikace ## Honza

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

> Ukázka 1: 00-no-react/index.html

---

## React - Hello World @honza 30 mins

* React Components (class)
* JSX
* Class and Functional components

* Cvičení

## Props @kuba 30 mins

* K čemu jsou propsy a jak je používat
* Základní použití CSS stylů

## State @honza 30 mins

## Shared State @kuba 30 mins

## React Router @honza 30 mins

## React Create App @kuba 30 mins

## Zmínit

* Základní použití CSS stylů
* Použití linterů
* Testování
* Pro import `index.jsx` souborů stačí uvést složku, ve které ten soubor je