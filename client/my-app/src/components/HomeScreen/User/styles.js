import styled from "@emotion/styled";

const Info = styled("div")({
  margin: "50px 0",
});

const InfoSnippet = styled("div")({
  margin: "10px",
  display: "inline-block",
  fontSize: "20px",
});

const nameStyle = {
  // marginLeft: "20px",
  fontFamily: "'Volkhov', serif",
  fontWeight: "400",
};

const Styledspan = styled("span")({
  color: "gray",
});

export { nameStyle, Info, InfoSnippet, Styledspan };
