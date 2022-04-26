import {useRemoteComponent} from "./useRemoteComponent"

const url =
  "https://raw.githubusercontent.com/tuanfs/remote-component/main/dist/main.js" // prettier-ignore

const RemoteComponent = (props) => {
  const [loading, err, Component] = useRemoteComponent(url)
  if (loading) {
    return <div>Loading...</div>
  }

  if (err != null) {
    return <div>Unknown Error: {err.toString()}</div>
  }

  return (
    <div>
      <Component {...props} />
    </div>
  )
}

export default RemoteComponent
