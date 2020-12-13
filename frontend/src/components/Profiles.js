import { Collapse, Avatar } from "antd";
const { Panel } = Collapse;

const detectives = [
  {
    name: "Sherlock Holmes",
    image:
      "https://imgix.bustle.com/inverse/8d/2e/cc/37/6ca2/41c7/81cc/8c9a28f2dfbc/cumberbatch-holmesjpg.jpeg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
    description:
      "He is a knowledgeable and famous British detective, who pursued criminals all over the world. He received many medals due to his achievements.",
  },
  {
    name: "John Watson",
    image:
      "https://www.indiewire.com/wp-content/uploads/2017/01/sherlock_s4_ep1_015-e1483325579393.jpg",
    description:
      "He is a brilliant physician, who is the closest and devoted friend of Holmes. He is a humble and dependable sidekick, and documents all of Holmes’ cases.",
  },
  {
    name: "Nancy Drew",
    image:
      "https://photo.kidzworld.com/images/2015818/04140346-3661-4a4d-8154-6cb5e483ab27/emma-nancy-drew.jpg",
    description:
      "She is an 18 year old amateur detective, who spends her time solving mysteries. She met Holmes outside of her hometown for one of her cases.",
  },
  {
    name: "Detective Clouseau",
    image: "https://www.vancouversun.com/cms/binary/1249135.jpg",
    description:
      "He is a clumsy, yet successful detective of the French Surete. Holmes worked with him in one of his cases.",
  },
  {
    name: "Velma Dinkley",
    image:
      "https://lh3.googleusercontent.com/proxy/ZMFATWnhiNxinWZUVxzrzjFAVtnWzsjWZUhp76axl58kHE3K2saTcAdzOMzUpDfp1IacB1yM-JIWz5todN91",
    description:
      "She is a studious young lady who is fascinated with mysteries. She solves cases with her friends called the Scooby Doo Gang. She’s a big fan of Holmes, and got the opportunity to meet him at a convention. ",
  },
  {
    name: "Inspector Gadget",
    image:
      "https://64.media.tumblr.com/9b728c50f668fff037256520c47d42f6/tumblr_inline_ojjvx0FQ3M1rczmrt_540.png",
    description:
      "He is a gullible yet creative and brave American spy. He is a close friend of Detective Clouseau. Holmes met Gadget in one of his cases.",
  },
];

export const Profiles = () => {
  return (
    <>
      <div>Profiles</div>
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
