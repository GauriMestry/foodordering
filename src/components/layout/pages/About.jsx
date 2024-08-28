import { Flex } from "antd";
import User from "../../common/User";

function About() {
  return (
    <Flex
      style={{ margin: "50px 100px 0px 100px" }}
      justify="center"
      align="center"
    >
      <User />
    </Flex>
  );
}

export default About;
