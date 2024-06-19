function Remember() {
  return (
    <div className="remember flex items-center mt-2 mb-6 gap-1">
      <input
        type="checkbox"
        name="remember"
        id="remember"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor="remember">Remember me</label>
    </div>
  );
}

export default Remember;
