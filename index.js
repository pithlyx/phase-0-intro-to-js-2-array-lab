// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    let newCats = [...cats, name];
    return newCats;
}
function prependCat(name){
    let newCats = [name, ...cats];
    return newCats;
}
function removeLastCat(){
    let newCats = [...cats];
    newCats.pop();
    return newCats;
}
function removeFirstCat(){
    let newCats = [...cats];
    newCats.shift();
    return newCats;
}
