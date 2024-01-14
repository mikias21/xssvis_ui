const Header = () => {
  return (
    <div className="flex items-center justify-center mt-10 flex-col">
      <header className="flex items-center">
        <h1 className="text-5xl font-saria">XSSVIS</h1>
        <img src="/images/bug.png" alt="LOGO" className="w-20 h-20" />
      </header>
      <p className="font-poppins font-light mt-5 p-4 text-sm sm:text-center">
        An AI model for detecting XSS attacks, all we need is URL and we keep
        your online activity save.
      </p>
    </div>
  );
};

export default Header;
