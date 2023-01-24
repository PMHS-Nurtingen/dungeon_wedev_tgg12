import {
    classHasCorrectStyleValue,
    classCheckStyleSameValue,
    hasSelectorStyleValue,
    cssPaddingNames
} from '../exercise/validation_helper.js';
import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "12_grid_layout";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = []

let tips = [{
        level: 0,
        title: "Umspannen mehrere Zeilen/Spalten",
        markdown: `/js/exercises/markdown/${exerciseID}/info.md`,
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
    function() {
        return classHasCorrectStyleValue("wrapper", "display", "grid");
    },
    function() {
        return hasSelectorStyleValue(".wrapper", "grid-template-columns", "1fr 1fr 1fr 1fr");
    },
    function() {
        return hasSelectorStyleValue(".wrapper", "grid-template-rows", "100px 500px 200px 50px");
    },
    function() {
        return hasSelectorStyleValue("header", "grid-area", "1 / 1 / auto / 5");
    },
    function() {
        return hasSelectorStyleValue("header", "background-color", "lightblue");
    },
    function() {
        return hasSelectorStyleValue("nav", "grid-area", "2 / 1 / auto / auto");
    },
    function() {
        return hasSelectorStyleValue("nav", "background-color", "lightgray");
    },
    function() {
        return hasSelectorStyleValue("main", "grid-area", "2 / 2 / 4 / 4");
    },
    function() {
        return hasSelectorStyleValue("main", "background-color", "beige");
    },
    function() {
        return hasSelectorStyleValue("aside", "grid-area", "2 / 4 / auto / auto");
    },
    function() {
        return hasSelectorStyleValue("aside", "background-color", "lightcoral");
    },
    function() {
        return hasSelectorStyleValue("footer", "grid-area", "4 / 1 / auto / 5");
    },
    function() {
        return hasSelectorStyleValue("footer", "background-color", "lightgreen");
    },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();