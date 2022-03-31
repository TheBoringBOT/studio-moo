import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children, lang_footer }) {
  return (
    <>
      <Meta />

      <div className="min-h-screen ">
        {preview && <Alert preview={preview} />}
        <main>{children}</main>
      </div>

      <Footer lang_footer={lang_footer} />
    </>
  );
}
