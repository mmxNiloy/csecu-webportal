import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <>
        <footer
          style={{ backgroundColor: "#0C4A6E" }}
          className="p-t-75 p-b-32 text-white"
        >
          <div className="container-fluid">
            <footer className="footer">
              <div className="container">
                <div className="grid grid-cols-4 items-center justify-center">
                  {/* First Column: Logo */}
                  <div>
                    <img
                      src="https://cu.ac.bd/assets/image/culogo.png"
                      alt="Logo"
                      className="footer-logo"
                      height={"auto"}
                      width={"100px"}
                    />
                  </div>

                  {/* Second Column: Important Links */}
                  <div className="flex flex-col gap-2">
                    <h5 className="text-xl font-bold">Important Links</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="https://rps.bike-csecu.com/">
                          Result Processing
                        </Link>
                      </li>
                      <li>
                        <Link href="https://noc.bike-csecu.com/">NOC / GO</Link>
                      </li>
                      <li>
                        <Link href="https://leave.bike-csecu.com">
                          Apply for a Leave
                        </Link>
                      </li>
                      {/* Add more links as needed */}
                    </ul>
                  </div>

                  {/* Third Column: Social Links */}
                  <div className="flex flex-col gap-2">
                    <h5 className="text-xl font-bold">Social Links</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                      {/* Add more social links as needed */}
                    </ul>
                  </div>

                  {/* Fourth Column: Contact Info */}
                  <div className="flex flex-col gap-2">
                    <h5 className="text-xl font-bold">Contact Us</h5>
                    <p>Jobra, Hathazari</p>
                    <p>Email: contact@cu.ac.bd</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </footer>
        <footer
          style={{ backgroundColor: "#6B0E10", padding: "15px" }}
          className=" p-4"
        >
          <div className="container-fluid">
            <div className="row justify-content-center">
              <p style={{ color: "white" }} className=" txt-center">
                © University of Chittagong. Chittagong 4331. Bangladesh
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Footer;
