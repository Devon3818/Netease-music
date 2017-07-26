import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'play-list-card card': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'overflow': 'hidden',
    'float': 'left',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'borderLeft': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'boxSizing': 'border-box',
    'background': '#fff'
  },
  'play-list-card card imgs': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#008b57'
  },
  'play-list-card card p': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textOverflow': 'ellipsis',
    'overflow': 'hidden',
    'whiteSpace': 'nowrap',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'margin': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }]
  },
  'play-list-card card:nth-of-type(2n) imgs': {
    'borderRight': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }]
  }
});
