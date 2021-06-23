const ten = document.getElementById('ten');
const twenty = document.getElementById('twenty');
const thirty = document.getElementById('thirty');
const forty = document.getElementById('forty');
const fifty = document.getElementById('fifty');
const sixty = document.getElementById('sixty');
const seventy = document.getElementById('seventy');
const eighty = document.getElementById('eighty');
const ninety = document.getElementById('ninety');
const reset = document.getElementById('resetButton')
const submitCustomValue = document.getElementById('submit')

ten.onclick = addTenGrids;
twenty.onclick = addTwentyGrids;
thirty.onclick = addThirtyGrids;
forty.onclick = addFortyGrids;
fifty.onclick = addFiftyGrids;
sixty.onclick = addSixtyGrids;
seventy.onclick = addSeventyGrids;
eighty.onclick = addEightyGrids;
ninety.onclick = addNinetyGrids;
reset.onclick = resetGrid;
submitCustomValue.onclick = addCustomNumberGrids;
submitCustomValue.addEventListener('click', function(event) {
  event.preventDefault();
})

function addTenGrids() {
  if (mainDiv.innerHTML == '') {
    addElements(10)
  } else {
    mainDiv.innerHTML = '';
    addElements(10);
  }
}

function addTwentyGrids() {
  if (mainDiv.innerHTML == '') {
    addElements(20)
  } else {
    mainDiv.innerHTML = '';
    addElements(20);
  }
}

function addThirtyGrids() {
  if (mainDiv.innerHTML == '') {
    addElements(30)
  } else {
    mainDiv.innerHTML = '';
    addElements(30);
  }
}

function addFortyGrids() {
  if (mainDiv.innerHTML == '') {
    addElements(40)
  } else {
    mainDiv.innerHTML = '';
    addElements(40);
  }
}

function addFiftyGrids() {
  if (mainDiv.innerHTML == '') {
    addElements(50)
  } else {
    mainDiv.innerHTML = '';
    addElements(50);
  }
}

function addSixtyGrids() {
  if (mainDiv.innerHTML == '') {
    addElements(60)
  } else {
    mainDiv.innerHTML = '';
    addElements(60);
  }
}

function addSeventyGrids() {
  if (mainDiv.innerHTML == '') {
    addElements(70)
  } else {
    mainDiv.innerHTML = '';
    addElements(70);
  }
}

function addEightyGrids() {
  if (mainDiv.innerHTML == '') {
    addElements(80)
  } else {
    mainDiv.innerHTML = '';
    addElements(80);
  }
}

function addNinetyGrids() {
  if (mainDiv.innerHTML == '') {
    addElements(90)
  } else {
    mainDiv.innerHTML = '';
    addElements(90);
  }
}

function addCustomNumberGrids() {
  const inputValue = Number(document.getElementById('customInput').value)
  if (mainDiv.innerHTML == '') {
    addElements(inputValue)
  } else {
    mainDiv.innerHTML = '';
    addElements(inputValue);
  }
}


// document.body.onload = addElements;
const mainDiv = document.querySelector('.main-div');
console.log(mainDiv)

function addElements(n) {
  for (let i=0; i<n*n; i++) {
    let divs = document.createElement('div')
    divs.className = 'div-grids'
    divs.style.border = "1px solid red"
    mainDiv.appendChild(divs)
  }
    mainDiv.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    mainDiv.style.gridTemplateRows = `repeat(${n}, 1fr)`;
}

function resetGrid() {
    if (mainDiv.innerHTML == '') return
    mainDiv.innerHTML = '';
}

function startDrawing() {
  const allGridDivs = document.querySelectorAll('.div-grids')
  console.log(allGridDivs)
  allGridDivs.forEach((element) => element.addEventListener('mouseenter', function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let finalColor = "rgb(" + r + "," + g + "," + b + ")";
    element.style.backgroundColor = finalColor;
  }))
  // allGridDivs.forEach((element) => element.addEventListener('mouseenter', () => {
  //   element.style.backgroundColor = 'black'
  // }))
}


function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let finalColor = "rgb(" + r + "," + g + "," + b + ")";
}