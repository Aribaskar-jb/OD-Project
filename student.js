const apply=document.getElementById("applyod")
document.getElementById("applyodbtn").addEventListener("click",(event)=>{
    event.preventDefault();
    apply.classList.toggle("view") 
    document.getElementById("rollno").value=username;
    document.getElementById("rollno").disabled=true;
   
    if(username.includes("CS")){
        department="cse"
     }else if(username.includes("IT")){
         department="it"
     }else if(username.includes("AI")){
         department="aids"
     }
     else if(username.includes("EC")){
         department="ece"
     }
     else if(username.includes("ME")){
         department="mech"
     }
     else if(username.includes("CB")){
         department="csbs"
     }               
document.getElementById("studentDept").value=department;
document.getElementById("studentDept").disabled=true;

let curyear=new Date().getFullYear().toString().slice(-2)
     let month = new Date().getMonth()+1
     let joinyear = username.slice(0,2)
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
     document.getElementById("studentYear").value=pursuing; 
     document.getElementById("studentYear").disabled=true;
})

//view status bbar
const statusbar=document.getElementById("statusbar")
document.getElementById("statusbtn").addEventListener("click",(event)=>{
    event.preventDefault();
    statusbar.classList.toggle("view")
})

//view history 
const history=document.getElementById("history")
document.getElementById("historybtn").addEventListener("click",(event)=>{
    event.preventDefault();
    history.classList.toggle("view")
})

const profile=document.getElementById("profilebtn")
profile.addEventListener("click",(event)=>{
    event.preventDefault()
    const userDetails = getUserDetails()
    console.log(userDetails)
    document.querySelector(".text-body-emphasis.h4").innerText=userDetails.userName
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

// document
// .getElementById("historybtn")
// .addEventListener("click", async (event) => {
//   event.preventDefault();
//   try {
//     data.forEach(async (info) => {
//       let dataset = info.data();
//       let login = document.cookie.split(",");
//       const docRef = doc(db, "users", info.id);
//       if (dataset.username == login[0]) {
//       let odlist = dataset.odlist;
//       for (const odRequest of odlist) {
//       // Access the "mentor" property within the current OD request object
//       if(odRequest.mentor!="pending" && odRequest.hod!="pending" && odRequest.principal!="pending"){
//         const reason = odRequest.Reason;
//       const date = odRequest.OdFrom;
//       const todate = odRequest.To;
//       const principalstatus = odRequest.principal;

//       var table=document.getElementById("odHistory");
//       let temp=`
//       <tr>
//       <td id="mencho">${reason}</td>
//       <td id="hodcho">${date}</td>
//       <td id="hodcho">${todate}</td>
//       <td id="princho">${principalstatus}</td>
//       </tr>`
//       table.innerHTML+=temp;
//       console.log("Mentor Status:", reason);
//       }
      
//     }
//     }})
  
// }catch (error) {
//     console.log("Upload error:", error);
//   }
// },{once:true});

function getUserDetails()
{
    var cookies = document.cookie.split(";"); // Split the cookies string into an array
    var myCookieValue = null;
    
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith("myCookie=")) {
        myCookieValue = cookie.substring("myCookie=".length);
        break; // Exit the loop once we find the myCookie
      }
    }

    return JSON.parse(myCookieValue)

}
let username =  getUserDetails().userName.toUpperCase();