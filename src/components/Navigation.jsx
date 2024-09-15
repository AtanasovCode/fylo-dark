import logo from '../assets/images/logo.svg';

const Navigation = () => {
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-center w-20 sm:w-24 md:w-28 lg:w-32">
                <img 
                    src={logo}
                    alt="logo"
                    className="w-full"
                />
            </div>
            <div className="flex items-center justify-center text-gray-300 text-sm md:text-base">
                <div>Features</div>
                <div className="mx-4 sm:mx-6 lg:mx-8">Team</div>
                <div>Sign In</div>
            </div>
        </div>
    );
}

export default Navigation;