import { useParams } from "react-router";
import Gallery from "../components/office/gallery";
import OfficeDetail from "../components/office/office-detail";
import Layout from "../components/layout";

export default function OfficeDetails() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <Layout>
      <Gallery slug={slug as string} />
      <OfficeDetail slug={slug as string} />
    </Layout>
  );
}
