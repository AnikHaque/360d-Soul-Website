const Footer = () => {
  return (
    <div className="bg-[#333e68] mt-20 text-white">
      <div className=" container mx-auto">
        <div className="px-4 pt-16 md:px-24 lg:px-8">
          <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-bold tracking-wide text-white">Category</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      References
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold tracking-wide text-white">Apples</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Web
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      eCommerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold tracking-wide text-white">Cherry</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Brochure
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Nonprofit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Educational
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold tracking-wide text-white">Business</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Infopreneur
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Personal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Wiki
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Forum
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:max-w-md lg:col-span-2">
              <span className="text-base font-bold tracking-wide text-white">
                Subscribe for updates
              </span>
              <form className="flex flex-col mt-4 md:flex-row">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-white">
                Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken
                spare ribs salami.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
            <p className="text-sm text-white">
              © Copyright 2024{" "}
              <span className="text-blue-300">360d Soul Ltd</span>. All rights
              reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
