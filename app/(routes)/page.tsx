import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import { Product } from "@/types";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("10263d55-721d-4029-9b84-c18eebf7fb6e");
  const products = await getProducts({ isFeatured: true });
  const shuffle = (array: Product[]) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const shuffledProducts = shuffle(products);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={shuffledProducts} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
