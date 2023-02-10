import { FaDotCircle, FaEnvelope, FaFacebookSquare, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
export default function Contact() {
    return(
        <>
         <div class="body-title-02" >
        Want to know more, contact me!
      </div>

      <div class="bd-05">
        <div class="contact-information">
          <div class="contact-01">
            <div>
              <FaEnvelope size={25}/>
              <p>pattietrusdale@gmail.com</p>
            </div>

            <div>
              <FaPhone size={25}/>
              <p>+8421 223 2234</p>
            </div>

            <div>
            <FaDotCircle size={25}/>
              <p>34 Milwaukee Avenue</p>
            </div>
          </div>
        </div>

        <div class="contact-information-02">
          <div class="contact-02">
            <div class="contact-social">
              <FaGithub size={25}/>
              <p>github.com/pattietrusdale</p>
            </div>

            <div class="contact-social">
              <FaLinkedin size={25}/>
              <p>linkedin.com/in/pattie-trusdale-34...</p>
            </div>

            <div class="contact-social">
              <FaFacebookSquare size={25}/>
              <p>facebook.com/pattie.trusdale</p>
            </div>
          </div>
        </div>
      </div>

      
    </>
    )
}