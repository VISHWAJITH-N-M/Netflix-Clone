import React, { useEffect, useState } from "react";
import Validation from './Validation'
function Home(){


    const submitlogin = () => {
        fetch('http://localhost:8989/login', {
            method: 'post',
            body: JSON.stringify({
              username: values.name,
              password: values.password,
             
            }),
            headers: {
              'Content-type': 'application/JSON',
            },
          })
            .then((res) => res.json())
            .then((datas) => {
              if (datas['$oid']) {
                alert('done')
              } else {
                alert('error')
              }
              
            })

    }
    
    const [values, setValues] = useState(
            {
                name: '',
                password: ''
            }
        );

        const [errors, setError] = useState({})

        function handleChange(e)
        {
            setValues({...values, [e.target.name]: e.target.value})
        }
        function handleSubmit(e)
        {
            e.preventDefault();
            setError(Validation(values));
            if(!error.name && !errors.password)
            {
                submitlogin();
            }
            else
            {

            }
        }
        return(
            <div>
                <div class="LoginBackground">
                <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                srcset="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
                />  
                </div>
                <div class = "Header">
                    <img src = "./assests/logo.svg" />
                </div>
                <div class ="LoginContainer">
                    <div class="LoginLayout">
                        <form onSubmit = {handleSubmit}>
                            <h1 style = {{color:'#fff'}}> Sign In</h1>
                            <div class = "LoginInputBox">
                                <input class = "inputBox" id="username" placeholder="Email or phone number" type = "text" value={values.name} name="name" onChange={handleChange}/>
                                
                            </div>
                            {errors.name && <p id = "errorPrompt">{errors.name}</p>}
                
                            <div class = "LoginInputBox"> 
                                <input class = "inputBox" id="password" placeholder = "Password" type = "password" value={values.password} name="password" onChange={handleChange}/>  
                               
                            </div>
                            {errors.password && <p id = "errorPrompt">{errors.password}</p>}
                            <button type = "submit"> Sign Up</button> 
                        </form>
                        <div class="Remember">
                                <div style={{display:'inline'}}>
                                    <input type="checkbox" id="remember"/>&nbsp;&nbsp;
                                    <label for="remember">Remember me</label>
                                </div>
                                <a href="#">Need help?</a>
                            </div>
                            <div class="LoginFooter">
                            <div>
                                <p>New to Netflix?</p> &nbsp;
                                <a style={{color: '#fff', textDecoration: 'none'}} href="#" >Sign up now.</a>
                            </div>
                            <p>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.<span id="learnMore" onclick="makeVisible()" style={{cursor:'pointer', color:'#0000FF'}}>Learn more.</span>
                            </p>
                            <p id="hidden">
                            The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
       
}

export default Home;