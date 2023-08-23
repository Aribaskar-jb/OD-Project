//  view od card
const apply=document.getElementById("applyod")
document.getElementById("applyodbtn").addEventListener("click",(event)=>{
    event.preventDefault();
    apply.classList.add("view") 
})

//view status bbar
const statusbar=document.getElementById("statusbar")
document.getElementById("statusbtn").addEventListener("click",(event)=>{
    event.preventDefault();
    statusbar.classList.add("view")
})

//view history 
const history=document.getElementById("history")
document.getElementById("historybtn").addEventListener("click",(event)=>{
    event.preventDefault();
    history.classList.add("view")
})

//submit od
// const submitod=document.getElementById("applyod")
// document.getElementById("odsubmit").addEventListener("click",(event)=>{
//     event.preventDefault();
//         let studentName=document.getElementById("studentname").value
//         let mentorName=document.getElementById("mentor").value
//         let reason=document.getElementById("reasonforod").value
//         let formdate=document.getElementById("formdate").value
//         let todate=document.getElementById("todate").value
//         let year=document.getElementById("inputGroupSelect01").value
//         let department=document.getElementById("inputGroupSelect02").value 
//     console.log(studentName,mentorName,reason,formdate,todate,year,department)
//     submitod.classList.remove("view")
// })