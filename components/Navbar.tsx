const sidebarLinks = ["Projects", "Skills", "Certificates", "About", "Contact"];

function Navbar() {
  return (
    <nav className="fixed w-full top-0 h-10 z-50 invisible sm:visible text-zinc-600 font-light text-center">
      <div className="absolute h-full w-full blur-sm bg-gray-200"></div>
      <div className="absolute h-full w-full backdrop-blur-md"></div>
      <ul className="flex flex-row justify-center h-full items-center text-sm space-x-12">
        {sidebarLinks.map((link, index) => (
          <li
            key={index}
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay={((index + 1) * 100).toString()}
            data-aos-once="true"
            className="sidebarLink cursor-pointer text-gray-500 hover:text-black"
          >
            <p className="ease-in-out transition-all duration-500">{link}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
