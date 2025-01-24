
import "./style.css";
import style from './contactus.module.scss';
import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog } from 'primereact/dialog';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import { RequestCallBackAPI } from '../../api/contactAPI';

const CallbackNow = () => {
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
      if (!captchaValue) {
        setError("Please complete the CAPTCHA.");
        return;
      }
      try {
        const result = await RequestCallBackAPI(data); 
        console.log("Form submitted successfully:", result);
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
      setCaptchaValue(value);
      setError("");
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
    <div>
        <p onClick={() => setVisible(true)}>Call now</p>
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
           <div className={style.marginbotton}> 
            <ReCAPTCHA
        sitekey="6LdajWoqAAAAABL-mFA9wqzKrY77pE6cxhq3PSQM"
        onChange={handleCaptchaChange}
      />
            {error && <p style={{ color: 'red' }}>{error}</p>}

          </div> 
        </form>
            </Dialog>
    </div>
  )
}

export default CallbackNow
