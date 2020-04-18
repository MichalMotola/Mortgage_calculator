let Fund = document.getElementById('FundAmount')
let Intrest = document.getElementById('Intrest')
let Years = document.getElementById('Years')
let Payment= document.getElementById('Payment')
let result = document.getElementById('result')
let checkValue = document.getElementById('checkValue')


function calc()
{
result.value=Number(Fund.value) * (1+ (Number(Intrest.value/100))) / (Number (Years.value)*12)
result.innerHTML=result.value
if (Payment.value<result.value)
checkValue.innerHTML= "סכום גבוה, תנסה להקטין את הקרן או תגדיל את התקופה"
else
checkValue.innerHTML="הסכום נמוך, הינך יכול לשלם אותו"
}

function checkInput(event)
 {
    let value = Number(event.target.value)



    if (isNaN(value)) {
        Fund.style.border = '2px solid red'
        document.getElementById('FundAmountError').innerHTML = 'נא להזין רק מספרים'
    } else {
        Fund.style.border = ''
        document.getElementById('FundAmountError').innerHTML = ''
    }
}
Fund.addEventListener(
    'change',
    checkInput
)


function checkInput2(event)
 {
    let value = Number(event.target.value)



    if (isNaN(value)) {
        Intrest.style.border = '2px solid red'
        document.getElementById('IntrestError').innerHTML = 'נא להזין רק מספרים'
    } else {
        Intrest.style.border = ''
        document.getElementById('IntrestError').innerHTML = ''
    }
}
Intrest.addEventListener(
    'change',
    checkInput2
)


function checkInput3(event)
 {
    let value = Number(event.target.value)



    if (isNaN(value)) {
        Years.style.border = '2px solid red'
        document.getElementById('YearsError').innerHTML = 'נא להזין רק מספרים'
    } else {
        Years.style.border = ''
        document.getElementById('YearsError').innerHTML = ''
    }
}
Years.addEventListener(
    'change',
    checkInput3
)


function checkInput4(event)
 {
    let value = Number(event.target.value)



    if (isNaN(value)) {
        Payment.style.border = '2px solid red'
        document.getElementById('PaymentError').innerHTML = 'נא להזין רק מספרים'
    } else {
        Payment.style.border = ''
        document.getElementById('PaymentError').innerHTML = ''
    }
}
Payment.addEventListener(
    'change',
    checkInput4
)



