

function calPerc(){
    let sub1 = parseInt(document.getElementById('sub-1').value);
    let sub2 = parseInt(document.getElementById('sub-2').value);
    let sub3 = parseInt(document.getElementById('sub-3').value);
    let sub4 = parseInt(document.getElementById('sub-4').value);

    let total = sub1+sub2+sub3+sub4;


    let calPerc = total/400*100;
    let grade = null;

    if(calPerc >= 35 && calPerc < 60){
        grade = "C.You are pass";
    }else if(calPerc >= 60 && calPerc < 80){
        grade = "B.You are pass"
    }else if(calPerc >=80 && calPerc < 100){
        grade = "A.You are pass"
    }else{
        grade = "D.You are fail"
    }

    if(sub1,sub2,sub3,sub4){
        document.getElementById('show-per').innerHTML = `Out of 400 your total is ${total} and percentage is ${calPerc.toFixed(0)}%. your grade is  ${grade}`
    }else{
        alert("Please fill all the inputs");
    }
    
    // console.log(calPerc)
}