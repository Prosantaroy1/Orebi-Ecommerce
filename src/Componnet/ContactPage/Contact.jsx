import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
// import imgLoca from '../../assets/img/all/Image.png'

const Contact = () => {

    // email js
    const from = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // 
        emailjs
            .sendForm('service_kn39uqm', 'template_relkygs', from.current, {
                publicKey: 'pUf118s5i_8JpTn6j',
            })
            .then(
                () => {
                    Swal.fire("Successfuly Mail Send!");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="container md:px-1 px-4  mx-auto py-12">
            {/* conact first */}
            <h3 className="font-fontAb font-semibold text-3xl">Contacts</h3>
            {/* link */}
            <div className="breadcrumbs pt-4 text-sm">
                <ul>
                    <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
                    <li className="text-xl">Contact</li>
                </ul>
            </div>
            {/* contact from */}
            <div className="pt-10">
                <h3 className="font-fontAb font-semibold text-3xl">Fill up a Form</h3>
                <form ref={from} onSubmit={sendEmail} className="pt-10">
                    <div className="flex flex-col gap-4">
                        <label className="text-xl font-fontAb font-semibold">Name</label>
                        <input type="text" name="name" className="border border-b-slate-400 w-full md:w-1/2 p-4 font-fontAb font-medium" placeholder="Enter your Name?" />
                    </div>
                    {/* email */}
                    <div className="flex pt-5 flex-col gap-4">
                        <label className="text-xl font-fontAb font-semibold">Email</label>
                        <input type="email" name="email" className="border border-b-slate-400 w-full md:w-1/2 p-4 font-fontAb font-medium" placeholder="Enter your Email?" />
                    </div>
                    {/* message */}
                    <div className="flex pt-5 flex-col gap-4">
                        <label className="text-xl font-fontAb font-semibold">Message</label>
                        <textarea type="text" name="message" className="border border-b-slate-400 w-full md:w-1/2 p-4 font-fontAb font-medium" placeholder="Enter your message?"></textarea>
                    </div>
                    {/* btn */}
                    <div className="pt-6">
                        <input type="submit" value="Send" className="btn bg-black hover:text-black text-xl text-white btn-wide" />
                    </div>
                </form>
            </div>
            {/* location */}
            <div className='pt-12'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d233666.68434625547!2d90.25487108783672!3d23.781520713653677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCreative%20IT%20Institute%2C!5e0!3m2!1sen!2sbd!4v1725309063364!5m2!1sen!2sbd" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default Contact;