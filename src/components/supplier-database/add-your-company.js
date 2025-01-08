import React, { useEffect, useState ,useRef } from "react";
import "./style.css";
import style from './supplier-module.module.scss';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
// import { AddYourCompanyApi } from '../../api/supplierApi';
import CustomUpload from "./custom-upload";

const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

// Define your validation schema
const schema = yup.object().shape({
  legal_name: yup.string().required('Legal name is required'),
  email: yup.string().email('Invalid email address').required('Email is required')
});

function AddYourCompany() {
  const [upload_file, setUploadFile] = useState(null);
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
      upload_file:"",
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
    if (data.website && !/^https?:\/\//i.test(data.website)) {
      data.website = `https://${data.website}`;
    }
    if (!captchaValue) {
      setError('Please complete the CAPTCHA.');
      return;
    }
    // Proceed with the fetch request
    try {
      const formData = new FormData();
      formData.append("upload_file", upload_file);
      formData.append("legal_name", data.legal_name);
      formData.append("abn", data.abn || "");
      formData.append("email", data.email);
      formData.append("business_location", data.blocation || "");
      formData.append("state", data.state || "");
      formData.append("website", data.website || "");
      formData.append("industry", data.industry || "");
      formData.append("supplied_services", data.services || "");
  
      const myHeaders = new Headers();
      myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow"
      };
  
      const response = await fetch("https://admin.memate.au/api/supplier", requestOptions);
  
      if (response.ok) {
        const result = await response.text();
        console.log("Form submitted successfully:", result);
        setVisible(false);
        setVisibleEmail(false);
        formReset();
        navigate('/thank-you');
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <>
      <Helmet>
        <title>Add Your Company | List Your Business in MeMate’s Supplier Directory</title>
        <meta name="description" content="Register your company in MeMate’s supplier directory to connect with businesses looking for trusted suppliers. 
        Join the leading Australian business directory today." />
        <meta property="og:title" content="Add Your Company | List Your Business in MeMate’s Supplier Directory" />
        <meta property="og:description" content="Register your company in MeMate’s supplier directory to connect with businesses looking for trusted suppliers. 
        Join the leading Australian business directory today." />
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
            <h1>List Your Company and Connect with MeMate Users</h1>
            <div className={style.supplierAddform}>
              <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.flexWrapGrid}>
                 <CustomUpload upload_file={upload_file} setUploadFile={setUploadFile}/>
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
                      render={({ field }) => <input placeholder="company@email.com" id="email" {...field} />}/>

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
                      render={({ field }) => <input placeholder="Enter industry" id="industry" {...field} />}/>

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
      </div>
    </>
  );
}
export default AddYourCompany;

