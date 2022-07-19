import { useAppDispatch, useAppSelector } from "store/storeHooks";
import { decrement, increment } from "store/slices/counterSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);
  return (
    <>
      <div>{count}</div>
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
