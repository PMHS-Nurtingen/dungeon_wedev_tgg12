# Lösung

Für die Lösung muss folgender CSS Klasse die Regeln für den Grid-Container zugewiesen werden.

## CSS Klasse: wrapper
```css
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 100px 500px 200px 50px;
```

Sieh dir noch einmal an, wie sich die Werte für `grid-template-rows` und `grid-template-columns` auswirken, wenn du sie veränderst. Vor allem auch wie sich die Bereiche definieren lassen.

## CSS Typselektor für: main
```css
grid-column: 2/4;
grid-row: 2/4;
background-color: beige;
```