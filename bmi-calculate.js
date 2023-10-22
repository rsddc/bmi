/**
 * Implementation -order is wrong.
 * 1. capturing form element using queryselector
 * 2. using function with event parament is wrong.
 * JS interpreter found it undefined. so after click 
 * event should be prepared . FOLLOW 2nd implementation
 * below.
 */

// const form = document.querySelector('form')

// function getBMI (event){
//     event.preventDefault()
//     let height = parseFloat(document.getElementById('height')).value
//     let weight =parseFloat(document.getElementById('weight')).value
//     let msg=""
//     //Numbers are required here for calculation.

//     if(isNaN(height) || height <= 0)
//     msg+="height should be a valid positive number "

//     if(isNaN(weight) || weight <= 0)
//     msg+="weight should be a valid positive number "

//     if(msg.length > 0){ 
//         document.getElementById('results').innerHTML=`${msg}`
//         return
//     }

//     //BMI :-[weight (kg) / height (cm) / height (cm)] x 10,000

//     bmi = ((weight/(height*height)/10000)).toFixed(2)

//     document.getElementById('#results').innerHTML = `Your BMI is ${bmi}`
    
// }

//      form.addEventListener('submit',getBMI(event))
//======================================

const formData = document.querySelector('form')
/*
Addeventlistener will invoke when submit event is
capturing while click on submit.MAIN IMPORTANT :- after
submit event, an object of event type can be prepared so inline
function declartion is required here and it will be call back.
This approach suits to all object creation and event capturing in
proper sequence . Above one shows event is undefined.
*/
formData.addEventListener('submit',function(e){ 
  e.preventDefault()
  let height = Number(document.getElementById("height").value)
  let weight = Number(document.getElementById('weight').value)
  let msg=""
  if(height <= 0 || isNaN(height))
    msg+="Invalid height value. Pass a + number"
  else if(weight <= 0 || isNaN(weight))  
    msg+="Invalid weight value. Pass a + number"
  if(msg.length>0){
    document.getElementById('results').innerHTML = msg  
    return
  }
  let bmi = ( weight/((height*height)/10000) ).toFixed(2)
  document.getElementById('results').innerHTML = `Your BMI is ${bmi}`  

})

//=================================================================
