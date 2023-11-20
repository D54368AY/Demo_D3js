import { createTheme } from "@mui/material";
const Apptheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#fff",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          " :hover": {
            background: "red",
            "& > *": {
              fontWeight: "bolder",
              color: "#fff",
            },
          },
          //   '&.Mui-selected': {
          //     background: 'red',
          //   },
          //   "&$selected": {
          //     background: "#47B747",
          //     "& > *": {
          //       fontWeight: "bolder",
          //       color: "#fff",
          //     },
          //   },
          //   "&$selected:hover": {
          //     background: "red",
          //     "& > *": {
          //       fontWeight: "bolder",
          //       color: "#fff",
          //     },
          //   },
        },
        // selected:{
        //     background: "#47B747",
        //     "& > *": {
        //       fontWeight: "bolder",
        //       color: "#fff",
        //     },
        // }
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: "none"
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '9px'
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height:'40px'
        },
      },
    },
    
      MuiButton: {
        variants: [
          {
            props: { variant: "salesbutton" },
            style: {
              background: '#E8EEFD',
              color: "#6DB596",
              textTransform: 'none'
            }
          }
        ]
      }
  },
});

export default Apptheme;
