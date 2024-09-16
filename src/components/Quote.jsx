

const Quote = ({
    quote,
    photo,
    name,
    title,
    icon,
    showQuote,
}) => {
    return (
        <div className="p-8 relative flex flex-col items-start justify-center bg-dark-blue-testimonials text-white mb-8">
            <div className={`${showQuote ? "absolute -top-[9%] left-4" : "hidden"}`}>
                <img 
                    src={icon}
                    alt="decorative quote icon"
                    className="w-6"
                />
            </div>
            <div className="text-gray-300 mb-6">
                {quote}
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center mr-4 w-12 rounded-full overflow-hidden">
                    <img 
                        src={photo}
                        alt="profile photo"
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="font-semibold mb-1 text-md">
                        {name}
                    </div>
                    <div className="text-gray-300 text-sm">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quote;