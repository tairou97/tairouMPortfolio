import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        Interested in working together? Fill out the form or book a
        complimentary discovery call.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full">
          Send Message
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-600">Or book a call:</p>
        <button className="mt-2 bg-blue-600 text-white">
          Book a Discovery Call
        </button>
      </div>
    </div>
  );
};

export default Contact;
