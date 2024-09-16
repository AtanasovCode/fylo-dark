//importing reusable component
import Quote from "./Quote";

//importing profile photos
import profile1 from '../assets/images/profile-1.jpg';
import profile2 from '../assets/images/profile-2.jpg';
import profile3 from '../assets/images/profile-3.jpg';

//importing other images
import quoteIcon from '../assets/images/bg-quotes.png'


const QuotesSection = () => {
    return (
        <div className="flex flex-col items-center justify-center lg:flex-row md:w-[70%] lg:w-[100%] lg:flex-row">
            <Quote
                name="Satish Patel"
                quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                photo={profile1}
                title="Founder & CEO, Huddle"
                icon={quoteIcon}
                showQuote={true}
            />
            <Quote
                name="Bruce McKenzie"
                quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                photo={profile2}
                title="Founder & CEO, Huddle"
                showQuote={false}
            />
            <Quote
                name="Iva Boyd"
                quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                photo={profile3}
                title="Founder & CEO, Huddle"
                showQuote={false}
            />
        </div>
    );
}

export default QuotesSection;