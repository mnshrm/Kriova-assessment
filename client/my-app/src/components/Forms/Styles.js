import { styled } from "@mui/system";

const MyComponent = styled("div")({
  display: "grid",
  height: "100vh",
  placeItems: "center",
  padding: "0 10%",
  fontFamily: "'Work Sans', sans-serif",
  backgroundColor: "#eaeded",
});

const Banner = styled("div")({
  height: "100%",
  padding: "0 50px",
  backgroundColor: "#1F28EB",
  color: "white",
  display: "grid",
  gridTemplateRows: "1frs",
  alignItems: "center",
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
});

const headingStyle = {
  position: "relative",
  fontSize: "70px",
  marginBottom: "10px",
  zIndex: "2",
};

const supportStyle = {
  fontSize: "10px",
  width: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  color: "#95A3F8",
  zIndex: "2",
};

const Dot = styled("div")({
  position: "absolute",
  height: "25px",
  width: "25px",
  borderRadius: "50%",
  display: "inline-block",
  backgroundColor: "rgb(0, 255, 251) ",
  zIndex: "2",
});

const VerticalLine = styled("div")({
  height: "400px",
  width: "2px",
  backgroundColor: "#95A3F8",
  position: "absolute",
  top: "100px",
  left: "170px",
  zIndex: "1",
});

const HorizontalLine = styled("div")({
  height: "2px",
  width: "100px",
  backgroundColor: "#95A3F8",
  position: "absolute",
  bottom: "255px",
  left: "170px",
  zIndex: "1",
});

const buttonGroup = {
  borderBottom: "2px solid lightGray",
  transition: "all 0.2s ease-in",
};
const buttonGroupSelected = {
  borderBottom: "2px solid blue",
  transition: "all 0.2s ease-in",
};

const inputField = {
  margin: "10px",
  width: "100%",
};

const btn = {
  marginLeft: "10px",
};

export default MyComponent;
export {
  Banner,
  headingStyle,
  supportStyle,
  Dot,
  VerticalLine,
  HorizontalLine,
  buttonGroup,
  buttonGroupSelected,
  inputField,
  btn,
};
