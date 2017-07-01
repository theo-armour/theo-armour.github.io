## hello world

var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var spreadsheet = SpreadsheetApp.openById( '1lQ44DlwQ96khNTKk7DPFVzjt5ocXF5cyN2E7wzougEM' );

var sheetTest = spreadsheet.getSheetByName( 'test' );

rangeTest = spreadsheet.setNamedRange( 'rangeTest', range ).getRangeByName( 'rangeTest' );
// .setNumberFormat( "yyyy-MM-dd HH:mm:ss" );

var valuesTest = rangeTest.getValues();

function init() {

  sheetSource.getRange( 'A2:E5' ).clear();

  sheetSource.getRange( 2, 2 ).setValue( 'Hello,' );
  sheetSource.getRange( 2, 3 ).setValue( 'World!' );

  value = sheetSource.getRange( 2, 2 ).getValue();
  values = sheetSource.getRange( 2, 2, sheetSP500.getLastRow(), 2 ).getValues();

  sheetSource.getRange( 4, 2 ).setValue( [ [ values[ 0 ][ 0 ] + ' ' + values[ 0 ][ 1 ] ] ] );

}


## Date

function dayTim( dateObject ) {

  return Utilities.formatDate( dateObject, "PST", "yyyy-MM-dd HH:mm:ss" );

}


## Log

function testSend2Log() {

  send2Log( 'abccc', dayTim( new Date() ) );

}

function send2Log( text1, text2 ) {

  var rowCurrent = sheetTicks.getRange( 1, colError + 1).getValue();
  sheetTicks.getRange( rowCurrent, colError, 1, 2 ).setValues( [ [ text1, text2 ] ] );
  sheetTicks.getRange( 1, colError + 1 ).setValue( ++rowCurrent );

}


## Triggers
// See SP500 get ticks

  var triggers = ScriptApp.getProjectTriggers();

  for ( var i in triggers ) {

    var funcName = triggers[ i ].getHandlerFunction();

    if ( funcName === 'getTicks' ) {

      ScriptApp.deleteTrigger( triggers[ i ] );

    }

  }


## Add data

function appendRow () {

  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow( [ Math.random(), Math.random(), Math.random()] );

}