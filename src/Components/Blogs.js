import React from "react";
import CampaignImg from "../Images/campaign2.jpg";
import CampaignImg2 from "../Images/campaign4.jpg";
import CampaignImg3 from "../Images/campaign5.jpg";
import { motion } from "framer-motion";

const Blogs = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-20 lg:pl-24 ff`}
    >
      <h1 className="text-xl sm:text-2xl py-3 text-[#facc15]">
        Our Blog
        </h1>
      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">01.</span> Awareness Program
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 text-[#facc15]"
            >
              We are committed to providing exceptional mental health support, raising awareness,
              and giving back to society by creating a community where everyone feels understood,valued,
              and empowered to lead fulfilling lives.


            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={CampaignImg}
              alt="campaign2"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">02.</span> Giving help to the Needy
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={CampaignImg2}
              alt="campaign4"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 text-[#facc15]"
            >
              Giving back to the society
              Through raising awareness about mental health support


            </motion.article>

          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">03.</span> Enlightment Campaign
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 text-[#facc15]"
            >
              Giving Succour to the less priviledged is our Joy
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={CampaignImg3}
              alt="campaign5"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>







    </div>
  );
};

export default Blogs;
