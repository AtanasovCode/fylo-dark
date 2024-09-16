//importing icons for each individual feature
import feature1 from '../assets/images/icon-access-anywhere.svg';
import feature2 from '../assets/images/icon-security.svg';
import feature3 from '../assets/images/icon-collaboration.svg';
import feature4 from '../assets/images/icon-any-file.svg';

//importing reusable component
import Feature from "./Feature";

const FeaturesGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-16 items-center justify-items-center md:grid-cols-2 lg:w-[60%]">
            <Feature
                icon={feature1}
                title="Access your files, anywhere"
                text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
            />
            <Feature
                icon={feature2}
                title="Security you can trust"
                text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
            />
            <Feature
                icon={feature3}
                title="Real-time collaboration"
                text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
            />
            <Feature
                icon={feature4}
                title="Store any type of file"
                text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
            />
        </div>
    );
}

export default FeaturesGrid;