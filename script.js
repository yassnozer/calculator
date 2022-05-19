let display=document.getElementById('display')
let buttons=Array.from (document.getElementsByClassName('button'))
console.log(buttons)
let term="btata"
console.log(term.slice(0,-1))
buttons.map(
    button => {
        button.addEventListener('click',e=>{
switch(e.target.innerText){
    case'C':
    display.innerText=""
    break;
    case'←':
    if(display.innerText){display.innerText=display.innerText.slice(0,-1)}
break;
case'=':
try{display.innerText=eval(display.innerText)}
catch{display.innerText="ERROR"}
break;
    default:
        display.innerText+=e.target.innerText
}
        })
    }
)