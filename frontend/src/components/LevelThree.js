import { Comment, List, Select, Button } from "antd";
import { useState } from "react";
const { Option } = Select;

const data = [
  {
    author: "John Watson",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
  },
  {
    author: "Nancy Drew",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
  },
];

const LevelThree = () => {
  const [answer, setAnswer] = useState(null);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <li>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
            />
          </li>
        )}
      />
      <h3>You can pick two people to ask follow-up questions:</h3>
      <Select
        defaultValue="lucy"
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
      <Button>Question</Button>
      {answer && answer}
    </>
  );
};

export default LevelThree;
