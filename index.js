/* function* generate(){
    console.log('---');
    console.log('---');
    yield
    console.log('---');
    console.log('---');
    yield
    console.log('---');
    yield
    console.log('---');    
}

const iterator = generate()
console.log('first');
const r1 = iterator.next();
console.log(r1);
console.log('second');
const r2 = iterator.next();
console.log(r2);
console.log('third');
const r3 = iterator.next()
console.log(r3);
console.log('fourth');
const r4 = iterator.next()
console.log(r4); */


/* function* generate (){
    let num = 0
    while(num < 10){
      yield ++num
    }
   
}

const increment = generate()
console.log(increment.next());
 */

function* superSum (a) {
    let accum = 0
    while(true) {
        let arg = yield accum
        accum += arg 
    }
}
const iter = superSum()
console.log(iter.next().value);
console.log(iter.next(5).value);
console.log(iter.next(15).value);
console.log(iter.next(10).value);