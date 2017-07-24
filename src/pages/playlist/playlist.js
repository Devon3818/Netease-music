import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-playlist iheader': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }],
    'overflow': 'hidden'
  },
  'page-playlist iheader all': {
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 18 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'borderRadius': '9999px'
  },
  'page-playlist iheader ti': {
    'float': 'right',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 7 }]
  },
  'page-playlist card': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'overflow': 'hidden',
    'float': 'left',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'borderLeft': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'boxSizing': 'border-box',
    'background': '#fff'
  },
  'page-playlist card imgs': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#008b57'
  },
  'page-playlist card p': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'textOverflow': 'ellipsis',
    'overflow': 'hidden',
    'whiteSpace': 'nowrap',
    'margin': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-playlist card:nth-of-type(2n) imgs': {
    'borderRight': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }]
  }
});
