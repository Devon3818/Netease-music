import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-ranking official': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'page-ranking official imgs': {
    'width': [{ 'unit': '%H', 'value': 0.3333 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': '%V', 'value': 0.3333 }],
    'backgroundColor': '#008b57',
    'float': 'left',
    'backgroundPosition': 'center !important',
    'backgroundRepeat': 'no-repeat !important',
    'backgroundSize': 'cover !important'
  },
  'page-ranking official list': {
    'width': [{ 'unit': '%H', 'value': 0.64 }],
    'float': 'right',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'page-ranking official list p': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap',
    'overflow': 'hidden'
  }
});
