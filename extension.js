const vscode = require('vscode')

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'extension.sayHello',
    function() {
      // Display a message box to the user
      vscode.window.showInformationMessage('Hello World!')
    }
  )

  context.subscriptions.push(disposable)
}
exports.activate = activate

function deactivate() {}

exports.deactivate = deactivate
