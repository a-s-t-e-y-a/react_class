import Heading from "../components/heading_signup_login";
import Input from "../components/input_components_signup";
import ButtonComponnet from "../components/button_component";
import * as EmailValidator from "email-validator";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState(""); // here is implementation of the state hook
  const [email, setemail] = useState(""); // here is implementation of the state hook
  const [password, setpassword] = useState(""); // here is implementation of the state hook
  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setemail(e.target.value);
  }
  function handlePassword(e) {
    setpassword(e.target.value);
  }
  function afterClick(e) {
    e.preventDefault();
    if (name == "" || email == "" || password == "") {
      alert("enter the all information");
    } else if (/[^a-zA-Z]/.test(name)) {
      alert("enter the valid name");
    } else if (!EmailValidator.validate(email)) {
      alert("enter the valid email");
    } else {
      console.log("name:-", name);
      console.log("email:-", email);
      console.log("password:-", password);
    }
  }
  return (
    <>
      <div className="flex items-center justify-center px-4 py-10">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <form onSubmit={afterClick}>
            <Heading heading="Sign up" />
            <Input textProperty="Name" onchnage={handleName} />
            <Input textProperty="Email" onchnage={handleEmail} />
            <Input textProperty="Password" onchnage={handlePassword} />
            <ButtonComponnet ButtonText="Signup" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
