import React, { useEffect, useState ,useRef } from "react";
import "./style.css";
import style from './supplier-module.module.scss';
import NextStep from "../next-step";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import { RequestCallBackAPI } from '../../api/contactAPI';
import CustomUpload from "./custom-upload";

const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";



// Define your validation schema
const schema = yup.object().shape({
  legal_name: yup.string().required('Legal name is required'),
  email: yup.string().email('Invalid email address').required('Email is required')
});

function AddYourCompany() {
  const [visible, setVisible] = useState(false);
  const [visibleEmail, setVisibleEmail] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const formReset = () => {
     reset({
      legal_name: "",
      email: "",
      abn: "",
      blocation: "",
      state: "",
      website: "",
      services: ""
     })
  }
 

  useEffect(()=> {
    formReset();
  }, [])

  const onSubmit = async (data) => {
    // if (!captchaValue) {
    //   setError('Please complete the CAPTCHA.');
    //   return;
    // }

    try {
      const result = await RequestCallBackAPI(data);
      console.log('Form submitted successfully:', result);
      console.log(data);
      setVisible(false);
      setVisibleEmail(false);
      formReset();
      navigate('/thank-you');
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleCaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setCaptchaValue(value);
  };

  return (
    <>
      <Helmet>
        <title>MeMate: </title>
        <meta property="og:title" content="MeMate: Contact Us for Support and Inquiries" />
        <meta property="og:description" content="We're here to help! Contact us for inquiries, support, or feedback. Your questions are important, and our team is ready to assist you." />
      </Helmet>
      <div className="parent-blog-page customerstoriespage">

        <div className="parent-blog">
          <div className="pageBreadcrumbs">
            <ul className={style.linkstyleDisable}>
              <li><Link to='/' className={style.linkstyleDisable}>Home</Link></li>/<li><Link to='/supplier-database' className={style.linkstyleDisable}>Supplier database</Link></li>/<li> <Link>Add New</Link></li>
            </ul>
            <Link to='/supplier-database' className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</Link>
          </div>


          <div className={style.supplierAddCompany} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
            <h2>Add Your Company to the Database</h2>
            <div className={style.supplierAddform}>
              <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>

                <div className={style.flexWrapGrid}>
         <CustomUpload />
                  </div>
                <div className={style.flexWrapGrid}>
                  <div className={style.marginbotton}>
                    <label htmlFor="legal_name">Legal Name</label>
                    <Controller
                      name="legal_name"
                      control={control}
                      render={({ field }) => <input placeholder="Enter legal name" id="legal_name" {...field} />}
                    />
                    {errors.legal_name && <p className="error-message">{errors.legal_name.message}</p>}
                  </div>
                  <div className={style.marginbotton}>
                    <label htmlFor="abn">ABN</label>
                    <Controller
                      name="abn"
                      control={control}
                      render={({ field }) => <input placeholder="32 635 443 221" id="abn" {...field} />}
                    />
                    {errors.abn && <p className="error-message">{errors.abn.message}</p>}
                  </div>
                </div>


                <div className={style.flexWrapGrid}>
                  <div className={style.marginbotton}>
                    <label htmlFor="email">Email</label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => <input placeholder="company@email.com" id="email" {...field} />}
                    />

                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                  </div>
                  <div className={style.marginbotton}>
                    <label htmlFor="blocation">Business Location</label>
                    <Controller
                      name="blocation"
                      control={control}
                      render={({ field }) => <input placeholder="32 635 443 221" id="blocation" {...field} />}
                    />
                    {errors.blocation && <p className="error-message">{errors.blocation.message}</p>}
                  </div>
                </div>

                <div className={style.flexWrapGrid}>
                  <div className={style.marginbotton}>
                    <label htmlFor="state">State</label>
                    <Controller
                      name="state"
                      control={control}
                      render={({ field }) => <input placeholder="Enter state" id="state" {...field} />}
                    />

                    {errors.state && <p className="error-message">{errors.state.message}</p>}
                  </div>
                  <div className={style.marginbotton}>
                    <label htmlFor="website">Website</label>
                    <Controller
                      name="website"
                      control={control}
                      render={({ field }) => <input placeholder="www.example.com" id="website" {...field} />}
                    />
                    {errors.website && <p className="error-message">{errors.website.message}</p>}
                  </div>
                </div>

                <div className={style.flexWrapGrid}>
                  <div className={style.marginbotton}>
                    <label htmlFor="industry">industry</label>
                    <Controller
                      name="industry"
                      control={control}
                      render={({ field }) => <input placeholder="Enter industry" id="industry" {...field} />}
                    />

                    {errors.industry && <p className="error-message">{errors.industry.message}</p>}
                  </div>
                  <div className={style.marginbotton}>
                    <label htmlFor="website">Supplied Services</label>
                    <Controller
                      name="services"
                      control={control}
                      render={({ field }) => <input placeholder="" id="website" {...field} />}
                    />
                    {errors.website && <p className="error-message">{errors.website.message}</p>}
                  </div>
                </div>
                <div className={style.marginbotton}>
                  <ReCAPTCHA
                    sitekey="6LdajWoqAAAAABL-mFA9wqzKrY77pE6cxhq3PSQM"
                    onChange={handleCaptchaChange}
                  />
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>

                <button className={style.darkbuttonStyle} onClick={handleSubmit(onSubmit)}>Send</button>
              </form>
            </div>


          </div>
        </div>
        <NextStep text="Request a Demo" />
      </div>

    </>

  );
}
export default AddYourCompany;

