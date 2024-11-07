//recursive function


function counter(currentvalue,maxvalue){
    if(currentvalue > maxvalue){
        return;
    }
    console.log(currentvalue);
    counter(currentvalue + 1, maxvalue);

}

counter(0,10)

//objects


let obj={
    firstname : "john",
    lastname : "Doe",
    age :16,
    hobbies :["Reading","Cricket","Walking"],
    address : {
        city : "thrissur",
        state :"kerala"
    },
    Indian : true,

}

console.log("obj : ",obj);
console.log("firstname : ", obj.firstname);

obj.role="admin";
console.log("firstName: ",obj.firstName);

obj.age=36;
console.log("obj : ",obj);



//JSON



//CREATING A JSON STRING
let json_str=JSON.stringify(obj);
console.log("json_str : ", json_str);
console.log("typeeof(json_str: ", typeof(json_str));
console.log("firstname :", json_str.firstName);



//parsing Json
let parsed_str = JSON.parse(json_str);
console.log("parsed_str : ", parsed_str);
console.log("parsed_str : ", parsed_str.firstName);











