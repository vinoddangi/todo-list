import { List, ListItem, IconButton, ListItemText, Stack } from '@mui/material';
import React from 'react';
import { entitySelector, addToList } from './store/entity/entitySlice';
import { useSelector, useDispatch } from 'react-redux';

import { FavoriteOutlined, DeleteOutline } from '@mui/icons-material';

import { pink } from '@mui/material/colors';

function TaskList() {
  const todos = useSelector(entitySelector('todos'));
  return (
    <List sx={{ width: '100%', height: '600px', overflowY: 'auto', scrollbarWidth: 'thin' }}>
      {todos.map(({ text, favorite }, index) => (
        <ListItem
          key={`${text}-${index}`}
          secondaryAction={
            <Stack direction="row" edge="end" spacing={1}>
              <IconButton edge="end" aria-label="Favorite">
                <FavoriteOutlined sx={{ color: favorite ? pink[500] : 'inherit' }} />
              </IconButton>
              <IconButton edge="end" aria-label="Favorite">
                <DeleteOutline />
              </IconButton>
            </Stack>
          }
          sx={{ width: '100%', bgcolor: 'background.paper', color: 'black', marginTop: '4px' }}
        >
          <ListItemText id={text} primary={text} />
        </ListItem>
      ))}
    </List>
  );
}
export { TaskList };
