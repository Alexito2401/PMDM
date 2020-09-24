const values = [true, false, 5, "hola", [1,2,3], {age: 2, gender: 'male'}];

for (let i = 0; i < values.length; i++) {
    var tipo=values[i];
    console.log(typeof tipo);
    document.write("<br>");
} 