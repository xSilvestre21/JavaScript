function analisarDados(nome, cpf, dataNascimento) {
    const caracteresNome = nome.trim().length;

    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

        let soma, resto;

        soma = 0;
        for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;

        soma = 0;
        for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(10))) return false;

        return true;
    }

    const cpfValido = validarCPF(cpf) ? "Válido" : "Inválido";

    const [dia, mes, ano] = dataNascimento.split("/").map(Number);
    const dataNasc = new Date(ano, mes - 1, dia);
    const hoje = new Date();

    const diffTempo = hoje - dataNasc;
    const diffDias = Math.floor(diffTempo / (1000 * 60 * 60 * 24));

    return `${caracteresNome} - ${cpfValido} - ${diffDias} dias`;
}

console.log(analisarDados("Gustavo", "489.581.638-95", "25/09/2025"));