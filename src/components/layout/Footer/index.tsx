import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#120A23] text-white pt-10 border-t border-[#1C0F34]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-[repeat(3,minmax(0,1fr))_200px]
            gap-8 
            pb-10
          "
        >
          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Responsible Gaming</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Regulations */}
          <div>
            <h3 className="font-semibold mb-4">Regulations</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#">General Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">AML & KYC Policy</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="w-full lg:max-w-[200px] lg:ml-auto">
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <FaFacebookF className="text-white/70" />
                <a href="#">Facebook</a>
              </li>
              <li className="flex items-center gap-2">
                <FaTwitter className="text-white/70" />
                <a href="#">Twitter</a>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="text-white/70" />
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#2A253A] text-white/70 text-center py-4 text-sm w-full">
        Copyright ©2022, ZorroBet. All Rights Reserved
      </div>
    </footer>
  );
}
