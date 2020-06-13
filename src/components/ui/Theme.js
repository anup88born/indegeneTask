import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const arcGrey = "#868686"

export default createMuiTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange,
            grey: arcGrey
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
       tab: {
           fontFamily: "Raleway",
           textTransform: "none",
           fontWeight: 700,
           fontSize: "1rem"
       },
       estimate: {
        textTransform: "none",
        fontFamily: "Pacifico",
        fontSize: "1rem",
        color: "white"
       },
       h2: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "2.5rem",
        color: arcBlue,
        lineHeight: "1.5em"   
       },
       h3: {
        fontFamily: "Pacifico",
        fontSize: "2.5rem",
        color: arcBlue
       },
       h4: {
        fontFamily: "Raleway",
        fontSize: "1.75rem",
        fontWeight: 700,
        color: arcBlue,
       },
       subtitle1: {
           color: arcGrey,
           fontSize: "1.25rem",
           fontWeight: 700
       },
       subtitle2: {
        fontSize: "1.25rem",
        fontWeight: 300,
        color: "white" 
       },
       body1: {
        fontSize: "1.25rem",
        fontWeight: 400,
        color: arcGrey
       },
       caption: {
        fontWeight: 450,
        fontSize: "0.95rem",
        color: arcGrey
       },
       learnButton: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        borderRadius: 50,
        borderColor: arcBlue,
        borderWidth: 2,
        textTransform: "none",
        color: arcBlue
       }
    },
    overrides: {
       MuiTabs: {
           root: {
               backgroundColor: "transparent"
           }
       },
       MuiSelect: {
           root: {
               width: "20em"
           }
       },
       MuiMenuItem: {
        root: {
            width: "23em"
        },
       
    }
    }
})