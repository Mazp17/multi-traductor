const date = new Date();

export const Footer = () => (
  <footer className="text-center h-auto p-4 bg-black">
    <span> {date.getFullYear()} </span>
  </footer>
);
