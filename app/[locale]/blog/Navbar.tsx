export default function Navbar() {
  return (
    <div className="flex justify-around p-8 font-bold bg-white drop-shadow">
      <img
        src="https://joingimme.com/static/media/gimme_logo_purple.71004bb2.svg"
        alt="Logo"
      />
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8 items-center text-lg">
          <li className="opacity-50">
            <a href="#">Overview</a>
          </li>
          <li className="opacity-50">
            <a href="#">Use Cases</a>
          </li>
          <li className="opacity-50">
            <a href="#">How it Works</a>
          </li>
          <li className="opacity-50">
            <a href="#">About us</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li className="opacity-50">
            <a href="#">Pricing</a>
          </li>
        </ul>
        <button className="primary-button">Get started</button>
        <span className="font-normal font-mono">
          {" // replace with navbar"}
        </span>
      </div>
    </div>
  );
}
