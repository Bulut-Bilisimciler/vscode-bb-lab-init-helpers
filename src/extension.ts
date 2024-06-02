// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "Bulut-Bilisimciler.vscode-bb-lab-init-helpers" is now active!');

    // https://stackoverflow.com/questions/58837196/can-a-vs-code-extension-change-the-vs-code-settings
	// https://github.com/microsoft/vscode-extension-samples/tree/main/configuration-sample
	vscode.workspace.getConfiguration()
    .update('update.mode', 'none', vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
    .update('telemetry.telemetryLevel', 'off', vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
    .update('extensions.autoCheckUpdates', false, vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
    .update('extensions.autoUpdate', false, vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
	.update('workbench.colorTheme', 'Default Dark+', vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
	.update('workbench.iconTheme', 'vscode-icons', vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
	.update('editor.mouseWheelZoom', true, vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
	.update('editor.fontLigatures', false, vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
	.update('redhat.telemetry.enabled', false, vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
	.update('editor.defaultFormatter', 'esbenp.prettier-vscode', vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
	.update('editor.inlineSuggest.enabled', true, vscode.ConfigurationTarget.Global);
	vscode.workspace.getConfiguration()
	.update('vsicons.dontShowNewVersionMessage', true, vscode.ConfigurationTarget.Global);
}

// this method is called when your extension is deactivated
export function deactivate() {}
