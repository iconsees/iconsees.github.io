import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'body': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'backgroundColor': '#383838',
    'fontFamily': ''Noto Sans', sans-serif'
  },
  'navbar-fixed-top': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'main': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    '>w768': {
      'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 40 }]
    }
  },
  'table-responsive': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e8e9eb' }]
  },
  'navbar': {
    'minHeight': [{ 'unit': 'px', 'value': 50 }],
    'maxHeight': [{ 'unit': 'px', 'value': 50 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'navbar container-fluid navbar-brand': {
    'marginLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'navbar-brand>img': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'display': 'inline',
    'width': [{ 'unit': 'px', 'value': 50 }]
  },
  'nav nav-icon': {
    'color': '#fff',
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'margin': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'cursor': 'pointer'
  },
  'nav nav-icon:hover': {
    'color': '#00b9f1',
    'transition': 'ease all 0.5s'
  },
  '#weather': {
    'display': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#winkResult': {
    'display': 'inline-block'
  },
  'panel-default': {
    'borderColor': '#777',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'panel-default panel-heading': {
    'backgroundColor': '#00F186',
    'backgroundImage': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': 'bold',
    'textIndent': '-6px'
  },
  'dhtmlxslider_dhx_web dhxsl_runner': {
    'backgroundColor': '#00B8F1',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00b8f1' }],
    'borderRadius': '50%',
    'width': [{ 'unit': 'px', 'value': 32 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -14 }, { 'unit': 'string', 'value': '!important' }]
  },
  'dhtmlxslider_dhx_web dhxsl_container': {
    'float': 'none'
  },
  'table-striped thead tr': {
    'backgroundColor': '#e8e9eb'
  },
  'table-striped tbody tr:nth-of-type(even)': {
    'backgroundColor': '#fff'
  },
  'table-striped tbody tr:nth-of-type(odd)': {
    'backgroundColor': '#edf9ff'
  },
  'td[id*='Desc'] div': {
    'lineHeight': [{ 'unit': 'px', 'value': 40 }]
  },
  'th': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'td': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'title': {
    'paddingTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'img': {
    'verticalAlign': 'middle'
  },
  'prompt_dialog': {
    'position': 'fixed',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.15 }],
    'marginLeft': [{ 'unit': 'px', 'value': -150 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'backgroundColor': '#e8e9eb'
  },
  'prompt_dialog label': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'prompt_dialog input': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 270 }]
  }
});
