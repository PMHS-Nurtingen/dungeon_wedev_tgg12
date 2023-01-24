# Grid-Bereiche

Wenn du den Container festgelegt und die größen der `grid-template-columns`und `grid-template-rows` definiert hast musst du noch die Bereiche festlegen in denen sich die Grid-Items befinden sollen.

Ein Item kann dabei auch mehrere Zeilen oder Spalten umspannen. 
```css
.c_2_3 {
    grid-row: 3;
    grid-column: 2/4;
}
```
Würde man das auf ein Bild aus Level11 anwenden, so würde dieses die Spalten 2 und 3 umspannen. Nummeriert werden die Spalten nach ihrem Anfangsrand. Lies dir den weiterführenden Link durch und betrachte die Beispiele genauer, dann wird es klar.

## Weiterführende Links

- [https://www.mediaevent.de/css/grid.html](https://www.mediaevent.de/css/grid.html)