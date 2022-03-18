import { createTheme, darkScrollbar } from '@mui/material';
const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          minHeight: '32px',
          '@media(min-width:600px)': {
            minHeight: '48px',
          },
          width: '100%',
          '@media(min-width:600px)': {
            width: '60%',
          },
        },
      },
    },
  },
});
export { lightTheme };
