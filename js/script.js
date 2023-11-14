let btnTop = document.getElementById('btnTop');
let btnBottom = document.getElementById('btnBottom');
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let map = document.getElementById('map');
let square = document.getElementById('square');
let def = document.getElementById('defeat');
let point = document.getElementById('point');
let check = document.getElementById('check');
let numX = 0;
let numY = 0;
let checkPoint = 0;



function btnTopClick() {
    numY -= 20;
    square.style.transform = 'translate(' + numX + 'px,' + numY + 'px)';
    defeat();
    givePoint();
};

function btnBottomClick() {
    numY += 20;
    square.style.transform = 'translate(' + numX + 'px,' + numY + 'px)';
    defeat();
    givePoint();
};

function btnLeftClick() {
    numX -= 20;
    square.style.transform = 'translate(' + numX + 'px,' + numY + 'px)';
    defeat();
    givePoint();
};

function btnRightClick() {
    numX += 20;
    square.style.transform = 'translate(' + numX + 'px,' + numY + 'px)';
    defeat();
    givePoint();
};
function defeat() {
    if (def.style.opacity = '1') {
        check.style.opacity = '1';
        def.style.opacity = '0';
        map.style.backgroundColor = 'yellow';
        map.style.transform = 'scale(1)';
        btnTop.style.backgroundColor = 'rgb(255, 255, 93)';
        btnBottom.style.backgroundColor = 'rgb(255, 255, 93)';
        btnLeft.style.backgroundColor = 'rgb(255, 255, 93)';
        btnRight.style.backgroundColor = 'rgb(255, 255, 93)';
        square.classList.remove('defeat-animation');
    };
    if (numY < 0 || numY > 200 || numX < 0 || numX > 200) {
        checkPoint = 0;
        check.innerHTML = `Счёт: ${checkPoint}`;
        check.style.opacity = '0';
        def.style.opacity = '1';
        map.style.backgroundColor = 'rgb(155, 0, 0)';
        map.style.transform = 'scale(0.6)';
        btnTop.style.backgroundColor = 'red';
        btnBottom.style.backgroundColor = 'red';
        btnLeft.style.backgroundColor = 'red';
        btnRight.style.backgroundColor = 'red';
        square.classList.add('defeat-animation');
    };
};

let numbersLength = [
    {
        numbers: ['20', '40', '60', '80', '100', '120', '140', '160', '180']
    },
    {
        numbers: ['20', '40', '60', '80', '100', '120', '140', '160', '180']
    },
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random(i) * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

let shuffleNumberXPoint = shuffleArray(numbersLength[0].numbers);
let shuffleNumberYPoint = shuffleArray(numbersLength[1].numbers);

function pointPosition() {
    point.style.transform = 'translate(' + shuffleNumberXPoint[0] + 'px,' + shuffleNumberYPoint[0] + 'px)';
};
pointPosition();

function givePoint() {
    if (numX === Number(shuffleNumberXPoint[0]) && numY === Number(shuffleNumberYPoint[0])) {
        checkPoint++;
        check.innerHTML = `Счёт: ${checkPoint}`;
        shuffleNumberXPoint = shuffleArray(numbersLength[0].numbers);
        shuffleNumberYPoint = shuffleArray(numbersLength[1].numbers);
        pointPosition();
    };
};