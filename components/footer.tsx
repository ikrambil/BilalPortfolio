"use client"
import React from 'react';
import { FaGithub, FaLinkedinIn, FaYoutube, FaPaperPlane} from 'react-icons/fa';
import { useFormStatus as useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import TorontoTime from './time';
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

interface ContactDetailsProps {
  email: string;
  phone: string;
  location: string;
  currentTime: string;
}

interface SocialLinkProps {
  name: string;
  url: string;
}

const ContactDetails: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-4 px-4">
      <h2 className="text-2xl font-medium">Contact Details</h2>
      <ul className="w-full">
        <li className="flex items-center space-x-2">
        <a href="tel:+19052994235" className='underline-hover-effect-alt !pb-0'>+1 905-299-4235</a>
        </li>
        <li className="flex items-center space-x-2">
          <a href="mailto:bilal.ikr@outlook.com?subject=Hello%20there&body=Hi%2C%20I%20have%20a%20question%20about..." className='underline-hover-effect-alt !pb-0'>bilal.ikr@outlook.com</a>
        </li>
      </ul>
    </div>
  );
}

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-4 p-4">
      <h2 className="text-2xl font-medium">My Digital Spaces</h2>
      <ul className="w-full">
        <li className="flex items-center space-x-2 mb-1">
          <FaGithub className="text-lg" /> <a href='https://github.com/ikrambil' className='underline-hover-effect-alt !pb-0' target='_blank'>Github</a>
        </li>
        <li className="flex items-center space-x-2 mb-1">
          <FaLinkedinIn className="text-lg" /> <a href='https://www.linkedin.com/in/bilal-ikram/' className='underline-hover-effect-alt !pb-0' target='_blank'>LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

const FooterForm = () => {
  const { pending } = useFormStatus();
  return (
    <form 
    className="flex flex-col space-y-8 text-black overflow-x-hidden"
    action={async (formData) => {
      const { data, error } = await sendEmail(formData);
      console.log(data,error)

      if (error) {
        toast.error(error);
        return;
      }

      toast.success("Email sent successfully!");
    }}
  >
        <div className='flex'>
        <input type="text" placeholder="Your name" name='name' className="input w-1/2 mr-4 border-b-2 border-[#f6f2e5] bg-[#292929] placeholder-[#f6f2e5] focus:outline-none focus:border-b-2 focus:border-black" required/>
        <input type="email" placeholder="Your email" name="senderEmail" className="input w-1/2 ml-2 border-b-2 border-[#f6f2e5] bg-[#292929] placeholder-[#f6f2e5] focus:outline-none focus:border-b-2 focus:border-black" required/>
      </div>
      <textarea placeholder="Your message" name="message" className="input border-b-2 border-[#f6f2e5] bg-[#292929] placeholder-[#f6f2e5] h-28 focus:outline-none focus:border-b-2 focus:border-black" required></textarea>
      <div><button
      type="submit"
      className="group flex items-center justify-center gap-2 ml-2 mb-2 h-[3rem] w-[8rem] bg-[#f6f2e5] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-[#f6f2e5] hover:text-[#292929] active:scale-105 dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button></div>
    </form>
  );
}

const Footer: React.FC = () => {
  const { ref, inView} = useSectionInView("Experience");
  

  return (
    <section className='overflow-x-hidden mt-12 sm:mt-8' id='contact'>
    <div className=' text-[#f6f2e5] w-[100vw] bg-[#292929] overflow-x-hidden'>
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-hidden">
            <div className='md:col-span-2 flex flex-col gap-4'>
                <h2 className="text-4xl font-medium mb-8">Want to get in touch?</h2>
                <h3 className="text-xl font-normal mb-8">I am currently looking for internships or full-time opportunities, however feel free to reach out if you want to just talk!</h3>
                <FooterForm />
            </div>
            <div className='flex flex-col md:mx-auto justify-between'>
                <ContactDetails />
                <SocialLinks/>
                <div className="flex flex-col items-start space-y-4 p-4">
                  <h2 className="text-2xl font-medium">Location</h2>
                  <ul className="w-full">
                    <li className="flex items-center space-x-2">
                      <span>43.6532° N, 79.3832° W</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span>Toronto, Canada</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span><TorontoTime /></span>
                    </li>
                  </ul>
                </div>
            </div>
            <div className='col-span-1 md:col-span-3 flex flex-row justify-between'>
              <div className='flex flex-col sm:flex-row'>
                <div className='flex flex-col sm:flex-row mr-1'>
                  © 2024 
                  <p className='font-semibold ml-1'> Bilal Ikram</p>
                </div>
              </div>
              <p className=''>Designed and Coded with 💔</p>
              <p className=''>See ya later!</p>
            </div>
        </div>
    </div>
</section>

  );
}

export default Footer;
