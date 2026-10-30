import fs from 'fs';

const list = [];

function q(id, grade, diff, xp, bncc, topic, question, options, explanation) {
  list.push({
    id,
    subject: 'ciencias',
    grade,
    difficulty: diff,
    xp,
    bnccSkill: bncc,
    topic,
    question,
    options,
    correctAnswer: 0,
    explanation,
  });
}

// ============================================================================
// 1º ANO ENSINO MÉDIO - CIÊNCIAS DA NATUREZA (EM13CNT)
// ============================================================================

// FÁCIL (15 questões)
q('cie-1em-f-01', '1º ano EM', 'facil', 20, 'EM13CNT101', 'Velocidade Média',
  'Um automóvel percorre 120 km em 2 horas em uma rodovia com movimento uniforme. Qual é a sua velocidade média?',
  ['60 km/h', '120 km/h', '50 km/h', '240 km/h'],
  'Vm = Δs / Δt = 120 km / 2 h = 60 km/h.');

q('cie-1em-f-02', '1º ano EM', 'facil', 20, 'EM13CNT201', 'Densidade dos Materiais',
  'Um bloco de madeira tem massa de 400 g e ocupa um volume de 500 cm³. Qual é a sua densidade?',
  ['0,8 g/cm³', '1,25 g/cm³', '0,5 g/cm³', '2,0 g/cm³'],
  'd = m / V = 400 g / 500 cm³ = 0,8 g/cm³.');

q('cie-1em-f-03', '1º ano EM', 'facil', 20, 'EM13CNT301', 'Membrana Plasmática e Modelo do Mosaico Fluido',
  'A membrana plasmática celular é constituída fundamentalmente por uma bicamada de:',
  ['Fosfolipídios com proteínas inseridas em fluxo contínuo', 'Carboidratos sólidos e DNA', 'Ácidos nucleicos puros', 'Celulose mineral'],
  'O modelo do mosaico fluido de Singer e Nicolson descreve uma bicamada lipídica dinâmica com proteínas integrais e periféricas.');

q('cie-1em-f-04', '1º ano EM', 'facil', 20, 'EM13CNT101', 'Primeira Lei de Newton (Inércia)',
  'A tendência natural dos corpos de manter seu estado de repouso ou de movimento retilíneo uniforme, a menos que uma força resultante atue sobre eles, é o princípio da:',
  ['Inércia (1ª Lei de Newton)', 'Ação e Reação', 'Gravitação Universal', 'Conservação do Momento Angular'],
  'Pela 1ª Lei de Newton, na ausência de forças externas resultantes, a velocidade vetorial do corpo permanece constante.');

q('cie-1em-f-05', '1º ano EM', 'facil', 20, 'EM13CNT203', 'Ligações Químicas Covalentes',
  'Na molécula de água (H₂O), a ligação química entre os átomos de hidrogênio e oxigênio ocorre por:',
  ['Compartilhamento de pares de elétrons (ligação covalente)', 'Transferência total de prótons', 'Ligação iônica salina', 'Atração gravitacional'],
  'Elementos não metálicos compartilham elétrons de valência para atingir estabilidade eletrônica.');

q('cie-1em-f-06', '1º ano EM', 'facil', 20, 'EM13CNT302', 'Fotossíntese como Conversor Energético',
  'No processo de fotossíntese realizado por plantas e fitoplâncton, a energia solar é convertida em:',
  ['Energia química armazenada nas ligações da glicose', 'Calor radioativo', 'Energia nuclear', 'Energia magnética'],
  'A fotossíntese converte dióxido de carbono e água em glicose e oxigênio utilizando energia luminosa.');

q('cie-1em-f-07', '1º ano EM', 'facil', 20, 'EM13CNT102', 'Energia Cinética',
  'A energia associada exclusivamente ao movimento de um corpo com velocidade v e massa m é a:',
  ['Energia cinética (Ec = m v² / 2)', 'Energia potencial gravitacional', 'Energia térmica pura', 'Energia potencial elástica'],
  'A energia cinética depende da massa e do quadrado da velocidade do corpo em movimento.');

q('cie-1em-f-08', '1º ano EM', 'facil', 20, 'EM13CNT204', 'Concentração Comum de Soluções',
  'Dissolvendo 20 gramas de cloreto de sódio em água até completar 2 litros de solução, qual é a concentração comum obtida?',
  ['10 g/L', '20 g/L', '40 g/L', '5 g/L'],
  'C = m / V = 20 g / 2 L = 10 g/L.');

