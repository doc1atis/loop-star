const submitButton = document.querySelector('.submit');
submitButton.onclick = makeList;

function makeList(event) {
  event.preventDefault();
  deletePreviousList();

  const inputBox = document.querySelector('.user-input');
  const num = inputBox.value;
  let numy = Number(num)
  while (numy >= 0) {
    addNewLI(numy)
    if (numy % 2 === 0) {
      makeLatestLIBold()
    }
    numy--

      
    }
  5

}

function addNewLI(text) {
  const ul = document.querySelector('.list');
  const li = document.createElement('li');
  li.innerText = text;
  ul.appendChild(li);
}

function deletePreviousList() {
  const ul = document.querySelector('.list');
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }

}

function makeLatestLIBold() {
  const ul = document.querySelector('.list');
  const li = ul.lastChild;
  li.style.fontWeight = 'bold';
}