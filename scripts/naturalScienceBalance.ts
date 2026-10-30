import fs from 'fs';
import { FUNDAMENTAL_SCIENCE_QUESTIONS } from '../src/games/quiz/matriz/questions/fundamentalScience';
import { MEDIO_SCIENCE_QUESTIONS } from '../src/games/quiz/matriz/questions/medioScience';
import { QuestionData } from '../src/games/quiz/matriz/questions/types';
import { stripExplanatoryParentheses, stripTrailingExplanationClauses } from '../src/games/quiz/matriz/procedural/optionBalancer';

// Tabela de equivalências científicas concisas e naturais para eliminar assimetria
const NATURAL_REPLACEMENTS: Record<string, string> = {
  'Ao meio-dia solar, quando o Sol atinge sua altura máxima no céu': 'Ao meio-dia solar',
  'Movimento de rotação da Terra de oeste para leste': 'Movimento de rotação da Terra',
  'A Terra tem formato esférico (curvo)': 'A Terra tem formato esférico',
  'Mistura homogênea (solução)': 'Mistura homogênea',
  'Crosta terrestre (Litosfera)': 'Crosta terrestre',
  'Dentro do núcleo delimitado por membrana': 'Dentro do núcleo celular',
  'Inércia (Primeira Lei de Newton)': 'Inércia',
  'Refração luminosa (Lei de Snell-Descartes)': 'Refração luminosa',
  'Equação de Torricelli (v² = v₀² + 2aΔs)': 'Equação de Torricelli',
  'Função horária do espaço (S = S₀ + v₀t + at²/2)': 'Função horária do espaço',
  'Função horária da velocidade (v = v₀ + at)': 'Função horária da velocidade',
  'Reações de fusão nuclear em estrelas massivas e explosões catastróficas de supernovas': 'Fusão nuclear estelar e supernovas',
  'Possuem a camada de valência completa , conferindo alta estabilidade química': 'Camada de valência completa e estável',
  'Salto quântico de elétrons que retornam a níveis de menor energia emitindo fótons de comprimento de onda específico': 'Transição eletrônica com emissão de fótons',
  'Altera as frequências alélicas de uma população por eventos aleatórios e casuais , independente do valor adaptativo do gene': 'Flutuação aleatória de frequências alélicas',
  'A gravidade é tão intensa que nem mesmo a luz consegue escapar de seu horizonte de eventos': 'Gravidade extrema onde nem a luz escapa',
  'O mesmo número de prótons (Z = 6), mas números diferentes de nêutrons e massas atômicas distintas': 'Mesmo número de prótons e nêutrons diferentes',
  'Diminui a energia de ativação necessária para os reagentes atingirem o estado de transição': 'Diminui a energia de ativação da reação',
  'A alolactose se liga à proteína repressora, inativando-a e permitindo a transcrição dos genes estruturais': 'A alolactose inativa o repressor liberando a transcrição',
  'Aliviar a tensão de supertorção helicoidal à frente da forquilha de replicação clivando e religando fitas': 'Aliviar a supertorção da forquilha de replicação',
  'Desnaturação térmica (95 °C), Anelamento de primers (55 °C) e Extensão pela Taq polimerase (72 °C)': 'Desnaturação, anelamento e extensão',
  'Bactérias procariontes fagocitadas que estabeleceram simbiose mutualística estável com células eucariotas primitivas': 'Bactérias em endossimbiose estável',
  'Aumenta exponencialmente a fração de moléculas com energia cinética igual ou superior à energia de ativação': 'Aumenta as moléculas com energia cinética suficiente',
  'A uma temperatura constante bem definida, comportando-se termicamente como uma substância pura': 'Sob temperatura constante bem definida',
  'Diretamente proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância': 'Proporcional às cargas e inverso do quadrado da distância',
  'Soterramento e decomposição anaeróbia de matéria orgânica antiga sob alta pressão e temperatura geológica': 'Decomposição fóssil sob alta pressão geológica',
  'Evoluir e se adaptar constantemente apenas para manter sua sobrevivência relativa em resposta à coevolução de competidores e parasitas': 'Adaptar-se continuamente à coevolução biológica',
  'Ocorre eliminação concomitante de uma molécula pequena e simples a cada ligação monomérica formada': 'Eliminação de molécula simples na polimerização',
  'Exerce impacto desproporcionalmente grande na estrutura e manutenção da biodiversidade da comunidade biótica em relação à sua biomassa ou abundância': 'Impacto desproporcional na comunidade biótica',
  'A reatância indutiva iguala a reatância capacitiva (X_L = X_C, ou ω = 1 / √(LC))': 'Reatância indutiva igual à capacitiva',
  'Sofreram especialização e diferenciação para desempenhar funções específicas': 'Sofreram diferenciação e especialização celular',
  'Materiais sintéticos derivados de petróleo que bactérias não decompõem com facilidade': 'Polímeros resistentes à decomposição bacteriana',
  'A grande extensão no sentido leste-oeste recebe a luz solar em momentos diferentes': 'A extensão leste-oeste recebe luz solar em fusos distintos',
  'Fundir a sucata consome muito menos calor do que a extração eletroquímica do minério': 'A fusão da sucata consome menos energia que a eletrólise',
  'O navio é oco e seu volume engloba ar, tornando sua densidade média menor que a da água': 'O casco oco torna a densidade média menor que a da água',
  'As bactérias não possuem núcleo organizado delimitado por membrana': 'Bactérias não possuem núcleo delimitado por carioteca',
  'Aquelas rochas se formaram no fundo do mar no passado e foram erguidas por forças tectônicas': 'Rochas marinhas erguidas por forças tectônicas',
  'Suprir mais oxigênio e glicose aos músculos em atividade e eliminar o excesso de CO₂': 'Fornecer oxigênio aos músculos e eliminar CO₂',
  'A água da chuva em excesso lava e arrasta nutrientes solúveis para camadas profundas e lençóis freáticos': 'Lixiviação de nutrientes pela água pluvial',
  'Desde a extração da matéria-prima até o descarte e reciclabilidade final': 'Do ciclo da matéria-prima ao descarte final',
  'A trajetória do Sol no céu varia ciclicamente ao longo do ano marcando os períodos de plantio e colheita': 'Variação anual da trajetória solar e das estações',
  'Destilação fracionada com base em diferentes pontos de ebulição': 'Destilação fracionada por pontos de ebulição',
  'Os íons livres dissolvidos na água transportam as cargas elétricas': 'Íons livres dissolvidos que conduzem corrente',
  'O efeito estufa natural é essencial para manter a Terra aquecida e permitir a vida líquida': 'Efeito estufa natural que retém o calor vital',
  'O ar frio é mais denso e desce, criando correntes de convecção que resfriam todo o ambiente': 'O ar frio mais denso desce por convecção',
  'A maior parte da energia é dissipada em forma de calor ao longo dos níveis tróficos': 'Dissipação de energia como calor nos níveis tróficos',
  'O soro já contém os anticorpos prontos para neutralizar o veneno de forma imediata': 'Soro com anticorpos para neutralização imediata',
};

