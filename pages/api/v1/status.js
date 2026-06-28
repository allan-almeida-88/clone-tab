function status(request, response) {
  response.status(200).json({ text: "Teste 2" });
}

export default status;
