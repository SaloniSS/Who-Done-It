import { Button } from "antd";

export const Start = (props) => {
  return (
    <>
      <h2>Who Done It? Famous Detective Edition!</h2>
      <p>
        Sherlock Holmes sent invitations to the world's best detectives for his
        dinner party. You received one and are heading over. Once you get there,
        you interact with the other guests for a bit. After waiting for Holmes’
        arrival for a long time, the confused guests began to search for their
        host. You hear a scream and go upstairs to the origin. When you walk in,
        you see Holmes' dead body on the floor. Doctor Watson calls the time of
        death recently thus the murder must be inside the mansion. It is up to
        you to find the killer, but everyone else will be as well!
      </p>
      <Button type="primary" onClick={props.nextLevel}>
        Start Game
      </Button>
    </>
  );
};
