import { Select, Button } from "antd";
import { useState } from "react";
import murderImg from "../murderImg.jpg";
const { Option } = Select;

const LevelTwo = (props) => {
  const [answer, setAnswer] = useState(null);
  const [selected, setSelected] = useState("Broom");

  const handleChange = (value) => {
    setSelected(value);
  };

  const checkAns = () => {};

  return (
    <>
      <img src={murderImg} width="75%" />
      <p>
        *Image originally from Season of Mystery: The Cherry Blossom Murders
        with slight modification
      </p>
      <h2>You can pick up to four people to ask follow-up questions:</h2>
      <Select
        defaultValue="Broom"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="Broom">Broom</Option>
        <Option value="Vase">Vase</Option>
        <Option value="Poison">Poison</Option>
        <Option value="Painting">Painting</Option>
        <Option value="Knife">Knife</Option>
        <Option value="Books">Books</Option>
      </Select>
      <Button primary onClick={checkAns}>
        Question
      </Button>
      <br />
      {answer && <h3>{answer}</h3>}
      <Button type="primary" onClick={props.nextLevel}>
        Next Level
      </Button>
    </>
  );
};

export default LevelTwo;
