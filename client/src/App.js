import "./App.css"
import RemoteComponent from "./RemoteComponent"
import {useState, useEffect} from "react"
import axios from "axios"
function App() {
  const [pageList, setPageList] = useState([])
  console.log(pageList)
  useEffect(() => {
    const fetchPage = async () => {
      const result = await axios.get("http://localhost:5500/api/page")
      if (result.data.success) {
        setPageList(result.data.pageList)
      }
    }
    fetchPage()
  }, [])
  return (
    <div className="App">
      {pageList.length > 0 &&
        pageList.map((item, index) => {
          console.log(item)
          return (
            <RemoteComponent
              sections={JSON.stringify(item.sections)}
              path={item.path}
            />
          )
        })}
    </div>
  )
}

export default App
