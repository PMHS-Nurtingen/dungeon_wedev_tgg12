import {
    classHasCorrectStyleValue, getFailResultObj, getSuccessResultObj, or} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "06_flexbox_testwiese";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [
    {
        title: "Text: Flexbox Grundlagen",
        markdown: `/js/exercises/markdown/${exerciseID}/info.md`,
        contentIsMarkdown: true,
    },
    {
        title: "Video: Flexbox Grundlagen",
        content: `<iframe title="CSS: Flexbox Basics" src="https://zumvideo.de/videos/embed/b4fcd754-c3b8-43ab-8130-267b1cd11f0a" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups" width="560" height="315" frameborder="0"></iframe>`,
        contentIsHTML: true,
    },
]

let tips = [
    {
        level: 0,
        title: "Legende",
        markdown: `/js/exercises/markdown/${exerciseID}/tip_1.md`,
        contentIsMarkdown: true,
    },
]

function getContainerEl() {
    let containerEls = document.getElementsByClassName("container");
    if (containerEls.length != 1) {
        return null
    }
    return containerEls[0];
}

function setContainerPropertiesValueTried() {
    let containerEl = getContainerEl();
    if (containerEl == null) {
        return
    }
    let computedStyle = window.getComputedStyle(containerEl, null);
    localStorage.setItem("display" + computedStyle.display, true);
    localStorage.setItem("flex-direction" + computedStyle.flexDirection, true);
}

function checkContainerPropertyValueTried(propertyName, value) {
    let containerEl = getContainerEl();
    if (containerEl == null) {
        return getFailResultObj("In dieser Aufgabe ist nur ein Element mit der Klasse `container` erlaubt.")
    }
    let tried = localStorage.getItem(propertyName + value);
    console.log(tried)
    if (tried) {
        return getSuccessResultObj();
    }
    return getFailResultObj(`Probiere für ${propertyName} den Wert ${value} aus.`)
}


let validationFuncs = [
    function () {
        return classHasCorrectStyleValue("container", "display", "flex");
    },
    function () {
        setContainerPropertiesValueTried();
        return checkContainerPropertyValueTried("flex-direction", "row");
    },
    function () {
        return checkContainerPropertyValueTried("flex-direction", "column");
    },
    function () {return or([
            checkContainerPropertyValueTried("justify-content", "center"),
            checkContainerPropertyValueTried("align-items", "center")
    ])},
    function () {return or([
        checkContainerPropertyValueTried("justify-content", "flex-end"),
        checkContainerPropertyValueTried("align-items", "flex-end")
])},
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