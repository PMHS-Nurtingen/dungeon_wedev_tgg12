import {
    classHasCorrectStyleValue, classCheckStyleSameValue, cssPaddingNames} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "07_navigation_seitenleiste";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [
    {
        title: "Text: Navigationsleisten in CSS",
        markdown: `/js/exercises/markdown/${exerciseID}/info.md`,
        contentIsMarkdown: true,
    },
]

let tips = [
    {
        level: 0,
        title: "Legende",
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
        return classHasCorrectStyleValue("container", "display", "flex");
    },
    function () {
        return classHasCorrectStyleValue("container", "flex-direction", "column");
    },
    function () {
        return classHasCorrectStyleValue("container", "justify-content", "flex-end");
    },
    function () {
        return classHasCorrectStyleValue("container", "align-items", "center");
    },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);
exerciseBase.init();

/* FLEXBOX INTERACTIVE */
document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin', '<link rel="stylesheet" href="/aufgaben/static/06_flexbox.css">');

const navEl = document.getElementsByTagName("nav")[0];
navEl.className = "wrapper";
const container = document.getElementsByClassName("container")[0];
const mainAxis = document.createElement('main-axis');
mainAxis.className = "arrow red-arrow";

const crossAxis = document.createElement('cross-axis');
crossAxis.className = "arrow green-arrow";

navEl.appendChild(mainAxis);
navEl.appendChild(crossAxis);


function init() {

    let containerDisplay = window.getComputedStyle(container).display;

    if (containerDisplay === "flex") {
        setAxisVisibility("visible");
        let flexDirection = window.getComputedStyle(container).flexDirection;

        const cHorizontalHeight = container.offsetWidth + 25;
        const cVerticalHeight = container.offsetHeight + 25;

        const cLeft = 0;
        const cRight = container.offsetWidth;
        const cBottom = 0;
        const cTop = container.offsetHeight;

        const cHorizontalCenter = container.offsetWidth / 2;
        const cVerticalCenter = container.offsetHeight / 2;

        switch (flexDirection) {
            case "column":
                setAxisArrow(mainAxis, cLeft - 10, cTop + 10, cVerticalHeight, 180);
                setAxisArrow(crossAxis, cLeft - 10, cTop + 10, cHorizontalHeight, 90);
                break;
            case "row-reverse":
                setAxisArrow(mainAxis, cRight + 10, cTop + 10, cHorizontalHeight, 270);
                setAxisArrow(crossAxis, cLeft - 10, cTop + 10, cVerticalHeight, 180);
                break;
            case "column-reverse":
                setAxisArrow(mainAxis, cLeft - 10, cBottom -10, cVerticalHeight, 0);
                setAxisArrow(crossAxis, cLeft - 10, cTop + 10, cHorizontalHeight, 90);
                break;
            default:
                setAxisArrow(mainAxis, cLeft - 10, cTop + 10, cHorizontalHeight, 90);
                setAxisArrow(crossAxis, cLeft - 10, cTop + 10, cVerticalHeight, 180);
                break;
        }
    } else {
        setAxisVisibility("hidden");
    }

}

function setAxisArrow(arrowEl, left, bottom, height, rotation) {
    arrowEl.style.height = height + "px";
    arrowEl.style.transform = `rotate(${rotation}deg)`;
    arrowEl.style.bottom = bottom + "px";
    arrowEl.style.left = left + "px";
}

function setAxisVisibility(visibility) {
    mainAxis.style.visibility = visibility;
    crossAxis.style.visibility = visibility;
}


window.onload = init;