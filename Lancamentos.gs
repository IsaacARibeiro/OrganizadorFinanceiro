/**
 * Serviço da tela de lançamentos.
 * Isolado para facilitar manutenção.
 */
function listarLancamentos() {
  // TODO: Ler dados reais da aba APP_CONFIG.SHEET_NAMES.LANCAMENTOS.
  return [
    { data: '2026-01-05', descricao: 'Salário', categoria: 'Receita', valor: 3500 },
    { data: '2026-01-10', descricao: 'Supermercado', categoria: 'Alimentação', valor: -420.5 },
  ];
}

function salvarLancamento(lancamento) {
  // TODO: Persistir na planilha e validar entrada.
  return {
    sucesso: true,
    mensagem: 'Lançamento recebido com sucesso.',
    payload: lancamento,
  };
}