q('cie-1em-f-09', '1º ano EM', 'facil', 20, 'EM13CNT303', 'Mitose',
  'A divisão celular por mitose em organismos pluricelulares é responsável por:',
  ['Crescimento corporal, regeneração de tecidos e cicatrização', 'Produção exclusiva de espermatozoides', 'Redução do número de cromossomos à metade', 'Mutações obrigatórias'],
  'A mitose gera duas células-filhas geneticamente idênticas à célula-mãe diploide para renovação tecidual.');

q('cie-1em-f-10', '1º ano EM', 'facil', 20, 'EM13CNT101', 'Segunda Lei de Newton',
  'Qual é a força resultante necessária para acelerar um corpo de massa 5 kg com aceleração constante de 2 m/s²?',
  ['10 N (newtons)', '2,5 N', '7 N', '25 N'],
  'Pela 2ª Lei de Newton: F = m × a = 5 kg × 2 m/s² = 10 N.');

q('cie-1em-f-11', '1º ano EM', 'facil', 20, 'EM13CNT202', 'Estados Físicos da Matéria',
  'Qual estado da matéria é caracterizado por ter volume e forma constantes e partículas fortemente unidas em posições fixas?',
  ['Estado sólido', 'Estado líquido', 'Estado gasoso', 'Plasma'],
  'Nos sólidos, as forças intermoleculares coesivas superam a agitação térmica, mantendo forma e volume bem definidos.');

q('cie-1em-f-12', '1º ano EM', 'facil', 20, 'EM13CNT301', 'Ribossomos e Síntese Proteica',
  'Qual organela citoplasmática atua como o sítio de montagem e síntese de novas cadeias de proteínas a partir do RNA mensageiro?',
  ['Ribossomo', 'Lisossomo', 'Complexo de Golgi', 'Centríolo'],
  'Os ribossomos realizam a tradução do código genético, unindo aminoácidos em sequências proteicas.');

q('cie-1em-f-13', '1º ano EM', 'facil', 20, 'EM13CNT102', 'Energia Potencial Gravitacional',
  'Um vaso de 2 kg está em uma sacada a 5 metros de altura. Adotando g = 10 m/s², qual é sua energia potencial gravitacional em relação ao solo?',
  ['100 J (joules)', '50 J', '10 J', '200 J'],
  'Ep = m × g × h = 2 × 10 × 5 = 100 J.');

q('cie-1em-f-14', '1º ano EM', 'facil', 20, 'EM13CNT203', 'Gás Carbônico e Oxigênio Molecular',
  'A molécula diatômica de gás oxigênio essencial à nossa respiração é representada quimicamente por:',
  ['O₂', 'O₃', 'CO₂', 'H₂O'],
  'O gás oxigênio atmosférico é formado por dois átomos de oxigênio unidos por dupla ligação covalente (O₂).');

q('cie-1em-f-15', '1º ano EM', 'facil', 20, 'EM13CNT303', 'Meiose e Gametogênese',
  'A meiose é o processo de divisão celular especializado que reduz o número de cromossomos pela metade (de 2n para n) com o objetivo de produzir:',
  ['Gametas reprodutivos (óvulos e espermatozoides)', 'Células da pele', 'Neurônios maduros', 'Glóbulos brancos'],
  'A meiose gera células haploides geneticamente recombinadas para permitir a manutenção do número cromossômico da espécie na fecundação.');

// MÉDIO (15 questões)
q('cie-1em-m-01', '1º ano EM', 'medio', 35, 'EM13CNT101', 'Movimento Uniformemente Variado (MUV)',
  'Um veículo parte do repouso (v₀ = 0) com aceleração constante de 3 m/s². Qual será a sua velocidade após 6 segundos?',
  ['18 m/s (cerca de 65 km/h)', '12 m/s', '9 m/s', '36 m/s'],
  'Pela função horária da velocidade: v = v₀ + a × t = 0 + 3 × 6 = 18 m/s.');

q('cie-1em-m-02', '1º ano EM', 'medio', 35, 'EM13CNT205', 'Massa Molar e Mol',
  'A massa molar da molécula de água (H₂O) é 18 g/mol (H = 1 g/mol e O = 16 g/mol). Quantos gramas de água correspondem a 3 mols dessa substância?',
  ['54 g', '36 g', '18 g', '72 g'],
  'Massa = n × M = 3 mols × 18 g/mol = 54 g.');

