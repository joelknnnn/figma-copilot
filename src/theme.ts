import { createTheme } from '@mui/material/styles';

// Design tokens extracted from Figma (node-id: 1188:28979)
const theme = createTheme({
  palette: {
    primary: {
      main: '#0609FD', // Light/Primary/Main
      contrastText: '#FFFFFF', // Light/Primary/Contrast
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)', // Light/Text/Primary
      secondary: 'rgba(0, 0, 0, 0.6)', // Light/Text/Secondary
    },
    background: {
      default: '#F7F9FB', // Light/Background/Default
      paper: '#FFFFFF', // Light/Background/Paper
    },
    divider: 'rgba(0, 0, 0, 0.15)', // Light/Other/Outlined Border (23p)
  },
  typography: {
    fontFamily: [
      'Quicksand',
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'sans-serif',
    ].join(','),
    h4: {
      fontFamily: 'Quicksand',
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: 1.235,
      letterSpacing: '0.25px',
    },
    h6: {
      fontFamily: 'Quicksand',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: 1.2,
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontFamily: 'Quicksand',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: 1.5,
      letterSpacing: '0.15px',
    },
    body1: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: 1.5,
      letterSpacing: '0.15px',
    },
    body2: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: 1.43,
      letterSpacing: '0.17px',
    },
    overline: {
      fontFamily: 'Quicksand',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: 2,
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: 'Quicksand',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.4px',
      textTransform: 'none',
    },
  },
  spacing: 8, // MUI default (8px base unit)
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#0609FD',
          '&:hover': {
            backgroundColor: '#0507D8',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(6, 9, 253, 0.5)',
          color: '#0609FD',
        },
        text: {
          borderRadius: '4px',
        },
        sizeSmall: {
          fontFamily: 'Quicksand',
          fontWeight: 600,
          fontSize: '13px',
          lineHeight: '22px',
          letterSpacing: '0.46px',
        },
        endIcon: {
          marginLeft: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.15)',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
