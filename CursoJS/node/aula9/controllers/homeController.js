exports.paginaInicial = (req, res) => {
  res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        Outro Campo: <input type="text" name="outrocampo">
        <button>Hello</button>
        </form>
        `);
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou sua nova rota de post");
};
