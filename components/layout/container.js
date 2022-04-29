export default function Container({ children }) {
  return (
    <div className="container max-w-6xl px-10 mx-auto bg-white space-y-28">
      {children}
    </div>
  );
}
