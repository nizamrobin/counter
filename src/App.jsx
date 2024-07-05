import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";
import TotalCount from "./TotalCount";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleDecrement = (counterID) => {
    dispatch(decrement(counterID));
  };
  const handleIncrement = (counterID) => {
    dispatch(increment(counterID));
  };

  // const totalCountHandler = () => {
  //   let sum = 0;
  //   counters.map((item) => {
  //     sum += item.value;
  //   });
  //   return sum;
  // };
  return (
    <div className="flex flex-col items-center p-8 flex flex-col gap-2">
      <h1 className="bg-gray-200 w-1/2 p-2 text-center uppercase font-bold">
        Counter with Redux
      </h1>
      {counters.map((counter) => (
        <Counter
          count={counter.value}
          key={counter.id}
          onDecrement={() => handleDecrement(counter.id)}
          onIncrement={() => handleIncrement(counter.id)}
        />
      ))}
      <TotalCount totalCount={totalCount} />
    </div>
  );
}

export default App;
