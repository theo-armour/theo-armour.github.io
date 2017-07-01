
## Running things in parallel using HTML service

Wow!
http://ramblings.mcpher.com/Home/excelquirks/htmlservice/parallel

## Triggers
********************************************************************************

* https://developers.google.com/apps-script/reference/script/clock-trigger-builder
* https://developers.google.com/apps-script/guides/triggers/
* https://developers.google.com/apps-script/reference/script/script-app
* https://developers.google.com/apps-script/reference/script/trigger

http://stackoverflow.com/questions/33188514/programmatically-delete-a-google-apps-script-time-based-trigger-by-trigger-name


Everything from scratch with new trigger
No persistent variables = except in scriptproperties
Most update a spreadsheet

Difficult to stop a script. Triggers just keep on coming!!
2017-05-25 Next trigger may have to be over 60 seconds after the current trigger


## OAuth2 for Apps Script
********************************************************************************

https://mashe.hawksey.info/2016/08/working-with-github-repository-files-using-google-apps-script-examples-in-getting-writing-and-committing-content/
* Much easier than I feared ;-)
* Scripts I'm using
* https://gist.github.com/mhawksey/7e697bbeb696266eb6868ee7131d48b1


https://api.github.com/repos/prediqtiv/prediqtiv.github.io/git/refs/heads/master

https://github.com/googlesamples/apps-script-oauth2
* !!! Follow the directions here

### theo-testing app
* https://github.com/settings/applications/515577
* https://script.google.com/macros/d/M_oHn7G1heEd3u_0BbNDSnkg-tiKH0xvu/edit



### urlFetchApp

https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app
https://developers.google.com/apps-script/guides/services/quotas


https://github.com/googlesamples/apps-script-oauth2

https://developer.yahoo.com/apps/

https://www.dropbox.com/developers/apps

https://www.linkedin.com/secure/developer?newapp=
* Use the Redirect URI as outlined in the Read Me as the Linkedin Authorized Redirect URLs:

https://apps.twitter.com/app/13604128/keys



### rest API

https://docs.google.com/spreadsheet/ccc?key=t2RtClXueloQFq0ldp5wwdQ#gid=0
https://docs.google.com/spreadsheet/ccc?key=0Akg809SWki8tdDJSdENsWHVlbG9RRnEwbGRwNXd3ZFE&usp=sharing

https://spreadsheets.google.com/feeds/list/0Akg809SWki8tdDJSdENsWHVlbG9RRnEwbGRwNXd3ZFE/od6/public/basic?hl=en_US&alt=json

https://docs.google.com/feeds/list/0Akg809SWki8tdHltZm5kU3NLWDlxcmdqQkdvMWQwWHc/od6/public/basic?hl=en_US&alt=json

https://spreadsheets.google.com/feeds/cells/0Akg809SWki8tdDJSdENsWHVlbG9RRnEwbGRwNXd3ZFE/od6/public/basic?alt=json

https://docs.google.com/spreadsheet/ccc?key=0Akg809SWki8tdHltZm5kU3NLWDlxcmdqQkdvMWQwWHc&usp=sharing
https://docs.google.com/spreadsheet/ccc?key=0Akg809SWki8tdHltZm5kU3NLWDlxcmdqQkdvMWQwWHc&usp=sharing


https://docs.google.com/spreadsheets/d/1ye4EIhHS4_szAmFKMhz2MGbMciRmkqrnrEio6Qr85y8/pubhtml
https://spreadsheets.google.com/feeds/list/1ye4EIhHS4_szAmFKMhz2MGbMciRmkqrnrEio6Qr85y8/od6/public/basic?alt=json

/////////////////////////////

Menu
===

