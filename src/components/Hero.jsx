
import heroImage from '../assets/images/illustration-intro.png';

const Hero = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-12 mb-12 text-white sm:w-[80%] md:w-[70%] lg:w-[55%] lg:pt-20">
            <div className="w-[100%] flex items-center justify-center mb-12 lg:w-[70%]">
                <img
                    src={heroImage}
                    alt="illustration"
                    className="w-full"
                />
            </div>
            <div className="flex items-center justfify-center flex-col lg:w-[65%]">
                <div className="font-bold text-2xl mb-8 text-center font-raleway lg:text-3xl">
                    All your files in one secure location,
                    accessible anywhere.
                </div>
                <div className="text-sm text-center mb-8 text-gray-300 lg:text-md">
                    Fylo stores all your most important files in one secure location. Access them wherever
                    you need, share and collaborate with friends family, and co-workers.
                </div>
                <div className="w-[80%] flex items-center justify-center md:w-[50%] lg:w-[60%]">
                    <input 
                        type="button"
                        value="Get Started"
                        className="w-full rounded-2xl text-center px-2 py-2 bg-blue text-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;