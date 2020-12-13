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

  const checkAns = () => {
    if (selected === "Poison")
      setAnswer(
        "Correct! The tea was poured, sipped, then Mr.Holmes fell to the ground. There is no blood to indicate external injuries."
      );
    else setAnswer("Incorrect. Try again.");
  };

  return (
    <>
    <h2>Look for Clues at the Crime Scene!</h2>
       <p>You notice some distinct objects scattered all over the room. Your fellow detectives walk around to look for clues.</p>
      
      <img src={murderImg} width="80%" />
      <p>
        *Image originally from Season of Mystery: The Cherry Blossom Murders
        with slight modification
      </p>
      <h2>What do you believe the murder weapon is?</h2>
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
        Select
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
