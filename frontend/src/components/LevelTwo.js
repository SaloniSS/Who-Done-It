import { Select, Button } from "antd";
import { useState } from "react";
import ImageMapper from "react-image-mapper";
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
      <p>
        You notice some distinct objects scattered all over the room. Your
        fellow detectives walk around to look for clues.
      </p>
      <ImageMapper
        src={murderImg}
        map={AREAS_MAP}
        width={1300}
        onClick={(area) => console.log(area.name)}
      />
      {/*<img src={murderImg} width="80%" />*/}
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

const AREAS_MAP = {
  name: "my-map",
  areas: [
    {
      name: "1",
      shape: "poly",
      coords: [61, 252, 83, 233, 112, 301, 77, 315],
      preFillColor: "green",
      fillColor: "blue",
    },
    {
      name: "2",
      shape: "poly",
      coords: [219, 118, 220, 210, 283, 210, 284, 119],
      preFillColor: "pink",
    },
    {
      name: "3",
      shape: "poly",
      coords: [381, 241, 383, 94, 462, 53, 457, 282],
      fillColor: "yellow",
    },
    {
      name: "4",
      shape: "poly",
      coords: [245, 285, 290, 285, 274, 239, 249, 238],
      preFillColor: "red",
    },
  ],
};
