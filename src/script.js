function createArray() {
  const length = document.getElementById("arrayLength").value;
  let array = [];

  for (let i = 0; i < length; i++) {
    const element = prompt(`Введіть елемент ${i + 1}`);
    array.push(element);
  }

  displayArray("Початковий масив: ", array);

  // Сортування масиву
  array.sort((a, b) => a - b);
  displayArray("Відсортований масив: ", array);

  // Видалення елементів з 2 по 4
  if (array.length >= 4) {
    array.splice(1, 3);
  }

  displayArray("Масив після видалення елементів: ", array);
}

function displayArray(message, array) {
  const output = document.getElementById("arrayOutput");
  output.innerHTML += message + array.join(", ") + "<br>";
}
