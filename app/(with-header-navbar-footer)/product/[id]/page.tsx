import { notFound } from "next/navigation";
import ProductClient from "./components/ProductClient";

export default function ProductPage({ params }: { params: { id: string } }) {
  if (!params) {
    return notFound();
  }

  return <ProductClient productId={params.id} />;
}
