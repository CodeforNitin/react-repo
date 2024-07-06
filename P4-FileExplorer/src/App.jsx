import FileExplorer from './components/FileExplorer'
import { folderData } from "./data/data"

function App() {
  return (
<div>
      <h1>File Explorer</h1>
      <FileExplorer data={folderData} />
    </div>
  )
}

export default App
