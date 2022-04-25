import {useRemoteComponent} from "./useRemoteComponent"

import React from "react"

export default function Page() {
  const [loading, err, Component] = useRemoteComponent(
    "https://raw.githubusercontent.com/tuanfs/dashboard-shop/main/test-mui/build/static/js/main.91ba602c.js",
  )
  if (loading) {
    return <div>Loading...</div>
  }

  if (err != null) {
    return <div>Unknown Error: {err.toString()}</div>
  }

  return <Component />
}
