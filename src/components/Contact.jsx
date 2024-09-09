// // src/components/Contact.js
// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle form submission, e.g., send the data to a server
//     console.log('Form submitted:', formData);
//     alert('Message sent!');
//     setFormData({ name: '', email: '', message: '' }); // Reset the form
//   };

//   return (
//     <section id="contact" className="bg-gray-100 text-gray-800 py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
//         <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="message"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 rows="4"
//                 required
//               ></textarea>
//             </div>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [alertMessage, setAlertMessage] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'b7ef9f68-9b80-4ae0-9362-ea0868327be4');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });
      const data = await res.json();
      if (data.success) {
        setAlertMessage('Form submitted successfully!');
        event.target.reset(); // Reset the form fields
      } else {
        setAlertMessage('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setAlertMessage(
        'An error occurred while sending your message. Please try again later.'
      );
    }
  };

  return (
    <section id="contact" className="bg-gray-100 text-gray-800 py-20 mx-auto w-10/12">
      <div className="container mx-auto px-2">
        <h2 className="mb-4 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-green-600">
         Contact Me
        </h2>
        
        <div className="max-w-lg mx-auto  p-8 rounded-lg shadow-lg bg-gradient-to-r from-indigo-300 via-blue-400 to-green-300 text-white">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
            {alertMessage && (
              <div
                className={`mt-4 ${
                  alertMessage.includes('failed')
                    ? 'text-red-500'
                    : 'text-green-500'
                }`}
              >
                {alertMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
