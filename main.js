let radioInputs = document.querySelectorAll('input[type="radio"]');

let counterSpan=document.querySelector(".counter span")

let questions=document.querySelector(".question")

let button=document.querySelector(".submint")

let colSpan=document.querySelector(".col")

let spanAll=document.querySelectorAll(".col span")

let timer=document.querySelector(".timer")

let dataQuestion=document.querySelector(".data-question")

let Popup=document.querySelector(".Popup")

let pLevel=document.querySelectorAll(".Popup p")

let courcesHtml=document.querySelector(".HTML");
let courcesCss=document.querySelector(".CSS");
let container=document.querySelector(".container")
spancatgeroy=document.querySelector(".catgeroy span")
success=new Audio("./success-1-6297.mp3")
fiald=new Audio("./wah-wah-sad-trombone-6347.mp3")
send=new Audio("./mixkit-fast-double-click-on-mouse-275.wav")
var counter=0;
var counterAnswers=0
let countdown;
radioInputs.forEach(input => {
    input.addEventListener('click', () => {
   
    if(input.className=="checked")
          {  input.checked=false
            input.classList.remove("checked")
          }
    else{
    input.classList.add("checked")
             input.checked=true
}
    });
});

courcesCss.onclick=function(){
    counter=0;
 counterAnswers=0
 spancatgeroy.innerHTML="CSS"
    if(colSpan.length!==0){
        spanAll.forEach((e)=>{
            if(e.classList.contains("talwen"))
            e.classList.remove("talwen")})
        }    dataQuestion.style.display="block"
    Popup.style.display="none"
    container.style.display="block"
fetch("./questionCSS.json").then(result=>result.json()).then(result=>{
let resultLength=result.length;
counterSpan.textContent=resultLength

    makeArray(resultLength,array=[])
    mixArray(array)

    bluldingQuestionAndAnswer(result)
    
    bluldingspan(resultLength)

    talwenspan()

    timr(120,resultLength)

    button.onclick=function(){
      send.play()
        testingAnswer(result,resultLength)
        counter++
        if(counter<resultLength){
            
            
            bluldingQuestionAndAnswer(result)
            
            talwenspan()

}
else {
    removeQuestionAndAswer()
    Popup.style.display="block"

   if( counterAnswers<=3){ 
    pLevel[0].style.display="block"
fiald.play()
} 
else if( counterAnswers<=7 && countdown>4)
{
    pLevel[1].style.display="block" 
}
else{
    pLevel[2].style.display="block" 
success.play()
}
    
}

radioInputs.forEach(element => {
    element.checked=false
    element.classList.remove("checked")
});
}

})}
courcesHtml.onclick=function(){
    counter=0;
 counterAnswers=0

 spancatgeroy.innerHTML="HTML"

    if(colSpan.length!==0){
    spanAll.forEach((e)=>{
        if(e.classList.contains("talwen"))
        e.classList.remove("talwen")})
    }
    dataQuestion.style.display="block"
    Popup.style.display="none"
    container.style.display="block"
fetch("./questionHTML.json").then(result=>result.json()).then(result=>{
let resultLength=result.length;
counterSpan.textContent=resultLength

    makeArray(resultLength,array=[])
    mixArray(array)

    bluldingQuestionAndAnswer(result)
    
    bluldingspan(resultLength)

    talwenspan()

    timr(120,resultLength)

    button.onclick=function(){
      send.play()
        testingAnswer(result,resultLength)
        counter++
        if(counter<resultLength){
            
            
            bluldingQuestionAndAnswer(result)
            
            talwenspan()

}
else {
    removeQuestionAndAswer()
    Popup.style.display="block"

   if( counterAnswers<=3){ 
    pLevel[0].style.display="block"
fiald.play()
} 
else if( counterAnswers<=7 && countdown>4)
{
    pLevel[1].style.display="block" 
}
else{
    pLevel[2].style.display="block" 
success.play()
}
}

radioInputs.forEach(element => {
    element.checked=false
    element.classList.remove("checked")
});
}

})}

function bluldingQuestionAndAnswer(result){
    let arr=[1,2,3,4]

    mixArray(arr)
        
    
    questions.textContent=result[array[counter]]["question"];
    for(let i=1;i<=4;i++){
        let answer=document.querySelector(`.answer-${i}`)
        
        answer.textContent=result[array[counter]][`answer-${arr[i-1]}`]
        }
}
function testingAnswer(result,resultLength){
    radioInputs.forEach(element => {
    if(counter<resultLength && element.checked ){
        if( element.nextElementSibling.textContent==result[array[counter]][`answer`])
        counterAnswers++
        
    }
});
}
function bluldingspan(resultLength){
    colSpan.innerHTML=""

    for(let i=0;i<resultLength;i++){
        span=document.createElement("span")
        colSpan.appendChild(span)
    }
}
function talwenspan(){
    let spanAll=document.querySelectorAll(".col span")

    spanAll[counter].className="talwen"
}
function timr(duration,resultLength){
    if(counter<resultLength){
    countdown= setInterval(() => {
    let seconde,minutes;
    minutes=parseInt(duration/60)
    seconde=parseInt(duration % 60)
        minutes=minutes<10 ?`0${minutes}`:minutes
        seconde=seconde<10 ?`0${seconde}`:seconde
        timer.textContent=`${minutes}:${seconde}`
        duration--
        
        button.addEventListener("click",()=>{
            clearInterval(countdown)
            timr(120,resultLength)
        })
        if(duration<0){
            clearInterval(countdown)
            button.click()
        }
    }, 1000);}
}
function removeQuestionAndAswer(){
dataQuestion.style.display="none"
}
function mixArray(array){
    for(let i=array.length-1;i>0;i--){
        let b=Math.floor(Math.random()*(i+1))
        temp=array[i];
        array[i]=array[b]
        array[b]=temp
}}
function makeArray(resultLength,array){
    
for(let i=0;i<resultLength;i++){
    array[i]=i
}
}