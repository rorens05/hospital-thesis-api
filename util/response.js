export const success = (res, message) => {
  res.json({
    status: "ok", 
    message
  })
}

export const failed = (res, message) => {
  res.json({
    status: "error", 
    message
  })
}