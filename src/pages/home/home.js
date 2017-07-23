import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  }
});
