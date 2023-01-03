import {
  ClockIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import appStore from "../../assets/Footer/app-store.jpg";
import googleIcon from "../../assets/Footer/google-play.jpg";
import atm from "../../assets/Footer/payment-method.png";

function Footer() {
  return (
    <footer className="px-4 divide-y text-gray-900 print:hidden">
      <div>
        <div className="grid grid-cols-2  gap-x-3 gap-y-8 lg:grid-cols-6">
          <div className="space-y-3">
            <Link to="/">
              <img src={logo} className="h-14 " alt="" />
            </Link>
            <h3 className="tracking-wide  text-gray-950">
              Awesome grocery store website template
            </h3>
            <ul className="space-y-1">
              <li className="flex">
                <MapPinIcon className="text-[#3BB77E] h-5 w-5" />
                <h3 className=" text-gray-950">
                  Address: Chittagong,Bangladesh
                </h3>
              </li>
              <li className="flex">
                <PhoneArrowUpRightIcon className="text-[#3BB77E] h-5 w-5 pr-1" />
                <p>Call Us:(+880) 1845959145</p>
              </li>
              <li className="flex">
                <EnvelopeOpenIcon className="text-[#3BB77E] h-5 w-5 pr-1" />
                <h3>Email: mdalauddin8948@gmail.com</h3>
              </li>
              <li className="flex">
                <ClockIcon className="text-[#3BB77E] h-5 w-5 pr-1" />
                <p>Hours:10:00 - 18:00, Mon - Sat</p>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide font-bold font-sans text-[24px] dark:text-[#253D4E]">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Support Center
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide font-bold font-sans text-[24px] dark:text-[#253D4E]">
              Account
            </h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Sign In
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  View Cart
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Track My Order
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Help Ticket
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Shipping Details
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Compare products
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide font-bold font-sans text-[24px] dark:text-[#253D4E]">
              Corporate
            </h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Farm Business
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Farm Careers
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Our Suppliers
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Promotions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide font-bold font-sans text-[24px] dark:text-[#253D4E]">
              Popular
            </h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Milk & Flavoured Milk
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Butter and Margarine
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Eggs Substitutes
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Marmalades
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Sour Cream and Dips
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Tea & Kombucha
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Cheese
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide font-bold font-sans text-[24px] dark:text-[#253D4E]">
              Install App
            </h3>
            <ul className="space-y-5">
              <li>
                <Link rel="noopener noreferrer" to="#">
                  From App Store or Google Play
                </Link>
              </li>
              <li className="lg:flex ">
                <img src={appStore} className="w-32 pr-2" alt="" />
                <img src={googleIcon} className="w-32" alt="" />
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Secured Payment Gateways
                </Link>
              </li>
              <li>
                <img src={atm} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 1968 Company Co. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
