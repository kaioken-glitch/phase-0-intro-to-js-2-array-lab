//cat array 
const cats = ["Milo", "Otis", "Garfield"];

//appends cat name to the end of the cats array
function destructivelyAppendCat() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield", "Ralph");	
}

// prepends cat name to the beginning of the cats array
function destructivelyPrependCat() {
  cats.unshift("Bob");
}

// removes the last cat from the cats array
function destructivelyRemoveLastCat(){
    cats.pop();
}

// removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// appends a cat name to the end of the cats array and returns a new array
// leaving the original cats array unchanged
function appendCat(name){
    return cats.slice().concat(name);
}

// prepends a cat name to the beginning of the cats array and returns a new array
// leaving the original cats array unchanged
function prependCat(name) {
    return [name].concat(cats.slice());
}

// removes the last cat in the cats array and returns a new array
// leaving the original cats array unchanged
function removeLastCat() {
    return cats.slice(0, -1);
}

// removes the first cat in the cats array and returns a new array
// leaving the original cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}