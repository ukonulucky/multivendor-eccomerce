import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA] text-[#424242] font-sans">
    {/* Navbar */}
    <header className="flex justify-between items-center p-6 bg-[#2E7D32] text-white shadow-md">
      <h1 className="text-2xl font-bold">GreenHarvest</h1>
      <nav className="space-x-6">
        <a href="#" className="hover:text-[#FBC02D]">Home</a>
        <a href="#" className="hover:text-[#FBC02D]">Products</a>
        <a href="#" className="hover:text-[#FBC02D]">About</a>
        <a href="#" className="hover:text-[#FBC02D]">Contact</a>
      </nav>
    </header>

    {/* Hero Section */}
    <section className="text-center py-20 bg-gradient-to-b from-[#2E7D32] to-[#8BC34A] text-white">
      <h2 className="text-4xl font-extrabold mb-4">Fresh from the Farm</h2>
      <p className="text-lg mb-8">Healthy, organic, and sustainably grown produce delivered to your door.</p>
      <button className="bg-[#FBC02D] text-[#2E7D32] px-6 py-3 font-semibold rounded-xl hover:bg-yellow-400 transition">
        Shop Now
      </button>
    </section>

    {/* Product Grid */}
    <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-3 gap-10 px-6">
      {["Tomatoes", "Lettuce", "Carrots"].map((item) => (
        <div
          key={item}
          className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
        >
          <div className="h-48 bg-[#C8E6C9]"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#2E7D32] mb-2">{item}</h3>
            <p className="text-sm text-[#616161] mb-4">
              Fresh and organic {item.toLowerCase()} grown with care.
            </p>
            <button className="bg-[#2E7D32] text-white px-4 py-2 rounded-lg hover:bg-[#1B5E20] transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </section>

    {/* Footer */}
    <footer className="bg-[#2E7D32] text-white text-center py-6 mt-10">
      <p>© 2025 GreenHarvest. All rights reserved.</p>
    </footer>
  </div>
  );
}
