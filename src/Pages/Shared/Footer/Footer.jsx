import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";


const Footer = () => {
    return (
        <div>
            <footer className="footer lg:grid-cols-3 bg-white text-black p-10 ">
                <aside className="">
                    <div>
                        <span className=" text-orange-600 text-4xl font-bold">F</span><span className=" text-gray-600">IRIDAK</span>
                    </div>
                    <p>
                        FIRIDAK Ltd.
                        <br />
                        Your trust is our identity
                    </p>
                    <p className=" flex items-center gap-1">
                        <TfiEmail />
                        abiumar.info@gmail.com
                    </p>
                </aside>
                <nav className=" lg:place-items-center w-full">
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col items-center gap-4">
                        <a href="https://www.facebook.com/FiRidaka?mibextid=ZbWKwL">
                            <BsFacebook className=" text-2xl text-blue-600"></BsFacebook>
                        </a>
                        <a href="https://youtube.com/@firidaka?si=z-g3AkGM9QO0QefG" className="">
                            <BsYoutube className=" text-3xl text-red-600"></BsYoutube>
                        </a>
                        <a href="https://www.instagram.com/firidaka?igsh=eWYza2hidmNxeGZ4" className=" ">
                            <BsInstagram className=" text-2xl text-[#E1306C]"></BsInstagram>
                        </a>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center bg-gray-50 text-black p-4">
                <aside>
                    <p> © {new Date().getFullYear()} Firidak.com</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;