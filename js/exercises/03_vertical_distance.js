import {
    checkVerticalDistanceBetweenElements,
    classCheckStyleSameValue,
    classCheckStyleValues,
    classHasCorrectStyleValue,
    cssBorderColorNames, cssBorderRadiusNames,
    cssBorderStyleNames,
    cssBorderWidthNames,
    cssMarginNames,
    cssPaddingNames, elCheckStyleSameValue, hasCorrectStyleValue, hasSelectorStyleValue
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "03_vertical_distance";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [
    {
        title: "Text: Vertikale Abstände",
        markdown: `/js/exercises/markdown/${exerciseID}/info.md`,
        contentIsMarkdown: true,
    },
]

let tips = [
    {
        level: 3,
        title: "Lösung anzeigen",
        markdown: `/js/exercises/markdown/${exerciseID}/tip_solution.md`,
        contentIsMarkdown: true,
    }
]

let validationFuncs = [
    function () {
        return checkVerticalDistanceBetweenElements("header", "main", 10);
    },
    function () {
        return checkVerticalDistanceBetweenElements("main", "footer", 10);
    },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();