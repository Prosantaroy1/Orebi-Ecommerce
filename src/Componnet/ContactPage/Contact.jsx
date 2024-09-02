import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

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
        <div className="container md:px-1 px-4 mb-6 mx-auto py-12">
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
        </div>
    );
};

export default Contact;