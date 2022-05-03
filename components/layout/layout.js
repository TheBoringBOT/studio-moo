import Alert from "./alert";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />

      <main className="bg-white">{children}</main>

      {/* <Footer /> */}
    </>
  );
}
