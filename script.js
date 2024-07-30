const mecButton = document.getElementById("mec-button");
const lightButton = document.getElementById("light-button");
let displayMode = false

mecButton.addEventListener("click", () => {
    displayMode = true
    const container = document.querySelector(".container");
    const buttonCoords = mecButton.getBoundingClientRect();
    const height = mecButton.offsetHeight
    const width = mecButton.offsetWidth
    const body = document.querySelector("body");
    
    fadeOutEffect(container)
    const display = document.createElement("div");
    display.className="display"
    display.style.width = width+"px";
    display.style.height = height+"px";
    display.style.top = buttonCoords.top+"px";
    display.style.left = buttonCoords.left+"px";
    body.appendChild(display);
    display.style.opacity = 1;
    scaleAnim(display, [20, 15], 50);
    makeLayout(display);
});

const makeLayout = (target) => {
    const preview = document.createElement("div");
    const options = document.createElement("div");

    preview.className = "preview";
    options.className = "options";
    target.append(preview);
    target.append(options);

    const textDiv = document.createElement("div");
    textDiv.className = "text";

    const welcome = document.createElement("h1");
    welcome.innerText = "WELCOME";
    welcome.className = "title";

    const para = document.createElement("p");
    para.innerText = "Choose any of the options on the right to get started."
    para.className = "para"

    textDiv.append(welcome)
    preview.append(textDiv)
    preview.append(para);

    const optionData = ["Pendulum", "Box & Friction", "Spring stuff", "SHM & Waves"]

    for (let i = 0; i < 10; i++) {
        const option = document.createElement("div");
        option.className = "option";
        option.id = `${i}`;
        option.innerText = optionData[i];
        options.append(option);
    }
}

const fillOptions = (target) => {
    
}

const scaleAnim = (target, [top, left], duration) => {
    const Top = (target) => {
        return Number(target.style.top.slice(0, -2));
    }
    const Left = (target) => {
        return Number(target.style.left.slice(0, -2));
    }
    
    const Width = 0.96*innerWidth;
    const Height = 0.9*innerHeight;

    const scaleEffect = setInterval(() => {
        target.style.margin = "20px";
        const height = Number(target.style.height.slice(0, -2));
        const width = Number(target.style.width.slice(0, -2));

        const tRate = (Top(target)-top)/duration;
        const lRate = (Left(target)-left)/duration;
        const WRate = (Width - width)/duration;
        const HRate = (Height - height)/duration;

        if (Top(target) > top) {
            target.style.top = `${Top(target)-tRate}px`;
        }
        if (Left(target) > left) {
            target.style.left = `${Left(target)-lRate}px`;
        }
        if (width < Width) {
            target.style.width = `${width + WRate}px`;
        }
        else if (width > Width) {
            target.style.width = `${width - WRate}px`;
        }
        if (height < Height) {
            target.style.height = `${height + HRate}px`;
        }
        else if (height > Height) {
            target.style.height = `${height - HRate}px`;
        }
        else {
            clearInterval(scaleEffect);
        }
    }, 0.8)
    console.log([innerWidth, innerHeight]);
}

const scaleUp = (scaleTarget) => {
    scaleTarget.style.top = "20px";
    scaleTarget.style.left = "15px";
    scaleTarget.style.margin = "20px";
    scaleTarget.style.minHeight = "400px";
    scaleTarget.style.height = "90vh";
    scaleTarget.style.width = "90vw";
    scaleTarget.style.minWidth = "300px"
}

const fadeOutEffect = (obj) => {
    let fadeTarget = obj;
    let fadeEffect = setInterval(() => {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 0.8);
}
