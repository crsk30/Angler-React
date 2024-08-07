import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import axios from "axios";
import NavBar from "./navBar";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.name) tempErrors.name = "Name is required";
    if (!form.email) tempErrors.email = "Email is required";
    if (!form.subject) tempErrors.subject = "Subject is required";
    if (!form.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .post("/api/contact", form)
        .then(() => {
          alert("Message sent successfully");
        })
        .catch((error) => {
          alert("Failed to send message");
        });
    }
  };

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Contact Us</Typography>
        <TextField
          name="name"
          label="Name"
          value={form.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          required
        />
        <TextField
          name="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          required
        />
        <TextField
          name="phone"
          label="Phone"
          value={form.phone}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="subject"
          label="Subject"
          value={form.subject}
          onChange={handleChange}
          error={!!errors.subject}
          helperText={errors.subject}
          fullWidth
          required
        />
        <TextField
          name="message"
          label="Message"
          value={form.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
