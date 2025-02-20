import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch(
        "https://formsubmit.co/aryannagar193@gmail.com",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("There was an error, please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div className="flex-1 w-full text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold">Get In Touch</h2>
          <motion.p
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Have a question or just want to chat? Send me a message, and I'll
            get back to you!
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center md:justify-start space-x-6 mt-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a
              href="https://github.com/Aryannagar1912"
              className="text-3xl text-gray-300 hover:text-[#d97706] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-nagar19"
              className="text-3xl text-gray-300 hover:text-[#d97706] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/aryan__nagar_"
              className="text-3xl text-gray-300 hover:text-[#d97706] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@MERNExplorer-c5c"
              className="text-3xl text-gray-300 hover:text-[#d97706] transition"
            >
              <FaYoutube />
            </a>
          </motion.div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 w-full">
          <form
            className="bg-white/10 backdrop-blur-xl p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full p-4 mb-4 bg-gray-900/50 text-white border border-gray-600 rounded-lg outline-none focus:border-[#d97706] transition-all"
              value={formData.name}
              onChange={handleInputChange}
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="w-full p-4 mb-4 bg-gray-900/50 text-white border border-gray-600 rounded-lg outline-none focus:border-[#d97706] transition-all"
              value={formData.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="w-full p-4 mb-4 bg-gray-900/50 text-white border border-gray-600 rounded-lg outline-none focus:border-[#d97706] transition-all"
              value={formData.message}
              onChange={handleInputChange}
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button
              className="w-full py-3 bg-[#D97706] hover:bg-[#b65a04] transition rounded-lg font-semibold text-lg"
              type="submit"
            >
              Send Message
            </button>
            {status && (
              <p className="mt-4 text-center text-lg text-gray-300">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
