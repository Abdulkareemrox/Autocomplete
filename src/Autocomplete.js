import React, { useState } from "react";
import {
  AutocompleteWrapper,
  Input,
  ResultsList,
  ResultItem,
  ClearButton,
  MainContainer,
  Headline,
  Description,
  HistoryContainer,
} from "./Style";

const Autocomplete = ({ data }) => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSearch, setShowSearch] = useState([]);

  const handleSubmit = (value) => {
    const data = [];
    data.push(value);
    setShowSearch(value);
    setQuery(value.fruit);
    setShowResults(true);
    const newHistory = [value, ...searchHistory];
    const uniqueHistory = [...new Set(newHistory)]; // remove duplicates with Set
    setSearchHistory(uniqueHistory.slice(0, 5));
  };

  const handleClearButtonClick = () => {
    setShowSearch(null);
    setQuery("");
    setShowResults(false);
  };

  const getFilteredResults = () => {
    const filteredData = data.filter(
      (item) => item.fruit.toLowerCase().includes(query.toLowerCase()) //performing filter from actual list to show autocomplete
    );
    return filteredData;
  };
  const renderResults = () => {
    const filteredData = getFilteredResults();
    if (filteredData.length === 0) {
      return <p>No results found.</p>;
    }
    return (
      <ResultsList>
        {filteredData?.map((item, index) => {
          return (
            <ResultItem key={index} onClick={() => handleSubmit(item)}>
              {item.fruit}
            </ResultItem>
          );
        })}
        {renderSearchHistory()}
      </ResultsList>
    );
  };

  const renderSearchHistory = () => {
    if (searchHistory.length === 0) {
      return null;
    }
    return (
      <HistoryContainer>
        <h5>Recent Search:</h5>
        <ResultsList>
          {/* Mapping upto 5 recent search result */}
          {searchHistory.slice(0, 5).map((item, index) => (
            <ResultItem key={index} onClick={() => handleSubmit(item)}>
              {item.fruit}
            </ResultItem>
          ))}
        </ResultsList>
      </HistoryContainer>
    );
  };
  const onInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    setShowResults(true);
  };

  return (
    <>
      <AutocompleteWrapper>
        <Input
          onChange={(e) => onInputChange(e)}
          value={query}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
        {/* Clear button section */}
        {query && (
          <ClearButton onClick={handleClearButtonClick}>
            <i className="close" />
          </ClearButton>
        )}
        {/* Rendering auto suggestions, when user type */}
        {showResults && renderResults()}
      </AutocompleteWrapper>
      {/* After user choose value, rendering data */}
      {showSearch && (
        <MainContainer>
          <Headline>{showSearch.fruit}</Headline>
          <Description>{showSearch.description}</Description>
        </MainContainer>
      )}
    </>
  );
};

export default Autocomplete;
