export default function Container({ children }) {
  return (
    <div className="container relative z-10 max-w-6xl px-10 mx-auto bg-white lg:px-0 space-y-28">
      {children}
    </div>
  );
}
