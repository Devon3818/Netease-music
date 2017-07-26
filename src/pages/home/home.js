import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-home imusic ion-icon': {
    'color': '#d33a31'
  },
  'page-home segment-button': {
    'borderBottomColor': 'transparent !important'
  },
  'page-home s-left': {
    'textAlign': 'right'
  },
  'page-home s-right': {
    'textAlign': 'left'
  },
  'page-home icontent': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'page-home super-tabs:not([no-shadow]) > super-tabs-toolbar > ion-toolbartoolbar::after': {
    'display': 'none !important'
  },
  'page-home super-tabs-toolbar > ion-toolbartoolbar tab-buttons-container tab-buttons super-tab-button:not(selected) ion-icon': {
    'opacity': '1 !important',
    'color': '#8f9090 !important'
  },
  'page-home super-tabs-toolbar > ion-toolbartoolbar tab-buttons-container tab-buttons super-tab-button:not(selected) span:not(badge)': {
    'opacity': '1 !important',
    'color': '#8f9090 !important'
  },
  'page-home ion-footer img': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 50 }]
  },
  'page-home ion-footer p': {
    'marginLeft': [{ 'unit': 'px', 'value': 12 }],
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'background': '#fff',
    'textOverflow': 'ellipsis',
    'overflow': 'hidden',
    'whiteSpace': 'nowrap'
  },
  'page-home ion-footer ion-icon': {
    'float': 'right',
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'fontSize': [{ 'unit': 'px', 'value': 36 }],
    'marginLeft': [{ 'unit': 'px', 'value': 16 }]
  }
});
