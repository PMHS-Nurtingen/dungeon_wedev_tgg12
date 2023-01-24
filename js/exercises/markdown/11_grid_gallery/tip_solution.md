# Lösung

Für die Lösung müssen folgender CSS Klassen und den IDs der Bilder Regeln zugewiesen werden.

## CSS Klasse: wrapper
```css
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
```

Sieh dir noch einmal an, wie sich die Werte für `grid-template-rows` und `grid-template-columns` auswirken, wenn du sie veränderst.

## CSS Klasse: a_1
```css
grid-column: 1;
grid-row: 1;
```