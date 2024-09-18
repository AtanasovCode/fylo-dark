import illustration from '../assets/images/illustration-stay-productive.png'
import iconArrow from '../assets/images/icon-arrow.svg';

const Info = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white mb-20 xs:w-[70%] lg:flex-row lg:w-[80%]">
            <div className="w-full flex items-center justify-center mb-12">
                <img
                    src={illustration}
                    alt="stay productive illustration"
                    className="w-full"
                />
            </div>
            <div className="flex flex-col items-start justify-center">
                <div className="font-bold text-3xl mb-8 lg:mb-4 lg:text-4xl">
                    Stay productive, wherever you are
                </div>
                <div className="flex flex-col text-sm text-gray-300 mb-6">
                    <div className="mb-4">
                        Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                        storage needs.
                    </div>
                    <div>
                        Securely share files and folders with friends, family and colleagues for live collaboration. No email
                        attachments required.
                    </div>
                </div>
                <div className="border-b-2 border-solid border-cyan pb-1 flex items-center justify-center text-blue hover:cursor-pointer">
                    See how Fylo works
                    <div className="flex items-center justify-center ml-2 w-4">
                        <img 
                            src={iconArrow}
                            alt="arrow icon"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;