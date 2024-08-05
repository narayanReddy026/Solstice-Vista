import {
  Clock1,
  ContactIcon,
  FacebookIcon,
  InstagramIcon,
  MailboxIcon,
} from "lucide-react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="p-6 md:p-20 bg-neutral-900 text-white font-poppins"
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between w-full mb-12">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">You Can Find Us At</h3>
            <div className="flex space-x-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="w-8 h-8" />
              </a>
              <a href="mailto:someone@example.com">
                <MailboxIcon className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="/faqs" className="hover:text-orange-500">
                Contact Us
              </a>
              <a href="/blog" className="hover:text-orange-500">
                Blog
              </a>
              <a href="/gallery" className="hover:text-orange-500">
                Services
              </a>
              <a href="/pricing" className="hover:text-orange-500">
                Home
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Work Hours</h3>
            <div className="flex gap-1 items-center">
              <Clock1 />
              <span className="block">7 AM - 5 PM, Mon - Sat</span>
            </div>
            <div className="flex gap-1 justify-between items-center place-content-stretch ">
              <ContactIcon />
              <span className="block mt-6"> 6562028118</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center mt-12">
        <span>
          &copy; {new Date().getFullYear()} Solstice Vista. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
