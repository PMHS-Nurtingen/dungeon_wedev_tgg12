import {
    classHasCorrectStyleValue,
    hasCorrectStyleValue,
    cssPaddingNamesLR,
    classCheckStyleSameValue,
    elCheckStyleSameValue,
    checkHorizontalDistanceBetweenElements,
    cssPaddingNames,
    checkVerticalDistanceBetweenElements,
    checkHorizontalDistanceBetweenElementsBetween
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "10_seitenleiste_feedback_button";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [

]

let tips = [
    {
        level: 1,
        title: "Feedback geben nach unten schieben",
        markdown: `/js/exercises/markdown/${exerciseID}/tip_1.md`,
        contentIsMarkdown: true,
    },
    {
        level: 2,
        title: "Fields Überschrift bearbeiten",
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
    function () { return elCheckStyleSameValue("seitenleiste", cssPaddingNames, "20px", 0); },
    function () { return elCheckStyleSameValue("felder", cssPaddingNames, "0px", 0); },
    function () { return hasCorrectStyleValue("seitenleiste", "display", "flex"); },
    function () { return hasCorrectStyleValue("seitenleiste", "flex-direction", "column"); },
    function () { return hasCorrectStyleValue("seitenleiste", "justify-content", "space-between"); },
    function () { return checkHorizontalDistanceBetweenElementsBetween("add-all-link", "remove-all-link", 10, 20, 0)},
    function () { return checkHorizontalDistanceBetweenElementsBetween("ueberschrift-1", "add-all-link", 280, 350, 0)}
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();