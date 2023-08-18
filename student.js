const apply=document.getElementById("applyod")
document.getElementById("applyodbtn").addEventListener("click",(event)=>{
    event.preventDefault();
    apply.classList.add("view")
})

const statusbar=document.getElementById("statusbar")
document.getElementById("statusbtn").addEventListener("click",(event)=>{
    event.preventDefault();
    statusbar.classList.add("view")
})

const history=document.getElementById("history")
document.getElementById("historybtn").addEventListener("click",(event)=>{
    event.preventDefault();
    history.classList.add("view")
})

const submitod=document.getElementById("applyod")
document.getElementById("odsubmit").addEventListener("click",(event)=>{
    event.preventDefault();
    submitod.classList.remove("view")
})