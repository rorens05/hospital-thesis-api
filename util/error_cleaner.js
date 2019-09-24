export default (err) => {
  return {
    status: 'error',
    errors:  err.errors.map((e) => {
      return {
        message: e.message,
        type: e.type
      };
    })
  };
}

exports.clean = (err) => {
  return {
    status: 'error',
    errors:  err.errors.map((e) => {
      return {
        message: e.message,
        type: e.type
      };
    })
  };
}