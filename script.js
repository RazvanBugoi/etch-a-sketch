document.body.onload = addElements;
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



