# Lösung

## CSS
```css
.menu {
    background-color: hsl(0, 0%, 90%);
    padding: 0;
    margin: 0;
    height: 61px;
    list-style: none;
}

.menu > li {
    padding: 20px;
    display: inline;
}
```

## HTML

```html
<nav>
    <ul class="menu">
        <li>Startseite</li>
        <li>Dashboard</li>
        <li>Meine Kurse</li>
    </ul>
</nav>
```