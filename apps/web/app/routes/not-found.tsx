import { Rocket, ArrowLeft, Satellite } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative">
          <div className="absolute -left-16 top-0 animate-pulse">
            <Satellite className="w-12 h-12 text-purple-300 opacity-50" />
          </div>
          <div className="absolute -right-16 bottom-0 animate-bounce">
            <Rocket className="w-16 h-16 text-purple-300 opacity-50" />
          </div>
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        </div>

        <h2 className="text-3xl font-semibold text-purple-200 mb-6">
          Houston, we have a problem!
        </h2>

        <p className="text-xl text-purple-100 mb-8 max-w-md mx-auto">
          The page you're looking for has drifted into deep space or never
          existed in the first place.
        </p>

        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-200 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
          Return to Safety
        </button>

        <div className="mt-12">
          <div className="animate-twinkle">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${1 + Math.random() * 3}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
