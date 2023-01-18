# 1. Flexbox Grundlagen

## Container zum Flex-Container machen
Um ein Element als Flexbox-Container zu definieren muss dessen `display` Eigenschaft auf `flex` gesetzt werden. **Wichtig**: `display: flex` muss immer gesetzt sein, ansonsten funktionieren die anderen Flexbox-Eigenschaften nicht!
```css
.container {
    display: flex;
}
```

## Ausrichtung der Flexbox ändern

Teste diese Werte für die Eigenschaft `flex-direction`:
- row
- column

```css
.container {
    display: flex;
    flex-direction: column;
}
```

## Werte für justify-content

Mögliche Werte:
- flex-start
- flex-end
- center
- space-around
- space-between

```css
.container {
    ...
    justify-content: flex-start;
}
```

## Werte für align-items;

Mögliche Werte:
- flex-start
- flex-end
- center
- stretch

```css
.container {
    ...
    align-items: flex-start;
}
```

## Weiterführende Links

- [https://lehre.idh.uni-koeln.de/lehrveranstaltungen/wintersemester-2022-2023/it-zertifikat-der-phil.fak-advanced-web-basics-2/web-technologien-1/css/flexbox/#:~:text=Standard%2DEigenschaften%20der%20Flexbox%3A,%2Ddirection%3A%20dreht%20die%20Hauptachse](https://lehre.idh.uni-koeln.de/lehrveranstaltungen/wintersemester-2022-2023/it-zertifikat-der-phil.fak-advanced-web-basics-2/web-technologien-1/css/flexbox/#:~:text=Standard%2DEigenschaften%20der%20Flexbox%3A,%2Ddirection%3A%20dreht%20die%20Hauptachse)