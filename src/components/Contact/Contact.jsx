import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Lottie from 'lottie-react';
import contactLottie from '../..//assets/Animation - 1736018970806.json'

const Contact = () => {
    const [formData, setFormData] = useState({
        to_name: 'Recipient Name',  // The recipient name (can be dynamic)
        from_name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make sure you are passing the correct environment variables for the EmailJS integration
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,  // Your EmailJS service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Your EmailJS template ID
            e.target,                                 // The form data
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY   // Your EmailJS public key
        )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log('Email sending error:', error.text);
                    alert('Failed to send the message. Please try again.');
                }
            );

        // Clear the form after sending the email
        setFormData({ to_name: 'Recipient Name', from_name: '', email: '', message: '' });
    };

    return (
        <div className="w-11/12 mx-auto mt-32 space-y-20">
            <h1 className="text-3xl font-semibold text-center mb-6">Contact Me</h1>
            <div className='md:flex justify-center items-center gap-10 border-2 w-11/12 mx-auto'>
                <div className='md:w-1/2'>
                    <Lottie animationData={contactLottie}></Lottie>
                </div>

                <div className='md:w-1/2 border-2 border-y-0 space-y-3 border-r-0 p-2 text-center'>
                    <h1><span className='font-bold '>Name:</span> Rakibur Rahman Ratul</h1>
                    <h1><span className='font-bold'>Email:</span> <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className='underline'>ratulrakibur5@gmail.com</a></h1>
                    <h1><span className='font-bold'>WhatsApp:</span> 01636352751</h1>
                    <h1><span className='font-bold'>Location:</span> Sylhet, Bangladesh</h1>
                </div>
            </div>


            <div className="md:w-1/2 mx-auto ">
                <h1 className="text-3xl font-semibold text-center mb-6">Send Email</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700">Your Name</label>
                        <input
                            type="text"
                            name="from_name"  // Ensure this matches the placeholder in your template
                            value={formData.from_name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md"
                            placeholder='name'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='email'
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea
                            name="message"  // Ensure this matches the placeholder in your template
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md"
                            placeholder='message'
                            rows="4"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-outline border-0 border-l-2 border-b-8 border-r-4 border-t-2 md:w-48"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
