import { CtaBtn } from "./cta-btn";

export function RegisterForm() {
    return (
        <div className="register__form">
            <form>
                <input type="text" placeholder="your name" required/>
                <input type="text" placeholder="your lastname" required/>
                <input type="email" placeholder="your email" required/>
                <input type="password" placeholder="your password" required/>
                <input type="text" placeholder="referral code ( optional )" optional/>
                <label for="agree-checkbox">
                    <input type="checkbox" required name="agree-checkbox" id="agree-checkbox"/>
                    <p>I HAVE READ AND AGREE TO THE WEBSITE TERMS AND CONDITIONS</p>
                </label>
                <CtaBtn btnText="submit"/>
            </form>
        </div>
    )
}