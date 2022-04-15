
noOfPixel = 16;
let cell = [];
var initialVal = document.getElementById("slider").value //gets the oninput value
document.getElementById('output').innerHTML = initialVal + " x " + initialVal;//displays this value to the html page

createGrid(initialVal);

function clearAll(){
    cell.forEach(item => {
        item.style.background = 'white';
      })
}

function createGrid(noOfPixel) {

    console.log(noOfPixel);
    const list = document.getElementById("main");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    document.getElementById('main').style.gridTemplateColumns = (`repeat(${noOfPixel}, 1fr`);
    document.getElementById('main').style.gridTemplateRows = (`repeat(${noOfPixel}, 1fr`);
    let numberOfCells = noOfPixel * noOfPixel;
    for (let i = 0; i < numberOfCells; i++) {
        cell[i] = document.createElement('div');
        cell[i].classList.add('cell');
        cell[i].addEventListener('mouseover', function () {

            cell[i].style.background = "red"
        });
        document.getElementById('main').appendChild(cell[i]);
    }
}

document.getElementById("slider").oninput = function () {
    var val = document.getElementById("slider").value //gets the oninput value
    createGrid(val);
    document.getElementById('output').innerHTML = val + " x " + val; //displays this value to the html page

};


// function changePixel(noOfPixel) {

//     const list = document.getElementById("main");

//     while (list.hasChildNodes()) {
//         list.removeChild(list.firstChild);
//     }

//     for (let r = 0; r < noOfPixel; r++) {
//         var div = document.createElement("div");
//         div.style.display = "flex";
//         div.style.flexDirection = "row";
//         div.id = "row" + r;
//         document.getElementById('main').appendChild(div);

//         var divName = "row" + r;

//         var sqSize = noOfPixel / 2;

//         for (let c = 0; c < noOfPixel; c++) {
//             var divSq = document.createElement("divSq");

//             divSq.style.width = "50px";
//             divSq.style.height = "50px";
//             divSq.style.flexGrow = "auto";
//             divSq.style.background = "white";
//             divSq.style.border = "solid red 1px";
//             divSq.id = divName + "divSq" + c;

//             document.getElementById(divName).appendChild(divSq);

//             const element = document.getElementById(divName + "divSq" + c);
//             // console.log(element);
//             element.addEventListener("mouseover", function () {

//                 element.style.background = "red"
//             });
//             // element.addEventListener("mousedown", function() {
//             //     element.style.background = "white"
//             //   });

//             // var gridPixels = div.querySelectorAll('divsq');
//             // gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', myFunction));


//         }

//     }
// }
