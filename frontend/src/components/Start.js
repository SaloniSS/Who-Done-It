import { Button } from "antd";

export const Start = (props) => {
  return (
    <>
      <h2>lvl0</h2>
      <Button type="primary" onClick={props.nextLevel}>
        Start Game
      </Button>
    </>
  );
};
