import React from 'react';
class Signup extends React.Component{

  constructor(){
    super()
    this.state={
      registerName:'',
      registerEmail:'',
      registerPassword:''
    }
  }

  onNameChange=(event)=>{
    this.setState({registerName:event.target.value})
  }
  onEmailChange=(event)=>{
    this.setState({registerEmail:event.target.value})
  }
  onPasswordChange=(event)=>{
    this.setState({registerPassword:event.target.value})
  }
//   onRegisterButton=()=>{
//     fetch("http://localhost:3000/register",{
//       method:'post',
//       headers:{'Content-Type':'application/json'},
//       body: JSON.stringify({
//         email:this.state.registerEmail,
//         password:this.state.registerPassword,
//         name:this.state.registerName
//       })
//     }).then(response=>response.json())
//     .then(user=>{
//       if(user){
//         this.props.loadUser(user)
//         this.props.onRouteChange("signin")
//       }
//     })
//     this.props.onRouteChange('register')
//   }
    onLoginClick=()=>{
        window.location="./login"
    }
  render(){
    return(
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0 white">Register</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Name</label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-black white w-100"
                        type="text"
                        name="name"
                        id="name"
                        onChange={this.onNameChange}

                      />
                    </div>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-blck white w-100"
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
                  </fieldset>
                  <div className="">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white"
                      type="submit"
                      value="Register"
                      onClick = {this.onRegisterButton}
                    />
                  </div>
                  <div className="lh-copy mt3">
                  <p  className="f6 link dim black db pointer white" onClick={this.onLoginClick}>Sign In</p>
                  </div>
                </div>
              </main>
      </article>
          )
  }
   
}
export default Signup;