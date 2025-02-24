import React from 'react';

interface ErrorPageProps {
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  const handleReload = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">Oops! Coś poszło nie tak.</h1>
      <p className="text-lg text-gray-600 mt-2">{message}</p>
      <button
        onClick={handleReload}
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
};

export default ErrorPage;
