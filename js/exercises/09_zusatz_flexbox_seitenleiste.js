import {
    classHasCorrectStyleValue,
    hasCorrectStyleValue,
    cssPaddingNamesLR,
    classCheckStyleSameValue,
    elCheckStyleSameValue,
    checkHorizontalDistanceBetweenElements
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "09_zusatz_flexbox_seitenleiste";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [

]

let tips = [
    {
        level: 1,
        title: "Generelle Hinweise",
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
    function () {
        return hasCorrectStyleValue("kopfzeile", "display", "flex");
    },
    function () {
        return hasCorrectStyleValue("kopfzeile", "flex-direction", "row");
    },
    function () {
        return hasCorrectStyleValue("kopfzeile", "justify-content", "space-between");
    },
    function () {
        return hasCorrectStyleValue("kopfzeile", "align-items", "center");
    },
    function () {
        return elCheckStyleSameValue("kopfzeile", cssPaddingNamesLR, "16px");
    },
    function () {
        return hasCorrectStyleValue("menu-items", "display", "flex");
    },
    function () {
        return hasCorrectStyleValue("menu-items", "flex-direction", "row");
    },
    function () {
        return checkHorizontalDistanceBetweenElements("menu-item-1", "menu-item-2", 16)
    },
    function () {
        return checkHorizontalDistanceBetweenElements("menu-item-2", "menu-item-3", 16)
    },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();