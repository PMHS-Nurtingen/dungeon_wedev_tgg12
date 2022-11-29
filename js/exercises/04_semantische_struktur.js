import {
    classCheckStyleSameValue,
    classCheckStyleValues,
    classHasCorrectStyleValue,
    cssBorderColorNames, cssBorderRadiusNames,
    cssBorderStyleNames,
    cssBorderWidthNames,
    cssMarginNames,
    cssPaddingNames, elCheckStyleSameValue, elementsExist, hasCorrectStyleValue
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "04_semantische_struktur";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [
    {
        title: "Text: Semantische Struktur",
        markdown: `/js/exercises/markdown/${exerciseID}/info.md`,
        contentIsMarkdown: true,
    },
]

let tips = [
    {
        level: 1,
        title: "Was bedeutet semantische Struktur?",
        markdown: `/js/exercises/markdown/${exerciseID}/tip_1.md`,
        contentIsMarkdown: true,
    },
    {
        level: 2,
        title: "Benötigte HTML Elemente",
        markdown: `/js/exercises/markdown/${exerciseID}/tip_2.md`,
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
    function() { return elementsExist("header", 1, false); },
    function() { return elementsExist("h1", 1, false, document.getElementsByTagName("header")[0]); },
    function() { return elementsExist("main", 1, false); },
    function() { return elementsExist("footer", 1, false); },
    function() { return elementsExist("article", 2, true, document.getElementsByTagName("main")[0]); },
    function() { return elementsExist("h2", 2, true, document.getElementsByTagName("main")[0]); },
    function() { return elementsExist("p", 2, true, document.getElementsByTagName("main")[0]); },
    function() { return elementsExist("small", 1, false, document.getElementsByTagName("footer")[0]); },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();