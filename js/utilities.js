// random color
function randH(s, l){ 
    let h = Math.floor(Math.random() * 360) + 1;
    return 'hsl('+h+', '+s+'%, '+l+'%)';
}

// getValueById function
function getValueById(idName){
    const element = document.getElementById(idName);
    return element;
}


// document.getElementById('triangle-card').addEventListener('mouseover', function(){
//     const randCol = randH(100, 68);
//     document.getElementById('triangle-card').style.backgroundColor = randCol;
//     console.log(randCol)
    
// })




