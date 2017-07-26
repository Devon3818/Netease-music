import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-music #iaudio': {
    'width': [{ 'unit': 'px', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'display': 'none'
  },
  'page-music ion-content': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundImage': 'url("http://p4.music.126.net/Js93mLjA-Fo0yuAtrwyfJQ==/745468893912261.jpg")',
    'backgroundPosition': '50%',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'auto 100%'
  },
  'page-music ion-content wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'hidden',
    'position': 'relative'
  },
  'page-music ion-content wrap bar': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': NaN }]
  },
  'page-music ion-content:after': {
    'content': '''',
    'backgroundColor': 'rgba(0, 0, 0, 0.5)',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'page-music time': {
    'textAlign': 'center',
    'color': '#fff',
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'page-music cd_wrap': {
    'width': [{ 'unit': '%H', 'value': 0.75 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': '%V', 'value': 0.75 }],
    'borderRadius': '9999px',
    'overflow': 'hidden',
    'background': 'url("../assets/icon/disc.png") no-repeat center',
    'backgroundSize': 'cover',
    'margin': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 80 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'page-music ion-toolbar': {
    'height': [{ 'unit': 'px', 'value': 150 }]
  },
  'page-music ion-toolbar icon-menu': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'flex',
    'display': '-webkit-flex'
  },
  'page-music ion-toolbar icon-menu ion-icon': {
    'flexGrow': '1',
    'WebkitFlexGrow': '1',
    'textAlign': 'center',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  },
  'page-music ion-toolbar icon-btm': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'flex',
    'display': '-webkit-flex',
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'page-music ion-toolbar icon-btm ion-icon': {
    'flexGrow': '1',
    'WebkitFlexGrow': '1',
    'textAlign': 'center',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  }
});
