import React, { useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");
const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    const form = e.currentTarget;
    const formData = {
      from_name: form.name.value,
      from_email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      to_email: "eliudnkamau37@gmail.com"
    };
    try {
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData);
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="w-full bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={6} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"></textarea>
                </div>
                {submitStatus === "success" && <div className="p-4 bg-green-50 text-green-700 rounded-md">
                    Message sent successfully! I'll get back to you soon.
                  </div>}
                {submitStatus === "error" && <div className="p-4 bg-red-50 text-red-700 rounded-md">
                    Failed to send message. Please try again or contact me
                    directly.
                  </div>}
                <button type="submit" disabled={isSubmitting} className={`w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <SendIcon className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <div className="flex items-start">
                  <MailIcon className="h-6 w-6 text-indigo-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a href="mailto:eliudnkamau37@gmail.com" className="text-gray-600 hover:text-indigo-600">
                      eliudnkamau37@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-indigo-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <a href="tel:+254710366114" className="text-gray-600 hover:text-indigo-600">
                      +254 710366114
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-indigo-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-4">
                    Connect with me
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                      <LinkedinIcon className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                      <TwitterIcon className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                      <GithubIcon className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ContactPage;