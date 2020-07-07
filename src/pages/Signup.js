import React from 'react';
import '../App.css';
import {urlAPI} from '../Constants';
import { Redirect } from 'react-router-dom';
import SU from "../SignUp.jpg";

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {firstName: "", lastName: "", email: "", username: "", password: "", pwdConfirmation: "", createSuccess: false}
	}

	changeAttribute = (event) => {
		const fieldName = event.target.id;
		const value = event.target.value;
		this.setState({
			[fieldName]: value
		})
	}

	runQuery = (event) => {
		const createUserUrl = urlAPI + "createUser/?username=" + this.state.username + "&password=" + this.state.password + "&email=" + this.state.email + "&firstName=" + this.state.firstName + "&lastName=" + this.state.lastName;
		fetch(createUserUrl, {method: 'POST'})
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({createSuccess: true})
				},
				(error) => {
					// Code if shit hit the fan
				}
			);

	}


	render() {
		if(this.state.createSuccess){
			return <Redirect to={'/Signin'} />
		}
		let btn = "";
		if(this.state.firstName && this.state.lastName && this.state.email && this.state.username && this.state.password && this.state.password === this.state.pwdConfirmation){
			btn = <input type="button" value="Sign Up" onClick={this.runQuery} />
		} else {
			btn = <input type="button" value="Incomplete" onClick={this.runQuery} disabled={true}/>
		}
		return (
			<div className="columns is-vcentered" style={{padding:50}}>
					<div className="column is-7">
					   <img src={SU} className="App-logo" alt="logo"/>
				   </div>
				<div className="column">
				 <h1>Sign Up</h1>
				 <form>
					 <input type="text" style={{maxWidth:300}} id="firstName" value={this.state.firstName} onChange={this.changeAttribute} placeholder= "First Name" />
					 <br/>
					 <input type="text" style={{maxWidth:300}} id="lastName" value={this.state.lastName} onChange={this.changeAttribute} placeholder= "Last Name" />
					 <br/>
					 <input type="text" style={{maxWidth:300}} id="email" value={this.state.email} onChange={this.changeAttribute} placeholder= "Email" />
					 <br/>
					 <input type="text" style={{maxWidth:300}} id="username" value={(this.state.username)}  onChange={this.changeAttribute} placeholder= "Username" />
					 <br/>
					 <input type="password" style={{maxWidth:300}} id="password" value={this.state.password} onChange={this.changeAttribute} placeholder= "Password" />
					 <br/>
					 <input type="password" style={{maxWidth:300}} id="pwdConfirmation" value={this.state.pwdConfirmation} onChange={this.changeAttribute} placeholder= "Confirm Password" />
					 <br/>
					 {btn}

					</form>

			 	</div>
			</div>
		);
	}
}
 
export { SignUpForm };