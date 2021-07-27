//CREATES A BASIC SPINNING LOADING ANIMATION
const spinnerString = "|/-\\|/-\\|";
for (let i = 0; i < spinnerString.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinnerString[i] + "   ");
  }, 100 + 200 * i);
}
//ADDS NEW LINE AFTER ALL CHARACTERS LOGGED ABOVE
setTimeout(() => {
  process.stdout.write('\n');
}, 200 * spinnerString.length);