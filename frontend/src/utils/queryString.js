export const toQueryString = obj => {
  const params = new URLSearchParams()
  Object.entries(obj).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return
    if (Array.isArray(v)) {
      if (v.length) params.append(k, v.join(","))
    } else {
      params.append(k, v)
    }
  })
  return params.toString()
}
