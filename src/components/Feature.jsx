

const Feature = ({
    icon,
    title,
    text
}) => {
    return (
        <div className="flex flex-col items-center justify-center text-white">
            <div className="flex items-center justify-center mb-6">
                <img 
                    src={icon}
                    alt="feature icon"
                    className="w-full"
                />
            </div>
            <div className="text-xl font-bold mb-6 text-center">
                {title}
            </div>
            <div className="text-center text-gray-300">
                {text}
            </div>
        </div>
    );
}

export default Feature;