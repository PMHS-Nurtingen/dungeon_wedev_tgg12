import {
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

let exerciseID = "02_zentrieren_durch_abstand";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [
    {
        title: "Text: Zentrieren durch Abstände",
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
        return hasSelectorStyleValue("container", "margin-left", "auto");
    },
    function () {
        return hasSelectorStyleValue("container", "margin-right", "auto");
    },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();