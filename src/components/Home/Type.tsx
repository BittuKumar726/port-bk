import Typewriter from "typewriter-effect";
import { G_DEFAULT_ROLES } from "../../utils/constants";

interface Props {
  roles: [];
}

const Type = (props: Props) => {
  const { roles = G_DEFAULT_ROLES } = props;
  return (
    <Typewriter
      options={{
        strings: roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
