import { useState } from "react";
import { motion } from "framer-motion";

const BuyForm = ({ onSubmit, onClose }) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, mobile });
    };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="p-6 bg-white rounded-lg shadow-xl"
        >
          <h2 className="mb-4 text-2xl font-bold main-title">Enter Your Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-4 border rounded btn-items"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2 mb-4 border rounded btn-items"
            />
            <div className="flex justify-end">
              <button type="button" onClick={onClose} className="px-4 py-2 mr-2 text-gray-600 bg-gray-200 rounded btn-font">Cancel</button>
              <button type="submit" className="px-4 py-2 text-white bg-indigo-500 rounded btn-font">Submit</button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  };
  
  export default BuyForm;