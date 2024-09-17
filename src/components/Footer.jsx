import logo from '../assets/images/logo.svg';
import locationIcon from '../assets/images/icon-location.svg';
import phoneIcon from '../assets/images/icon-phone.svg';
import mailIcon from '../assets/images/icon-email.svg';

//importing reusable components
import FooterContact from './FooterContact';
import FooterLink from './FooterLink';
import FooterSocials from './FooterSocials';

const Footer = () => {
    return (
        <div className="w-full p-4 flex flex-col items-center justify-center bg-dark-blue-footer text-white">
            <div className="w-full flex flex-col items-start justify-center">
                <div className="flex items-center justify-center w-22 mb-12">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-full"
                    />
                </div>
                <div className="flex items-start justify-center">
                    <div className="flex items-center justify-center mr-8">
                        <img
                            src={locationIcon}
                            alt="location icon"
                            className="min-w-4 w-4"
                        />
                    </div>
                    <div className="text-gray-300 -mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-start justify-center mt-16">
                <FooterContact
                    icon={phoneIcon}
                    text="+1-543-123-4567"
                />
                <FooterContact
                    icon={mailIcon}
                    text="example@fylo.com"
                />
            </div>
            <div className="w-full flex flex-col items-start justify-center my-12 text-gray-300">
                <div className="flex flex-col items-start justify-center mb-8">
                    <FooterLink text="About Us" />
                    <FooterLink text="Jobs" />
                    <FooterLink text="Press" />
                    <FooterLink text="Blog" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <FooterLink text="Contact Us" />
                    <FooterLink text="Terns" />
                    <FooterLink text="Privacy" />
                </div>
            </div>
            <FooterSocials />
        </div>
    );
}

export default Footer;