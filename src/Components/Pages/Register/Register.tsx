import "./Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterModel } from "../../../Models/Register";
function Register(): JSX.Element {
    const schema = yup.object().shape({
        firstName:
            yup.string()
                .required("first name is required"),
        lastName:
            yup.string()
                .required("Last name is required"),
        email:
            yup.string()
                .email("Invalid Email format")
                .required("Email is required"),
        password:
            yup.string()
                .length(4,"Password must be at least 4 characters")
                .required("Password is required"),
        confirm:
            yup.string()
                .required("Confirm password is required")
                .oneOf([yup.ref('password')]) 
    })

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<RegisterModel>({ mode: "all", resolver: yupResolver(schema) });
        const sendDataToRemoteServer= (Login:RegisterModel) =>{
            console.log("Sending to remote server");
        }   
    return (
        <div className="Register">
				<h1>This is Register</h1>      
<form onSubmit={handleSubmit(sendDataToRemoteServer)}>

{errors?.firstName && <span>{errors.firstName.message}</span>}
<input {...Register("firstName")} type="text" placeholder="First Name..." name="first"/>

{errors?.lastName &&<span>{errors.lastName.message}</span>}
<input {...Register("lastNnme")} type="text" placeholder="Last Name..." name="last"/>

{errors?.email&&<span>{errors.email.message}</span>}
<input {...Register("email")} type="email" placeholder="Email..." name="email"/>

{errors?.password&&<span>{errors.password.message}</span>}
<input {...Register("password")} type="password" placeholder="password..." name="password"/>

{errors?.confirm&&<span>{errors.confirm.message}</span>}
<input {...Register("confirm")} type="password" placeholder="Confirm password" name="Confirm"/>

<button disabled={!isValid}>Send</button>
            </form>	
        </div>
    );
}

export default Register;
