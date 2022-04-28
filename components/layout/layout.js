import Alert from "./alert";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />

      <div className="z-10 min-h-screen ">
        {preview && <Alert preview={preview} />}
        <main>{children}</main>
      </div>

      {/* <Footer /> */}
    </>
  );
}
