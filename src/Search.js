import styled from '@emotion/styled';
import { alpha, InputBase } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import React, { useRef, useState, useEffect } from 'react';

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape ? theme.shape.borderRadius : '2px',
  backgroundColor: alpha(theme.palette.common.white, 0.3),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.4),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export function Search(props) {
  const searchInputRef = useRef();
  useEffect(() => {
    searchInputRef.current.value = props.searchTerm;
  }, [props.searchTerm]);
  function handleSearch(event) {
    if (event.keyCode === 13 && props.handleSearch) {
      props.handleSearch(searchInputRef.current.value);
    }
  }
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchOutlined />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onKeyDown={handleSearch}
        inputRef={searchInputRef}
      />
    </SearchWrapper>
  );
}
