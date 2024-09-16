

const FooterContact = ({
    icon,
    text,
}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="mr-2 flex items-center justify-center">
                <img src={icon} alt="icon for contact" className="w-8" />
            </div>
            <div className="text-gray-300">
                {text}
            </div>
        </div>
    );
}

export default FooterContact;