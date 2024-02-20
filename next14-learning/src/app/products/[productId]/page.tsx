const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <h1>Details for Product {params.productId}</h1>;
};

export default ProductDetails;
