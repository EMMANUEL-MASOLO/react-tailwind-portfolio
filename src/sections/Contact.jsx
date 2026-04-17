import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "emmanuelmasolo858@gmail.com",
    href: "mailto:emmanuelmasolo858@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+256 787810007",
    href: "tel:+256787810007",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Uganda, Kampala",
    href: "https://maps.google.com/?q=Uganda,+Kampala",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS configuration");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const statusStyles =
    submitStatus?.type === "success"
      ? "bg-green-500/10 border border-green-500/20 text-green-500"
      : "bg-red-500/10 border border-red-500/20 text-red-500";

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 mx-auto max-w-6xl px-4">
        {/* FORM */}
        <div className="glass p-8 rounded-3xl border border-primary/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name..."
              required
              className="input"
            />

            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your@email.com"
              required
              className="input"
            />

            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              className="input resize-none"
            />

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Sending..." : "Send Message"}
              {!isLoading && <Send className="w-5 h-5" />}
            </Button>

            {submitStatus && (
              <div className={`flex items-center gap-3 p-4 rounded-xl ${statusStyles}`}>
                {submitStatus.type === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-6">
          <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">
              Contact Information
            </h3>

            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
              >
                
                <item.icon className="w-5 h-5 text-primary" />
                <span>{item.title}</span>
              </a>
              
            ))}
          </div>
        </div>

        {/* Availability Card*/}
        <div className="glass rounded-3xl p-8 border border-primary/30">
          <div className="flex items-center gap-3 mb-4">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="font-medium"> Currently Available</span>
          </div>
          <p className="text-muted-foreground text-sm">
            I'm currently open to new opportunities and exciting projects.
            Whether you need a full-time engineer or a freelancer,
            let's talk!
          </p>
        </div>
      </div>
    </section>
  );
};