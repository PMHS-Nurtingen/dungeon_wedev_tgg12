# Lösung

## Klasse: seitenleiste bearbeiten:
```css
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
```

## Fields Überschrift bearbeiten:
1. Div um Überschrift + Links, dieses zum Flexbox-Container machen
2. Damit beide Links mit `space-between` nach ganz rechts kommen nochmal einen Container um diese bauen.
3. Mit Space between verschieben, zwischen den beiden links z.B. über margin-left bei remove-all-link einen Abstand einbauen

### HTML Code
```html 
<div id="ueberschriftsfeld">
    <h1 id="ueberschrift-1">Fields</h1>
    <div>
        <a id="add-all-link" href="#">Add all</a>
        <a id="remove-all-link" href="#">Remove all</a>
    </div>
</div>
```

### CSS für #ueberschriftsfeld
```css
display: flex;
align-items: baseline;
justify-content: space-between;
```

### CSS für #remove-all-link
```css
margin-left: 12px;
```