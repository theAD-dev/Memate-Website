import React, { useEffect, useState ,useRef } from "react";
import "./style.css";
import style from './supplier-module.module.scss';
import { Link } from "react-router-dom";

import { Helmet } from 'react-helmet';
import { useForm, Controller } from 'react-hook-form';
import Select from "react-select";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
// import { AddYourCompanyApi } from '../../api/supplierApi';
import CustomUpload from "./custom-upload";
import PhoneInput from 'react-phone-number-input';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

// Define your validation schema
const schema = yup.object().shape({
  cname: yup.string().required('Company name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  pnumber: yup.string().required("Phone number is required").matches(/^\+\d{1,3}\d{4,14}$/, 'Invalid phone number format'),
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
      cname: "",
      abn: "",
      email: "",
      discription: "",
      state: "",
      website: "",
      country: "Australia",
      supplied_services: "",
      pnumber: "",
      streetaddress: "",
      citysuburb: "",
      postcode: "",  
     })
  }





  useEffect(()=> {
    formReset();
  }, [])

  const onSubmit = async (data) => {
    console.log('data: ', data);
    const selectedServiceLabel = data.supplied_services ? data.supplied_services.label : null;

    // console.log('Selected Service Label:', selectedServiceLabel);

    if (data.website && !/^https?:\/\//i.test(data.website)) {
      data.website = `https://${data.website}`;
    }
    // if (!captchaValue) {
    //   setError('Please complete the CAPTCHA.');
    //   return;
    // }
    // Proceed with the fetch request
    try {
      const formData = new FormData();
      formData.append("upload_file", upload_file);
      formData.append("cname", data.cname);
      formData.append("abn", data.abn || "");
      formData.append("email", data.email);
      formData.append("discription", data.discription || "");
      formData.append("state", data.state || "");
      formData.append("website", data.website || "");
      formData.append("country", "Australia");
     formData.append("supplied_services", selectedServiceLabel || "");
      formData.append("pnumber", data.pnumber);
      formData.append("streetaddress", data.streetaddress || "");
      formData.append("citysuburb", data.citysuburb || "");
      formData.append("postcode", data.postcode || "");

      
      
      const myHeaders = new Headers();
      myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow"
      };
  
      const response = await fetch("https://admin.memate.au/api/supplier", requestOptions);
      console.log('response: ', response);

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
    // setCaptchaValue(value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      borderRadius: "4px",
      border: "1px solid #d0d5dd",
      minHeight: "46px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#fff",
        border: "1px solid #d0d5dd",
        
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
      color: state.isFocused ? "#333" : "#98A2B3",
      cursor: "pointer",
    }),
    input: (provided) => ({
      ...provided,
      color: "#98A2B3",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#98A2B3",
      fontSize: "16px",
      fontFamily: "sequel_sans_roman_head",
      fontWeight: "100"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#98A2B3",
    }),
  };

  const options1 = [
    { value: "agriculture", label: "Agriculture" },
    { value: "apparel", label: "Apparel" },
    { value: "automotive", label: "Automotive" },
    { value: "banking", label: "Banking" },
    { value: "biotechnology", label: "Biotechnology" },
    { value: "communications", label: "Communications" },
    { value: "construction", label: "Construction" },
    { value: "education", label: "Education" },
    { value: "electronics", label: "Electronics" },
    { value: "energy", label: "Energy" },
    { value: "engineering", label: "Engineering" },
    { value: "entertainment", label: "Entertainment" },
    { value: "environmental", label: "Environmental" },
    { value: "finance", label: "Finance" },
    { value: "foodbeverage", label: "Food & Beverage" },
    { value: "government", label: "Government" },
    { value: "hospitality", label: "Hospitality" },
    { value: "insurance", label: "Insurance" },
    { value: "machinery", label: "Machinery" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "media", label: "Media" },
    { value: "nonforprofit", label: "Non For Profit" },
    { value: "other", label: "Other" },
    { value: "recreation", label: "Recreation" },
    { value: "retail", label: "Retail" },
    { value: "shipping", label: "Shipping" },
    { value: "software", label: "Software" },
    { value: "technology", label: "Technology" },
    { value: "telecommunications", label: "Telecommunications" },
    { value: "utilities", label: "Utilities" },
  ];


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
                    <label htmlFor="cname">Company Name *</label>
                    <Controller
                      name="cname"
                      control={control}
                      render={({ field }) => <input placeholder="Enter Company Name" id="cname" {...field} />}
                    />
                    {errors.cname && <p className="error-message">{errors.cname.message}</p>}
                  </div>
                  <div className={style.marginbotton}>
                    <label htmlFor="email">Company Email *</label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => <input placeholder="company@email.com" id="email" {...field} />}/>

                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                  </div>  
                </div>
                <div className={style.flexWrapGrid}>
                <div className={`${style.marginbotton} ${style.phoneNumberData}`}>
                        <label>Phone number</label>
                        <Controller
                            name="pnumber"
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
                        {errors.pnumber && <p className="error-message">{errors.pnumber.message}</p>}
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
                    <label htmlFor="website">Website</label>
                    <Controller
                      name="website"
                      control={control}
                      render={({ field }) => <input placeholder="www.example.com" id="website" {...field} />}
                    />
                    {errors.website && <p className="error-message">{errors.website.message}</p>}
                  </div>
   
                  <div className={style.marginbotton}>
                    <label htmlFor="supplied_services">Service</label>
                    <Controller
                    name="supplied_services"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={options1}
                        styles={customStyles} 
                        placeholder="Select an industry..." 
                        isSearchable={true} 
                        components={{
                          IndicatorSeparator: () => null, 
                        }}
                      />
                    )}
                  />
                    {errors.supplied_services && <p className="error-message">{errors.supplied_services.message}</p>}
                  </div>
                </div>
                <div className={style.flexWrapGrid}>
                <div className={style.marginbotton}>
                  <label htmlFor="discription">Description</label>
                  <Controller
                    name="discription"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        placeholder="Enter discription"
                        id="description"
                        {...field}
                        rows={6} 
                        style={{
                          width: "100%", 
                          padding: "10px", 
                          borderRadius: "4px", 
                          border: "1px solid #D0D5DD", 
                          fontSize: "16px", 
                          color: "#000", 
                          backgroundColor: "#fff", 
                          outline: "none", 
                          boxShadow: "none", 
                          fontFamily: "sequel_sans_roman_head",
                           fontWeight: "100",
                        }}
                      />
                    )}
                  />
                  {errors.discription && <p className="error-message">{errors.discription.message}</p>}
                </div>
                 

                </div>
                <div className={style.flexWrapGrid}>
                  <div className={style.marginbotton}>
                    <label htmlFor="country">Country</label>
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => <input placeholder="Australia" disabled id="country" {...field} />}/>
                    {errors.country && <p className="error-message">{errors.country.message}</p>}
                  </div>
                  <div className={style.marginbotton}>
                    <label htmlFor="state">State</label>
                    <Controller
                      name="state"
                      control={control}
                      render={({ field }) => <input placeholder="Enter State"  id="country" {...field} />}/>
                
                    {errors.state && <p className="error-message">{errors.state.message}</p>}
                  </div>
                </div>
                <div className={style.flexWrapGrid}>
                <div className={style.marginbotton}>
                  <label htmlFor="streetaddress">Street Address</label>
                  <Controller
                    name="streetaddress"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        placeholder="Enter Street Address"
                        id="streetaddress"
                        {...field}
                        rows={3} 
                        style={{
                          width: "100%", 
                          padding: "10px", 
                          borderRadius: "4px", 
                          border: "1px solid #D0D5DD", 
                          fontSize: "16px", 
                          color: "#000", 
                          backgroundColor: "#fff", 
                          outline: "none", 
                          boxShadow: "none", 
                          fontFamily: "sequel_sans_roman_head",
                          fontWeight: "100",
                        }}
                      />
                    )}
                  />
                  {errors.streetaddress && <p className="error-message">{errors.streetaddress.message}</p>}
                </div>
                </div>
                <div className={style.flexWrapGrid}>
                  <div className={style.marginbotton}>
                    <label htmlFor="citysuburb">City / Suburb</label>
                    <Controller
                      name="citysuburb"
                      control={control}
                      render={({ field }) => <input placeholder="Enter Country" id="citysuburb" {...field} />}/>
                    {errors.citysuburb && <p className="error-message">{errors.citysuburb.message}</p>}
                  </div>
                  <div className={style.marginbotton}>
                    <label htmlFor="postcode">Post Code</label>
                    <Controller
                      name="postcode"
                      control={control}
                      render={({ field }) => <input placeholder="Enter Post Code" id="postcode" {...field} />}
                    />
                    {errors.postcode && <p className="error-message">{errors.postcode.message}</p>}
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

