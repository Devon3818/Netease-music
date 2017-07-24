import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'music-card card': {
    'width': [{ 'unit': '%H', 'value': 0.3333 }],
    'overflow': 'hidden',
    'float': 'left',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'music-card card imgs': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#008b57'
  },
  'music-card card p': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'textOverflow': 'ellipsis',
    'overflow': 'hidden',
    'whiteSpace': 'nowrap',
    'margin': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }]
  },
  'music-card card:nth-of-type(3n+2) imgs': {
    'borderLeft': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRight': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'boxSizing': 'border-box',
    'background': 'yellow'
  }
});
