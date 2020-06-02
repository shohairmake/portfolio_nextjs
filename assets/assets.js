// for change the material-ui components

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    props: {
        // Name of the component
        MuiButtonBase: {
            // The properties to apply
            disableRipple: true, // No more ripple, on the whole application!
        },
    },
});

// return (
//         <MuiThemeProvider theme={theme}>
//             <div className={classes.root}>
//                 <Grid
//                     container
//                     direction="row"
//                     justify="flex-end"
//                     alignItems="flex-start"
//                 >
//                     <Tabs
//                         className={classes.tabs}
//                         value={value}
//                         onChange={handleChange}
//                     >
//                         <Tab label="Item One" />
//                         <Tab label="Item Two" />
//                         <Tab label="Item Three" />
//                     </Tabs>
//                 </Grid>
//                 Item One
//             </div>
//             <Button>Material-UI</Button>
//             <StyledButton>Styled Components</StyledButton>
//         </MuiThemeProvider>
//     );
