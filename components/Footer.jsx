import Logo from "./Logo";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#4b909f] text-black">
    <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
      <div className="lg:w-1/3">
       
      <img src="/assets/hero/img9.jpg" alt="Card Image 1" class="w-32 h-32  mb-3"/>
      </div>
      <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
        <div className="space-y-3">
          <h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
          <ul className="space-y-1">
            <li>
              <a rel="noopener noreferrer" href="#">Features</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Integrations</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Pricing</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
          <ul className="space-y-1">
            <li>
              <a rel="noopener noreferrer" href="#">Privacy</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="uppercase dark:text-gray-900">Developers</h3>
          <ul className="space-y-1">
            <li>
              <a rel="noopener noreferrer" href="#">Public API</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Documentation</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Guides</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <div className="uppercase dark:text-gray-900">Social media</div>
          <div className="flex justify-start space-x-3">
          <Socials
              containerStyles="flex items-center space-x-2"
              iconStyles="text-base w-[32px] h-[32px] bg-primary text-white flex items-center justify-center rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="py-6 text-sm text-center text-black">© 1968 Company Co. All rights reserved.</div>
  </footer>
  );
};

export default Footer;
