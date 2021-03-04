import dynamic from "next/dynamic";
export const siteTitle = "Biohack";
const Nav = dynamic(
  () =>
    import("./Nav").catch((err) => {
      return () => <p>oops... this failed to load</p>;
    }),
  { ssr: false }
);

export default function Container({ children, main }) {

  return (
    <>
      <Nav />
      {children}
    </>
  );
}
