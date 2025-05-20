import Benefits from "../components/home/benefits";
import Header from "../components/home/header";
import CityWrapper from "../wrappers/city-wrapper";
import OfficeWrapper from "../wrappers/office-wrapper";
import Layout from "../components/layout";

export default function Browse() {
  return (
    <Layout>
      <Header />
      <CityWrapper />
      <Benefits />
      <OfficeWrapper />
    </Layout>
  );
}
