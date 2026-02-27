import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <Home />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
