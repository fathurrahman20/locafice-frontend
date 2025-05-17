import Benefits from "../components/home/benefits";
import Header from "../components/home/header";
import Navbar from "../components/navbar";
import CityWrapper from "../wrappers/city-wrapper";
import OfficeWrapper from "../wrappers/office-wrapper";

export default function Browse() {
  return (
    <>
      <Navbar />
      <Header />
      <CityWrapper />
      <Benefits />
      <OfficeWrapper />
    </>
  );
}
