function status(request, response) {
  response.status(200).json({ text: "Teste" });
}

export default status;
