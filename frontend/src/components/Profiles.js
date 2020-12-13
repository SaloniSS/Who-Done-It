import { Collapse, Avatar } from "antd";
const { Panel } = Collapse;

const detectives = [
  {
    name: "Sherlock Holmes",
    image:
      "https://imgix.bustle.com/inverse/8d/2e/cc/37/6ca2/41c7/81cc/8c9a28f2dfbc/cumberbatch-holmesjpg.jpeg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
    description: "hi",
  },
  {
    name: "John Watson",
    image:
      "https://imgix.bustle.com/inverse/8d/2e/cc/37/6ca2/41c7/81cc/8c9a28f2dfbc/cumberbatch-holmesjpg.jpeg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
    description: "hi",
  },
  {
    name: "Nancy Drew",
    image:
      "https://imgix.bustle.com/inverse/8d/2e/cc/37/6ca2/41c7/81cc/8c9a28f2dfbc/cumberbatch-holmesjpg.jpeg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
    description: "hi",
  },
  {
    name: "Detective Clouseau",
    image:
      "https://imgix.bustle.com/inverse/8d/2e/cc/37/6ca2/41c7/81cc/8c9a28f2dfbc/cumberbatch-holmesjpg.jpeg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
    description: "hi",
  },
  {
    name: "Velma Dinkley",
    image:
      "https://imgix.bustle.com/inverse/8d/2e/cc/37/6ca2/41c7/81cc/8c9a28f2dfbc/cumberbatch-holmesjpg.jpeg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
    description: "hi",
  },
  {
    name: "Inspector Gadget",
    image:
      "https://imgix.bustle.com/inverse/8d/2e/cc/37/6ca2/41c7/81cc/8c9a28f2dfbc/cumberbatch-holmesjpg.jpeg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
    description: "hi",
  },
];

export const Profiles = () => {
  return (
    <>
      <h2>Profiles</h2>
      <Collapse accordion>
        {detectives.map((dect, i) => (
          <Panel
            header={
              <div
                style={{
                  display: "flex",
                  direction: "flex-row",
                  justifyContent: "space-between",
                }}
              >
                <p>{dect.name}</p>
                <Avatar src={dect.image} />
              </div>
            }
            key={i}
          >
            <p>{dect.description}</p>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};