q('cie-1em-m-03', '1º ano EM', 'medio', 35, 'EM13CNT302', 'Fermentação Lática nos Músculos',
  'Durante uma corrida intensa sem suprimento imediato suficiente de oxigênio, as células musculares produzem energia rápida através de:',
  ['Fermentação lática anaeróbia (produzindo lactato)', 'Fotossíntese celular', 'Respiração oxidativa pura', 'Quebra de DNA'],
  'A fermentação lática regenera NAD⁺ no citoplasma sem oxigênio, gerando ATP emergencial e acúmulo temporário de ácido lático.');

q('cie-1em-m-04', '1º ano EM', 'medio', 35, 'EM13CNT101', 'Terceira Lei de Newton (Ação e Reação)',
  'Ao disparar um tiro, um canhão recua para trás. Isso acontece porque:',
  ['A força que o canhão exerce sobre o projétil para a frente tem reação de mesma intensidade e direção contrária sobre o canhão', 'A bala puxa o canhão pelo vácuo', 'A gravidade empurra o canhão', 'O ar entra na câmara'],
  'Pelo princípio da ação e reação (3ª Lei de Newton), as forças mútuas entre os dois corpos são iguais em módulo e opostas em sentido.');

q('cie-1em-m-05', '1º ano EM', 'medio', 35, 'EM13CNT203', 'Polaridade da Molécula de Água',
  'A molécula de água é polar e possui geometria angular. Essa polaridade faz com que a água seja um excelente solvente de:',
  ['Compostos iônicos e polares (como sais e açúcares)', 'Substâncias apolares como gasolina e óleos minerais', 'Metais puros insolúveis', 'Gases nobres pesados'],
  'A atração eletrostática dos dipolos da água estabiliza íons e moléculas polares (regra: "semelhante dissolve semelhante").');

q('cie-1em-m-06', '1º ano EM', 'medio', 35, 'EM13CNT301', 'Mitocôndrias e Teoria Endossimbiótica',
  'A presença de DNA próprio circular e ribossomos no interior das mitocôndrias e cloroplastos apoia a Teoria Endossimbiótica, que propõe que essas organelas:',
  ['Evoluíram de antigas bactérias englobadas por células hospedeiras primitivas em simbiose', 'Foram criadas por vírus modernos', 'Eram pedaços de núcleo celular', 'Surgiram espontaneamente do nada'],
  'Lynn Margulis demonstrou que mitocôndrias compartilham traços genéticos e estruturais com bactérias aeróbias ancestrais.');

q('cie-1em-m-07', '1º ano EM', 'medio', 35, 'EM13CNT102', 'Conservação da Energia Mecânica',
  'Um skatista de 50 kg desce uma rampa sem atrito a partir de 5 metros de altura (g = 10 m/s²). Qual é a sua velocidade na base da rampa?',
  ['10 m/s', '5 m/s', '20 m/s', '15 m/s'],
  'Toda a energia potencial vira cinética: mgh = mv²/2 => v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s.');

q('cie-1em-m-08', '1º ano EM', 'medio', 35, 'EM13CNT205', 'Cálculo Estequiométrico Básico',
  'Na combustão completa do carbono: C + O₂ → CO₂. Quantos gramas de CO₂ (massa molar 44 g/mol) são gerados ao queimar 12 g de carbono (1 mol de C)?',
  ['44 g', '22 g', '88 g', '32 g'],
  'A relação estequiométrica é de 1 mol de C para 1 mol de CO₂: 12 g de C produzem exatamente 44 g de CO₂.');

q('cie-1em-m-09', '1º ano EM', 'medio', 35, 'EM13CNT303', 'Crossing-Over e Variabilidade Genética',
  'O crossing-over (permutação cromossômica) ocorrido na prófase I da meiose é fundamental para a evolução biológica porque:',
  ['Permuta segmentos entre cromátides homólogas, gerando novas combinações de alelos nos gametas', 'Duplica os cromossomos', 'Destrói mutações genéticas', 'Impede a divisão celular'],
  'O crossing-over quebra o ligamento gênico estrito e multiplica exponencialmente a diversidade dos gametas formados.');

q('cie-1em-m-10', '1º ano EM', 'medio', 35, 'EM13CNT101', 'Força de Atrito',
  'Para empurrar uma caixa pesada parada sobre o piso, a força necessária para iniciar o movimento (atrito estático máximo) é geralmente:',
  ['Maior do que a força necessária para manter a caixa em movimento uniforme (atrito cinético)', 'Menor do que o atrito cinético', 'Igual a zero', 'Independente do peso'],
  'O coeficiente de atrito estático (μe) é maior que o cinético (μc); vencer o engrazamento inicial exige força superior.');

