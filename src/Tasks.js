import {
  Typography,
  Container as MuiContainer,
  Stack,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { HomeOutlined } from '@mui/icons-material';
import { addToList, entitySelector } from './store/entity/entitySlice';
import { useDispatch, useSelector } from 'react-redux';
import { TaskList } from './TaskList';
import { v4 as uuid } from 'uuid';
import { Search } from './Search';

function Tasks() {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState();
  const [focus, setFocus] = useState();
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const incomingTodos = useSelector(entitySelector('todos'));

  useEffect(() => {
    if (searchTerm && incomingTodos) {
      setTodos(incomingTodos.filter(({ text }) => text.search(searchTerm) > -1));
    } else {
      setTodos(incomingTodos);
    }
  }, [incomingTodos, searchTerm]);

  useEffect(() => {
    if (focus) {
      setFocus(false);
      const timeout = setTimeout(() => {
        inputRef.current.focus();
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [incomingTodos]);

  const Container = styled(MuiContainer)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.dark}`,
    color: 'white',
  }));
  function addTodo() {
    if (todoText) {
      dispatch(
        addToList({
          property: 'todos',
          item: { text: inputRef.current.value, favorite: false, id: uuid() },
        })
      );
      inputRef.current.value = '';
    }
  }
  function handleOnKeyDown(event) {
    if (event.keyCode == 13) {
      addTodo();
      setFocus(true);
    }
  }

  function handleSearch(text) {
    setSearchTerm(text);
  }

  return (
    <Container maxWidth="sm" sx={{ padding: '16px 0' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems={'center'}>
            <HomeOutlined />
            <Typography variant="h6" gutterBottom component="div">
              Tasks
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Search handleSearch={handleSearch} searchTerm={searchTerm} />
        </Grid>
        <Grid item xs={12}>
          <TaskList items={todos} />
        </Grid>
        <Grid item xs={9}>
          <TextField
            id="todoText"
            placeholder="Add todo"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            size="small"
            inputRef={inputRef}
            onKeyDown={handleOnKeyDown}
          />
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" onClick={addTodo}>
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export { Tasks };
