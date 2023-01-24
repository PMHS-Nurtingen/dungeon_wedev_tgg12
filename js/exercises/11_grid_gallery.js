import {
    classHasCorrectStyleValue,
    classCheckStyleSameValue,
    hasSelectorStyleValue,
    cssPaddingNames
} from '../exercise/validation_helper.js';
import { Exercise } from '../exercise/exercise_base.js';

let exerciseID = "11_grid_gallery";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [{
    title: "Grid Grundlagen",
    markdown: `/js/exercises/markdown/${exerciseID}/info.md`,
    contentIsMarkdown: true,
}, ]

let tips = [{
        level: 0,
        title: "Legende",
        markdown: `/js/exercises/markdown/${exerciseID}/tip_1.md`,
        contentIsMarkdown: true,
    },
    {
        level: 1,
        title: "Horizontal & vertikal verteilen",
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
    function() {
        return classHasCorrectStyleValue("wrapper", "display", "grid");
    },
    function() {
        return hasSelectorStyleValue(".wrapper", "grid-template-columns", "1fr 1fr 1fr");
    },
    function() {
        return hasSelectorStyleValue(".wrapper", "grid-template-rows", "1fr 1fr 1fr");
    },
    function() {
        return hasSelectorStyleValue(".a_1", "grid-column-start", "1");
    },
    function() {
        return hasSelectorStyleValue(".a_1", "grid-column-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".a_1", "grid-row-start", "1");
    },
    function() {
        return hasSelectorStyleValue(".a_1", "grid-row-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".a_2", "grid-column-start", "2");
    },
    function() {
        return hasSelectorStyleValue(".a_2", "grid-column-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".a_2", "grid-row-start", "1");
    },
    function() {
        return hasSelectorStyleValue(".a_2", "grid-row-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".a_3", "grid-column-start", "3");
    },
    function() {
        return hasSelectorStyleValue(".a_3", "grid-column-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".a_3", "grid-row-start", "1");
    },
    function() {
        return hasSelectorStyleValue(".a_3", "grid-row-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".b_1", "grid-column-start", "1");
    },
    function() {
        return hasSelectorStyleValue(".b_1", "grid-column-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".b_1", "grid-row-start", "2");
    },
    function() {
        return hasSelectorStyleValue(".b_1", "grid-row-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".b_2", "grid-column-start", "2");
    },
    function() {
        return hasSelectorStyleValue(".b_2", "grid-column-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".b_2", "grid-row-start", "2");
    },
    function() {
        return hasSelectorStyleValue(".b_2", "grid-row-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".b_3", "grid-column-start", "3");
    },
    function() {
        return hasSelectorStyleValue(".b_3", "grid-column-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".b_3", "grid-row-start", "2");
    },
    function() {
        return hasSelectorStyleValue(".b_3", "grid-row-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".c_1", "grid-column-start", "1");
    },
    function() {
        return hasSelectorStyleValue(".c_1", "grid-column-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".c_1", "grid-row-start", "3");
    },
    function() {
        return hasSelectorStyleValue(".c_1", "grid-row-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".c_2", "grid-column-start", "2");
    },
    function() {
        return hasSelectorStyleValue(".c_2", "grid-column-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".c_2", "grid-row-start", "3");
    },
    function() {
        return hasSelectorStyleValue(".c_2", "grid-row-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".c_3", "grid-column-start", "3");
    },
    function() {
        return hasSelectorStyleValue(".c_3", "grid-column-end", "auto");
    },
    function() {
        return hasSelectorStyleValue(".c_3", "grid-row-start", "3");
    },
    function() {
        return hasSelectorStyleValue(".c_3", "grid-row-end", "auto");
    },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();