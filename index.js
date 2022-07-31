// Code your solutions in this file

function writeCards(array, event) {
    let birthdayCards = []
    for (i = 0; i < array.length; i++) {
        birthdayCards.push(`Thank you, ${array[i]} for the wonderful ${event} gift!`)
    }
    return birthdayCards
}

function countDown(i) {
  while (i > 0) {
    console.log(i);
    i -= 1;
  }
  return i;
}