

const FooterContact = ({
    icon,
    text,
}) => {
    return (
        <div className="flex items-center justify-start mb-6">
            <div className="mr-8 flex items-center justify-center">
                <img src={icon} alt="icon for contact" className="min-w-4 w-4" />
            </div>
            <div className="text-gray-300 flex items-center justify-center">
                {text}
            </div>
        </div>
    );
}

export default FooterContact;