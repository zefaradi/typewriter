const sentence = "hello there from lighthouse labs\n";
let delay = 0;

const timeOut = function(word, delay) {
  setTimeout(() => {
    process.stdout.write(word);
  }, delay);
}

for (let char of sentence) {
  timeOut(char, delay);
  delay += 50;
}