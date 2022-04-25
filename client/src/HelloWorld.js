import {useRemoteComponent} from "./useRemoteComponent"

const url = "https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/HelloWorld.js"; // prettier-ignore

const HelloWorld = (props) => {
  const [loading, err, Component] = useRemoteComponent(url)

  if (loading) {
    return <div>Loading...</div>
  }

  if (err != null) {
    return <div>Unknown Error: {err.toString()}</div>
  }

  return <Component {...props} />
}

export default HelloWorld
