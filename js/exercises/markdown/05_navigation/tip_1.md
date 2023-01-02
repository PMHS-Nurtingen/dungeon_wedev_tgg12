# Benötigte Selektoren

## 1. Klassenselektor `menu`
In dieser Aufgabe soll der ungeordneten Liste die Klasse *menu* zugewiesen werden,:

1. Dem `<ul>`-Element Element das entsprechende `class`-Attribut hinzufügen.

```html
<ul class="menu">
```

2. Den Klassenselektor dafür schreiben.
```css
.menu {
    ...
}
```

## 2. Kombinierter Selektor für Listenelemente in `menu`
Weitergehend sollen alle `<li>` Elemente ausgewählt werden, die direkte Kindelemente von Elementen mit der Klasse *menu* sind. Kindelemente gibt man in folgender Form an:

Elternselektor **>** Kindselektor

Im konkreten Fall verwenden wir den

1. Elternselektor `.menu`
2. Kindselektor `li`

```css
.menu>li {
    ...
}
```
```html
<!-- Listenelemente werden ausgewählt -->
<ul class="menu">
    <li><a href="#">Element 1</a></li>
    <li><a href="#">Element 2</a></li>
    <li><a href="#">Element 3</a></li>
</ul>

<!-- 
Listenelemente werden nicht ausgewählt, weil das Elternelement der 
<li>-Elemente nicht die Klasse "menu" hat.  
-->
<ul>
    <li><a href="#">Element 1</a></li>
    <li><a href="#">Element 2</a></li>
    <li><a href="#">Element 3</a></li>
</ul>
```

## Weiterführende Links
- [https://wiki.selfhtml.org/wiki/CSS/Selektoren/Klassenselektor](https://wiki.selfhtml.org/wiki/CSS/Selektoren/Klassenselektor)
- [https://www.w3schools.com/cssref/sel_class.php](https://www.w3schools.com/cssref/sel_class.php)