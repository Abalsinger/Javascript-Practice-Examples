var obj = [
             {
                  "name":"Justin",
                  "age":24,
                  "country":"Canada",
                  "occupation": "Dev"
              },
              {
                  "name":"Justin",
                  "age":32,
                  "country":"USA",
                  "occupation": "Dev"
              }
            ]

var obj2 = {
      "dog": "Max",
      "cat": "Fluffy"
}

var pet = Object.assign({},obj2);

var result = Object.assign({},...obj, pet);

var useResult = result;

useResult;

document.getElementById("demoName").innerHTML = useResult.name;
document.getElementById("demoAge").innerHTML = useResult.age;
document.getElementById("demoCountry").innerHTML = useResult.country;
document.getElementById("demoOccupation").innerHTML = useResult.occupation;
document.getElementById("petName").innerHTML = useResult.dog;