// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
function addLength(str) {
  return str.split(" ").map((s) => `${s} ${s.length}`);
}
