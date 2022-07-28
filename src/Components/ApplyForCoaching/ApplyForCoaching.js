import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ApplyForCoaching = () => {
  const form = useRef();

  let contact_number = (Math.random() * 100000) | 0;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "soulshine_inquiry",
        "alex_emailjs_test",
        form.current,
        "xqnRjtKkd6GIUJTTU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" value={contact_number} />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone Number</label>
      <input type="tel" name="user_phone" pattern="[0-9]{10}" />
      <label>What is your BIGGEST health goal?</label>
      <textarea name="health_goal" />
      <label>Why do you think you haven't hit the above goals yet?</label>
      <textarea name="obstacle" />
      <label>
        Are there any specific reasons why you would like to work with us?
      </label>
      <textarea name="why_us" />
      <label>
        On a scale of 1-10 (low to high), how comitted are you to achieving your
        goals?
      </label>
      <input type="text" name="commitment_level" />
      <label>
        How did you hear about us?
      </label>
      <input type="text" name="hear_about_us" />
      <input type="submit" value="Send" />
    </form>
  );
};

// import React from "react";

// const ApplyForCoaching = () => {
//   return (
//     <div id="landing">
//       <h2>ApplyForCoaching</h2>
//       <form id="contact-form">
//         <input type="hidden" name="contact_number" />
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message"></textarea>
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   );
// };

export default ApplyForCoaching;
