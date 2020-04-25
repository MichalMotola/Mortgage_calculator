let Fund = document.getElementById('FundAmount')
let Intrest = document.getElementById('Intrest')
let Years = document.getElementById('Years')
let Payment= document.getElementById('Payment')
let result = document.getElementById('result')
let checkValue = document.getElementById('checkValue')

let arryInputs = [Fund, Intrest,Years, Payment]
let ErrorInputs = [FundAmountError,IntrestError,YearsError,PaymentError]

function calc()
{
result.value=Number(Fund.value) * (1+ (Number(Intrest.value/100))) / (Number (Years.value)*12)
result.innerHTML=result.value
if (Payment.value<result.value)
checkValue.innerHTML= "סכום גבוה, תנסה להקטין את הקרן או תגדיל את התקופה"
else
checkValue.innerHTML="הסכום נמוך, הינך יכול לשלם אותו"
}

for (let i=0; i<arryInputs.length;i++){



function checkInput(event)
 {
    let value = Number(event.target.value)
    let Error = ErrorInputs[i]



    if (isNaN(value)|| value=="") {
        arryInputs[i].style.border = '2px solid red'
        Error.innerHTML = 'נא להזין רק מספרים'
    } else {
       arryInputs[i].style.border = ''
       Error.innerHTML = ''
    }
}
arryInputs[i].addEventListener(
    'change',
    checkInput
)
} 




 



