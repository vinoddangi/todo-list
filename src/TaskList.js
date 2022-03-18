import { List, ListItem, IconButton, ListItemText, Stack } from '@mui/material';
import React from 'react';
import { deleteFromList, updateFromList } from './store/entity/entitySlice';
import { useDispatch } from 'react-redux';

import { FavoriteOutlined, DeleteOutline } from '@mui/icons-material';

import { pink } from '@mui/material/colors';

function TaskList({ items }) {
  const dispatch = useDispatch();
  function deleteTodo(id) {
    dispatch(deleteFromList({ property: 'todos', id }));
  }
  function favoriteTodo(id, favorite) {
    console.log(favorite, id);
    dispatch(updateFromList({ property: 'todos', item: { id, favorite } }));
  }
  return (
    <List sx={{ width: '100%', height: '600px', overflowY: 'auto', scrollbarWidth: 'thin' }}>
      {items &&
        items.map(({ text, favorite, id }) => {
          function handleFavoriteClick() {
            favoriteTodo(id, !favorite);
          }
          function handleDeleteClick() {
            deleteTodo(id);
          }
          return (
            <ListItem
              key={id}
              secondaryAction={
                <Stack direction="row" edge="end" spacing={1}>
                  <IconButton edge="end" aria-label="Favorite" onClick={handleFavoriteClick}>
                    <FavoriteOutlined sx={{ color: favorite ? pink[500] : 'inherit' }} />
                  </IconButton>
                  <IconButton edge="end" aria-label="Favorite" onClick={handleDeleteClick}>
                    <DeleteOutline />
                  </IconButton>
                </Stack>
              }
              sx={{ width: '100%', bgcolor: 'background.paper', color: 'black', marginTop: '4px' }}
            >
              <ListItemText id={text} primary={text} />
            </ListItem>
          );
        })}
    </List>
  );
}
export { TaskList };
