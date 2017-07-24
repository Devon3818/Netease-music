import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-radio ion-list-header': {
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }],
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d33a31' }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'minHeight': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'page-radio dv_box': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e6e6e6' }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': '-webkit-flex',
    'display': 'flex',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-radio dv_box dv_items': {
    'flexGrow': '1',
    'WebkitFlexGrow': '1',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 52 }]
  },
  'page-radio dv_box dv_items ion-icon': {
    'fontSize': [{ 'unit': 'px', 'value': 26 }],
    'color': '#d33a31',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 3 }]
  }
});
