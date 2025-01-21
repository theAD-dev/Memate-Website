
import "./style.css";
import { Helmet } from 'react-helmet';
import style from './contactus.module.scss';
import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog } from 'primereact/dialog';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useNavigate } from 'react-router-dom';
// import { RequestCallBackAPI } from '../../api/contactAPI';
import TronButton from "../../layout/hover-button/tourn-but";


const ContactUsMainImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/max.n.max_An_Office_Girl.png"
const ContactUsComponent = () => {

  const [visible, setVisible] = useState(false);
  const [visibleEmail, setVisibleEmail] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // Define your validation schema
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    phone_number: yup.string()
      .required("Phone number is required")
      .matches(/^\+\d{1,3}\d{4,14}$/, "Invalid phone number format"),
  });

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data) => {
    // if (!captchaValue) {
    //   setError("Please complete the CAPTCHA.");
    //   return;
    // }
    try {
      // const result = await RequestCallBackAPI(data); 
      // console.log("Form submitted successfully:", result);
      reset();
      setVisible(false);
      setVisibleEmail(false);
      navigate("/thank-you");
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Something went wrong. Please try again later.");
    }
  };
  
  const handleCaptchaChange = (value) => {
    // setCaptchaValue(value);
    // setError("");
  };



  const footerContent = (
      <div className="flexWrapBoxE">
       <button className="borderbuttonStyle firstBut" onClick={() => setVisible(false)} >Cancel</button>
       <button className="darkbuttonStyle" onClick={handleSubmit(onSubmit)}>Send</button>
      </div>
  );
  const HeaderContent = (
      <div className="flexWrapBoxc">
       <h1>Request a callback</h1>
      </div>
  );



  return (
    <div id="contactUsPage">
    <Helmet>
    <title>Contact Us | meMate Business Management Software Support</title>
    <meta name="description" content="Get in touch with MeMate for support and inquiries about our business management software. We’re here to help Australian businesses thrive with CRM, ERP, and workflow automation solutions" />
    <meta property="og:title" content="Contact Us | meMate Business Management Software Support" />
      <meta property="og:description" content="Get in touch with MeMate for support and inquiries about our business management software. We’re here to help Australian businesses thrive with CRM, ERP, and workflow automation solutions" />
</Helmet>
      <div className="main-section" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className="main-heading" >contact us</div>
        <div className="main-image"><img src={ContactUsMainImage} alt="contact us main image" width={545} height={545}/></div>
        <div className="mid-heading">
          <h1 className="h1tags">Contact the MeMate Team for Business Management <br/>Software Solutions in Australia</h1>
          {/* <p>a friendly memate specialist is ready to help.</p> */}
        </div>
        <div className="small-heading">
          <p>Made for Small to Medium Businesses for Simplicity and Order</p>
        </div>
        <div className="request-btn" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <Link to='https://dev.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started  navbar-link"><TronButton text="Get started" /></Link>
      </div>
      </div>
      <div className='query-section' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className='query-cards'>
          <div className='query-card query-1 '>
            <div className='query-main '>
              <div className='query-main-heading'>
                <p>Contact</p>
                <p>by phone</p>
              </div>
              <div className='query-small-heading'>
                <p>Call us anytime on 1300 630 00</p>
             
                <p>to request a callback.</p>
              </div>
            </div>
            <div className='query-button' onClick={() => setVisible(true)}>
              <div>
                <p>Call now</p>
              </div>
            </div>
          </div>
          <div className='query-card query-2 '>
            <div className='query-main'>
              <div className='query-main-heading'>
                <p>Chat with</p>
                <p>our experts</p>
              </div>
              <div className='query-small-heading'>
                <p>Chat to us live anytime between:</p>
                <p>8am-6pm (AEST), Monday to Friday</p>
                <p>10am-6pm (AEST), Saturday</p>
                <p>& Sunday</p>
              </div>
            </div>
            <div className='query-button'>
              <div>
                <p>Chat now</p>
              </div>
            </div>
          </div>
          <div className='query-card query-3 '>
            <div className='query-main'>
              <div className='query-main-heading query-color'>
                <p>Email</p>
                <p>our experts</p>
              </div>
              <div className='query-small-heading query-color'>
                <p>Message us anytime</p>
                <p>at hello@memate.com.au</p>
              </div>
            </div>
            <div className='query-button query-button-color' onClick={() => setVisibleEmail(true)}>
              <div>
                <p>Email now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="small-heading">
          <p>Please send any media or PR enquiries directly to pr@memate.com.au.</p>
          <p>If we have let you down in any way, we want to hear it at complaints@memate.com.au</p>
        </div>
      </div>
      <Dialog visible={visible} style={{ width: '566px' }} className={style.requestsendModel} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent} header={HeaderContent}>
      <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.marginbotton}>
            <label htmlFor="name">Name</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <input placeholder="Enter your name" id="name" {...field} />}/>
            {errors.name && <p className="error-message">{errors.username.name}</p>}
          </div>
          <div className={style.marginbotton}>
                        <label>Phone number</label>
                        <Controller
                            name="phone_number"
                            control={control}
                            render={({ field }) => (
                              <PhoneInput
                                defaultCountry="AU" 
                                value={field.value}
                                className="phoneInput"
                                placeholder="+61 2 0168 9943" 
                                containerClass={style.countrySelector}
                                onChange={field.onChange}
                              />
                            )}
                          />
                        {errors.phone_number && <p className="error-message">{errors.phone_number.message}</p>}
                    </div>
                    <div className={style.marginbotton}>
            <label htmlFor="email">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <input placeholder="company@email.com" id="email" {...field} />}/>
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          {/* <div className={style.marginbotton}> 
            <ReCAPTCHA
        sitekey="6LdajWoqAAAAABL-mFA9wqzKrY77pE6cxhq3PSQM"
        onChange={handleCaptchaChange}
      />
            {error && <p style={{ color: 'red' }}>{error}</p>}

          </div> */}
        </form>
            </Dialog>
    
    </div>
  )
}

export default ContactUsComponent;
