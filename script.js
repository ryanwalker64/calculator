const caluculatorBox = document.querySelector('#calculator-wrapper');
const equationString = document.querySelector('.equation');
const totalString = document.querySelector('#totalNumber');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => displayEquation(e))
})


let firstNumber = '';
let firstNumberActive = true;
let secondNumber = '';
let activeEquation = '';

function displayEquation(e) {

    if (e.currentTarget.id === 'clearBtn') {
        firstNumber = '';
        firstNumberActive = true;
        secondNumber = '';
        activeEquation = '';
        totalString.textContent = " ";
        return;
    }

        
    

    if (e.currentTarget.value === '' && firstNumber == '') {
        return console.log('ERROR: Enter a number to start')
    }

    if (e.currentTarget.value !== '' && Number(e.currentTarget.value) <= 9 || e.currentTarget.value === '.') {
        if (firstNumberActive) {
            firstNumber = '' + firstNumber + e.currentTarget.value;
            totalString.insertAdjacentText('beforeend', e.currentTarget.value);
            console.log(firstNumber)
        } else {
            secondNumber = '' + secondNumber + e.currentTarget.value;
            totalString.insertAdjacentText('beforeend', e.currentTarget.value);
            console.log(secondNumber)
    }
    } else if (firstNumber !== '' && e.currentTarget.classList.contains('equated')) {
        firstNumberActive = !firstNumberActive;
        if (activeEquation == '') {
            activeEquation = e.currentTarget.textContent;
            totalString.insertAdjacentText('beforeend', e.currentTarget.textContent);
        } else {
            let numberOne = Number(firstNumber);
            let numbertwo = Number(secondNumber);
            
            if (activeEquation === '+') {
                add(numberOne, numbertwo);
            } else if (activeEquation === '-') {
                subtract(numberOne, numbertwo);
            } else if (activeEquation === '/') {
                divide(numberOne, numbertwo);
            } else if (activeEquation === '*') {
                multiply(numberOne, numbertwo);
            }
            secondNumber = '';
            activeEquation = '';
            
        }
}


}

//log button press ✅
    //if first Num && sec num is empty and key press is not a number  ✅
        //return fail ✅

//if number btn is pressed ✅
        // AND firstNumber is true ✅
        // concate number pressed with first number ✅
        // display on calc ✅
// else if (firstNumber is false)✅
        //concate number pressed with second number ✅
        // display on calc✅

// once equation symbol is pressed ✅
    // flip firstNumberActive ✅
    // if equationSYMBOL Let is already filled ✅
        // find equation ✅
        // put both numbers into it ✅
        // return result in total ✅
        // clear second number ✅
        // changes first number to total ✅
        // clear equation ✅
    // ELSE 
        // log equation symbol ✅
        // append the equation sign  ✅


function add(number1, number2) {
    const result = number1 + number2;
    totalString.textContent = result;
    firstNumber = result
    
}

function subtract(number1, number2) {
    const result = number1 - number2;
    totalString.textContent = result;  
    firstNumber = result
}

function multiply(number1, number2) {
    const result = number1 * number2;
    totalString.textContent = result;
    firstNumber = result

}

function divide(number1, number2) {
    const result = number1 / number2;
    totalString.textContent = result;
    firstNumber = result
}