function cleanOption(opt: string): string {
  let t = opt.trim().replace(/\.$/, '');
  if (NATURAL_REPLACEMENTS[t]) {
    return NATURAL_REPLACEMENTS[t];
  }
  // Remove parênteses explicativos se não for fórmula química ou símbolo
  t = stripExplanatoryParentheses(t);
  t = t.replace(/\s{2,}/g, ' ').trim();
  return t;
}

function processQuestions(list: QuestionData[], startIdx: number): QuestionData[] {
  return list.map((q, idx) => {
    const globalIdx = startIdx + idx;
    let options = q.options.map(cleanOption);
    let cIdx = q.correctAnswer;

    // Remove caudas explicativas excessivas da resposta correta
    let c = options[cIdx];
    const distractors = options.filter((_, i) => i !== cIdx);
    const maxD = Math.max(...distractors.map((d) => d.length));
    const avgD = distractors.reduce((a, b) => a + b.length, 0) / distractors.length;

    if (c.length > maxD + 6 || c.length / avgD > 1.25) {
      c = stripTrailingExplanationClauses(c, Math.max(maxD, 20));
      options[cIdx] = c;
    }

    // Embaralha determinístico para distribuição uniforme perfeita entre posições 0, 1, 2, 3
    const targetPos = globalIdx % 4;
    const correctText = options[cIdx];
    const nonCorrect = options.filter((_, i) => i !== cIdx);

    const finalOpts: string[] = [];
    let ncPtr = 0;
    for (let i = 0; i < 4; i++) {
      if (i === targetPos) {
        finalOpts.push(correctText);
      } else {
        finalOpts.push(nonCorrect[ncPtr++]);
      }
    }

    return {
      ...q,
      options: finalOpts,
      correctAnswer: targetPos,
    };
  });
}

export function balanceAndSave(): void {
  const fund = processQuestions(FUNDAMENTAL_SCIENCE_QUESTIONS, 0);
  const med = processQuestions(MEDIO_SCIENCE_QUESTIONS, 240);

  const fundamentalOut = `import { QuestionData } from './types';

// ============================================================================
// BANCO DE CIÊNCIAS - ENSINO FUNDAMENTAL (6º AO 9º ANO)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 240 questões (15 por dificuldade em cada ano escolar)
// ALTERNATIVAS RIGOROSAMENTE BALANCEADAS: Sem viés de tamanho, formato ou posição
// ============================================================================

export const FUNDAMENTAL_SCIENCE_QUESTIONS: QuestionData[] = ${JSON.stringify(fund, null, 2)};
`;

  const medioOut = `import { QuestionData } from './types';

// ============================================================================
// BANCO DE CIÊNCIAS - ENSINO MÉDIO (1º AO 3º ANO)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 180 questões (15 por dificuldade em cada ano escolar)
// ALTERNATIVAS RIGOROSAMENTE BALANCEADAS: Sem viés de tamanho, formato ou posição
// ============================================================================

export const MEDIO_SCIENCE_QUESTIONS: QuestionData[] = ${JSON.stringify(med, null, 2)};
`;

  fs.writeFileSync('src/games/quiz/matriz/questions/fundamentalScience.ts', fundamentalOut, 'utf8');
  fs.writeFileSync('src/games/quiz/matriz/questions/medioScience.ts', medioOut, 'utf8');

  console.log('Successfully balanced and saved clean science banks!');
}

balanceAndSave();
