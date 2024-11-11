const Footer = () => {
  return (
    <section>
      <footer className="footer bg-[#0a7765] text-[#fff] p-10 container mx-auto mr-0 text-center ">
        <nav className="">
          <h6 className="footer-title font-Pacifico text-lg tracking-widest">
            Services
          </h6>
          <a className="link link-hover ">Branding</a>
          <a className="link link-hover ">Design</a>
          <a className="link link-hover ">Marketing</a>
          <a className="link link-hover ">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title font-Pacifico text-lg tracking-widest">
            Contact Us
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title font-Pacifico text-lg tracking-widest">
            Follow Us
          </h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">LinkedIn</a>
        </nav>
      </footer>
    </section>
  );
};
export default Footer;
