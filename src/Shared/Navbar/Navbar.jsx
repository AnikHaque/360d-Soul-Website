import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="about">Home</Link>
      </li>

      <li>
        <Link to="/about">Explore Us</Link>
      </li>
      <li>
        <details>
          <summary>Solutions</summary>
          <ul className="bg-base-300 text-black  rounded-t-none min-w-52 z-50">
            <li>
              <details>
                <summary>HR Strategy</summary>
                <ul className="bg-base-300 text-black  rounded-t-none min-w-52">
                  <li>
                    <Link to="/our-events">Planning & Policy</Link>
                  </li>
                  <li>
                    <Link to="/career">PMS * KPI</Link>
                  </li>
                  <li>
                    <Link to="/career">Compensation Survey</Link>
                  </li>
                  <li>
                    <Link to="/career">Talent Management</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>IT Strategy</summary>
                <ul className="bg-base-300 text-black  rounded-t-none min-w-52">
                  <li>
                    <Link to="/our-events">Planning & Policy</Link>
                  </li>
                  <li>
                    <Link to="/career">IT Infrastracture</Link>
                  </li>
                  <li>
                    <Link to="/career">Integrated Security</Link>
                  </li>
                  <li>
                    <Link to="/career">Disaster Recovery</Link>
                  </li>
                  <li>
                    <Link to="/career">Business Automation</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="bg-base-300 text-black  rounded-t-none min-w-52 z-50">
            <li>
              <details>
                <summary>HR Services</summary>
                <ul className="bg-base-300 text-black  rounded-t-none min-w-52">
                  <li>
                    <Link to="/our-events">HRIS</Link>
                  </li>
                  <li>
                    <Link to="/career">Talent Hunt</Link>
                  </li>
                  <li>
                    <Link to="/career">Training & Development</Link>
                  </li>
                  <li>
                    <Link to="/career">Compliance & Regulatory</Link>
                  </li>
                  <li>
                    <Link to="/career">HR Audit</Link>
                  </li>
                  <li>
                    <Link to="/career">Third Party Service</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>IT Services</summary>
                <ul className="bg-base-300 text-black  rounded-t-none min-w-52">
                  <li>
                    <Link to="/our-events">Cloud Services</Link>
                  </li>
                  <li>
                    <Link to="/career">Cyber Security</Link>
                  </li>
                  <li>
                    <Link to="/career">Project Management</Link>
                  </li>
                  <li>
                    <Link to="/career">Data Analytics</Link>
                  </li>
                  <li>
                    <Link to="/career">Technology Training</Link>
                  </li>
                  <li>
                    <Link to="/career">Vendor Management</Link>
                  </li>
                  <li>
                    <Link to="/career">Vulnerability Assessment</Link>
                  </li>
                  <li>
                    <Link to="/career">Pnetration Testing</Link>
                  </li>
                  <li>
                    <Link to="/career">Managed IT Services</Link>
                  </li>
                  <li>
                    <Link to="/career">Web Services</Link>
                  </li>
                  <li>
                    <Link to="/career">Brand & Marketing</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/blog">Offshore Management & Consultation</Link>
            </li>
            <li>
              <Link to="/blog">Career Counselling</Link>
            </li>
            <li>
              <Link to="/blog">Health Tourism</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      <li>
        <Link to="/career">Career</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="bg-black text-white">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <img
            className="w-28"
            src="https://360dsoul.com/wp-content/uploads/2024/04/cropped-cropped-logo.png"
          ></img>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-md">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end container mx-auto ">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="hidden lg:block">
            <a className="btn mr-5">View Accounts</a>
            <button className="btn btn-outline text-white ">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
