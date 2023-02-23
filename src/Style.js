import styled from "styled-components";

export const AutocompleteWrapper = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-size: 18px;
  padding: 10px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #1a73e8;
  }
`;

export const ResultsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #d9d9d9;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
`;

export const ResultItem = styled.li`
  padding: 10px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ClearButton = styled.span`
  .close {
    position: absolute;
    right: 26px;
    top: 15px;
    width: 18px;
    height: 15px;
    opacity: 0.3;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before,
  .close:after {
    position: absolute;
    left: 41px;
    content: " ";
    height: 15px;
    width: 2px;
    background-color: #333;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
`;

export const HistoryContainer = styled.div`
  padding: 0 1rem;
  color: #5d5c5c;
`;

export const MainContainer = styled.p`
  margin-top: 3rem;
`;

export const Headline = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
`;

export const Description = styled.p`
  padding: 0 4rem;
  line-height: 1.5;
  font-style: italic;
  text-align: center;
`;
