import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Blog Page</h1>
      <Link href="/">
        <p>Home page</p>
      </Link>
    </>
  );
}
