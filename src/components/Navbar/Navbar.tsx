import { Flex } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import AuthButtons from "../Auth/AuthButtons";
import AuthModal from "../Auth/AuthModal";
import { User } from "firebase/auth";

type UserProps = {
  user?: User | null;
};

const Navbar: React.FC<UserProps> = ({ user }) => {
  return (
    <Flex height="44px" padding="6px 12px" justify={{ md: "space-between" }}>
      <Flex
        // height="44px"
        // padding="3px 8px"
        justify={{ md: "space-between" }}
      >
        Logo
      </Flex>
      <SearchInput user={user} />
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <>User Logged</> : <AuthButtons />}
        {/* <UserMenu user={user} /> */}
      </Flex>
    </Flex>
  );
};

export default Navbar;
