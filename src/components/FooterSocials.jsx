import { FacebookLogo, TwitterLogo, InstagramLogo } from "@phosphor-icons/react";

const FooterSocials = () => {
    return (
        <div className="flex items-center justify-center lg:flex-1 lg:items-start">
            <div>
                <FacebookLogo
                    size={26}
                    weight="fill"
                    color="#fff"
                />
            </div>
            <div className="mx-3 lg:mx-6">
                <TwitterLogo
                    size={26}
                    weight="fill"
                    color="#FFF"
                />
            </div>
            <div>
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