let students = [
    {
        Nome: 'Luiz',
        Provas: [10, 9.5],
    },
    {
        Nome: 'Ana',
        Provas: [8.5, 9.0],
    },
    {
        Nome: 'Victor',
        Provas: [9.5, 3],
    },
    {
        Nome: 'Letícia',
        Provas: [7.5, 10],
    }
];

function calcularMedia() {
    students.forEach(function(student) {
        let somaNotas = student.Provas.reduce((acc, nota) => acc + nota, 0);
        let media = somaNotas / student.Provas.length;
        let status = media >= 7 ? "Aprovado(a)" : "Reprovado(a)";
        alert(`${student.Nome} você obteve uma Média de ${media.toFixed(2)}.\n Portanto foi ${status}`);
    });
}

calcularMedia();
