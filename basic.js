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


console.log("/n/n/n")





// call by value

let a=10;
console.log("Before function call")
console.log("a : ", a);
function update(a){
    a="newvalue";
}
update(a);
console.log("after function call");
console.log("a : ",a)



console.log("/n/n/n")


//call by reference

let arr=[1,2,3];
console.log("Before function call");
console.log("arr : ",arr);

function updateArr(arr){
    arr[0]=100;
    arr[1]=200;
    arr[2]=300;
}

updateArr(arr);
console.log("After function call");
console.log("arr : ",arr);



//closure


function outerfunction(){
    const outervariable="from outer function";

    function innerfunction(){
        function innerfunction1(){
            console.log("outervariable : ",outervariable);
        }
        return innerfunction1;
    }
    return innerfunction;

    }
let result=outerfunction();
console.log("result : ",result);


let result1=-result();
console.log("result1 : ",result1);
result1()

















