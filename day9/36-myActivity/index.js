

var sArray = []; 

sArray.push({fName: "Brian1", lName: "M", age:99, email:"bmclaugh28@yahoo.com", score:"A"});
sArray.push({fName: "Brian2", lName: "M", age:99, email:"bmclaugh28@yahoo.com", score:"B"});
sArray.push({fName: "Brian3", lName: "M", age:99, email:"bmclaugh28@yahoo.com", score:"C"});
sArray.push({fName: "Brian4", lName: "M", age:99, email:"bmclaugh28@yahoo.com", score:"D"});
sArray.push({fName: "Brian5", lName: "M", age:99, email:"bmclaugh28@yahoo.com", score:"E"});

var str; 

for (i=0; i<sArray.length; i++) {

    str = "Student " + i + " name " + sArray [i].fName + " " + sArray [i].lName + " " + sArray [i].score + " "; 
    switch (sArray [i].score) 
    {
        case 'E': 
            str += 'FAIL'; 
            break; 
        default: 
            str += 'PASS'; 
            break;
    } 

    console.log (str); 
}

console.log (sArray); 
