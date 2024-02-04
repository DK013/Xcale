// Native
const { join } = require("path");

// Packages
const { BrowserWindow, app, ipcMain } = require("electron");

// Prepare the renderer once the app is ready
app.on("ready", async () => {
	const mainWindow = new BrowserWindow({
		width: 1440,
		height: 1024,
		webPreferences: {
			nodeIntegration: false,
			preload: join(__dirname, "../preload/index.js"),
		},
	});
	mainWindow.removeMenu();

	process.env.NODE_ENV !== "production"
		? mainWindow.loadURL("http://localhost:5173")
		: mainWindow.loadURL(join(__dirname, "../renderer/index.html"));

	process.env.NODE_ENV !== "production" && mainWindow.webContents.openDevTools();
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on("message", (event, message) => {
	event.sender.send("message", message);
});
