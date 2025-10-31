import * as yup from "yup"


export const loginschema = yup.object().shape({
    name: yup.string().required("User name is required"),
    email:yup.string().email("Enter a valid E-mail").required("E-mail is required"),
    password:yup.string().min(5,"Password must contain atleast 5 character").required("Password is must")
})