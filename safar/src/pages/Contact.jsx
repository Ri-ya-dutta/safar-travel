import React, { useState } from 'react';
import styles from './Contact.module.css';
import { createContact } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    try {
      await createContact(formData);
      setSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  }
};


  return (
    <div className={styles.contactContainer}>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Get in touch with us for any help!</p>

      {submitted && <p className={styles.success}>Thank you! We'll get back to you soon.</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>

        <button type="submit" disabled={submitted}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
