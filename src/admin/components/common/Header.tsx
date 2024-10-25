/* eslint-disable @typescript-eslint/no-explicit-any */

const Header = ({ title }: any) => {
  return (
    <div className="mb-4">
      <p className="text-3xl font-extrabold tracking-tight text-white">
        {title}
      </p>
    </div>
  );
};

export default Header;
