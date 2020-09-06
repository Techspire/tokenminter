
/**
 * https://github.com/mui-org/material-ui/tree/master/docs/src/pages/page-layout-examples/dashboard
 */

import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const spacingUnit = 8

// TODO: different palettes for testing
const palettes = {
  green: {
    primary: {
      main: '#7cb342',
      light: '#aee571',
      dark: '#4b830d',
    },
    // secondary: {
    //   main: '#cca300',
    //   light: '#fff5cc',
    //   dark: '#cca300',
    // },
  },
  orange: {
    primary: {
      main: '#cca300',
      light: '#e6b800',
      dark: '#b38f00',
    },
    secondary: {
      main: '#001a33',
      light: '#cccccc',
      dark: '#caae53',
    },
  },
}

// A theme with custom primary and secondary color.
const theme = createMuiTheme({
  palette: palettes.orange,
  typography: {
    useNextVariants: true, // this can be removed with @material-ui 4.0.0
    fontFamily: '"Helvetica", "Arial", sans-serif',
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  overrides: {
    MuiListItemText: {
      root: {
        paddingLeft: 0,
      },
    },
    MuiDrawer: {
      docked: {
        width: 0,
      },
    },
  },
  spacing: {
    unit: spacingUnit,
  },
})

function withMuiRoot (Component) {
  function WithMuiRoot (props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }
  return WithMuiRoot
}

export default withMuiRoot

export {
  spacingUnit,
}
