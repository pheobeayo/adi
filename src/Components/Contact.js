import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = ({ show }) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d250f924-730b-499b-b961-9b9d128cfbbf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    setFormData({
      name: "",
      email: "",
      location: "",
      title: "",
      message: "",
    });
    if (res.success) {
      console.log("Success", res);
      alert(
        "Thank you for reaching out Aid for depression initiative, we have recieved your submission and will get back to you as soon as possible."
      );
    }
  };

  return (
    <motion.div
      className={`${show && "blur-sm"} pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <h1 className="text-[#facc15] text-xl sm:text-2xl py-3">Book Now </h1>

      <article className="sm:flex">
        <motion.form onSubmit={onSubmit}

          className="flex flex-col sm:w-1/2"
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.3, delay: 0.05, staggerChildren: 0.2 }}
          method="post"
          data-netlify="true"
          name="Contact"
          data-netlify-honeypot="bot-field"

        >
          <input type="hidden" name="form-name" value="Contact" />
          <motion.div className="sm:flex " variants={item}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="my-2 py-2 bg-[#854d0e] w-full sm:w-1/2 placeholder:pl-2 placeholder:text-white sm:mr-2"

            />

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="my-2 py-2 bg-[#854d0e] w-full sm:w-1/2 placeholder:pl-2 placeholder:text-white "

            />
          </motion.div>
         
          <motion.input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="my-2 py-2 bg-[#854d0e] w-full placeholder:pl-2 placeholder:text-white "
            variants={item}
          />
           <motion.input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="my-2 py-2 bg-[#854d0e] w-full placeholder:pl-2 placeholder:text-white "
            variants={item}
          />
          <motion.textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="my-2 bg-[#854d0e] w-full placeholder:pl-2 placeholder:text-white h-7 min-h-full resize-none"
            variants={item}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="border-[#854d0e] px-3 py-2 my-2 items-start border rounded-sm hover:bg-white text-xl font-thin text-[#facc15]"
            variants={item}
          >
            Book An Appointment
          </motion.button>
        </motion.form>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{ duration: 0.5 }}
          className="sm:ml-8 mt-2 sm:text-xl flex-col flex justify-center text-[#facc15]"
        >
          <div className="flex items-center my-3 gap-4">
            <TbPhone />
            <p>+447724389666</p>
          </div>
          <div className="flex items-center my-3 gap-4">
            <TbMail />
            <p>aidfordepreassioninnitiative@gmail.com</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center my-3 gap-4">
              <a
                href="https://wa.me/447724389666"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#854d0e] "
              >  <FaWhatsapp color="yellow" /></a>
            </div>
            <div className="flex items-center my-3">
              <a
                href="https://www.instagram.com/depressionmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#854d0e] "
              >   <FaInstagram color="yellow" /></a>
            </div>
            <div className="flex items-center my-3">
              <a
                href="https://www.facebook.com/DepressionManagementFoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#854d0e] "
              > <FaFacebook color="yellow" /></a>
            </div>
          </div>

          <div className="flex items-center my-3 gap-4">
            <MdOutlineMyLocation />
            <p>Nigeria.</p>
          </div>
        </motion.section>
      </article>
    </motion.div>
  );
};

export default Contact;
