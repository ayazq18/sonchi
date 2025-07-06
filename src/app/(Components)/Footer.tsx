import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#BB1D1D] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-8 lg:gap-2">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Sonchi Light Logo.png"
                alt="logo"
                height={43.05}
                width={141}
                // layout="responsive"
              />
            </div>

            {/* Description */}
            <p className="text-[16px] w-[237px] lg:w-[337px] text-red-100 mb-6 leading-relaxed">
              As a restaurateur, I appreciate the wealth of culinary knowledge
              and inspiration I gain from this website.
            </p>

            {/* Email Subscription */}
            <div className="mb-6">
              <div className="w-[270px] lg:w-[390px] h-[53px] flex items-center gap-2 bg-white rounded-full p-2">
                <input
                  type="email"
                  placeholder="Enter your email id"
                  className="flex-1 rounded-full pl-5 text-sm text-[#BB1D1D] focus:outline-none focus:ring-2 focus:ring-transparent"
                />
                <button className="bg-[#BB1D1D] hover:bg-red-900 w-[116px] h-[40px] rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                  Submit
                </button>
              </div>
            </div>

            {/* Made in India Badge */}
            <div className="flex-shrink-0">
              <Image
                src="/Make-in-India-Logo-PNG-HD 1.png"
                alt="logo"
                height={43.05}
                width={141}
                // layout="responsive"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-[22px] leading-[24px] font-bold mb-3 tracking-[0.3em]">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Cuisines",
                "Host",
                "Blogs",
                "Our Services",
                "Customer Reviews",
                "Meet Our Team",
                "Become a Host",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#ffffff] font-[500] hover:text-white text-[16px] leading-[18px] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-1">
            <h3 className="text-[22px] leading-[24px] font-bold mb-3 tracking-[0.3em]">OPENING</h3>
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-[20px] leading-[20px] mb-2">Monday - Saturday</h4>
                <p className="text-[#ffffff] text-[16px] leading-[16px] ">09:00 AM - 09:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Sunday</h4>
                <p className="text-[#ffffff] text-[16px] leading-[16px]">11:00 AM - 08:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-[22px] leading-[24px] font-bold mb-3 tracking-[0.3em]">
              CONTACT US
            </h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-200" />
                <span className="text-[16px]">+91 7879088134</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-200" />
                <span className="text-[16px]">inforsonchi@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-200 mt-0.5" />
                <span className="text-[16px]">Vijay Nagar, Indore, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-[18px] leading-[24px] font-bold mb-3 tracking-[0.3em]">FOLLOW US ON</h4>
              <div className="flex gap-1">
                <a
                  href="#"
                  className="bg-white hover:bg-red-800 p-2 rounded transition-colors"
                >
                  <Facebook color="#BB1D1D" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-red-800 p-2 rounded transition-colors"
                >
                  <Instagram color="#BB1D1D" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-red-800 p-2 rounded transition-colors"
                >
                  <Linkedin color="#BB1D1D" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-red-800 p-2 rounded transition-colors"
                >
                  <MessageCircle color="#BB1D1D" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-red-800 p-2 rounded transition-colors"
                >
                  <Youtube color="#BB1D1D" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#F2ECE0] text-[#BB1D1D]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[18px] leading-[27px]">
            <p>Copyright ©2023. All Rights Reserved. Sonchi</p>
            <div className="flex flex-wrap gap-4 text-center">
              <a href="#" className="hover:text-white transition-colors">
                Community Guidelines
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
