import { useAppDispatch, useAppSelector } from "store/storeHooks";
import { decrement, increment } from "store/slices/counterSlice";
import { count } from "store/slices/counterSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.count);

  // To get particular value from store in a component
  // const counter = useAppSelector(count);

  return (
    <>
      <div>{counter}</div>
      <button type="button" onClick={() => dispatch(increment())}>
        ++
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        --
      </button>
    </>
  );
};

export default App;
