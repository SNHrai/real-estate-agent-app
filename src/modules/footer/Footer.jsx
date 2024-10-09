import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f3f4f6] text-gray-600 body-font py-16">
      <div className="container px-4 mx-auto">
        <div className="p-8 bg-white rounded-3xl">
          <div className="flex flex-wrap order-first text-center md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font main-title">
                PROPERTIES
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    For Sale
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    For Rent
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    New Listings
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    Featured
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font main-title">
                SERVICES
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    Buying
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    Selling
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    Renting
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    Consulting
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font main-title">
                ABOUT
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 fm-txt">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-600 hover:text-gray-800 fm-txt">
                    Blog
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font main-title">
                SUBSCRIBE
              </h2>
              <div className="flex flex-wrap items-end justify-center mb-2 xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start">
                <div className="relative w-full max-w-xs">
                  <label
                    htmlFor="footer-field"
                    className="text-sm leading-7 text-gray-600 fm-txt">
                    Get latest flat updates
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="footer-field"
                      name="footer-field"
                      className="w-full px-3 py-2 pr-24 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none fm-txt focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                      placeholder="Enter your email"
                    />
                    <button className="absolute inline-flex items-center px-3 py-1 text-sm text-white bg-indigo-500 border-0 rounded right-1 top-3 focus:outline-none hover:bg-indigo-600 btn-font">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-center text-gray-500 fm-txt md:text-left">
                Stay updated with our latest listings
                <br className="hidden lg:block" />
                and real estate news
              </p>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-200">
            <div className="flex flex-col items-center sm:flex-row">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <span className="ml-3 text-xl text-indigo-500 amt fs-3">Dream Homes Co.</span>
              </a>
              <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0 amt fs-5">
                © 2023 Real Estate Co. —
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="ml-1 text-gray-600 amt fs-4"
                  target="_blank">
                  @realestatecompany
                </a>
              </p>
              <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                <a className="text-indigo-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-indigo-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-indigo-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-indigo-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
