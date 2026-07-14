import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        emailjs.init('BATcGtGTu--0S1rZz');
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const templateParams = {
            title: 'New Contact Form Submission',
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };

        emailjs.send('service_6bmy5xv', 'template_c30f1xq', templateParams, 'BATcGtGTu--0S1rZz')
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setSubmitStatus('success');
                form.current.reset();
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div id="contact" className="contact-container">
            <div className="contact-copy">
                <p className="section-kicker">Contact</p>
                <h2 className="contact-title">Let us build something useful.</h2>
                <p>
                    I am open to software engineering internships, full-time roles, and research-adjacent product work.
                </p>

                <div className="contact-info">
                    <p>Email: <a href="mailto:dawenw@icloud.com">dawenw@icloud.com</a></p>

                    <div className="contact-social-links">
                        <a
                            href="https://github.com/DCDGRG"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-link github-link"
                        >
                            <FaGithub className="social-icon" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dawen-wang-396315231/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-link"
                        >
                            <FaLinkedin className="social-icon" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Type your message here..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                    <div className="submit-message success">
                        Message sent successfully! I'll get back to you soon.
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="submit-message error">
                        Failed to send message. Please try again later.
                    </div>
                )}
            </form>
        </div>
    );
};

export default Contact;
