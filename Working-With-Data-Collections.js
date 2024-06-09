//Part 1: Refractoring Old Code

/*var csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
var myArray = csv.split(",");

for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}*/

//Part 2: Expanding Functionality

/*var csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
var newArray = csv.split("/n");

for (var i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}*/

//Part 3: Transforming Data

/*var dataArray = [];

var newArray = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

var lines = newArray.split("\n");
lines.forEach((line) => {
  var items = line.split(",");
  dataArray.push(items);
});
console.log(dataArray);*/

/*function transformToObjects(dataArray) {
  const headings = dataArray[0].map((heading) => heading.toLowerCase());
  const objectsArray = dataArray.slice(1).map((row) => {
    const obj = {};
    row.forEach((value, index) => {
      obj[headings[index]] = value;
    });
    return obj;
  });

  return objectsArray;
}
const dataArray = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"],
];

const objectsArray = transformToObjects(dataArray);
console.log(objectsArray);*/
//Why didn't id: '98' 'Bill' output like the others using this code...? What is the proper way to script this?

//Part 4: Sorting and Manipulating Data

/*let dataArray = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
dataArray.pop();
dataArray.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
dataArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(dataArray);*/

//Part 5: Full Circle

/*const dataArray = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

const csv = dataArray.map((obj) => Object.values(obj).join(",")).join("\n");

console.log(csv);*/
