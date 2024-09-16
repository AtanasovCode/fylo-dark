import { useState } from "react";

const MailPrompt = () => {

    const [email, setEmail] = useState("");

    return (
        <div className="flex flex-col items-center justify-center text-white">
            <div className="font-bold text-xl mb-2">
                Get early access today
            </div>
            <div className="text-sm text-center text-gray-300 mb-2">
                It only takes a minute to sign up and our
                free starter tier is extremely generous.
                If you have any questions, our support team
                would be happy to help you.
            </div>
            <div className="flex flex-col items-center justify-center">
                <input
                    type="mail"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    className="w-full bg-white border-none rounded-xl px-6 py-4"
                />
                <input
                    type="button"
                    title="Get started for free"
                    className="w-full bg-white border-none rounded-xl px-6 py-4"
                />
            </div>
        </div>
    );
}

export default MailPrompt;