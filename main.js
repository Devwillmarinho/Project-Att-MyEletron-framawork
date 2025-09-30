const { app, BrowserWindow } = require('electron');
const path = require('path');

// Isso ativa o reload automático da pasta 'src' (onde está o front)
require('electron-reload')(path.join(__dirname, 'src'), {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
});

let win; // manter referência global

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  const filePath = path.join(__dirname, 'src', 'views', 'index.html');
  console.log('Carregando arquivo:', filePath);
  win.loadFile(filePath);
};

app.whenReady().then(() => {   // Quando o Electron terminar de iniciar
  createWindow();

                            // No macOS, recria a janela quando o ícone do app é clicado no dock e não há outras janelas abertas
  app.on('activate', () => {      
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
// Fecha o app quando todas as janelas forem fechadas (exceto no macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
