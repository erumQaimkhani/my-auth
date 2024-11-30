import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-2xl font-bold">MyPortfolio</div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-white hover:text-primary">Home</Link>
                    <Link href="#about" className="text-white hover:text-primary">About</Link>
                    <Link href="#projects" className="text-white hover:text-primary">Projects</Link>
                    <Link href="#contact" className="text-white hover:text-primary">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

  