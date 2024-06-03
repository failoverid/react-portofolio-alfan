import logo from '../assets/logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    const handleDownloadCV = () => {
        // Fungsi ini akan dipanggil saat tombol Download CV diklik
        // Mendownload file CV dari assets/cv.pdf
        const downloadLink = document.createElement('a');
        downloadLink.href = '/assets/cv.pdf';
        downloadLink.download = 'cv.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="flex items-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <button className="hover:text-cyan-500 text-l" onClick={handleDownloadCV}>Download CV</button>
            </div>
        </nav>
    );
};

export default Navbar;
