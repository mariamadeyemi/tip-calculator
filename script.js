//functions- bill amount, the percent buttons, number of people, result per person, total per person, reset button

const billAmt = document.querySelector("input.bill-input");
const ppleTotal = document.querySelector("input.pple-total");
const tipPerPersonTotal = document.querySelector(".money-tip");
const totalPerPerson = document.querySelector(".money-total");
const resetBtn = document.querySelector(".reset");
const customInput = document.querySelector(".custom-input");
const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");
const btnThree = document.querySelector(".btn-three");
const btnFour = document.querySelector(".btn-four");
const btnFive = document.querySelector(".btn-five");

function emptyVal() {
    if (billAmt.value === "" && ppleTotal.value === "") {
        tipPerPersonTotal.textContent = "0.00";
        totalPerPerson.textContent = "0.00"; 
    } else if (billAmt.value === "" || ppleTotal.value === "") {
        tipPerPersonTotal.textContent = "0.00";
        totalPerPerson.textContent = "0.00"; 
    }
}

customInput.addEventListener("input", () => {
    
fivePercent(customInput.value);
emptyVal();

})

function reset() {
    tipPerPersonTotal.textContent = "0.00";
    totalPerPerson.textContent = "0.00";
    billAmt.value = "";
    ppleTotal.value = "";
    customInput.value = "";
}

resetBtn.addEventListener("click", () => {
    reset();

    })

const fivePercent = num => {
    let bill = billAmt.value;
    let pple = ppleTotal.value;
    let calTip = (num / 100 * bill) / pple;
    let calTotal = bill / pple + calTip;
    tipPerPersonTotal.textContent = calTip.toFixed(2);

    console.log(calTotal);

  totalPerPerson.textContent = calTotal.toFixed(2);
emptyVal();
   
}

 btnOne.addEventListener("click", () => {
    fivePercent(5);

    })

    btnTwo.addEventListener("click", () => {
        fivePercent(10);
    
        })

        btnThree.addEventListener("click", () => {
            fivePercent(15);
        
            })

            btnFour.addEventListener("click", () => {
                fivePercent(25);
            
                })

                btnFive.addEventListener("click", () => {
                    fivePercent(50);
                
                    })