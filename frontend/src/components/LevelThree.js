import { Comment, List, Select, Button } from "antd";
import { useState } from "react";
const { Option } = Select;

const data = [
  {
    author: "John Watson",
    avatar:
      "https://static.wikia.nocookie.net/bakerstreet/images/4/42/John-watson-season-4.jpg/revision/latest/top-crop/width/360/height/450?cb=20161212231000",
    content: (
      <p>
        I arrived earlier than most because I was surprised Mr.Holmes invited
        such a prestigious crowd. I knocked but no one let me in, so I walked
        around the building. When I came back to the front, someone finally let
        me in. I hadn’t seen Mr.Holmes for a while and he had renovated so I
        started looking around. I was feeling a bit tired so I went up to the
        guest room to relax for a bit. I came back down after I felt more rested
        and heard a car pulling up. I went to go see who it was and introduced
        myself to Ms.Drew. I wanted to talk a bit more but she seemed in a rush
        so I let her go. I saw her go into the kitchen but then heard the
        doorbell again so I went back to get the door. After some more chatting,
        I went to check in on the food but I couldn’t find the butler. That’s
        when I heard the scream.
      </p>
    ),
  },
  {
    author: "Nancy Drew",
    avatar:
      "https://photo.kidzworld.com/images/2015818/04140346-3661-4a4d-8154-6cb5e483ab27/emma-nancy-drew.jpg",
    content: (
      <p>
        I got there right on time. I had to go to the bathroom, so I handed my
        items to the butler and went to the washroom which was hard to find in
        such a big house. On my way back, I noticed some baby pictures on the
        wall and I couldn’t help looking at them for a while. Mr.Holmes seemed
        like a pleasant baby despite his attitude to some now… Velma came over
        and we started talking about why we thought Mr.Holmes had invited us all
        over. I checked the time and it seemed pretty late with no sight of him.
        I asked the butler and he said he’d look for Mr.Holmes. After a little,
        I heard someone get startled upstairs and we all went up to discover the
        body.
      </p>
    ),
  },
  {
    author: "Detective Clouseau",
    avatar: "https://www.vancouversun.com/cms/binary/1249135.jpg",
    content: (
      <p>
        I arrived with Ms.Dinkley. She went off to talk to someone else so I
        wandered around a bit. I ran into Inspector Gadget and we talked a bit
        about some unsolved cases. I noticed he only had one glove on which was
        particular. I then went to go look around for Mr.Holmes as it was
        getting late. I assumed he must be on the second level if everyone else
        was on the first and hadn’t seen him. I entered his study when I came
        across his body. He seemed slouched over so I went over to him to
        investigate. When the butler came in, the unexpected disturbance scared
        me and I jolted.
      </p>
    ),
  },
  {
    author: "Velma Dinkley",
    avatar:
      "https://lh3.googleusercontent.com/proxy/ZMFATWnhiNxinWZUVxzrzjFAVtnWzsjWZUhp76axl58kHE3K2saTcAdzOMzUpDfp1IacB1yM-JIWz5todN91",
    content: (
      <p>
        I was trying to decipher the paper map and might have gotten lost. I
        stopped at a pharmacy to ask for directions and ran into Mr.Clouseau. I
        recognized him from the papers and assumed he was also invited to
        Mr.Holmes dinner so I approached him. He seemed startled and put
        something behind him. When I introduced myself, he was glad to direct me
        to the mansion. When we got there, I saw Nancy looking at photos so I
        went up to her. After a bit is when we heard the scream.
      </p>
    ),
  },
  {
    author: "Inspector Gadget",
    avatar:
      "https://64.media.tumblr.com/9b728c50f668fff037256520c47d42f6/tumblr_inline_ojjvx0FQ3M1rczmrt_540.png",
    content: (
      <p>
        I was running late as I spilled some tea on my cloak and gloves. When I
        got there, I saw Detective Clouseau and we started talking. He’s quite
        an interesting fellow, super passionate about being seen as an
        incredible detective. I then saw two ladies talking so I went over and
        introduced myself. I think I actually saw Ms.Drew on the drive over. We
        talked a bit about why we thought Mr.Holmes wanted to tell us. I excused
        myself to go to the bathroom and that was when I heard the disturbance.
      </p>
    ),
  },
  {
    author: "Butler",
    avatar:
      "https://s.wsj.net/public/resources/images/B3-BC591_rossji_GR_20180713114845.jpg",
    content: (
      <p>
        I was preparing the main course and I noticed we were running out of
        rosemary. I went out to the garden to get some more, and I saw Mr.Watson
        and Ms.Drew roaming the yards which was suspicious as it was well before
        the event started. After I went back to the kitchen and finished the
        meal, I came out to check on the guests. I couldn’t find Mr.Holmes
        anywhere so I brought some snacks and drinks to the guests. I remember
        seeing Mr.Watson, Ms.Drew, Inspector Gadget, and Ms.Dinkley. I went to
        go look around for Mr.Holmes again and I came across his body in his
        study and Detective Clouseau above it.
      </p>
    ),
  },
];

const LevelThree = (props) => {
  const [answer, setAnswer] = useState(null);
  const [selected, setSelected] = useState("Butler");

  const handleChange = (value) => {
    setSelected(value);
  };

  const questionSomeone = () => {
    switch (selected) {
      case "Watson":
        setAnswer(
          "I knew my way around the house because I'm close with Mr.Holmes. I've been to his place many times."
        );
        return;
      case "Nancy":
        setAnswer(
          "Ah yes, my bad I forgot to mention! This morning I went to go pick up some flowers for our dinner host. I realized I had no clue on what his tastes were. Since I had some extra time, I drove over to his place early and peeked at his gardens. I went to a close by flower stall and grabbed some petunias just in time for dinner!"
        );
        return;
      case "Clouseau":
        setAnswer(
          "I had a headache so I stopped at the pharmacy. I picked up some pills as well as some other things. At first I thought Ms.Dinkley was just a fan, but after she introduced herself and showed me her invitation, I agreed to guide her to the mansion."
        );
        return;
      case "Velma":
        setAnswer("I didn't loose my glasses this time!");
        return;
      case "Gadget":
        setAnswer(
          "Ah you say Ms.Drew arrived well before Detective Clouseau? My eyesight must not be as good then. I was drying out my cloak and gloves to the best of my ability at a roadside stop. I also had to go to the bathroom which was nice as two birds, one stone."
        );
        return;
      case "Butler":
        setAnswer(
          "I didn't bring Mr.Holmes any tea but I did see a cup go missing."
        );
        return;
      default:
        return;
    }
  };

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
      <h2>You can pick up to four people to ask follow-up questions:</h2>
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
      <Button onClick={questionSomeone}>Question</Button>
      <br />
      {answer && <h3>{answer}</h3>}
      <Button type="primary" onClick={props.nextLevel}>
        Final Guess
      </Button>
    </>
  );
};

export default LevelThree;
