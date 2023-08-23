import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
      import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";
      import {
        getFirestore,
        collection,
        addDoc,
        getDocs,
      } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";
      const firebaseConfig = {
        apiKey: "AIzaSyCb5rHQgaeYJgHFapU_KkpSobPoWCezFhA",
        authDomain: "od-project-b00da.firebaseapp.com",
        projectId: "od-project-b00da",
        storageBucket: "od-project-b00da.appspot.com",
        messagingSenderId: "309156647421",
        appId: "1:309156647421:web:ae8a858791f279acf14994",
        measurementId: "G-6YBET1MVLK",
      };

      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const auth = getAuth();

      document
        .getElementById("usersignup")
        .addEventListener("click", async (event) => {
          event.preventDefault();
          const signupUsername = document.getElementById("signuptext").value;
          const signupPassword =
            document.getElementById("signuppassword").value;
            let count =0;
          try {
            const db = getFirestore(app);
            const usersCollection = collection(db, "users");
            const data = await getDocs(collection(db, "users"));
            data.forEach(async(doc) => {
              let data=doc.data()
              let userdataname=data.username
              if (userdataname == signupUsername){
                /* alert("username already exists")
                document.getElementById("signuptext").value=""
                document.getElementById("signuppassword").value="" */
                count +=1;
              }

               /*  const userDoc = await addDoc(usersCollection, {
                username: signupUsername,
                password: signupPassword,
            }); */
            /* document.getElementById("signuptext").value=""
            document.getElementById("signuppassword").value="" */
            })
            /* console.log("User data stored in Firestore:", userDoc); */
           /* document.getElementById("signuptext").value=""
           document.getElementById("signuppassword").value="" */
           if(count==0){
                const userDoc = await addDoc(usersCollection, {
                username: signupUsername,
                password: signupPassword,
              });
             document.getElementById("signuptext").value=""
            document.getElementById("signuppassword").value="" 
              }
          else{
            alert("username already exists")
                document.getElementById("signuptext").value=""
                document.getElementById("signuppassword").value=""
          }
          } catch (error) {
            console.log("Signup error:", error);
          }
        });
      /* export const signinUsername=document.getElementById("signintext").value */
      document
        .getElementById("usersignin")
        .addEventListener("click", async (event) => {
          event.preventDefault();
          const userarr=[]
          try {
            const db=getFirestore(app);
            const data = await getDocs(collection(db, "users"));
            var signinUsername=document.getElementById("signintext").value
            let signinpassword=document.getElementById("signinpassword").value
            data.forEach(async (doc) => {
              let data=doc.data()
              let userdataname=data.username
              let userdatapassword=data.password
              /* console.log(doc.data());
              console.log(userdataname,userdatapassword)
              userarr.push({
                "username":userdataname,
                "password":userdatapassword
              })  */
             /* const event = new CustomEvent("loginData", { detail: signinUsername });
              document.dispatchEvent(event);  */
              if(signinUsername==userdataname){
                /* window.loginname=userdataname; */
                /* window.myVariable = "Hello from file1.js"; */
                console.log(signinUsername)
                // const usersCollection = collection(db, "currentuser");
                // const userDoc = await addDoc(usersCollection, {
                //   username: signinUsername
                // })
                
                if(signinpassword==userdatapassword){
                  document.cookie=[signinUsername,signinpassword]
                  if(signinUsername.includes("mentor")){
                        window.location.href = 'mentor.html'
                    }else if(signinUsername.includes("hod")){
                        window.location.href = 'hod.html'
                    }else if(signinUsername.includes("principal")){
                        window.location.href = 'principal.html'
                    }
                    else{
                        window.location.href = 'student.html'
                    }
                    document.getElementById("username").value=""
                    document.getElementById("password").value=""
                }
                else
                  alert("Incorrect username and password")
              }
              
            }
  
            );
            /* console.log(userarr)
            let signinUsername=document.getElementById("signintext").value
            let signinpassword=document.getElementById("signinpassword").value
            for(let i=0;i<userarr.length;i++){
              if (signinUsername == userarr[i].username){
                console.log("correct")
              }
              else{
                console.log("false")
              }
            } */
          } catch (error) {
            console.log(error);
          }
        });
        /* export default loginname; */