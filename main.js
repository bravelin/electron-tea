const electron = require('electron')
const { app, BrowserWindow } = electron
let mainWindow
const Menu = electron.Menu
function createWindow () {
    Menu.setApplicationMenu(null)
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        show: false,
        icon: './icon.ico',
        allowRunningInsecureContent: true,
        experimentalCanvasFeatures: true,
        fullscreen: false,
        title: '武夷山市智慧茗园数据平台',
        titleBarStyle: "hiddenInset",
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadURL('http://tea.yufengtek.com')
    // mainWindow.loadURL('http://localhost:8066')
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
app.on('activate', function () {
    if (mainWindow === null) createWindow()
})
