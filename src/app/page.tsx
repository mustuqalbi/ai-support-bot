import ChatWidget from "@/components/ChatWidget";
import { storeInfo } from "@/lib/storeData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TG</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">TechGear</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">Products</a>
            <a href="#" className="hover:text-blue-600">Deals</a>
            <a href="#" className="hover:text-blue-600">Support</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-600 hover:text-gray-900">Sign in</button>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700">Cart (0)</button>
          </div>
        </div>
      </nav>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-blue-200 text-sm font-medium mb-2">🔥 Summer Sale — Up to 30% off</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{storeInfo.tagline}</h1>
            <p className="text-blue-100 mb-6">Free shipping over $50 · 30-day returns · 1-year warranty</p>
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition">Shop Now</button>
          </div>
          <div className="text-6xl">⌨️🎧</div>
        </div>
      </div>
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-amber-800">
          <span className="text-lg">🤖</span>
          <span><strong>AI Support Demo:</strong> Click the chat bubble (bottom-right) to talk to our AI assistant!</span>
        </div>
      </div>
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <span className="text-sm text-gray-500">{storeInfo.products.length} products</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {storeInfo.products.map((product, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">{product.category}</span>
                <h3 className="font-semibold text-gray-900 mt-2 mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-900 text-gray-400 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div><p className="text-white font-bold">TechGear Store</p><p className="text-sm mt-1">Premium tech accessories</p></div>
          <p className="text-sm">💡 AI chatbot demo by <a href="https://ghulammustafa.dev" className="text-blue-400 hover:underline" target="_blank">ghulammustafa.dev</a></p>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}
