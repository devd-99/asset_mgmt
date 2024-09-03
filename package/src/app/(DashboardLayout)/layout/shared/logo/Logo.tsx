import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "90px",
  width: "180px",
  overflow: "hidden",
  display: "flex", // Add this
  justifyContent: "center", // Add this
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="/images/logos/logo2.jpeg" alt="logo" height={90} width={90} priority />
    </LinkStyled>
  );
};

export default Logo;
