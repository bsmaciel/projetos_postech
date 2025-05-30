import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function Home() {
  return (
  <>
    <Header>
      <Navbar />
      <Banner />
    </Header>
    <Services />
    <Team />
    <Reviews />
    <Footer />
  </>
  );
}
