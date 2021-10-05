import React,{ useState } from "react";

function App(){
   const [isMouse,setIsMouse]=useState(false);
   const [contact,setContact]=useState({
      fname:"",
      lname:"",
      email:""
   })

   function handleEvent(e){
      const {name,value}=e.target;
      setContact(preVal=>({...preVal,[name]:value}));
   }
   return(<div className="container">
      <h1>Hello {contact.fname} {contact.lname}</h1>
      <p>{contact.email}</p>
      <input type="text" name="fname" value={contact.fname} onChange={handleEvent} placeholder="first Name"/>
      <input type="text" name="lname" value={contact.lname} onChange={handleEvent} placeholder="Last Name" />
      <input type="text" name="email" value={contact.email} onChange={handleEvent} placeholder="email" />
      <button style={{backgroundColor:isMouse?"black":"white"}} type="submit" onMouseOver={()=>setIsMouse(true)} onMouseOut={()=>setIsMouse(false)}>submit</button>
   </div>) ;
}

export default App; 