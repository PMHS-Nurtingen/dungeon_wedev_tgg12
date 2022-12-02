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
        markdown: "/js/exercises/markdown/01_css_boxmodell/tip_solution.md",
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
        return classHasCorrectStyleValue("container", "width", "480px", 0);
    },
    function () {
        return classHasCorrectStyleValue("container", "height", "800px", 0);
    },
    function () {
        return classCheckStyleSameValue("container", cssBorderColorNames, "rgb(0, 0, 0)");
    },
    function () {
        return classCheckStyleSameValue("container", cssBorderWidthNames, "2px", 0);
    },
    function () {
        return classCheckStyleSameValue("container", cssBorderStyleNames, "solid");
    },
    function() {
        return classCheckStyleSameValue("container", cssBorderRadiusNames, "20px", 0)
    },
    function () {
        return classCheckStyleSameValue("container", cssPaddingNames, "20px", 0);
    },
    function () {
        return classCheckStyleValues("container", cssMarginNames, ["15px", "30px", "15px", "30px"], 0);
    },
    function () {
        return hasCorrectStyleValue("container3", "width", "584px", 0);
    }
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();