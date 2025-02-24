export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-red-600">404 - Nie znaleziono strony</h1>
      <p className="text-gray-600 mt-4">Oops! Przepraszamy, ale ta strona nie istnieje.</p>
      <a href="/" className="text-blue-500 mt-6 inline-block">← Na Główną</a>
    </div>
  );
}
