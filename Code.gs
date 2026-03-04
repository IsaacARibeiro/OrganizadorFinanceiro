/**
 * Ponto de entrada do Web App.
 */
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Organizador Financeiro');
}

/**
 * Permite incluir templates HTML parciais dentro do Index.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
