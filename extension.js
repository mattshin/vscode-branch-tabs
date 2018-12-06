const branch = require('git-branch')
const vscode = require('vscode')

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'extension.printBranch',
    () => {
      // Display a message box to the user
      vscode.window.showInformationMessage(branch.sync())
    }
  )

  context.subscriptions.push(disposable)
}
exports.activate = activate

function deactivate() {}

exports.deactivate = deactivate
