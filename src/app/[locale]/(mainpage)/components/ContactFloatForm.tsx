"use client";

import ContactForm from "@/components/ContactForm/contactForm";
import React from "react";

export default function ContactFloatForm() {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ boxShadow: "0 0 20px rgba(0,0,0,.6)" }}
    >
      <ContactForm category="Test" />
    </div>
  );
}
