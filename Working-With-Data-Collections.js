var csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
var myarray = csv.split(",");

for (var i = 0; i < myarray.length; i++) {
  console.log(myarray[i]);
}
