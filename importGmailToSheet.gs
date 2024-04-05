function createCustomMenu() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Custom Menu');

  // Add a menu item to add a new menu item
  menu.addItem('Importar do Gmail', 'importGmail');

  menu.addToUi();
}

function importGmail() {
  var destino = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Página1");
  var lin = 2;
  var inbox = GmailApp.getInboxThreads(0, 10);
  var mensagem = GmailApp.getMessagesForThreads(inbox);
  for (var i=0;i<mensagem.length;i++) {
    for (var j=0;j<mensagem[i].length;j++) {
      destino.getRange(lin, 1).setValue(mensagem[i][j].getFrom());
      destino.getRange(lin, 2).setValue(mensagem[i][j].getSubject());
      destino.getRange(lin, 5).setValue(mensagem[i][j].getDate());
      destino.getRange(lin, 3).setValue(mensagem[i][j].getBody().slice(0, 50));
      destino.getRange(lin, 4).setValue(mensagem[i][j].getAttachments().slice(0, 10)); 
    }
    lin++;
  }
}
