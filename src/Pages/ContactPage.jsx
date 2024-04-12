import "./ContactPage.css";
import contact from "../assets/contact.jpg";
import React from "react";

const ContactPage = ({ theme, setTheme }) => {
    const [formStatus, setFormStatus] = React.useState("Send");
    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus("Submitting...");
        const { name, email, message } = e.target.elements;
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        console.log(conFom);
    };
    return (
        <div className="contactpage">
            <div className="contact">
                <div className="contact1">Contact Us</div>
                <img className="piccs" src={contact} alt="" />
            </div>

            <div className="formss">
                <form onSubmit={onSubmit} className="forms">
                    <div className="name">
                        <div className="name1">Your Name</div>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="email">
                        <div className="name1">Mail</div>
                        <label htmlFor="email"></label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="message">
                        <div className="name1">Message</div>
                        <label htmlFor="message"></label>
                        <textarea id="message" required className="name2" />
                    </div>
                    <button className="button" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
        </div>
    );
};
export default ContactPage;
// function ContactPage() {
//     return (
//         <div className='contactpage'>
//             <div className='contact'>Contact Us</div>
//             <div className='cont'>
//                 Email
//             </div>
//         </div>
//     );
// }

// export default ContactPage;
