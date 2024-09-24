import React, { useEffect, useState } from 'react'
import { FaCity, FaLock, FaMobileRetro } from "react-icons/fa6";
import emailjs from 'emailjs-com';

const ContactUs = () => {

    useEffect(() => {
        // Initialize EmailJS with your public key
        emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
    }, []);

    // State to manage form fields and validation errors
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    // Validation rules
    const validate = () => {
        let tempErrors = {}

        // Validate Name (required and at least 3 characters)
    if (!formData.name) {
        tempErrors.name = 'Name is required';
      } else if (formData.name.length < 3) {
        tempErrors.name = 'Name should be at least 3 characters long';
      }

      // Validate Email (basic email regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Enter a valid email address';
    }

    // Validate Message (required and at least 10 characters)
    // Validate Message (required and at least 10 characters)
    if (!formData.message) {
        tempErrors.message = 'Message is required';
      } else if (formData.message.length < 10) {
        tempErrors.message = 'Message should be at least 10 characters long';
      }
  
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){
            // Match parameter names with what you've set in EmailJS template
            const templateParams = {
                from_name: formData.name,
                email: formData.email, // Make sure this matches your template field name
                message: formData.message
            };

            emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Message Sent Successfully!');
                // Reset form fields
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send message. Please try again later.');
            });
        } else {
            console.log('Form has errors');
        }
    }

  return (
    <div className='min-h-screen bg-cyan-300 py-16'>
        <div className='container mx-auto px-4'>
            <div className='bg-white shadow-lg rounded-lg p-8 md:p-16'>
                <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>Contact Us</h1>
                <p className='text-lg text-gray-600 leading-relaxed text-center mb-8'>
                We’d love to hear from you! Whether you have a question about our books, services, or anything else, feel free to drop us a message.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
                    {/* Contact Form... */}
                    <div>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Send us a message</h2>
                        <form className='space-y-6'>
                            {/* Name Field */}
                            <div>
                                <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.name && 'border-red-500'}`}
                                placeholder='Your Full Name'
                                onChange={handleChange}
                                />
                                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            {/* Email Field */}
                            <div>
                                <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.name && 'border-red-500'}`}
                                placeholder='Your Emal Address'
                                onChange={handleChange}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Message Field.. */}
                            <div>
                                <textarea
                                id='message'
                                name='message'
                                rows='4'
                                value={formData.message}
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.name && 'border-red-500'}`}
                                placeholder='Your Message Here...'
                                onChange={handleChange}
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            {/* Submit Button.. */}
                            <div className='flex justify-center'>
                                <button onClick={handleSubmit} type="submit" className='bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-black transition duration-300'>Send Message</button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Get in Touch</h2>
                        <div className='space-y-4'>
                            <div className='flex items-center'>

                                <FaLock className='w-6 h-6 text-blue-600 mr-3' />

                                <span className="text-gray-600">support@bookhaven.com</span>
                            </div>

                            <div className="flex items-center">

                               <FaCity className='w-6 h-6 text-blue-600 mr-3'/>

                                <span className="text-gray-600">123 Book Street, Greater Noida City</span>
                            </div>

                            <div className='flex items-center'>

                                <FaMobileRetro className='w-6 h-6 text-blue-600 mr-3'/>

                                <span className="text-gray-600">(123) 456-7890</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactUs
