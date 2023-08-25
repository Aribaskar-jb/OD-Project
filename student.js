//  view od card
const apply=document.getElementById("applyod")
document.getElementById("applyodbtn").addEventListener("click",(event)=>{
    event.preventDefault();
    apply.classList.add("view") 
    let login = document.cookie.split(",");
    document.getElementById("rollno").value = login[0].slice(-6);
    document.getElementById("rollno").disabled = true;
          if(login[0].includes("cs")){
               department="CSE"
            }else if(login[0].includes("it")){
                department="IT"
            }else if(login[0].includes("ai")){
                department="AIDS"
            }
            else if(login[0].includes("ec")){
                department="ECE"
            }
            else if(login[0].includes("me")){
                department="MECH"
            }
            else if(login[0].includes("cb")){
                department="CSBS"
            }               
     document.getElementById("dept").value=department;
     document.getElementById("dept").disabled=true;

     let curyear=new Date().getFullYear().toString().slice(-2)
     let month = new Date().getMonth()+1
     let joinyear = login[0].slice(-6,-4)
     let years=curyear-joinyear;
     if(month>=7 && years < 1 || month<7 && years<2){
        pursuing="1st"
     }else if(month>=7 && years<2 || month<7 &&  years<3){
         pursuing="2nd"
     }else if(month>=7 &&  years<3 || month<7 &&  years<4){
         pursuing="3rd"
     }
     else if(month>=7 &&  years<4 || month<7 &&  years<5){
         pursuing="4th"
     }
     alert(pursuing)
     document.getElementById("year").value=pursuing; 
     document.getElementById("year").disabled=true;
}
)

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