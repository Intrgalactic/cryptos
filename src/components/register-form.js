import { useRef, useState } from "react";
import { CtaBtn } from "./cta-btn";

export function RegisterForm() {
    const userPersonalData = useRef({
        name: "",
        lastName: "",
        email: "",
        password: "",
    })
    const emailRegEx =  new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
    const passwordRegEx = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    const numberRegEx = new RegExp(/(?=.*?[0-9])/);
    const specialCharRegEx = new RegExp(/(?=.*?[#?!@$%^&*-])/);
    const lowLetterRegEx = new RegExp(/(?=.*?[a-z])/);
    const upperLetterRegEx = new RegExp(/(?=.*?[A-Z])/);
    const [validateErr,setValidateErr] = useState();
    function validateForm(e) {
        e.preventDefault();
        for (const [key,value] of Object.entries(userPersonalData.current)) {
            if (value === "") {
                console.log(key);
                setValidateErr(`Empty ${key}`);
                return false;
            }
        }
        if (!emailRegEx.test(userPersonalData.current.email)) {
            setValidateErr('Wrong E-mail Format');
            return false;
        }
        if (!passwordRegEx.test(userPersonalData.current.password)) {
            if (userPersonalData.current.password.length < 8) {
                setValidateErr("Too short password");
                return false;
            }
            if (!numberRegEx.test(userPersonalData.current.password)) {
                setValidateErr("Password must contain atleast one digit");
                return false;
            }
            if (!specialCharRegEx.test(userPersonalData.current.password)) {
                setValidateErr("Password must contain atleast one special character");
                return false;
            }
            if (!lowLetterRegEx.test(userPersonalData.current.password)) {
                setValidateErr("Password must contain atleast one low character");
                return false;
            }
            if (!upperLetterRegEx.test(userPersonalData.current.password)) {
                setValidateErr("Password must contain atleast one uppercase character");
                return false;
            }
        }
        setValidateErr(false);
        return true;
    }
    return (
        <div className="register__form">
            <form>
                <input type="text" placeholder="your name" required onChange={(e) => {userPersonalData.current.name = e.target.value}}/>
                <input type="text" placeholder="your lastname" required onChange={(e) => {userPersonalData.current.lastName = e.target.value}}/>
                <input type="email" placeholder="your email" required onChange={(e) => {userPersonalData.current.email = e.target.value}}/>
                <input type="password" placeholder="your password" required onChange={(e) => {userPersonalData.current.password = e.target.value}}/>
                <input type="text" placeholder="referral code ( optional )" optional/>
                <label for="agree-checkbox">
                    <input type="checkbox" required name="agree-checkbox" id="agree-checkbox"/>
                    <p>I HAVE READ AND AGREE TO THE WEBSITE TERMS AND CONDITIONS</p>
                </label>
                {validateErr && <font className="register__form-err">{validateErr}</font>}
                <CtaBtn btnText="submit" action={validateForm}/>
            </form>
        </div>
    )
}