function onOpen() {

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [
    { name: '', functionName: '' },
    null,
    {name: '', functionName: '' },

  ];

  spreadsheet.addMenu( 'menu', menuEntries );

* multiple menus OK



## messaging

function showAlertMsg() {

  Browser.msgBox("Hello, World!");

}

### Toast

* https://developers.google.com/apps-script/class_spreadsheet#toast
* Shows a popup window in the lower right corner of the spreadsheet with the given message.
* toast( msg, title, timeoutSeconds )

function showToast() {

  // var startSeconds = Utilities.formatDate(new Date(), "GMT", "GMT", "yyyy-MM-dd'T'HH:mm:ss'Z'");
  // Browser.msgBox(startSeconds );
  // SpreadsheetApp.getActiveSpreadsheet().toast("Hello", "world?", 3);
  // SpreadsheetApp.getActiveSpreadsheet().toast(Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd'T'HH:mm:ss'Z'"), "Time", 5);
  SpreadsheetApp.getActiveSpreadsheet().toast(Utilities.formatDate(new Date(), "PST", "Hmm"), "Time", 5);

}

### Logger

function showLog() {

	var mySpreadsheets = DocsList.getFilesByType("spreadsheet");
	Logger.log( mySpreadsheets );
}


********************************************************************************
## Spreadsheet


spreadsheet.getRangeByName(name)
spreadsheet.setNamedRange( name, range )

********************************************************************************
## Sheets
https://developers.google.com/apps-script/reference/spreadsheet/sheet

### Range

.getLastRow() ~ Returns the position of the last row that has content.
.getMaxRows() ~ Returns the current number of rows in the sheet, regardless of content.

sheet.setActiveSelection( "A1" );
sheet.setActiveSelection( sheetTwitter.getRange( i + 2, 1 ) );

sheet.getRange( 5, 4, 1, 2 ).setValues( [ ['Symbols count: ', symbolCount ] ] );




### Sort

function sortSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet = sheet.getRange("A2:A10");
  //sheet.sort(1,0);
  sheet.sort([{column: 1, ascending: false}]);

}




function setValues() { // push data

  var sheet = SpreadsheetApp.getActiveSheet();
  var columnNames = [new Date(), Math.random(), "Column C", "Column D", "Column E"];
  var headersRange = sheet.getRange(1, 1, 1, columnNames.length);
  headersRange.setValues([columnNames]);

  var rowData = new Array;
  for (var j = 0; j < 10; j++) {
       var colData = new Array;
       for (var i = 0; i < 5; i++) {
         colData.push(Math.random());
       }
       rowData.push(colData);
  }
  headersRange = sheet.getRange(2, 1, rowData.length, colData.length);
  headersRange.setValues(rowData);
}



function getDataOtherSheet () {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("getStockInfo");
  if (sheet != null) {
    Browser.msgBox(sheet.getRange(1,1).getValue());
  }
}


********************************************************************************

## Strings

function getDataRange() {
  // The code below prints the contents of the range in the sheet that has data
  var range = SpreadsheetApp.getActiveSheet().getDataRange();
  Browser.msgBox(range.getValues());
}

function getDataToUpperCase() {
  var range = SpreadsheetApp.getActiveSheet().getDataRange();
  var values = range.getValues();
  Browser.msgBox(values[0][0].toUpperCase());
}

function getDataToInitCaps1() {
  var range = SpreadsheetApp.getActiveSheet().getDataRange();
  var values = range.getValues();
 SpreadsheetApp.getActiveRange().offset(0,0,1,1).setFormula('=PROPER(A1)');
}

function getDataToInitCaps() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  for (var i = 1; i <= lastRow; i++) {
    sheet.getRange(i,2).setFormula('=PROPER(A' + i + ')');
  }
  Browser.msgBox(lastRow);
}

function in2mm() {
  // Function to convert from INCHES to MILLIMETERS
  var inNum = 3;
  var outNum = 0;     // this will hold the answer
  var factor = 25.4;  // multiply input by this factor to get output
  if (typeof inNum != "number") {  // check to make sure input is a number
    return("error: input must be a number");  // return the error message
  }
  outNum = inNum * factor;  // calculate the answer
  // return outNum;  // return the answer to the cell which has the formula
  Browser.msgBox(outNum);
}


********************************************************************************

## Utilities ~ 64 encode, zip, format and more
https://developers.google.com/apps-script/reference/utilities/utilities


Utilities.sleep( 300 );



/////

function tryGetActiveUser() {
// The code below will display the email address of the person running the script
//Browser.msgBox(Session.getActiveUser().getEmail());
//Browser.msgBox(Session.getEffectiveUser().getEmail());
//Browser.msgBox(Session.getUser().getEmail());
  Browser.msgBox('Email: ' + Session.getUser().getUserLoginId() + ' Effective: ' + Session.getEffectiveUser().getEmail() + ' ~ Active: ' + Session.getActiveUser().getEmail());
}
