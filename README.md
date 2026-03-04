# OrganizadorFinanceiro

Aplicativo de organização financeira usando **Google Apps Script** com **Google Planilhas** no modo **Web App**.

## Organização por telas (HTML + GS separados)
Para facilitar manutenção, cada tela foi separada em arquivos próprios:

### Backend (Apps Script)
- `Code.gs`: entrada do web app (`doGet`) e inclusão de parciais HTML.
- `Config.gs`: constantes de configuração (abas e nomes de telas).
- `Dashboard.gs`: regras da tela de dashboard/resumo.
- `Lancamentos.gs`: regras da tela de lançamentos.
- `Categorias.gs`: regras da tela de categorias.
- `Utils.gs`: utilitários compartilhados.

### Frontend (HTML)
- `Index.html`: layout principal e navegação entre telas.
- `Stylesheet.html`: estilos globais.
- `TelaDashboard.html`: markup da tela de dashboard.
- `TelaLancamentos.html`: markup da tela de lançamentos.
- `TelaCategorias.html`: markup da tela de categorias.
- `JavaScript.html`: scripts globais da interface.
- `DashboardScript.html`: script específico da tela de dashboard.
- `LancamentosScript.html`: script específico da tela de lançamentos.
- `CategoriasScript.html`: script específico da tela de categorias.

## Fluxo básico
1. O usuário abre o Web App e o `doGet()` renderiza o `Index.html`.
2. O `Index.html` inclui cada tela parcial.
3. Cada script de tela chama seu respectivo serviço `.gs` via `google.script.run`.
4. Cada serviço `.gs` encapsula a regra da sua tela, evitando acoplamento.

## Próximos passos
1. Conectar `listarLancamentos`, `listarCategorias` e `obterResumo` com dados reais da planilha.
2. Adicionar validações de formulário e tratamento de erros.
3. Implementar criação/edição/exclusão de lançamentos.
4. Criar gráficos simples no dashboard com dados agregados por mês/categoria.
5. Publicar nova versão do Web App e validar permissões de acesso.
