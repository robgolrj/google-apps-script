## Importador de Emails do Gmail para Google Sheets

Este é um script Google Apps Script que permite importar informações de emails do Gmail para uma planilha do Google Sheets.

### Funcionalidades

- **createCustomMenu()**: Esta função cria um menu personalizado na interface da planilha, permitindo ao usuário acessar facilmente a funcionalidade de importação de emails.
  
- **importGmail()**: Esta função é acionada pelo menu personalizado e realiza a importação dos emails do Gmail para a planilha ativa. Os seguintes dados são importados para a planilha:
  - Remetente do email
  - Assunto do email
  - Data do email
  - Trecho do corpo do email (os primeiros 50 caracteres)
  - Lista dos primeiros 10 anexos do email

### Como usar

1. Abra sua planilha no Google Sheets.
2. No menu superior, clique em "Extensões" > "Apps Script".
3. Cole o código fornecido na janela de script.
4. Salve o script.
5. Feche a janela do script e recarregue sua planilha.
6. Um novo menu chamado "Custom Menu" será adicionado. Clique nele e selecione "Importar do Gmail" para iniciar a importação dos emails.
7. Os dados dos emails serão importados para a planilha na aba especificada.

### Observações

- Certifique-se de conceder as permissões necessárias para que o script possa acessar sua caixa de entrada do Gmail.
- Os emails são importados para a planilha ativa na aba "Página1". Você pode ajustar o nome da aba conforme necessário no código.
- A quantidade de emails importados é definida pelo número especificado no método `getInboxThreads(0, 10)`. No exemplo fornecido, serão importados os 10 emails mais recentes da caixa de entrada.

### Licença

Este script é fornecido sem garantias ou condições de qualquer tipo. Consulte a documentação do Google Apps Script para obter mais informações sobre o uso e as políticas de privacidade.
