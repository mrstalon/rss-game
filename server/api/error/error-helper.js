const wrapError = (msg, statusCode) => {
  return {
    error: {
      message: msg,
      statusCode: statusCode
    }
  }
}

export default wrapError