q('cie-1em-m-11', '1º ano EM', 'medio', 35, 'EM13CNT203', 'Pontes (Ligações) de Hidrogênio',
  'O alto ponto de ebulição da água (100°C) em comparação com outros compostos de massas semelhantes (como H₂S) deve-se à presença de:',
  ['Ligações de hidrogênio intermoleculares fortes entre as moléculas de água', 'Ligações iônicas duras', 'Ligações covalentes apolares', 'Forças gravitacionais intensas'],
  'A atração eletrostática entre o hidrogênio polarizado positivamente e o par livre do oxigênio vizinho exige alto calor para evaporação.');

q('cie-1em-m-12', '1º ano EM', 'medio', 35, 'EM13CNT302', 'Ciclo de Krebs e Fosforilação Oxidativa',
  'Nas células eucariontes com suprimento adequado de oxigênio, a maior parte do ATP da respiração celular é gerada:',
  ['Nas cristas mitocôndrias durante a fosforilação oxidativa (cadeia respiratória)', 'No citoplasma durante a glicólise', 'Dentro do núcleo celular', 'No retículo endoplasmático'],
  'O gradiente de prótons na membrana interna da mitocôndria aciona a enzima ATP sintase, gerando cerca de 30 a 32 ATPs por glicose.');

q('cie-1em-m-13', '1º ano EM', 'medio', 35, 'EM13CNT104', 'Trabalho de uma Força Constante',
  'Uma força horizontal de 50 N desloca um caixote por 4 metros na mesma direção e sentido da força. Qual foi o trabalho mecânico realizado?',
  ['200 J', '100 J', '50 J', '12,5 J'],
  'Trabalho W = F × d × cos θ = 50 N × 4 m × cos 0° = 200 J.');

q('cie-1em-m-14', '1º ano EM', 'medio', 35, 'EM13CNT204', 'Diluição de Soluções',
  'Ao adicionar 500 mL de água pura a 500 mL de uma solução aquosa de açúcar com concentração de 20 g/L, qual será a nova concentração da solução?',
  ['10 g/L', '5 g/L', '20 g/L', '40 g/L'],
  'O volume dobrou (de 500 mL para 1.000 mL); logo, a concentração cai pela metade: C₁V₁ = C₂V₂ => 20 × 0,5 = C₂ × 1,0 => C₂ = 10 g/L.');

q('cie-1em-m-15', '1º ano EM', 'medio', 35, 'EM13CNT301', 'Retículo Endoplasmático Rugoso vs Liso',
  'O Retículo Endoplasmático Rugoso recebe esse nome pela presença de ribossomos aderidos em sua superfície e especializa-se na:',
  ['Síntese e modificação de proteínas destinadas à exportação ou à membrana', 'Produção de lipídios e desintoxicação de álcool', 'Digestão celular autofágica', 'Fotossíntese'],
  'O RER sintetiza proteínas secretórias; o REL (liso) especializa-se na síntese de fosfolipídios/esteroides e desintoxicação.');

// DIFÍCIL (15 questões)
q('cie-1em-d-01', '1º ano EM', 'dificil', 55, 'EM13CNT101', 'Lançamento Oblíquo (Composição de Movimentos)',
  'Em um lançamento oblíquo de uma bola de futebol no vácuo, a velocidade horizontal da bola durante todo o trajeto é:',
  ['Constante, pois não atuam forças horizontais (movimento uniforme horizontal)', 'Acelerada pela gravidade', 'Nula no ponto mais alto', 'Crescente contínua'],
  'O movimento horizontal é retilíneo uniforme (MRU); apenas o movimento vertical é acelerado pela gravidade (MRUV).');

q('cie-1em-d-02', '1º ano EM', 'dificil', 55, 'EM13CNT206', 'Rendimento de Reação e Pureza',
  'Uma amostra de 100 g de calcário com 80% de pureza em CaCO₃ foi submetida a decomposição térmica completa (CaCO₃ → CaO + CO₂). Sabendo que a massa molar de CaCO₃ é 100 g/mol e de CaO é 56 g/mol, qual é a massa de óxido de cálcio produzida?',
  ['44,8 g', '56,0 g', '80,0 g', '28,0 g'],
  'Massa de CaCO₃ puro = 80 g (0,8 mol). 0,8 mol de CaCO₃ produz 0,8 mol de CaO: 0,8 × 56 g/mol = 44,8 g.');

