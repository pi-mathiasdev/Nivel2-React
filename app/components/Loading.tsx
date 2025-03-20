const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-10 h-10 bg-gray-800 rounded-sm"></div>
        <div className="h-2 bg-green-500 animate-bladeExtend origin-left"></div>
      </div>
    </div>
  );
};

export default Loading;
