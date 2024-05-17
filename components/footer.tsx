"use client"
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaYoutube, FaPaperPlane} from 'react-icons/fa';
import { useFormStatus as useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import TorontoTime from './time';
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import Link from 'next/link';


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
interface LogosProps {
  scrollProgress: any; // You can specify a more precise type if available
}
const FooterContent: React.FC<LogosProps> = ({ scrollProgress }) => {
  const { ref, inView} = useSectionInView("Experience");
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
  

  return (
    <div className="overflow-hidden">
      <motion.section style={{ y }} className='overflow-x-hidden mt-12 sm:mt-8'>
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
              <div className='col-span-1 md:col-span-3 flex flex-row justify-between items-center'>
                <div className='flex flex-col sm:flex-row align-text-bottom'>
                  <div className='flex flex-col sm:flex-row mr-1'>
                    © 2024 
                    <p className='font-semibold ml-1' id='contact'>Bilal Ikram</p>
                  </div>
                </div>
                <p className=''>Coded with 💔</p>
                <Link href='#intro' className='group font-normal flex flex-row items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition'>
                <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#f6f2e5"
                    className="group-hover:-translate-y-1 transition"
                  >
                    <path
                      d="M6 11L12 5L18 11"
                      stroke="#f6f2e5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 19L12 13L18 19"
                      stroke="#f6f2e5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> 
                  Back to the top
                  </Link>
              </div>
          </div>
      </div>
  </motion.section>
</div>

  );
}


const Footer: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<(SVGTextPathElement | null)[]>([]);
  const [offset, setOffset] = useState(['start end', 'end end'] as ['start end', 'end end'] | ['start end', 'center end']);


  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth <= 767) { // Adjust this value to your breakpoint
        setOffset(['start end', 'center end']);
      } else {
        setOffset(['start end', 'end end']);
      }
    };

    updateOffset(); // Call once to set the initial value
    window.addEventListener('resize', updateOffset); // Add resize event listener

    return () => {
      window.removeEventListener('resize', updateOffset); // Clean up on unmount
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: offset,
  });

  useEffect(() => {
      scrollYProgress.on("change", (e) => {
          paths.current.forEach((path, i) => {
              if (path) {
                  path.setAttribute("startOffset", `${-40 + (i * 40) + (e * 40)}%`);
              }
          });
      });
  }, [scrollYProgress]);

  return (
    <div ref={container}>
        <svg className="w-full mb-20 sm:mb-40" viewBox="0 0 250 90">
            <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
            <text className="text-[5.5px] uppercase " style={{ fill: "#292929" }}>
                {[...Array(4)].map((_, i) => (
                    <textPath className='font-[Chillax]' key={i} ref={(ref) => {
                        paths.current[i] = ref;
                    }} startOffset={`${i * 50}%`} href="#curve">
                      Designed & Created by Bilal Ikram ©
                    </textPath>
                ))}
            </text>
        </svg>
        <FooterContent scrollProgress={scrollYProgress} />
    </div>
);
};

export default Footer;