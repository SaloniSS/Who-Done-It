import { Comment, List, Select, Button } from "antd";
import { useState } from "react";
import endcard from "../endcard.png";
const { Option } = Select;

const LevelFour = (props) => {
  const [answer, setAnswer] = useState(null);
  const [selected, setSelected] = useState("Butler");

  const handleChange = (value) => {
    setSelected(value);
  };

  const questionSomeone = () => {
    if (selected == "Gadget") {
      setAnswer(
        "You accused " +
          selected +
          ". You solved the mystery! He is the culprit! There were inconsistencies in his alibi, and he poisoned Holmes' tea! Before Gadget could escape, the rest of the detectives cornered him, while you called the police! As for Holmes, he was taken to the hospital and is making a miraculous recovery. We should've known that Sherlock Holmes could survive anything at this point, with all those tricks up his sleeve! Congratulations!"
      );
    } else
      setAnswer(
        "You accused " +
          selected +
          ". Unfortunately, you chose the wrong person. Holmes managed to live for a few minutes to tell you all that he knew who would kill him. As soon as you realized who the murderer was, he broke into your house and killed you and the rest of the detectives. Fin."
      );
  };
  return (
    <>
      <h2>Who Done it?</h2>
      <p>
        After listening to everyone's alibis, you took all the missing pieces
        together. Who killed Sherlock Holmes?
      </p>
      <Select
        defaultValue="Butler"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="Watson">Watson</Option>
        <Option value="Nancy">Nancy</Option>
        <Option value="Clouseau">Clouseau</Option>
        <Option value="Velma">Velma</Option>
        <Option value="Gadget">Gadget</Option>
        <Option value="Butler">Butler</Option>
      </Select>
      <Button onClick={questionSomeone}>Accuse</Button>
      <br />
      {answer && (
        <div>
          <h3>{answer}</h3>
          <br /> <br />
          <img src={endcard} width="70%" />
        </div>
      )}
    </>
  );
};

export default LevelFour;
