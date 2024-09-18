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
        <div className="w-full p-4 flex flex-col items-center justify-center bg-dark-blue-footer text-white
        md:p-6 lg:p-8
        ">
            <div className="w-full flex items-center justify-start w-22 mb-12 xs:justify-center lg:justify-start">
                <img
                    src={logo}
                    alt="logo"
                    className="w-40 md:w-44 lg:w-48"
                />
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-row lg:items-stretch lg:justify-between xs:w-[65%] md:w-[50%] lg:w-full">
                <div className="flex flex-col items-start justify-center lg:mr-6 lg:flex-1 lg:justify-start">
                    <div className="flex items-start justify-center">
                        <div className="flex items-center justify-center mr-8">
                            <img
                                src={locationIcon}
                                alt="location icon"
                                className="min-w-4 w-4 lg:min-w-5 lg:w-5"
                            />
                        </div>
                        <div className="text-gray-300 -mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center mt-16 lg:items-center lg:flex-1 lg:justify-start lg:mt-0 lg:mr-16">
                    <FooterContact
                        icon={phoneIcon}
                        text="+1-543-123-4567"
                    />
                    <FooterContact
                        icon={mailIcon}
                        text="example@fylo.com"
                    />
                </div>
                <div className="flex flex-col items-start justify-center my-12 text-gray-300 
            lg:flex-row lg:items-stretch lg:flex-1 lg:justify-center lg:my-0">
                    <div className="flex flex-col items-start justify-center mb-8 lg:mb-0 lg:mr-6 lg:flex-1 lg:justify-start lg:items-center">
                        <FooterLink text="About Us" />
                        <FooterLink text="Jobs" />
                        <FooterLink text="Press" />
                        <FooterLink text="Blog" />
                    </div>
                    <div className="flex flex-col items-start justify-center lg:justify-start lg:items-center lg:flex-1">
                        <FooterLink text="Contact Us" />
                        <FooterLink text="Terns" />
                        <FooterLink text="Privacy" />
                    </div>
                </div>
                <FooterSocials />
            </div>
        </div>
    );
}

export default Footer;