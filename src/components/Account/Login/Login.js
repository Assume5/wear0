import React from 'react';

class Login extends React.Component{
  constructor(){
    super()
    this.state={
      SigninEmail:'',
      SigninPassword:''
    }
  }

  onEmailChange=(event)=>{
    this.setState({SigninEmail:event.target.value})
  }
  onPasswordChange=(event)=>{
    this.setState({SigninPassword:event.target.value})
  }
  onRegisterClick=()=>{
      window.location="./signup"
  }
  onSubmitSignIn=()=>{
    // console.log(this.state)
    // fetch("http://localhost:3000/signin",{
    //   method:'post',
    //   headers:{'Content-Type':'application/json'},
    //   body: JSON.stringify({
    //     email:this.state.SigninEmail,
    //     password:this.state.SigninPassword
    //   })
    // }).then(response=>response.json())
    // .then(data=>{
    //   if(data==='success'){
    //     this.props.onRouteChange("home")
    //   }
    // })
    window.location="./account"
  }
  render(){
    return(
      <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center black">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
                    <div className="mt3 black-025">
                      <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100 white"
                        type="email"
                        name="email-address"
                        id="email-address"
                        onChange={this.onEmailChange}
                      />
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-black white w-100"
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.onPasswordChange}
                      />
                    </div>
                    <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                  </fieldset>
                  <div className="">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white"
                      type="submit"
                      value="Sign in"
                      onClick = {this.onSubmitSignIn}
                    />
                  </div>
                  <div className="lh-copy mt3">
                    <p  className="f6 link dim black db pointer white" onClick={this.onRegisterClick}>Register</p>
                  </div>
                </div>
              </main>
            </article>
          )
  }

}
export default Login;