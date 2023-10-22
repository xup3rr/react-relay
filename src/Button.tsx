import { useRelay } from "./useRelay/useRelay";

const Button = (props: { id: string }) => {
  const [count, setCount] = useRelay(0);

  const onClick = () => {
    setCount(count + 1);
  };

  console.log("render button : ", props.id);

  return (
    <button onClick={onClick}>
      Button #{props.id} : {count}
    </button>
  );
};

export default Button;
