"use client"
import React, { useState } from "react";

interface SignupFormProps {
  onSubmit: (email: string) => void;
}

const ContactForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true); // Indique que le formulaire est en cours de soumission
      onSubmit(email);
      setEmail(""); // Efface l'input après soumission
      setMessage("Veuillez vérifier vos e-mails."); // Affiche le message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[500px] text-center mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">votre adresse Email</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting} // Désactiver le bouton si le formulaire est en cours de soumission
        className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        Envoyer
      </button>
      {message && <p className="mt-4 text-green-600 text-center">{message}</p>} {/* Affiche le message si présent */}
    </form>
  );
};

export default ContactForm;