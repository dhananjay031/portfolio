import React from "react";


function Intro(){
   return <div className="me">
     <div><img src={require('./images/dhananjaymain.jpeg')} alt="Dhanannjay's pic" className="imgContainer"></img></div>
     <div>
 <div className="introContainer">
        <h1 className="title"> Hii, i'm Dhananjay </h1>
        <h3 className="subTitle"> Front-end Engineer</h3>
        <p className="info">Hello! I'm a frontend engineer who loves 
            turning designs into user-friendly websites. 
            I'm passionate about clean code and creating web 
            experiences that are both visually appealing and functional. 
            Let's collaborate to bring your digital
             ideas to life and make them shine on the web.</p>
     </div>
     <div className="chatButton"> Lets chat  </div>
     </div>
    
   </div>
}


export default Intro;