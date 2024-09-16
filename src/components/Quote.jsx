

const Quote = ({
    quote,
    photo,
    name,
    title,
}) => {
    return (
        <div className="p-6 flex flex-col items-start justify-center bg-dark-blue-testimonials text-white mb-8">
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
                    <div className="font-semibold mb-2 text-md">
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