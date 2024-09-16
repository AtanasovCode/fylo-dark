
//importing components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import Info from "./components/Info";
import QuotesSection from "./components/QuotesSection";
import MailPrompt from "./components/MailPrompt";

const App = () => {
  return (
    <div className="w-full min-h-[100vh] bg-dark-blue-main font-open p-6 flex flex-col items-center justify-center sm:p-8 md:p-10 lg:px-12 lg:py-10">
      <Navigation />
      <Hero />
      <FeaturesGrid />
      <Info />
      <QuotesSection />
      <MailPrompt />
    </div>
  );
}

export default App;