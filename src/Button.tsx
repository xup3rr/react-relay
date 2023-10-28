import { Volt } from "./useRelay/Observable";
import { useRelay } from "./useRelay/useRelay";

const countVolt = new Volt(1);

const Button = (props: { id: string }) => {
  const [count, setCount] = useRelay(countVolt);

  const onClick = () => {
    setCount((prev) => prev * 2);
  };

  console.log("render button : ", props.id);

  return (
    <button onClick={onClick}>
      Button #{props.id} : {count}
    </button>
  );
};

export default Button;
