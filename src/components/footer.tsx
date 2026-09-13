import Logo from "../assets/logo-text.png"
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src={Logo}
                alt="Dev Stack"
                className="h-8 w-auto"
              />
            </div>

            {/* Description */}
            <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5 text-sm text-gray-700">

              <a
                href="#"
                className="flex items-center gap-1 hover:text-purple-600"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="#"
                className="flex items-center gap-1 hover:text-purple-600"
              >
                <FaTwitter />
                Twitter
              </a>

              <a
                href="#"
                className="flex items-center gap-1 hover:text-purple-600"
              >
                <FaLinkedinIn />
                LinkedIn
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900"
                >
                  Projects
                </a>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900"
                >
                  Careers
                </a>
              </li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900"
                >
                  Terms of Service
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-200 pt-6">

          <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-6">

              <a
                href="#"
                className="hover:text-gray-900"
              >
                Privacy
              </a>

              <a
                href="#"
                className="hover:text-gray-900"
              >
                Terms
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;