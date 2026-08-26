self.onmessage = function (event) {
  console.log("Worker received msg", event.data);

  switch(event.data) {
    case "FAVOR": {
      self.postMessage("Sim, posso fazer um favor");
      break;
    }
    case "FALA_OI": {
      self.postMessage("OK: OI!");
      break;
    }
    case "FECHAR": {
      self.postMessage("OK, VOU FECHAR");
      self.close()
      break;
    }
    default: 
      self.postMessage("Não entendi")
  }
};
