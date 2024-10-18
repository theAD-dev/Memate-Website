
import ContactUsMainImage from "../../assests/images/contactUsMain.png"
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


const ContactUsComponent = () => {

  const [visible, setVisible] = useState(false);
  const [visibleEmail, setVisibleEmail] = useState(false);
  // Define your validation schema
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    phone: yup.string().required("Phone number is required").matches(/^\+\d{1,3}\d{4,14}$/, 'Invalid phone number format'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data); 
    setVisible(false); 
    setVisibleEmail(false); 
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
  const footerContentEmail = (
      <div className="flexWrapBoxE">
       <button className="borderbuttonStyle firstBut" onClick={() => setVisibleEmail(false)} >Cancel</button>
       <button className="darkbuttonStyle" onClick={handleSubmit(onSubmit)}>Send</button>
      </div>
  );
  const HeaderContentEmail = (
      <div className="flexWrapBoxc">
       <h1>Email now</h1>
      </div>
  );


  return (
    <>
    <Helmet>
    <title>MeMate: Contact Us for Support and Inquiries</title>
    <meta property="og:title" content="MeMate: Contact Us for Support and Inquiries" />
      <meta property="og:description" content="We're here to help! Contact us for inquiries, support, or feedback. Your questions are important, and our team is ready to assist you.
    " />
</Helmet>
      <div className="main-section">
        <div className="main-heading">contact us</div>
        <div className="main-image"><img src={ContactUsMainImage} alt="contact us main image" width={767} height={767}/></div>
        <div className="mid-heading">
          <p>Whether you'd like to chat, email or receive a callback</p>
          <p>a friendly memate specialist is ready to help.</p>
        </div>
        <div className="small-heading">
          <p>Made for Small to Medium Businesses for Simplicity and Order</p>
        </div>
        <div className='main-section-button'>
          <p>Get started</p>
        </div>
      </div>
      <div className='query-section'>
        <div className='query-cards'>
          <div className='query-card query-1'>
            <div className='query-main'>
              <div className='query-main-heading'>
                <p>Contact</p>
                <p>by phone</p>
              </div>

              <div className='query-small-heading'>
                <p>Call us anytime on 1300 630 00</p>
             
                <p>to request a callback.</p>
              </div>
            </div>

            <div className='query-button'>
              <div>
                <p onClick={() => setVisible(true)}>Call now</p>
              </div>
            </div>
          </div>

          <div className='query-card query-2'>
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

          <div className='query-card query-3'>
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

            <div className='query-button query-button-color'>
              <div>
                <p onClick={() => setVisibleEmail(true)}>Email now</p>
              </div>
            </div>
          </div>
        </div>

        <div className="small-heading">
          <p>Please send any media or PR enquiries directly to pr@memate.com.au.</p>
          <p>If we have let you down in any way, we want to hear it at complaints@memate.com.au</p>
        </div>
      </div>



      <Dialog visible={visible} style={{ width: '514px' }} className={style.requestsendModel} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent} header={HeaderContent}>
      <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.marginbotton}>
            <label htmlFor="username">Name</label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => <input placeholder="Enter name" id="username" {...field} />}/>
            {errors.username && <p className="error-message">{errors.username.message}</p>}
          </div>
          <div className={style.marginbotton}>
                        <label>Phone number</label>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                              <PhoneInput
                                defaultCountry="AU" // Correct country code for Australia
                                value={field.value}
                                className="phoneInput"
                                placeholder="+61 2 0168 9943" // Example Australian number placeholder
                                containerClass={style.countrySelector}
                                onChange={field.onChange}
                              />
                            )}
                          />
                        {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                    </div>



          <div>
            <label htmlFor="email">Email</label>
            <Controller
              name="email"
              control={control}
              placeholder="company@email.com"
              render={({ field }) => <input id="email" {...field} />}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
    
        </form>
            </Dialog>




      <Dialog visible={visibleEmail} style={{ width: '514px' }} className={style.requestsendModel} onHide={() => {if (!visibleEmail) return; setVisible(false); }} footer={footerContentEmail} header={HeaderContentEmail}>
      <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.marginbotton}>
            <label htmlFor="username">Name</label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => <input placeholder="Enter name" id="username" {...field} />}/>
            {errors.username && <p className="error-message">{errors.username.message}</p>}
          </div>
          <div className={style.marginbotton}>
            <label htmlFor="email">Email</label>
            <Controller
              name="email"
              control={control}
              placeholder="company@email.com"
              render={({ field }) => <input id="email" {...field} />}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className={style.marginbotton}>
            <label htmlFor="email">Message</label>
           <textarea rows="5"></textarea>
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
    
        </form>
            </Dialog>
    </>
  )
}

export default ContactUsComponent;
