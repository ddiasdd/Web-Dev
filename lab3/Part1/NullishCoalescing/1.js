alert(undefined ?? NaN ?? null ?? "" ?? " "); // NaN

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city); // Berlin


let num1 = 10,
    num2 = 20,
    result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}

result ??= num1 ?? num2
result ?? (result = num1??num2)