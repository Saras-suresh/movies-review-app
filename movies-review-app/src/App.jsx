import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl text-grey-900 font-bold py-6">🎬 Movie Review App</h1>
      <Home />
    </div>
  );
}