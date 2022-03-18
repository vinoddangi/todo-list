import {
  Box,
  Typography,
  Container as MuiContainer,
  Stack,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { HomeOutlined } from '@mui/icons-material';
import { addToList } from './store/entity/entitySlice';
import { useDispatch } from 'react-redux';
import { TaskList } from './TaskList';

function Tasks() {
  const dispatch = useDispatch();
  const Container = styled(MuiContainer)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.dark}`,
    color: 'white',
  }));
  function addTodo() {
    dispatch(addToList({ property: 'todos', value: { text: 'test', favorite: true } }));
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
          <TaskList />
        </Grid>
        <Grid item xs={9}>
          <TextField
            id="todoText"
            placeholder="Add todo"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            size="small"
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
