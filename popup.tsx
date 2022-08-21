import React from "react"

import { Storage } from "@plasmohq/storage"

function promiseState(p: Promise<any>) {
  const t = {}
  return Promise.race([p, t]).then(
    (v) => (v === t ? "pending" : "fulfilled"),
    () => "rejected"
  )
}

const storage = new Storage()
console.log("Getting value")
const promise = storage.get("test")

promise.then((value) => {
  console.log("Got", value)
})
setInterval(async () => {
  console.log("Status: ", await promiseState(promise))
}, 1000)

function Popup() {
  return <div></div>
}

export default Popup
