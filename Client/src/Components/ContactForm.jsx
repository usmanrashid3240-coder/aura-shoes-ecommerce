// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
// import SearchBar from "../Components/SearchBar";
// import SubNavbar from "../Components/SubNavbar";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         toast.success(data.message);
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         toast.error(data.error || "Something went wrong!");
//       }
//     } catch (err) {
//       toast.error("Server error. Try again later!");
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <SearchBar />
//       <SubNavbar />

//       <div className="max-w-4xl mx-auto px-6 py-12">
//         <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
//           Contact Us
//         </h2>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-xl rounded-xl p-8 space-y-5"
//         >
//           {/* Name */}
//           <div className="flex items-center gap-3 border border-gray-300 rounded-md p-3 mt-6">
//             <FaUser className="text-green-600 text-xl" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="w-full outline-none "
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="flex items-center gap-3 border border-gray-300 rounded-md p-3">
//             <FaEnvelope className="text-green-600 text-xl" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="w-full outline-none"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Message */}
//           <div className="flex items-start gap-3 border border-gray-300 rounded-md p-3">
//             <FaRegCommentDots className="text-green-600 text-xl mt-2" />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="5"
//               className="w-full outline-none"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-green-600 w-full text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Contact Info */}
//         <div className="mt-10 text-center text-gray-700 space-y-1">
//           <p>📞 +92 300 1234567</p>
//           <p>📞 +92 333 9876543</p>
//           <p>📧 info@aurashoes.com</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;



import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import SearchBar from "../Components/SearchBar";
import SubNavbar from "../Components/SubNavbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional: extra validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong!");
      }
    } catch (err) {
      toast.error("Server error. Try again later!");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div>
      <SearchBar />
      <SubNavbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 space-y-5"
        >
          {/* Name */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-md p-3 mt-6">
            <FaUser className="text-green-600 text-xl" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-md p-3">
            <FaEnvelope className="text-green-600 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-start gap-3 border border-gray-300 rounded-md p-3">
            <FaRegCommentDots className="text-green-600 text-xl mt-2" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full outline-none"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-green-600 w-full text-white py-3 rounded-md font-semibold hover:bg-green-700 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-700 space-y-1">
          <p>📞 +92 300 1234567</p>
          <p>📞 +92 333 9876543</p>
          <p>📧 info@aurashoes.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
