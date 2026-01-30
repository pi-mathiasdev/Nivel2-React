const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full ">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-16 h-16 border-4 border-t-yellow-500 border-gray-300 rounded-full animate-spin"></div>

        <p className="text-lg font-medium text-gray-700">Cargando...</p>
      </div>
    </div>
  );
};

export default Loading;
