import React from 'react';

class Home extends React.Component{
    render()
    {
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
                        <form>
                            <h1 style = {{color:'#fff'}}> Sign In</h1>
                            <div class = "LoginInputBox">
                                <input class = "inputBox" id="username" type = "text" value=""/>
                                <label for = "username" id="label1">Email or phone number</label>
                            </div>
                            <p id = "errorPrompt">Please enter a valid email address or phone number.</p>
                
                            <div class = "LoginInputBox"> 
                                <input class = "inputBox" id="password" type = "password" value=""/>  
                                <label for = "password" id="label2">Password</label>
                            </div>
                            <p id = "errorPrompt">Your password must contain between 4 and 60 characters.</p>
                            <button type = "submit"> Sign In</button> 
                        </form>
                        <div class="Remember">
                                <div style={{display:'inline'}}>
                                    <input type="checkbox" id="remember"/>
                                    <label for="remember">Remember me</label>
                                </div>
                                <a href="#">Need help?</a>
                            </div>
                            <div class="LoginFooter">
                            <div>
                                <p>New to Netflix?</p>
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
}

export default Home;