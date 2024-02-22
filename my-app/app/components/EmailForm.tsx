import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const emailRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');

  const updateEmails = async (email: string) => {
    try {
      const res = await axios.post('/api/updateemail', { email });
      if (!res.data.success) {
        setError(res.data.error);
        setTimeout(() => setError(""), 3000);
        return;
      }
      setEmails([...emails, res.data.email]); // Fixed typo here (email -> emails)
    } catch (error) {
      console.error('Error updating emails:', error);
      // Handle error gracefully, maybe show an error message to the user
    }
  };

  const handleUpdateEmails = () => {
    if (emailRef.current && emailRef.current.value) {
      updateEmails(emailRef.current.value);
      emailRef.current.value = ''; // Clear input after adding email
    }
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1 }}
      className="bg-secondary md:w-[25rem] h-[23rem w-full rounded-[2.7rem] flex flex-col overflow-hidden md:m-4 py-8 px-8"
    >
      <div className="">
        <h1 className="text-2xl font-semibold">Email</h1>
        <div className="flex justify-between">
          <input
            ref={emailRef}
            type="text"
            placeholder="Email"
            className="bg-transparent text-white border-b border-bright my-4 focus:outline-none"
          />
          <button
            onClick={handleUpdateEmails}
            className="bg-bright text-white px-4 w-20 rounded-[2rem] ml-4 hover:bg-bright/60"
          >
            Add
          </button>
        </div>
      </div>
        {error && <p className="text-red-500">{error}</p>}
      <div className="my-8">
        {
            emails.length === 0 && <h1 className="text-xl font-semibold">No emails added yet</h1>
        }
        {emails.map((email, index) => (
          <h1 key={index} className="text-xl font-semibold">
            {email}
          </h1>
        ))}
      </div>
    </motion.div>
  );
};

export default EmailForm;
