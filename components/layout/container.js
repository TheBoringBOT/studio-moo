export default function Container({ children }) {
  return (
    <div className="relative z-10 w-full ">
      <div className="max-w-6xl px-10 mx-auto lg:px-0 space-y-28">
        {children}
      </div>
    </div>
  );
}
