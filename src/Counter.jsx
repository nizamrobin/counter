export default function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div className="w-1/2 border w-32 flex flex-col items-center gap-2 p-4 bg-gray-100 flex flex-col gap-4">
      <h2>Counter</h2>
      <div className="flex items-center gap-4 flex items-center">
        <button
          className="bg-slate-200 px-2 pb-1  bg-orange-400 text-white text-4xl"
          onClick={onDecrement}
        >
          -
        </button>
        <h5>{count}</h5>
        <button
          className="bg-slate-200 px-2 pb-1 bg-blue-400 text-white text-4xl"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
