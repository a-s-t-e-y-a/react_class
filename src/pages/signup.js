import { Button } from "bootstrap";
import Heading from "../components/heading_signup_login";
import Input from "../components/input_components_signup";
import ButtonComponnet from "../components/button_component";

function Signup() {
  return (
    <>
      <div className="flex items-center justify-center px-4 py-10 ">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <Heading heading="Sign up" />
          <Input textProperty="Name" />
          <Input textProperty="Email" />
          <Input textProperty="Password" />
          <ButtonComponnet ButtonText = "Signup"/>
        </div>
      </div>
    </>
  );
}
export default Signup;
