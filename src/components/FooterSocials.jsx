import { FacebookLogo, TwitterLogo, InstagramLogo } from "@phosphor-icons/react";

const FooterSocials = () => {
    return (
        <div className="flex items-center justify-center">
            <div>
                <FacebookLogo
                    size={24}
                    weight="fill"
                    color="#fff"
                />
            </div>
            <div className="mx-2">
                <TwitterLogo
                    size={24}
                    weight="fill"
                    color="#FFF"
                />
            </div>
            <div>
                <InstagramLogo
                    size={24}
                    weight="fill"
                    color="#FFF"
                />
            </div>
        </div>
    );
}

export default FooterSocials;