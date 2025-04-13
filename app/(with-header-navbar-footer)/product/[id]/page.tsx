import { notFound } from "next/navigation";
import { bestSellersDiscover } from "@/constants/discover";

import ProductClient from "./components/ProductClient";

export function generateStaticParams() {
  return bestSellersDiscover.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = bestSellersDiscover.find(
    (product) => product.id === parseInt(params.id)
  );
  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
