# ⚡ Project-Att-MyElectron-Framework

Este é um projeto base para desenvolvimento de aplicações **desktop com JavaScript** usando o [Electron](https://www.electronjs.org/). Ele inclui um ambiente de desenvolvimento configurado com **atualização automática (hot reload)** para facilitar a produtividade durante a criação da interface e da lógica da aplicação.

---

## 🚀 Funcionalidades

- 🖥️ Criação de janelas desktop com HTML, CSS e JS.
- ♻️ Atualização automática da interface com [`electron-reload`](https://www.npmjs.com/package/electron-reload).
- 🔄 Suporte ao `nodemon` (opcional) para reiniciar o processo principal ao salvar `main.js`.
- ✅ Estrutura modular com separação de arquivos.

---

## 📁 Estrutura do Projeto

```bash
.
├── node_modules/
├── src/
│   └── views/
│       └── index.html   # Interface do app
├── main.js              # Código principal (Main Process)
├── package.json         # Configurações e scripts
├── README.md
🛠️ Requisitos
Node.js instalado

Git (para clonar e versionar)

Electron instalado como dependência do projeto

📦 Instalação
Clone o repositório:

bash

git clone https://github.com/Devwillmarinho/Project-Att-MyEletron-framawork.git
cd Project-Att-MyEletron-framawork
Instale as dependências:

bash

npm install
▶️ Como rodar o projeto
bash

npm start
A janela do Electron será aberta automaticamente e será recarregada sempre que você alterar arquivos dentro da pasta src.

🔄 Atualização Automática
O projeto utiliza electron-reload para atualizar a janela da aplicação ao detectar alterações nos arquivos HTML/CSS/JS dentro da pasta src.

Se quiser adicionar suporte a reinício do processo principal (main.js), você pode instalar o nodemon:

bash

npm install --save-dev nodemon
E alterar o script no package.json:

json

"scripts": {
  "start": "nodemon --watch main.js --exec electron ."
}
🧪 Exemplo de Interface
A interface padrão inclui:

Entrada de nome

Botão interativo com contador de cliques

Estilo animado com transições CSS

✨ Melhorias Futuras
Integração com banco de dados local (SQLite ou LokiJS)

Criação de janelas múltiplas

Comunicação entre processos (ipcMain e ipcRenderer)

Empacotamento com electron-builder

📄 Licença
Este projeto está sob a licença MIT.

🙋‍♂️ Autor
Desenvolvido por @Devwillmarinho