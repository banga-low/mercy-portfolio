export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold text-blue-600">Mercy Lubanga</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}
