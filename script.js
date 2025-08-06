function calculateBMI(){
    let height= document.getElementById("weight").value
    let weight= document.getElementById("height").value
    let bmi= height/weight;


    document.querySelector(".resultBox").innerText = "Your BMI is: " + bmi.toFixed(2);

}
