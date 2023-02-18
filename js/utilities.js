let count = 0;
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

// area calculation
function areaCalculation(btnId, mul){
    getValueById(btnId).addEventListener('click', function(event){
        count ++;
        var area = 1;
        const pi = 3.1416;
        // card children
        const cardParent = event.target.parentNode.children;
        // input values
        const firstInputValue = cardParent[3].children[0].children[0].value;
        const secondInputValue = cardParent[3].children[1].children[0].value;
        
        // object name
        const objectName = event.target.parentNode.children[1].innerText;

        // validate input field
        const firstInputField = cardParent[3].children[0].children[0];
        const secondInputField = cardParent[3].children[1].children[0];

        if((isNaN(firstInputValue) || isNaN(secondInputValue))){
            firstInputField.style.border = "2px solid #d33939";
            secondInputField.style.border = "2px solid #d33939";
            firstInputField.style.color = "#d33939";
            secondInputField.style.color = "#d33939";
            alert("input filed should a number");
            firstInputField.value = ''
            secondInputField.value = ''
            return;
        }
        else if(firstInputValue === "" && secondInputValue === ""){
            firstInputField.style.border = "2px solid #d33939";
            secondInputField.style.border = "2px solid #d33939";
            firstInputField.style.color = "#d33939";
            secondInputField.style.color = "#d33939";
            alert("Please Enter a number");
            firstInputField.value = ''
            secondInputField.value = ''
            return;
        }
        else if(firstInputValue <= 0 && secondInputValue <= 0){
            firstInputField.style.border = "2px solid #d33939";
            secondInputField.style.border = "2px solid #d33939";
            firstInputField.style.color = "#d33939";
            secondInputField.style.color = "#d33939";
            alert('Value should not be Zero or Empty');
            firstInputField.value = ''
            secondInputField.value = ''
            return;
        }
        else{
            firstInputField.style.color = "";
            secondInputField.style.color = "";
            firstInputField.style.border = "";
            secondInputField.style.border = "";
        }

        // multiplication by condition
        if(mul === 'one'){
            area = 1 * parseFloat(firstInputValue) * parseFloat(secondInputValue);
        }
        else if(mul === 'half'){
            area = 0.5 * parseFloat(firstInputValue) * parseFloat(secondInputValue);
        }
        else if(mul === 'pi'){
            area = pi * parseFloat(firstInputValue) * parseFloat(secondInputValue);
        }
        
        // calculation area
        const tr = document.createElement("tr");
        if(count % 2 == 0){
            tr.classList.add('bg-slate-50')
        }
        else{
            tr.classList.add('bg-slate-200')
        }
            tr.innerHTML = `
            <td>${count}</td>
            <td>${objectName}</td>
            <td>${area.toFixed(2)} cm<sup>2</sup></td>
            <td><button class="text-sm font-bold text-white bg-[#1090D8] hover:bg-[#0f78b4] h-8 w-[100%] rounded-lg my-2">Covert to m<sup>2</sup></button></td>
            `;
        getValueById('table-body').appendChild(tr);

        firstInputField.value = ''
        secondInputField.value = ''
    })
}
































// document.getElementById('triangle-card').addEventListener('mouseover', function(){
//     const randCol = randH(100, 68);
//     document.getElementById('triangle-card').style.backgroundColor = randCol;
//     console.log(randCol)
    
// })




