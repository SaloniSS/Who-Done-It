import { Select, Button, Checkbox } from "antd";
import { useState, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import murderImg from "../murderImg.jpg";
const { Option } = Select;

const LevelTwo = (props) => {
  const [answer, setAnswer] = useState(null);
  const [selected, setSelected] = useState("Broom");
  const [selectedVals, setSelectedVals] = useState([]);

  const handleChange = (value) => {
    setSelected(value);
  };

  function onFindItemChange(area) {
    if (!selectedVals.includes(area.name))
      setSelectedVals((vals) => vals.concat(area.name));
  }

  useEffect(() => {
    if (selectedVals.length >= foundItems.length) {
      setAnswer("");
    }
  }, [selectedVals]);

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
        onClick={onFindItemChange}
      />
      {/*<img src={murderImg} width="80%" />*/}
      <p>
        *Image originally from Season of Mystery: The Cherry Blossom Murders
        with slight modification
      </p>
      {answer == null && (
        <>
          <h2>Find The Following Items On Your Search for Clues:</h2>
          <Checkbox.Group options={foundItems} disabled value={selectedVals} />
        </>
      )}
      {answer != null && (
        <>
          <h2>Good sleuthing! What do you believe the murder weapon is?</h2>
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
      )}
    </>
  );
};

export default LevelTwo;

const AREAS_MAP = {
  name: "my-map",
  areas: [
    {
      name: "Rabbit",
      shape: "poly",
      coords: [61, 252, 83, 233, 112, 301, 77, 315],
    },
    {
      name: "Fish",
      shape: "poly",
      coords: [621, 13, 650, 10, 647, 56, 662, 56, 649, 80, 632, 69, 616, 41],
    },
    {
      name: "Binoculars",
      shape: "poly",
      coords: [1238, 442, 1289, 455, 1275, 499, 1217, 469],
    },
  ],
};

const foundItems = [
  { label: "Fish", value: "Fish" },
  { label: "Rabbit", value: "Rabbit" },
  { label: "Binoculars", value: "Binoculars" },
];
