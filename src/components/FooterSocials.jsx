import { FacebookLogo, TwitterLogo, InstagramLogo } from "@phosphor-icons/react";

const FooterSocials = () => {
    return (
        <div className="flex items-center justify-center lg:flex-1 lg:items-start">
            <div className="hover:cursor-pointer">
                <FacebookLogo
                    size={26}
                    weight="fill"
                    color="#fff"
                />
            </div>
            <div className="mx-3 lg:mx-6 hover:cursor-pointer">
                <TwitterLogo
                    size={26}
                    weight="fill"
                    color="#FFF"
                />
            </div>
            <div className="hover:cursor-pointer">
                <InstagramLogo
                    size={26}
                    weight="fill"
                    color="#FFF"
                />
            </div>
        </div>
    );
}

export default FooterSocials;