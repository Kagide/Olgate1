import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { MapPin, Mail, Phone } from "./Icons";

export default function ContactForm() {
  useReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-inner">
          <div className="reveal">
            <span className="section-label">Get In Touch</span>
            <h2 className="contact-info-title" id="contact-title">
              Ready to Start
              <br />
              Your Next Project?
            </h2>
            <p className="contact-info-sub">
              Whether you need a technology roadmap, a custom application,
              business requirements documentation, a managed hospitality
              experience, or reliable corporate transport — our team is ready.
            </p>
            <div className="contact-detail">
              <MapPin />
              <span>KG 240 St, Kigali, Rwanda</span>
            </div>
            <div className="contact-detail">
              <Mail />
              <span>info@olgate.rw</span>
            </div>
            <div className="contact-detail">
              <Phone />
              <span>+250 788740653</span>
            </div>
          </div>

          <div className="form-card reveal reveal-delay-2">
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="form-row">
                <Field
                  id="name"
                  label="Full Name"
                  type="text"
                  required
                  value={form.name}
                  onChange={set("name")}
                  error={errors.name}
                />
                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  error={errors.email}
                />
              </div>
              <Field
                id="phone"
                label="Phone Number"
                type="tel"
                value={form.phone}
                onChange={set("phone")}
              />
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message *
                </label>
                <textarea
                  className={`form-textarea${errors.message ? " field-error" : ""}`}
                  id="message"
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your project or enquiry..."
                  aria-required="true"
                  aria-describedby={errors.message ? "msg-err" : undefined}
                  rows={5}
                />
                {errors.message && (
                  <span id="msg-err" className="form-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>
              <button type="submit" className="btn btn-red form-submit">
                Send Message
              </button>
            </form>
            {submitted && (
              <div className="form-success" role="status">
                ✓ Thank you! Your message has been sent. We'll be in touch
                within 24 hours.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type, required, value, onChange, error }) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {label}
        {required && " *"}
      </label>
      <input
        className={`form-input${error ? " field-error" : ""}`}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        aria-required={required || undefined}
        aria-describedby={error ? `${id}-err` : undefined}
      />
      {error && (
        <span id={`${id}-err`} className="form-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