q('cie-1em-d-03', '1º ano EM', 'dificil', 55, 'EM13CNT304', 'Regulação do Ciclo Celular e Câncer',
  'O câncer caracteriza-se geneticamente por divisões celulares descontroladas causadas principalmente por mutações em quais classes de genes?',
  ['Proto-oncogenes e genes supressores de tumor (como p53)', 'Genes de pigmentação da pele apenas', 'Genes mitocondriais exclusivos', 'Genes de ribossomos bacterianos'],
  'A inativação de supressores tumorais combinada à ativação de oncogenes quebra os pontos de checagem do ciclo celular.');

q('cie-1em-d-04', '1º ano EM', 'dificil', 55, 'EM13CNT102', 'Potência Mecânica e Rendimento',
  'Um motor com potência total de 1.000 W realiza trabalho útil de 3.000 J a cada 4 segundos. Qual é o rendimento percentual desse motor?',
  ['75%', '50%', '80%', '60%'],
  'Potência útil = Trabalho / tempo = 3000 J / 4 s = 750 W. Rendimento = (750 W / 1000 W) × 100% = 75%.');

q('cie-1em-d-05', '1º ano EM', 'dificil', 55, 'EM13CNT203', 'Geometria Molecular e Forças Intermoleculares',
  'Embora o dióxido de carbono (CO₂) possua ligações covalentes polares C=O, a molécula como um todo é apolar porque:',
  ['Sua geometria molecular é linear e os momentos dipolares opostos se anulam perfeitamente', 'O carbono não tem elétrons', 'O oxigênio repele a luz', 'Tem geometria angular'],
  'Por ter geometria linear (O=C=O), os vetores dipolo apontam em sentidos opostos com mesma intensidade, gerando momento dipolar resultante zero.');

q('cie-1em-d-06', '1º ano EM', 'dificil', 55, 'EM13CNT305', 'Ciclo do Nitrogênio e Bactérias Fixadoras',
  'Embora o ar seja 78% gás nitrogênio (N₂), plantas e animais não conseguem absorvê-lo diretamente. A incorporação do nitrogênio no solo depende de:',
  ['Bactérias fixadoras de nitrogênio (como Rhizobium em leguminosas) que convertem N₂ em amônia e nitrato', 'Fotossíntese das algas marinhas', 'Evaporação pura da água doce', 'Minerais de ferro oxidado'],
  'As bactérias fixadoras quebram a forte tripla ligação de N₂, convertendo-o em compostos assimiláveis pelas raízes vegetais.');

q('cie-1em-d-07', '1º ano EM', 'dificil', 55, 'EM13CNT101', 'Força Centrípeta em Curvas',
  'Quando um carro faz uma curva plana horizontal sem derrapar, qual força real atua como resultante centrípeta puxando o carro para o centro da curva?',
  ['A força de atrito estático lateral entre os pneus e o asfalto', 'A força de gravidade vertical', 'A força de sustentação do ar', 'A inércia espontânea'],
  'O atrito lateral dos pneus direcionado para o centro da trajetória curva impede a derrapagem tangencial do veículo.');

q('cie-1em-d-08', '1º ano EM', 'dificil', 55, 'EM13CNT205', 'Reagente em Excesso e Limitante',
  'Misturando 2 mols de gás hidrogênio (H₂) e 2 mols de gás oxigênio (O₂) para reagir: 2 H₂ + O₂ → 2 H₂O. Ao final da reação haverá excesso de:',
  ['1 mol de gás oxigênio (O₂)', '1 mol de gás hidrogênio', 'Nenhum reagente sobra', '2 mols de água apenas'],
  '2 mols de H₂ reagem com apenas 1 mol de O₂. Como foram colocados 2 mols de O₂, sobra exatamente 2 - 1 = 1 mol de O₂.');

q('cie-1em-d-09', '1º ano EM', 'dificil', 55, 'EM13CNT301', 'Transporte Ativo e Bomba de Sódio-Potássio',
  'A bomba de Na⁺/K⁺ nas membranas dos neurônios gasta moléculas de ATP para:',
  ['Bombear íons contra seus gradientes eletroquímicos (jogando Na⁺ para fora e K⁺ para dentro)', 'Deixar a glicose escapar livremente', 'Destruir a membrana celular', 'Neutralizar a água'],
  'O transporte ativo consome energia metabólica para manter a polarização elétrica de repouso da membrana neuronal.');

