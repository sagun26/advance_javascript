// const name ="sagun"
// const repoCOunt=50
// //console.log(name+repoCOunt+"value");
//  console.log(`hello my name is ${name}`); 

 const  gameName= new String("saguna")
    console.log(gameName);
    console.log(gameName.__proto__);
     console.log(gameName.length);

    console.log(gameName.toUpperCase());

    console.log(gameName.charAt(2));
      console.log(gameName.indexOf("a"));

      const newString =gameName.substring(0,4)
      console.log(newString);
      const anotherString =gameName.slice(-8,4)
      console.log(anotherString);


      const newStringOne="  sagun  "
      console.log(newStringOne);
      console.log(newStringOne.trim());

const url ="https://sagun.com/sagun%20sigdel"

console.log(url.replace("%20", " "))
console.log(url.includes('sigdel'))

console.log(gameName.split("-"))
