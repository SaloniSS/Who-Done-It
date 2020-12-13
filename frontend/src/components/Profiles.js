import { Collapse, Avatar } from "antd";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const Profiles = () => {
  return (
    <>
      <h2>Profiles</h2>
      <Collapse accordion>
        <Panel header="Sherlock Holmes" key="1">
          <p>{text}</p>
        </Panel>
        <Panel
          header={
            <div
              style={{
                display: "flex",
                direction: "flex-row",
                justifyContent: "space-between",
              }}
            >
              <p>Watson</p>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
          }
          key="2"
        >
          <p>{text}</p>
        </Panel>
        <Panel header="Nancy Drew" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </>
  );
};
