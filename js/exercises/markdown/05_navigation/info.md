# 1. Navigationsleisten in CSS
Navigationsleisten werden häufig über ungeordnete Listen umgesetzt. Um dem Browser mitzuteilen, dass Navigationselemente verwendet werden, sollte eine solche Liste innerhalb des semantischen Navigationselements `<nav>` stehen. Beispiel:

### Beispiel

---

#### Code

```html
<nav>
    <ul>
        <li><a href="#">Element 1</a></li>
        <li><a href="#">Element 2</a></li>
        <li><a href="#">Element 3</a></li>
    </ul>
</nav>
```

#### Ausgabe

![Ausgabe Navigationsleisten Beispiel 1](js/exercises/markdown/05_navigation/imgs/bsp_1.png)

---

## 1.1 Punkte vor Listenelementen entfernen
Um den Punkt vor den Listenelementen zu entfernen kann man den **list-style-type** auf none setzen. Zusätzlich muss man anschließend margin und padding auf 0 setzen, da die Listenelemente sonst versetzt erscheinen.

### Beispiel

---

#### Code

```css
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
```

#### Ausgabe

![Ausgabe Navigationsleisten Beispiel 2](js/exercises/markdown/05_navigation/imgs/bsp_2.png)

---

## 1.2 Listen horizontal statt vertikal darstellen

Standardmäßig wird eine Liste vertikal dargestellt. Das liegt daran, dass `<li>`-Elemente **Blockelemente** sind und damit die gesamte Breite einnehmen. Stellt man diese auf **Inlineelemente** um, haben sie nebeneinander Platz und werden auch nebeneinander dargestellt.

Tipp: Man sollte den einzelnen `<li>`-Elementen zusätzlich Abstände zuweisen, damit die einzelnen Elemente noch unterscheidbar bleiben.

### Beispiel

---

Hinweis: Der Selektor `ul>li` bedeutet, dass alle `<li>` Elemente ausgewählt werden, die direkte Kindelemente von `<ul>` sind.

#### Code

```css
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

ul>li {
    display: inline;
    padding: 10px;
}
```

#### Ausgabe

![Ausgabe Navigationsleisten Beispiel 3](js/exercises/markdown/05_navigation/imgs/bsp_3.png)

---



## Weiterführende Links

- [https://wiki.selfhtml.org/wiki/HTML/Tutorials/Seitenstrukturierung](https://wiki.selfhtml.org/wiki/HTML/Tutorials/Seitenstrukturierung)
- [https://www.w3schools.com/html/html5_semantic_elements.asp](https://www.w3schools.com/html/html5_semantic_elements.asp)