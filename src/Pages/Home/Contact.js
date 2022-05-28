import React from 'react';
import contact from '../../images/contact.png'

const Contact = () => {
    return (
        <div>
            <div className='contact container mx-auto'>
                <div className='contact-heading'>
                    <h1 className='text-3xl font-bold'>Contact Us</h1>
                    <div className="line"></div>
                </div>
                <div className='contact-form grid grid-cols-1 lg:grid-cols-2 items-center justify-around'>
                    <div className="card lg:max-w-lg bg-base-100 shadow-2xl">
                        <form className='grid grid-cols-1 gap-3 mt-2 p-5'>
                            <h3 className='text-xl font-bold'>Send Message</h3>
                            <input className="input input-bordered w-full max-w-lg" name='name' placeholder='Enter Your Name' type="text" />
                            <input className="input input-bordered w-full max-w-lg" name='Email' placeholder='Enter Your Email' type="text" />
                            <textarea className="input input-bordered w-full max-w-lg" name="message" placeholder='Enter YOur Message'></textarea>
                            <input className='btn' type="submit" value="Send"></input>
                        </form>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src={contact} width='400px' height='400px' alt="" />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Contact;