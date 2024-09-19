

const Feature = ({
    icon,
    title,
    text
}) => {
    return (
        <div className="flex flex-col items-center justify-center text-white xs:w-[60%] sm:w-[50%] md:w-[100%] lg:w-[90%]">
            <div className="flex items-center justify-center mb-4">
                <img 
                    src={icon}
                    alt="feature icon"
                    className="w-full"
                />
            </div>
            <div className="text-lg font-bold mb-2 text-center">
                {title}
            </div>
            <div className="text-center text-gray-400">
                {text}
            </div>
        </div>
    );
}

export default Feature;