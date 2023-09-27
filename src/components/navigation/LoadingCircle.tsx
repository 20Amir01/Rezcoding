const LoadingCircle = ({ children }: { children?: string }) => {
  return (
    <div className="text-center font-bold text-neutral-500 text-3xl animate-pulse flex justify-center">
      <div className="h-20 w-20 animate-spin rounded-full bg-gradient-to-r from-neutral-900 to-neutral-100 p-2">
        {children}
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
    </div>
  );
};
export default LoadingCircle;