q('cie-1em-d-10', '1º ano EM', 'dificil', 55, 'EM13CNT102', 'Colisões Mecânicas e Conservação do Momento',
  'Em uma colisão perfeitamente inelástica entre dois carros que colidem e permanecem grudados após o impacto:',
  ['A quantidade de movimento total (momento linear) é conservada, mas há perda de energia cinética', 'A energia cinética é 100% conservada', 'O momento linear cai a zero', 'Os carros ganham velocidade'],
  'Na colisão inelástica, o momento linear do sistema isolado é constante, enquanto parte da energia cinética dissipa-se em calor e deformação mecânica.');

q('cie-1em-d-11', '1º ano EM', 'dificil', 55, 'EM13CNT204', 'Molaridade (Concentração Molar)',
  'Qual é a concentração em mol/L de uma solução preparada dissolvendo 40 g de NaOH (massa molar 40 g/mol) em água até completar 500 mL de solução?',
  ['2,0 mol/L', '1,0 mol/L', '0,5 mol/L', '4,0 mol/L'],
  'n = 40 g / 40 g/mol = 1 mol. Volume = 0,5 L. Molaridade M = 1 mol / 0,5 L = 2,0 mol/L.');

q('cie-1em-d-12', '1º ano EM', 'dificil', 55, 'EM13CNT302', 'Etapas da Fotossíntese (Fase Clara e Escura)',
  'Durante a etapa química fotoquímica (fase clara) da fotossíntese nos tilacoides, a quebra da molécula de água (fotólise da água) tem como principal consequência:',
  ['A liberação de gás oxigênio (O₂) para a atmosfera e fornecimento de elétrons e H⁺', 'A absorção de glicose direta', 'A quebra do DNA vegetal', 'A formação de vapor de água'],
  'O oxigênio liberado na fotossíntese provém exclusivamente da quebra da molécula de água iluminada nos fotossistemas.');

q('cie-1em-d-13', '1º ano EM', 'dificil', 55, 'EM13CNT101', 'Gravitação Universal de Newton',
  'Se a distância entre dois planetas for duplicada, a força de atração gravitacional entre eles:',
  ['Ficará 4 vezes menor (reduzida a 1/4)', 'Ficará reduzida à metade', 'Permanecerá igual', 'Será multiplicada por 4'],
  'Pela Lei da Gravitação Universal (F = G M m / d²), a força gravitacional é inversamente proporcional ao quadrado da distância.');

q('cie-1em-d-14', '1º ano EM', 'dificil', 55, 'EM13CNT203', 'Soluções Eletrolíticas e Não Eletrolíticas',
  'O açúcar comum (sacarose) dissolve-se em água sem conduzir eletricidade, enquanto o cloreto de sódio dissolvido conduz eficientemente. Isso ocorre porque:',
  ['A sacarose é um composto molecular que sofre apenas dissociação em moléculas neutras, enquanto o sal sofre dissociação iônica liberando íons', 'O sal é um metal puro sólido', 'O açúcar tem carga elétrica zero no elétron', 'A água destrói a sacarose'],
  'Compostos moleculares neutros não geram íons condutores livres em solução aquosa.');

q('cie-1em-d-15', '1º ano EM', 'dificil', 55, 'EM13CNT305', 'Ciclo do Carbono e Efeito Estufa',
  'As florestas e os fitoplânctons oceânicos atuam como "sumidouros de carbono" porque:',
  ['Fixam o CO₂ atmosférico na forma de biomassa orgânica através da fotossíntese', 'Respiram CO₂ no lugar de oxigênio', 'Armazenam carvão fóssil de volta nas rochas', 'Eliminam a radiação UV'],
  'A absorção biológica de dióxido de carbono retira o excesso de carbono da atmosfera, reduzindo a taxa de aquecimento global.');

// EXPERT (15 questões)
q('cie-1em-e-01', '1º ano EM', 'expert', 80, 'EM13CNT101', 'Energia em Movimento Harmônico Simples (MHS)',
  'Em um pêndulo oscilando sem atrito, nos pontos de máxima amplitude onde a velocidade instantânea é zero:',
  ['A energia cinética é nula e a energia potencial atinge seu valor máximo', 'A energia mecânica total é nula', 'A energia cinética é máxima', 'A gravidade deixa de atuar'],
  'Toda a energia mecânica do sistema oscilatório está convertida temporariamente em energia potencial na reversão do movimento.');

