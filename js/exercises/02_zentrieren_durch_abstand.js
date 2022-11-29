import {
    classCheckStyleSameValue,
    classCheckStyleValues,
    classHasCorrectStyleValue,
    cssBorderColorNames, cssBorderRadiusNames,
    cssBorderStyleNames,
    cssBorderWidthNames,
    cssMarginNames,
    cssPaddingNames, elCheckStyleSameValue, hasCorrectStyleValue
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "02_zentrieren_durch_abstand";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [
    {
        title: "Text: CSS Boxmodell",
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
        return classHasCorrectStyleValue("container", "width", "480px");
    },
    function () {
        return classHasCorrectStyleValue("container", "height", "800px");
    },
    function () {
        return classCheckStyleSameValue("container", cssBorderColorNames, "rgb(0, 0, 0)");
    },
    function () {
        return classCheckStyleSameValue("container", cssBorderWidthNames, "2px");
    },
    function () {
        return classCheckStyleSameValue("container", cssBorderStyleNames, "solid");
    },
    function() {
        return classCheckStyleSameValue("container", cssBorderRadiusNames, "20px")
    },
    function () {
        return classCheckStyleSameValue("container", cssPaddingNames, "20px");
    },
    function () {
        return classCheckStyleValues("container", cssMarginNames, ["15px", "30px", "15px", "30px"]);
    },
    function () {
        return hasCorrectStyleValue("container3", "width", "584px");
    }
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();