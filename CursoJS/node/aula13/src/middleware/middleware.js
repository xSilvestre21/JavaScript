exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) {
    req.body.cliente = req.body.cliente.replace(
      "Silvestre",
      "Não use Silvestre",
    );
    console.log();
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log();
  }

  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log("Sou seu outro Middleware");
  next();
};
