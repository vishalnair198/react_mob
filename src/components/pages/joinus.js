import React, {useEffect} from 'react';
import emailjs from 'emailjs-com';
import aos from 'aos';
import "aos/dist/aos.css";
import Navbar from '../Navbar';
import './joinus.css';
import hands from '../../assets/handes.png';
import horizone from '../../horizone.png';
import rbc from '../../assets/rbc.png';
import wings from '../../assets/wings.png';
import wc from '../../WC.png';
import pupn from '../../assets/pu.png';

function sendEmail(e) {
    
    e.preventDefault();

    emailjs.sendForm('service_69dmsge', 'template_vzun5ao', e.target, 'user_CbBx0n49Mq2OsKNdERjiu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

 function Joinus(){
    useEffect(() => {
        aos.init({});
    }, []);
   
    return (
        <div className="joinus">
            <div class="frostedo">
                <div class = "navd">
                    <Navbar/>
                </div>
            </div>
            
            <section className="secfront">
               
            </section>
            <img src={pupn} alt=""  class="pudin"></img>
           <div data-aos="flip-left" class="container">
           <img src={wc} alt=""  class="d"></img>
           <img src={hands} alt="" class="hand"></img>
           <img src={horizone} alt="" class="hor"></img>
           <img src={rbc} alt="" class="rbc"></img>
           <img src={wings} alt="" class="wings"></img>
           <img src={pupn} alt="" class="pupn"></img>
            <form onSubmit={sendEmail} class="rcform">
            
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Full Name</div>
                <input type="text" name="name"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Contact number</div>
                <input type="text" name="contact" />
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Email</div>
                <input type="text" name="email"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Date of Birth</div>
                <input type="text" name="dob"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Address</div>
                <input type="text" name="address"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Blood group</div>
                <input type="text" name="blood"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">college name</div>
                <input type="text" name="college"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Branch</div>
                <input type="text" name="branch"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">member of rcpu before yes/no</div>
                <input type="text" name="member"/>
            </div>

            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">payment date</div>
                <input type="text" name="pdate"/>
            </div>
            <input type="submit" class= "submi"value="Send" />
         
        </form>
    </div>
           
        
        </div>
       
    );
}

export default Joinus;