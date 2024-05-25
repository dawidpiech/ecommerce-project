import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Products";
import { useLoaderData } from "react-router-dom";

export function MainPage() {
  const { bestsellers, heroImageUrl } = useLoaderData();

  return (
<<<<<<< HEAD
    <>
      <Hero heroImage={heroImageUrl} />
      <Products headerText="Sprawdź nasze bestsellery" products={bestsellers} />
    </>
=======
    <Layout>
      <Hero heroImage={COVER_PHOTO}></Hero>
      <Bestsellers
        products={products}
        headerText="Sprawdź nasze bestsellery!"
      ></Bestsellers>
    </Layout>
>>>>>>> 5355df14c1bd1d06b317bd48e4e1ea679f6f0bc3
  );
}
