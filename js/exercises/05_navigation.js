import {
    classCheckStyleSameValue,
    classCheckStyleValues,
    classHasCorrectStyleValue,
    cssBorderColorNames,
    cssBorderRadiusNames,
    cssBorderStyleNames,
    cssBorderWidthNames,
    cssMarginNames,
    cssPaddingNames,
    elCheckStyleSameValue,
    elementsExist,
    hasCorrectStyleValue,
    hasSelectorStyleValue,
    navListContainsElements,
    NavListItem
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "05_navigation";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [
    {
        title: "Text: Navigationsleisten in CSS",
        markdown: `/js/exercises/markdown/${exerciseID}/info.md`,
        contentIsMarkdown: true,
    },
]

let tips = [
    {
        level: 1,
        title: "Benötigte Selektoren",
        markdown: `/js/exercises/markdown/${exerciseID}/tip_1.md`,
        contentIsMarkdown: true,
    },
    {
        level: 3,
        title: "Lösung anzeigen",
        markdown: `/js/exercises/markdown/${exerciseID}/tip_solution.md`,
        contentIsMarkdown: true,
    }
]

let validationFuncs = [
    function() { return elementsExist("nav", 1, false); },
    function() { return elementsExist("ul", 1, false, document.getElementsByTagName("nav")[0]); },
    function() { return elementsExist("li", 3, false, document.getElementsByTagName("ul")[0]); },
    function () {
        return classHasCorrectStyleValue("menu", "background-color", "rgb(230, 230, 230)");
    },
    function () {
        return classHasCorrectStyleValue("menu", "height", "61px", 0);
    },
    function () {
        return classHasCorrectStyleValue("menu", "list-style-type", "none");
    },
    function () {
        return classCheckStyleSameValue("menu", cssPaddingNames, "0px", 0);
    },
    function () {
        return classCheckStyleSameValue("menu", cssMarginNames, "0px", 0);
    },
    function () {
        return hasSelectorStyleValue(".menu > li", "padding", "20px");
    },
    function () {
        return hasSelectorStyleValue(".menu > li", "display", "inline");
    },
    function() { return navListContainsElements("hauptmenu", [new NavListItem("#", "Startseite"),
        new NavListItem("#", "Dashboard"),
        new NavListItem("#", "Meine Kurse")]); }

]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();