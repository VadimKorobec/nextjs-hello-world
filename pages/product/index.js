import Link from "next/link";

export default function ProductList({ productId = 100 }) {
  return (
    <>
      <h2>
        <Link href="/product/1">
          <p>Product 1</p>
        </Link>
      </h2>
      <h2>
        <Link href="/product/2">
          <p>Product 2</p>
        </Link>
      </h2>
      <h2>
        <Link href="/product/3" replace>
          <p>Product 3</p>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>
          <p>Product {productId}</p>
        </Link>
      </h2>
      <Link href="/">
        <p>Home Page</p>
      </Link>
    </>
  );
}
