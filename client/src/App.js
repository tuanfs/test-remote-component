import "./App.css"
import RemoteComponent from "./RemoteComponent"
import {useState, useEffect} from "react"
import axios from "axios"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  const [pageList, setPageList] = useState([])
  useEffect(() => {
    const fetchPage = async () => {
      const result = await axios.get(
        "https://protected-oasis-28404.herokuapp.com/api/page",
      )
      if (result.data.success) {
        setPageList(result.data.pageList)
      }
    }
    fetchPage()
  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          {pageList.length > 0 &&
            pageList.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <RemoteComponent
                      sections={JSON.stringify(item.sections)}
                      path={item.path}
                    />
                  }
                />
              )
            })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
