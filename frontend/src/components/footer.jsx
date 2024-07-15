import { Typography } from "@material-tailwind/react";
import logo from "../assets/logo.png";

export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-20" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/menu"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Menu
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/mobile"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Mobile App
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-bold">
        &copy; 2024 Tomato
      </Typography>
    </footer>
  );
}