q('cie-1em-e-02', '1º ano EM', 'expert', 80, 'EM13CNT206', 'Gases Ideais e Equação de Clapeyron',
  'Um recipiente rígido fechado (volume constante) contendo gás ideal a 27°C (300 K) tem sua temperatura elevada para 127°C (400 K). O que ocorre com a pressão interna?',
  ['Aumenta em 33,3% (P₂ = 4/3 P₁)', 'Dobra de valor', 'Permanece inalterada', 'Cai à metade'],
  'Na transformação isocórica (P/T = cte): P₂/400 = P₁/300 => P₂ = (4/3) P₁ ≈ 1,33 P₁.');

q('cie-1em-e-03', '1º ano EM', 'expert', 80, 'EM13CNT302', 'Fotofosforilação e Quimiosmose (Mitchell)',
  'A hipótese quimiosmótica de Peter Mitchell explica a síntese de ATP na respiração e na fotossíntese por meio do:',
  ['Acúmulo de prótons H⁺ em um compartimento fechado gerando uma força próton-motriz através da enzima ATP sintase', 'Aquecimento térmico do citoplasma', 'Giro direto dos ribossomos', 'Choque mecânico de glicose'],
  'O fluxo de prótons H⁺ a favor do gradiente de concentração através da ATP sintase aciona a fosforilação de ADP em ATP.');

q('cie-1em-e-04', '1º ano EM', 'expert', 80, 'EM13CNT102', 'Teorema Trabalho-Energia Cinética',
  'Um carro de 1.000 kg freia uniformemente reduzindo sua velocidade de 20 m/s para o repouso completo. Qual foi o trabalho da força resultante de frenagem?',
  ['-200.000 J (-200 kJ)', '+200.000 J', '-100.000 J', '-400.000 J'],
  'W = ΔEc = Ec_final - Ec_inicial = 0 - (1000 × 20² / 2) = - (1000 × 400 / 2) = -200.000 J.');

q('cie-1em-e-05', '1º ano EM', 'expert', 80, 'EM13CNT205', 'Termoquímica e Entalpia de Combustão',
  'A queima de 1 mol de gás metano libera 890 kJ de calor (ΔH = -890 kJ/mol). Quantos quilojoules serão liberados ao queimar completamente 32 g de metano (massa molar CH₄ = 16 g/mol)?',
  ['1.780 kJ', '890 kJ', '2.670 kJ', '445 kJ'],
  '32 g de metano equivalem a 2 mols (32 ÷ 16 = 2). Calor liberado = 2 × 890 kJ = 1.780 kJ.');

q('cie-1em-e-06', '1º ano EM', 'expert', 80, 'EM13CNT304', 'Apoptose (Morte Celular Programada)',
  'A regressão da membrana interdigital entre os dedos durante o desenvolvimento embrionário da mão humana é um exemplo fisiológico saudável de:',
  ['Apoptose (morte celular programada geneticamente)', 'Necrose por infecção bacteriana', 'Mutação carcinogênica', 'Fagocitose imunitária aleatória'],
  'A apoptose orquestra a eliminação seletiva de tecidos desnecessários sem extravasamento celular ou processo inflamatório.');

q('cie-1em-e-07', '1º ano EM', 'expert', 80, 'EM13CNT101', 'Satélites Geoestacionários e Velocidade Orbital',
  'Um satélite meteorológico de comunicações geoestacionário mantém-se fixo sobre o mesmo ponto do equador da Terra porque:',
  ['Seu período orbital é de exatamente 24 horas, acompanhando perfeitamente a rotação da Terra', 'Não sofre ação de gravidade no espaço', 'Possui motores a jato ligados continuamente', 'Fica preso à atmosfera superior'],
  'Na altitude geoestacionária (~35.786 km), a velocidade orbital angular do satélite sincroniza-se com a rotação diária da Terra.');

q('cie-1em-e-08', '1º ano EM', 'expert', 80, 'EM13CNT203', 'Propriedades Coligativas (Crioscopia)',
  'Em países com invernos rigorosos, joga-se sal (NaCl) nas estradas congeladas porque a adição de soluto não volátil:',
  ['Diminui o ponto de congelamento da água (efeito crioscópico), derretendo o gelo mesmo abaixo de 0°C', 'Aumenta a densidade do asfalto', 'Gera fogo químico espontâneo', 'Evapora a neve para a atmosfera'],
  'A crioscopia é uma propriedade coligativa: a presença de partículas de soluto dificulta a organização cristalina do gelo.');

