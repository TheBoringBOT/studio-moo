export default function Container({ children }) {
  return (
    <div className="container max-w-6xl px-10 lg:px-0 mx-auto bg-white space-y-28">
      {children}
    </div>
  );
}
