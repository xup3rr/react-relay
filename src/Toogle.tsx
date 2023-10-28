import { Volt } from "./useRelay/Observable";
import { useRelay } from "./useRelay/useRelay";

const toggleVolt = new Volt(true);

const Toogle = (props: { id: string }) => {
  const [value, setValue] = useRelay(toggleVolt);

  const onClick = () => {
    setValue(!value);
  };

  console.log("render toggle : ", props.id);

  return (
    <button onClick={onClick}>
      Toggle #{props.id} : {Number(value)}
    </button>
  );
};

export default Toogle;
