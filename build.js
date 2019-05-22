var electronInstaller = require('electron-winstaller');
var path = require("path");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join('./dist/tea-win32-x64'), //刚才生成打包文件的路径
    outputDirectory: path.join('./dist/installer'), //输出路径
    authors: 'yufengtek', // 作者名称  武夷山市智慧茗园数据平台
    exe: 'tea.exe', //在appDirectory寻找exe的名字
    description: 'tea',
    title: 'tea',
    name: 'tea',
    iconUrl: 'http://tea.yufengtek.com/favicon.ico',
    version: '1.0.1',
    noMsi: true
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`))