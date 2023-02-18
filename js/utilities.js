// random color
function randH(s, el){ 
    let h = Math.floor(Math.random() * 360) + 1;
    return 'hsl('+h+', '+s+'%, '+el+'%)';
}

// getValueById function
function getValueById(idName){
    const element = document.getElementById(idName);
    return element;
}

function areaCalculation(btnId, mul){
    getValueById(btnId).addEventListener('click', function(event){
        let area = 1;
        // card children
        const cardParent = event.target.parentNode.children;
        // input values
        const firstInputValue = cardParent[3].children[0].children[0].value;
        const secondInputValue = cardParent[3].children[1].children[0].value;
        
        // validate input field
        const firstInputField = cardParent[3].children[0].children[0];
        const secondInputField = cardParent[3].children[1].children[0];

        if((isNaN(firstInputValue) || isNaN(secondInputValue))){
            firstInputField.style.border = "2px solid #d33939";
            secondInputField.style.border = "2px solid #d33939";
            firstInputField.style.color = "#d33939";
            secondInputField.style.color = "#d33939";

            alert("input filed should a number");
        }
        else if(firstInputValue === "" && secondInputValue === ""){
            firstInputField.style.border = "2px solid #d33939";
            secondInputField.style.border = "2px solid #d33939";
            firstInputField.style.color = "#d33939";
            secondInputField.style.color = "#d33939";
            alert("Please Enter a number")
        }
        else if(firstInputValue <= 0 && secondInputValue <= 0){
            firstInputField.style.border = "2px solid #d33939";
            secondInputField.style.border = "2px solid #d33939";
            firstInputField.style.color = "#d33939";
            secondInputField.style.color = "#d33939";
            alert('Value should not be Zero or Empty')
        }
        else{
            firstInputField.style.color = "";
            secondInputField.style.color = "";
            firstInputField.style.border = "";
            secondInputField.style.border = "";
        }


        // multiplication by condition
        // if(mul == 'one'){
        //     area = 1 * parseFloat(firstInputValue) * parseFloat(secondInputValue);
        // }
        
        
    })
}

areaCalculation('triangle-card-btn')





























// document.getElementById('triangle-card').addEventListener('mouseover', function(){
//     const randCol = randH(100, 68);
//     document.getElementById('triangle-card').style.backgroundColor = randCol;
//     console.log(randCol)
    
// })




