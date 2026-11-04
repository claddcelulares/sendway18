Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = Left(WScript.ScriptFullName, InStrRev(WScript.ScriptFullName, "\") - 1)
WshShell.Run "node server.js", 0, False
WScript.Sleep 2000
WshShell.Run "http://localhost:3000"
