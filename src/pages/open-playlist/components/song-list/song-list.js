import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'song-list songs': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }]
  },
  'song-list songs span': {
    'display': 'block',
    'color': '#7b7b7b',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'textAlign': 'center'
  },
  'song-list songs names': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'overflow': 'hidden',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'float': 'left'
  },
  'song-list songs names song_name': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }]
  },
  'song-list songs names song_dec': {
    'color': '#7b7b7b'
  },
  'song-list songs names p_wrap': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.9 }]
  },
  'song-list songs names p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'song-list songs names ion-icon': {
    'float': 'right',
    'width': [{ 'unit': '%H', 'value': 0.1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#7b7b7b'
  }
});
