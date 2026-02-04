// console.log("Hello Students")
 
// let obj= {
//     type:"wooden",
//     color: "green"
// }


// const para=document.querySelector(".para")
// para.innertext="this is a paragraph"
// para.style.color="blue"
// console.log(para)

// const para=document.getElementsByClassName("para")
// para[0].innertext="this is a new paragraph"
// para[1].style.color="green"
// console.log("para");

// let notes= document.querySelectorAll(".note");
// notes.foreach(note => console.log(note.textcontent));


// function message(event)
// {
//     console.log(event.key)
//     // alert("you have clicked the button")
// }
// const btn= document.querySelector("button")
// btn.classList.add("btn")
// // btn.classlist.remove("btn")
// // btn.addEventListener('click',message)
// btn.addEventListener('keydown',message)
// // btn.addEventListener('keyup',message)
// // btn.removeEventListener('click',message);


// const form= document.querySelector("form")
// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     console.log("form submited")
// })


// const container=document.querySelector('.container')
// const outer=document.querySelector('.outer')
// const button=document.querySelector('button')


// container.addEventListener('click',()=>{console.log("Div")})
// outer.addEventListener('click',()=>{console.log("outer div")})
// button.addEventListener('click',()=>{console.log("button")})


// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     if(name.value===""){
//         alert("enter the name!!")
//         return;
//     }
//     const li=document.createElement('li')
//     const dlt=document.createElement('button')
//     dlt.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removechild[li]
//     })
//     li.appendchild{li}
// })

// console.log("Forst Line")
// setTimeout()=>{
//     console.log("after 2 ")}

// function print(num){
//     setTimeout(()=>{
//         console.log("inside print")
//         num()
//     },2000)
    
// }
// function sample(){
//     console.log("inside callback")
// }

// print(sample)

// console.log ("hello world")

// console.log("Starting homework...");
// setTimeout(() => {
//     console.log("homework done!");
//     console.log("starting dinner...");

//     setTimeout(() => {
//         console.log("dinner done!");
//         console.log("getting ready to go out")

//         setTimeout(() => {
//             console.log("going to the playground");
//         })
//     })

// })



function finishHomework(callback) {
    console.log("starting homework...");
    setTimeout(() => {
        console.log("homework done!");
    }
)
}