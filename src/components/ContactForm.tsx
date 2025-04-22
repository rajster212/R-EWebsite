import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'submitting', message: '' });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        status: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-navy-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-navy-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-navy-700 font-medium mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
        >
          <option value="" disabled>Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Business Consultation">Business Consultation</option>
          <option value="Web Development">Web Development</option>
          <option value="Support">Support</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-navy-700 font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-y"
          placeholder="Tell us about your project or inquiry..."
        ></textarea>
      </div>
      
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={formStatus.status === 'submitting'}
          fullWidth
        >
          {formStatus.status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
      
      {formStatus.status === 'success' && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          {formStatus.message}
        </div>
      )}
      
      {formStatus.status === 'error' && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {formStatus.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;