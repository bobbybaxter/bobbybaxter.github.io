const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const shuffle = (array) => {
  const importedArray = array;
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // while there remain elements to shuffle...
  while (currentIndex !== 0) {
    // pick a random element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // and swap it with the current element.
    temporaryValue = array[currentIndex];
    importedArray[currentIndex] = importedArray[randomIndex];
    importedArray[randomIndex] = temporaryValue;
  }
  return importedArray;
};

export default { printToDom, shuffle };
