import logo from '../assets/images/logo.svg';
import locationIcon from '../assets/images/icon-location.svg';

const Footer = () => {
    return (
        <div className="flex flex-col items-start justify-center bg-dark-blue-footer text-white">
            <div className="flex flex-col items-start justify-center">
                <div className="flex items-center justify-center w-22 mb-12">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-full"
                    />
                </div>
                <div className="flex items-start justify-center overflow-hidden">
                    <div className="flex items-center justify-center mr-8">
                        <img
                            src={locationIcon}
                            alt="location icon"
                            className="w-12"
                        />
                    </div>
                    <div className="text-gray-300 -mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;