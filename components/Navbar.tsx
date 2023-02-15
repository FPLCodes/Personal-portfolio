function Navbar() {
  return (
    <nav className="fixed w-full top-0 h-10 z-50 invisible sm:visible text-zinc-600 font-light text-center">
      <div className="absolute h-full w-full blur-sm bg-gray-200"></div>
      <div className="absolute h-full w-full backdrop-blur-md"></div>
      <ul className="flex flex-row justify-center h-full items-center text-sm space-x-12">
        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-delay="100"
          className="sidebarLink cursor-pointer"
        >
          <p className="opacity-70 hover:opacity-100 ease-in-out transition-all duration-500">
            Projects
          </p>
        </li>

        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-delay="200"
          className="sidebarLink cursor-pointer"
        >
          <p className="opacity-70 hover:opacity-100 ease-in-out transition-all duration-500">
            Skills
          </p>
        </li>

        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-delay="300"
          className="sidebarLink cursor-pointer"
        >
          <p className="opacity-70 hover:opacity-100 ease-in-out transition-all duration-500">
            Certificates
          </p>
        </li>

        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-delay="400"
          className="sidebarLink cursor-pointer"
        >
          <p className="opacity-70 hover:opacity-100 ease-in-out transition-all duration-500">
            About
          </p>
        </li>

        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-delay="500"
          className="sidebarLink cursor-pointer"
        >
          <p className="opacity-80 hover:opacity-100 ease-in-out transition-all duration-500">
            Contact
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
