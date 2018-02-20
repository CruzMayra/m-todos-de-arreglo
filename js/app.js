// ---------- se comprueban las soluciones de los ejercicios con TDD (Jasmine) ----------
function numberSquared(number){
  return number * number
}

function numbersTotalSum(num1, num2){
  return num1 + num2
}

function greaterThanThree(number){
  return number > 3
}

function elemets(number){
  console.log(number);
}

// ---------- solución ejercicio uno ----------
function miForEach(array, fn) {
  for(var i = 0; i < array.length; i++){
    fn(array[i])
  }
}

// ---------- solución ejercicio dos ----------
function miMap(array, fn) {
  return miReduce(array, function(acc, item) {
    return acc.concat(fn(item));
  }, []);
}

// ---------- solución ejercicio dos ----------
function miFilter(array, fn) {
  return miReduce(array, function(acc, item){
    if(fn(item)){
      return acc.concat(item)
    }
    return acc
  }, []);
}

// ---------- solución ejercicio cuatro ----------
function miReduce(array, fn, init) {
  if(array.length) {
    return miReduce(array.slice(1), fn, fn(init, array[0]))
  }
  return init
}
