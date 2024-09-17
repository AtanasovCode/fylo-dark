
//importing components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import Info from "./components/Info";
import QuotesSection from "./components/QuotesSection";
import MailPrompt from "./components/MailPrompt";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-[100vh] bg-dark-blue-main font-open flex flex-col items-center justify-center">
      <div className="p-6 flex flex-col items-center justify-center sm:p-8 md:p-10 lg:px-12 lg:py-10">
        <Navigation />
        <Hero />
        <FeaturesGrid />
        <Info />
        <QuotesSection />
        <MailPrompt />
      </div>
      <Footer />
    </div>
  );
}

export default App;