# 1. Flexbox Grundlagen

## Container zum Flex-Container machen

```css
.container {
    display: flex;
}
```
## Ausrichtung der Hauptachse ändern

```css
.container {
    ...
    flex-direction: column;
}
```

## Verteilung der flex-items entlang der HAUPTACHSE

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

## Verteilung der flex-items entlang der KREUZACHSE

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

- [https://wiki.selfhtml.org/wiki/HTML/Tutorials/Seitenstrukturierung](https://wiki.selfhtml.org/wiki/HTML/Tutorials/Seitenstrukturierung)
- [https://www.w3schools.com/html/html5_semantic_elements.asp](https://www.w3schools.com/html/html5_semantic_elements.asp)