import {
    classCheckStyleSameValue,
    classCheckStyleValues,
    classHasCorrectStyleValue,
    cssBorderColorNames,
    cssBorderStyleNames,
    cssBorderWidthNames,
    cssMarginNames,
    cssPaddingNames
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "01_css_box_modell";


let instructions = {
    content: "/js/exercises/markdown/01_css_boxmodell/description.md",
    isMarkdown: true
}

let infos = [
    {
        title: "Text: CSS Boxmodell",
        markdown: "/js/exercises/markdown/01_css_boxmodell/info.md",
        contentIsMarkdown: true,
    },
    {
        title: "Video: CSS Boxmodell",
        content: `<iframe title="Einführung CSS: Boxmodell" src="https://zumvideo.de/videos/embed/3a96e98b-17cd-434b-8cbc-c5a4acc6b6cf" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups" width="560" height="315"></iframe>`,
        weblinks: [
            "https://wiki.selfhtml.org/wiki/CSS/Tutorials/Hintergrund/Gestaltung_mit_CSS",
            "https://wiki.selfhtml.org/wiki/CSS/Tutorials/Boxmodell"
        ],
        contentIsHTML: true,
    },
]

let tips = [
    {
        level: 1,
        title: "Klassen Style bearbeiten",
        markdown: "/js/exercises/markdown/01_css_boxmodell/tip_1.md",
        contentIsMarkdown: true,
    },
    {
        level: 2,
        title: "Benötigte Elemente und Styles",
        markdown: "/js/exercises/markdown/01_css_boxmodell/tip_2.md",
        contentIsMarkdown: true,
    },
    {
        level: 3,
        title: "Lösung anzeigen",
        markdown: "/js/exercises/markdown/01_css_boxmodell/tip_solution.md",
        contentIsMarkdown: true,
    }
]

let validationFuncs = [
    function () {
        return classHasCorrectStyleValue("box", "background-color", "rgb(255, 0, 0)");
    },
    function () {
        return classHasCorrectStyleValue("box", "width", "200px");
    },
    function () {
        return classHasCorrectStyleValue("box", "height", "200px");
    },
    function () {
        return classCheckStyleSameValue("box", cssBorderColorNames, "rgb(0, 0, 255)");
    },
    function () {
        return classCheckStyleSameValue("box", cssBorderWidthNames, "20px");
    },
    function () {
        return classCheckStyleSameValue("box", cssBorderStyleNames, "solid");
    },
    function () {
        return classCheckStyleSameValue("box", cssPaddingNames, "20px");
    },
    function () {
        return classCheckStyleValues("box", cssMarginNames, ["15px", "30px", "15px", "30px"]);
    },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();