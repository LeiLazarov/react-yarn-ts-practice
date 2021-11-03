import styled from "styled-components";

const Col = styled.div<{ span: number }>`
    flex: ${(props) => props.span};
`;

export default Col;
