const Aluno = require('./src/models/Aluno');
const Turma = require('./src/models/Turma');
const TurmaPresencial = require('./src/models/TurmaPresencial');

const aluno = new Aluno('João Silva', 'joao.silva', '12345');
console.log('Aluno:', aluno);

const turma = new Turma('T001', 7);
console.log('Turma aprovada:', turma.aprovado());

const turmaPresencial = new TurmaPresencial('TP001', 8, 80);
console.log('Turma Presencial aprovada:', turmaPresencial.aprovado());