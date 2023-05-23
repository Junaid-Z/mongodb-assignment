const CreateResponse = (status, data, message) => {
  const response = {
    status,
    data,
    message
  }
  return response
}

export default CreateResponse
