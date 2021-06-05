const content = {
    1: document.querySelector("#home"),
    2: document.querySelector("#works"),
    3: document.querySelector("#about"),
    4: document.querySelector("#contact"),
    5: document.querySelector("#hire"),
}
document.querySelectorAll(".menu").forEach(e => {
    e.onclick = function () {
        if (e.getAttribute("active") == "false") {
            menuOpen();
        } else {
            menuClose();
        }
    }
})

function menuOpen() {
    document.querySelectorAll(".menu").forEach(e => {
        e.setAttribute("active", "true");
    })
    menu.setAttribute("class", "active");
    root.style.animationName = "menuOpen";
    for (let x = 1; x <= 3; x++) {
        document.querySelectorAll(`.menu${x}`).forEach(e => {
            e.style.animationName = `menuAnim${x}`;
        });
    }
}

function menuClose() {
    document.querySelectorAll(".menu").forEach(e => {
        e.setAttribute("active", "false");
    })
    menu.removeAttribute("class");
    root.style.animationName = "menuClose";
    for (let x = 3; x >= 1; x--) {
        document.querySelectorAll(`.menu${x}`).forEach(e => {
            e.style.animationName = `menuAnimClose${x}`;
        });
    }
}
let count = 1;
for (let x = 0; x <= 17; x++) {
    let div = document.createElement("div");
    div.onclick = function () {
        if (this.getAttribute("value") != null) {
            document.querySelectorAll("#scroller div").forEach(e => {
                e.removeAttribute("class")
            })
            this.setAttribute("class", "active");
        }
    }
    x==0 ? div.setAttribute("class", 'active') : false;
    x % 4 == 0 || x==0 ? div.setAttribute("value", count++) : false;
    scroller.appendChild(div);
}

document.querySelectorAll("#home .bottom section").forEach(e => {
    e.onmouseover = function (e) {
        const left = this.offsetLeft + 30;
        document.querySelector("#home .bottom .active").style.left = left + "px";
    }
})
document.querySelectorAll("#scroller div").forEach(e => {
    e.addEventListener("click", changer);
})
document.querySelectorAll("#menu li").forEach(e => {
    e.addEventListener("click", changer2);
})

function changer() {
    const val = document.querySelector("#scroller .active").getAttribute("value");
    document.querySelector("#menu li.active").removeAttribute("class");
    document.querySelector(`#menu li[value="${val}"]`).setAttribute("class", "active");
    document.querySelectorAll("#main > .active").forEach(e => {
        e.removeAttribute("class");
        e.style.animationName = "contentDown";
    })
    content[val].setAttribute("class", "active");
    content[val].style.animationName = "contentUp";
}

function changer2() {
    document.querySelector("#menu li.active").removeAttribute("class");
    this.setAttribute("class", "active");
    const val = document.querySelector("#menu li.active").getAttribute("value");
    document.querySelector("#scroller .active").removeAttribute("class");
    document.querySelector(`#scroller div[value="${val}"]`).setAttribute("class", "active");
    document.querySelectorAll("#main > .active").forEach(e => {
        e.removeAttribute("class");
        e.style.animationName = "contentDown";
    })
    content[val].setAttribute("class", "active");
    content[val].style.animationName = "contentUp";
    menuClose();
}

const obj = new ChooseWork;
function ChooseWork() {
    document.querySelectorAll("#hire span").forEach(e => {
        e.addEventListener("click", () => {
            if (e.getAttribute("selected") == "true") {
                this.deChoose(e);
            } else {
                this.choosen(e);
            }
        });
    });
    // TODO sender email
    this.sendObj = {};
    this.choosen = (e) => {
        const value = e.getAttribute("value");
        const text = e.innerHTML;
        e.setAttribute("selected", "true");
        this.sendObj[value] = text;
    }
    this.deChoose = (e) => {
        const value = e.getAttribute("value");
        e.setAttribute("selected", "false");
        delete this.sendObj[value];
    }
}


const worksObj = [];
document.querySelectorAll("#works .middle div").forEach(e => {
    worksObj.push(e);
    if(worksObj[2] != null){
        for(let x = 0;x<=2;x++){
            worksObj[x].setAttribute('class',`active${x}`);
        }
    }
})

document.querySelector("#works .left").onclick = () => {
    let x = worksObj[0];
    worksObj.shift();
    worksObj.push(x);
    worksObj.forEach(e => {
        e.removeAttribute("class");
        for(let x = 0;x<=2;x++){
            worksObj[x].setAttribute('class',`active${x}`);
        }
    })
}
document.querySelector("#works .right").onclick = () => {
    let num = worksObj.length-1
    let x = worksObj[num];
    worksObj.pop();
    worksObj.unshift(x);
    worksObj.forEach(e => {
        e.removeAttribute("class");
        for(let x = 0;x<=2;x++){
            worksObj[x].setAttribute('class',`active${x}`);
        }
    })
}