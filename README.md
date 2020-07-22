# Vytváření webových aplikací v Reactu

## HTML + CSS + JavaScript ~= Webová aplikace

*stranka1.html*
```
<html>
  <head>
    <title>Testovaci stranka</title>
  </head>
  <body>
    <div className="App">
      <header className="App-header">
        logo, navigation, ...
      </header>
      <div>
        <div>
          Search: <input value="abc"/>
          <button>Go</button>
        </div>
        <div>
          Results for abc:
          <div>
            <h2>Result 1</h2>
            Long description </div>
        </div>
      </div>
      <footer>
        MIT License
      </footer>
    </div>
  </body>
</html>
```

```
document.getElementsByTagName('input')[0].value = 'cde'
```
or
```
$('input').val('cde')
```

Can we do better?

## React - Hello World @honza 30 mins

* React Components (class)
* JSX
* Class and Functional components

* Cvičení

## Props @kuba 30 mins

## State @honza 30 mins

## Shared State @kuba 30 mins

## React Router @honza 30 mins

## React Create App @kuba 30 mins