q('cie-1em-e-09', '1º ano EM', 'expert', 80, 'EM13CNT301', 'Lisossomos e Autofagia',
  'O Prêmio Nobel de Medicina de 2016 premiou as descobertas sobre a "autofagia", mecanismo celular no qual os lisossomos:',
  ['Degradam e reciclam organelas danificadas e componentes celulares antigos para renovação celular e energia', 'Destroem todas as bactérias benéficas', 'Fazem cópias extras de DNA', 'Eliminam a água do citoplasma'],
  'A autofagia é o sistema de limpeza e reciclagem interna da célula eucarionte para manter a homeostase.');

q('cie-1em-e-10', '1º ano EM', 'expert', 80, 'EM13CNT104', 'Conservação do Momento Linear em Propulsão de Foguetes',
  'Foguetes espaciais conseguem acelerar no vácuo perfeito do espaço sem ter onde "se apoiar" porque:',
  ['A ejeção de gases em altíssima velocidade para trás gera uma força de empuxo para a frente pela conservação do momento linear', 'O vácuo suga o foguete para a frente', 'Eles utilizam o vento solar exclusively', 'A gravidade da Terra os puxa'],
  'Pelo princípio da conservação da quantidade de movimento (ação e reação), ejetar massa em alta velocidade para trás impulsiona a nave para a frente.');

q('cie-1em-e-11', '1º ano EM', 'expert', 80, 'EM13CNT206', 'Constante de Avogadro',
  'Quantos átomos de ferro estão presentes em exatamente 1 mol de ferro puro (56 g)?',
  ['Aproximadamente 6,02 × 10²³ átomos', 'Aproximadamente 6,02 × 10²⁰ átomos', '56 átomos', '1 milhão de átomos'],
  'A Constante de Avogadro (N_A ≈ 6,022 × 10²³ mol⁻¹) define o número de entidades elementares contidas em 1 mol de substância.');

q('cie-1em-e-12', '1º ano EM', 'expert', 80, 'EM13CNT305', 'Biofortificação e Alimentos Transgênicos',
  'O "Arroz Dourado" desenvolvido por biotecnologia é uma variedade geneticamente modificada que sintetiza betacaroteno com o objetivo nutricional de combater:',
  ['A deficiência de Vitamina A e a cegueira infantil em populações vulneráveis', 'A desnutrição proteica apenas', 'A hipertensão arterial', 'A malária'],
  'A introdução de genes que sintetizam provitamina A no grão de arroz visa suprir carências nutricionais severas.');

q('cie-1em-e-13', '1º ano EM', 'expert', 80, 'EM13CNT101', 'Velocidade de Escape da Terra',
  'Para que uma sonda espacial escape definitivamente da atração gravitacional da Terra sem entrar em órbita, sua velocidade inicial na superfície deve ser de cerca de:',
  ['11,2 km/s (cerca de 40.000 km/h)', '7,9 km/s', '3,0 km/s', '300.000 km/s'],
  'A velocidade de escape da Terra é dada por v = √(2GM/R) ≈ 11,2 km/s.');

q('cie-1em-e-14', '1º ano EM', 'expert', 80, 'EM13CNT204', 'Pressão Osmótica e Salinidade',
  'Peixes de água doce expostos abruptamente à água do mar sofrem desidratação celular grave porque:',
  ['A água de suas células flui por osmose para o meio externo hipertônico rico em sais', 'Suas escamas dissolvem-se quimicamente', 'Eles não respiram na água salgada', 'A pressão osmótica interna empurra o sal'],
  'A alta concentração osmótica da água marinha extrai água do citoplasma das células do peixe por osmose.');

q('cie-1em-e-15', '1º ano EM', 'expert', 80, 'EM13CNT303', 'Centríolos e Fuso Acromático',
  'Medicamentos quimioterápicos como o paclitaxel combatem células cancerígenas bloqueando a dinâmica dos microtúbulos do fuso mitótico, o que impede a célula de:',
  ['Segregar corretamente os cromossomos na anáfase e concluir a divisão celular', 'Duplicar seu DNA na fase S', 'Produzir glicose por fotossíntese', 'Respirar oxigênio'],
  'Ao paralisar a separação cromossômica no fuso mitótico, o medicamento força a célula maligna a entrar em colapso e apoptose.');

console.log('Total até 1º ano EM Ciências:', list.length);

fs.writeFileSync('scripts/medio_science_temp_1.json', JSON.stringify(list, null, 2));
