

const Quote = ({
    quote,
    photo,
    name,
    title,
    icon,
    showQuote,
}) => {
    return (
        <div className="p-8 relative flex flex-1 flex-col items-start justify-center bg-dark-blue-testimonials text-white mb-8 rounded-md z-10
        lg:mb-0 lg:mx-2 lg:p-4 xl:mx-5
        ">
            <div className={`${showQuote ? "absolute -top-[9%] left-4 lg:-left-2 lg:-top-[14%] lg:z-0" : "hidden"}`}>
                <img 
                    src={icon}
                    alt="decorative quote icon"
                    className="w-6 lg:w-10 lg:z-0"
                />
            </div>
            <div className="text-gray-400 mb-6">
                {quote}
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center mr-4 w-8 rounded-full overflow-hidden">
                    <img 
                        src={photo}
                        alt="profile photo"
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="font-semibold mb-1">
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