
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oo3bl2f', 'template_nrmgky5', form.current, 'yNwR3y5_9SxfnrqWs')
     e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
              <MdOutlineMail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>badaldp1977@gmail.com</h5>
              <a href="mailto:badaldp1977@gmail.com" target='-blank'>Send a message</a>
          </article>
          <article className="contact_option">
              <RiMessengerLine className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h5>egatortutorials</h5>
              <a href="https://m.me/ernest.achiever" target='-blank'>Send a message</a>
          </article>
          <article className="contact_option">
              <BsWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>01728442503</h5>
              <a href="https://api.whatsapp.com/send?phone=01728442503" target='-blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact