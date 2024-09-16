import { useState } from "react";

const MailPrompt = () => {

    const [email, setEmail] = useState("");

    return (
        <div className="flex items-center justify-center text-white mb-20 md:w-[60%] lg:w-[50%]">
            <div className="flex flex-col items-center justify-center">
                <div className="font-bold text-xl mb-2 md:text-2xl lg:text-3xl">
                    Get early access today
                </div>
                <div className="text-base text-center text-gray-300 mb-6">
                    It only takes a minute to sign up and our
                    free starter tier is extremely generous.
                    If you have any questions, our support team
                    would be happy to help you.
                </div>
                <div className="w-full flex flex-col items-center justify-center md:flex-row">
                    <input
                        type="mail"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        className="w-full bg-white border-none rounded-3xl px-6 py-3 mb-4 md:mb-0 md:mr-6 md:w-[70%]"
                    />
                    <input
                        type="button"
                        value="Get started for free"
                        className="w-full bg-blue border-none rounded-3xl px-6 py-3 md:flex-1"

                    />
                </div>
            </div>
        </div>
    );
}

export default MailPrompt;