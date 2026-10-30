import fs from 'fs';

const list = JSON.parse(fs.readFileSync('scripts/fundamental_science_temp_6.json', 'utf-8'));

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
// 7º ANO - CIÊNCIAS (EF07CI)
// ============================================================================

// FÁCIL (15 questões)
q('cie-7-f-01', '7º ano', 'facil', 20, 'EF07CI01', 'Cadeias Alimentares',
  'Em uma cadeia alimentar terrestre, os seres vivos capazes de produzir seu próprio alimento por fotossíntese são os:',
  ['Produtores (vegetais e algas)', 'Consumidores primários', 'Decompositores', 'Predadores de topo'],
  'Os produtores são autótrofos que fixam energia solar em biomassa vegetal.');

q('cie-7-f-02', '7º ano', 'facil', 20, 'EF07CI02', 'Calor e Temperatura',
  'Qual é a grandeza física que mede o grau de agitação térmica das moléculas em um corpo?',
  ['Temperatura', 'Calor', 'Pressão', 'Massa'],
  'A temperatura é proporcional à energia cinética média de translação das partículas de um sistema.');

q('cie-7-f-03', '7º ano', 'facil', 20, 'EF07CI09', 'Vacinas e Imunização',
  'As vacinas atuam no organismo estimulando o sistema imunológico a produzir preventivamente:',
  ['Anticorpos específicos e células de memória', 'Bactérias benéficas no sangue', 'Plaquetas para coagulação', 'Hormônios do crescimento'],
  'Ao apresentar antígenos atenuados ou inativados, a vacina treina o organismo a produzir anticorpos e memória imunológica.');

q('cie-7-f-04', '7º ano', 'facil', 20, 'EF07CI07', 'Biodiversidade Brasileira',
  'Qual grande bioma brasileiro é caracterizado por árvores tortuosas de casca grossa e solo avermelhado (savana brasileira)?',
  ['Cerrado', 'Pampa', 'Mata dos Cocais', 'Caatinga'],
  'O Cerrado é a savana mais rica em biodiversidade do mundo, com adaptações contra o fogo e raízes profundas.');

q('cie-7-f-05', '7º ano', 'facil', 20, 'EF07CI02', 'Propagação do Calor por Condução',
  'Ao mexer uma sopa quente com uma colher de metal, o cabo da colher esquenta rapidamente. Esse calor se propagou por:',
  ['Condução térmica', 'Convecção de ar', 'Radiação solar', 'Dilatação estática'],
  'Na condução, a energia térmica se propaga de átomo a átomo através do contato direto da matéria sólida.');

q('cie-7-f-06', '7º ano', 'facil', 20, 'EF07CI01', 'Decompositores',
  'Fungos e bactérias desempenham qual papel indispensável na ciclagem de nutrientes nos ecossistemas?',
  ['Decomposição da matéria orgânica morta', 'Produção de oxigênio primário', 'Consumo herbívoro', 'Predação ativa'],
  'Os decompositores reciclam matéria orgânica, devolvendo minerais ao solo para serem reutilizados pelos produtores.');

q('cie-7-f-07', '7º ano', 'facil', 20, 'EF07CI11', 'Máquinas Simples',
  'A tesoura e a gangorra são exemplos clássicos de qual tipo de máquina simples?',
  ['Alavanca interfixa', 'Roldana móvel', 'Plano inclinado', 'Cunha'],
  'Nas alavancas interfixas, o ponto de apoio (eixo) fica situado entre a força potente e a força resistente.');

q('cie-7-f-08', '7º ano', 'facil', 20, 'EF07CI10', 'Saúde Pública e Saneamento',
  'O tratamento da água e a coleta de esgoto doméstico são fundamentais para prevenir doenças conhecidas como:',
  ['Doenças de veiculação hídrica (como cólera e hepatite A)', 'Doenças congênitas', 'Doenças genéticas', 'Traumas ósseos'],
  'A falta de saneamento básico propaga patógenos presentes nas fezes humanas através da água contaminada.');

q('cie-7-f-09', '7º ano', 'facil', 20, 'EF07CI07', 'Bioma Caatinga',
  'Qual bioma exclusivamente brasileiro possui vegetação semiárida adaptada à seca prolongada, como cactos e xique-xiques?',
  ['Caatinga', 'Pantanal', 'Floresta Amazônica', 'Mata de Araucárias'],
  'A Caatinga tem clima semiárido e espécies xerófitas que armazenam água e transformam folhas em espinhos.');

q('cie-7-f-10', '7º ano', 'facil', 20, 'EF07CI03', 'Sensação Térmica e Equilíbrio',
  'Quando dois corpos em temperaturas diferentes entram em contato, o calor flui espontaneamente:',
  ['Do corpo de maior temperatura para o de menor temperatura', 'Do corpo frio para o quente', 'Não há troca de calor', 'Em ambas as direções com a mesma taxa'],
  'O calor flui do corpo de maior temperatura para o de menor até que atinjam o equilíbrio térmico.');

q('cie-7-f-11', '7º ano', 'facil', 20, 'EF07CI08', 'Relações Ecológicas (Mutualismo)',
  'A relação entre as abelhas (que se alimentam de néctar) e as flores (que são polinizadas) beneficia ambas as espécies. É um exemplo de:',
  ['Mutualismo', 'Parasitismo', 'Competição', 'Canibalismo'],
  'No mutualismo, ambas as espécies envolvidas obtêm benefícios indispensáveis à sobrevivência ou reprodução.');

q('cie-7-f-12', '7º ano', 'facil', 20, 'EF07CI12', 'Atmosfera e Efeito Estufa',
  'Qual gás é liberado em grandes quantidades pela queima de combustíveis fósseis e é o principal responsável pelo aquecimento global antropogênico?',
  ['Dióxido de carbono (CO₂)', 'Gás nitrogênio (N₂)', 'Gás hélio (He)', 'Gás ozônio (O₃)'],
  'O CO₂ é liberado na queima de derivados de petróleo, carvão e desmatamento, intensificando o efeito estufa.');

q('cie-7-f-13', '7º ano', 'facil', 20, 'EF07CI11', 'Plano Inclinado',
  'Uma rampa de acesso para cadeirantes é uma aplicação prática de qual máquina simples?',
  ['Plano inclinado', 'Alavanca inter-resistente', 'Engrenagem cônica', 'Pêndulo'],
  'O plano inclinado diminui a força necessária para elevar uma carga, compensando com o aumento da distância percorrida.');

q('cie-7-f-14', '7º ano', 'facil', 20, 'EF07CI02', 'Radiação Térmica',
  'Como o calor emitido pelo Sol consegue chegar até a Terra através do vácuo do espaço sideral?',
  ['Por radiação térmica (ondas eletromagnéticas)', 'Por condução de ar', 'Por convecção líquida', 'Por gravidade'],
  'A radiação térmica é a única forma de propagação de calor que não necessita de meio material, propagando-se no vácuo.');

q('cie-7-f-15', '7º ano', 'facil', 20, 'EF07CI08', 'Parasitismo',
  'O carrapato que se fixa na pele de um cachorro para sugar sangue enquanto transmite microrganismos patogênicos estabelece uma relação de:',
  ['Parasitismo', 'Comensalismo', 'Protocooperação', 'Sociedade'],
  'No parasitismo, um organismo (parasita) se beneficia enquanto causa prejuízo ao outro (hospedeiro).');

// MÉDIO (15 questões)
q('cie-7-m-01', '7º ano', 'medio', 35, 'EF07CI02', 'Convecção Térmica',
  'Os aparelhos de ar-condicionado são instalados preferencialmente no alto das paredes dos cômodos porque:',
  ['O ar frio é mais denso e desce, criando correntes de convecção que resfriam todo o ambiente', 'O ar frio sobe naturalmente', 'Fica mais bonito esteticamente', 'A eletricidade chega por cima'],
  'O ar resfriado fica mais denso e desce, empurrando o ar quente para cima em um ciclo contínuo de convecção.');

q('cie-7-m-02', '7º ano', 'medio', 35, 'EF07CI01', 'Pirâmide de Energia',
  'Em uma cadeia alimentar típica, por que o topo da cadeia (grandes predadores) tem menor quantidade de indivíduos do que a base de produtores?',
  ['A maior parte da energia é dissipada em forma de calor ao longo dos níveis tróficos', 'Os predadores comem menos', 'Os produtores são imortais', 'A energia aumenta no topo'],
  'Cerca de 90% da energia é perdida em processos metabólicos e calor a cada transferência de nível trófico.');

q('cie-7-m-03', '7º ano', 'medio', 35, 'EF07CI09', 'Vacina vs Soro Terapêutico',
  'Uma pessoa picada por uma serpente venenosa deve receber imediatamente no hospital um soro antiofídico em vez de uma vacina porque:',
  ['O soro já contém os anticorpos prontos para neutralizar o veneno de forma imediata', 'O soro previne picadas futuras', 'A vacina age mais rápido que o soro', 'O veneno é uma bactéria'],
  'O soro proporciona imunização passiva curativa com anticorpos prontos de ação imediata.');

q('cie-7-m-04', '7º ano', 'medio', 35, 'EF07CI07', 'Pantanal e Inundações',
  'A dinâmica ecológica do Pantanal mato-grossense é regulada principalmente por qual ciclo sazonal?',
  ['Alternância anual de períodos de cheias (inundações) e secas', 'Neve no inverno', 'Vulcões submarinos', 'Marés oceânicas diárias'],
  'O ciclo das águas no Pantanal nutre o solo com matéria orgânica e dita a migração e reprodução de peixes e aves.');

q('cie-7-m-05', '7º ano', 'medio', 35, 'EF07CI11', 'Roldanas Fixas e Móveis',
  'Qual é a vantagem mecânica proporcionada pelo uso de uma roldana móvel combinada a uma roldana fixa em um guindaste?',
  ['Reduzir à metade a força necessária para erguer a carga', 'Mudar apenas a direção da corda sem alterar a força', 'Eliminar o peso do objeto', 'Multiplicar a gravidade'],
  'Cada roldana móvel divide a força resistente por 2, permitindo levantar cargas pesadas com menor esforço.');

q('cie-7-m-06', '7º ano', 'medio', 35, 'EF07CI10', 'Dengue e Vetores',
  'Qual medida é mais eficaz para combater o mosquito Aedes aegypti e reduzir surtos de Dengue, Zika e Chikungunya?',
  ['Eliminar água parada em vasos e pneus impedindo a reprodução das larvas', 'Tomar antibióticos preventivamente', 'Ferver a água da torneira', 'Usar casacos grossos no calor'],
  'O mosquito fêmea deposita ovos em água limpa e parada; interromper seu ciclo reprodutivo é a chave sanitária.');

q('cie-7-m-07', '7º ano', 'medio', 35, 'EF07CI08', 'Comensalismo',
  'A rêmora que se fixa no tubarão para se alimentar de restos deixados por ele, sem prejudicar nem beneficiar o tubarão, exemplifica:',
  ['Comensalismo', 'Mutualismo', 'Predação', 'Amensalismo'],
  'No comensalismo, uma espécie se beneficia enquanto a outra permanece neutra (não é prejudicada nem favorecida).');

q('cie-7-m-08', '7º ano', 'medio', 35, 'EF07CI02', 'Brisa Marítima e Terrestre',
  'Durante um dia ensolarado na praia, sopra uma brisa do mar em direção à terra (brisa marítima). Isso ocorre porque:',
  ['A areia da praia esquenta mais rápido que a água, fazendo o ar sobre a terra subir e o ar fresco do mar ocupar o lugar', 'A água do mar ferve durante o dia', 'A lua atrai o vento do oceano', 'As ondas empurram o ar'],
  'O calor específico da água é maior que o da areia; a terra aquece mais rápido, gerando baixa pressão e atraindo ar marítimo.');

q('cie-7-m-09', '7º ano', 'medio', 35, 'EF07CI13', 'Camadas da Atmosfera e Clima',
  'O ar rarefeito em cidades de grande altitude (como La Paz na Bolívia) causa falta de ar em viajantes porque:',
  ['A pressão atmosférica é menor, diminuindo a densidade do ar e a quantidade de moléculas de oxigênio por inspiração', 'Não existe oxigênio nas montanhas', 'A gravidade é o dobro no alto', 'O ar é 100% gás carbônico'],
  'Em altitudes elevadas, a menor coluna de ar acima gera menor pressão, deixando as moléculas de O₂ mais dispersas.');

q('cie-7-m-10', '7º ano', 'medio', 35, 'EF07CI07', 'Floresta Amazônica e Rios Voadores',
  'Os "rios voadores" da Amazônia são enormes massas de vapor de água conduzidas pelos ventos que regulam chuvas no Sudeste e Centro-Oeste do Brasil. Eles são alimentados por:',
  ['Evapotranspiração colossal de bilhões de árvores da floresta tropical', 'Evaporação apenas de rios subterrâneos', 'Chuva ácida industrial', 'Degelo dos Andes apenas'],
  'A transpiração das copas das árvores da floresta bombeia centenas de milhões de litros de vapor de água para a atmosfera diariamente.');

q('cie-7-m-11', '7º ano', 'medio', 35, 'EF07CI11', 'Termodinâmica de Máquinas Térmicas',
  'Em um motor de combustão de carro, o calor gerado pela explosão da gasolina é transformado em:',
  ['Energia mecânica de movimento das rodas', 'Apenas eletricidade estática', 'Energia nuclear', 'Oxigênio gasoso'],
  'Máquinas térmicas convertem parte da energia térmica liberada por combustão em energia cinética de trabalho útil.');

q('cie-7-m-12', '7º ano', 'medio', 35, 'EF07CI09', 'Imunidade de Rebanho',
  'Quando a grande maioria da população está vacinada contra o sarampo, pessoas que não podem tomar a vacina (como recém-nascidos) também ficam protegidas por causa da:',
  ['Imunidade coletiva (ou de rebanho)', 'Hereditariedade genética', 'Imunidade inata passiva', 'Evolução instantânea'],
  'Com alta cobertura vacinal, a circulação comunitária do vírus é interrompida, protegendo indivíduos vulneráveis.');

q('cie-7-m-13', '7º ano', 'medio', 35, 'EF07CI08', 'Predação e Controle Biológico',
  'A introdução de joaninhas em plantações de laranjas para combater pulgões que destroem as folhas é uma estratégia de:',
  ['Controle biológico de pragas', 'Polinização cruzada', 'Adubação verde', 'Transgenia química'],
  'O controle biológico utiliza relações predador-presa naturais para regular populações de pragas agrícolas sem defensivos sintéticos.');

q('cie-7-m-14', '7º ano', 'medio', 35, 'EF07CI02', 'Garrafa Térmica e Isolamento',
  'As paredes de vidro espelhado e o vácuo entre as paredes de uma garrafa térmica têm a função de:',
  ['Minimizar as perdas de calor por condução, convecção e radiação', 'Resfriar o café automaticamente', 'Aumentar o peso da garrafa', 'Gerar luz interna'],
  'O vácuo impede condução e convecção (não há meio material) e as paredes espelhadas refletem a radiação infravermelha.');

q('cie-7-m-15', '7º ano', 'medio', 35, 'EF07CI12', 'Inversão Térmica Urbana',
  'Em dias frios e secos de inverno em grandes cidades como Curitiba ou São Paulo, poluentes ficam retidos perto do solo devido à:',
  ['Inversão térmica (camada de ar quente impede que o ar frio poluído superficial suba)', 'Chuva ácida intensa', 'Falta de árvores nativas', 'Radiação solar ultravioleta'],
  'Na inversão térmica, a camada quente intermediária funciona como tampa, bloqueando a convecção vertical de dispersão da fumaça.');

// DIFÍCIL (15 questões)
q('cie-7-d-01', '7º ano', 'dificil', 55, 'EF07CI01', 'Bioacumulação e Magnificação Trófica',
  'Quando um agrotóxico não biodegradável (como mercúrio ou certos pesticidas) é lançado em um rio, em qual nível da cadeia alimentar ele atinge maior concentração por quilo de massa?',
  ['Nos carnívoros de topo da cadeia alimentar', 'Nos produtores aquáticos (fitoplâncton)', 'Na água doce diluída', 'Nos peixes herbívoros'],
  'Ao longo dos níveis tróficos, a substância tóxica não é metabolizada e vai se acumulando cumulativamente em doses cada vez maiores (magnificação trófica).');

q('cie-7-d-02', '7º ano', 'dificil', 55, 'EF07CI03', 'Calor Específico e Climatologia',
  'Cidades litorâneas apresentam menor amplitude térmica entre o dia e a noite do que cidades no meio de desertos porque:',
  ['A água tem alto calor específico, absorvendo e liberando calor lentamente', 'O mar não recebe sol', 'O vento do deserto é mais frio', 'A areia retém mais água'],
  'Com calor específico elevado (1 cal/g°C), o oceano funciona como moderador térmico do clima costeiro.');

q('cie-7-d-03', '7º ano', 'dificil', 55, 'EF07CI10', 'Uso Indiscriminado de Antibióticos',
  'Tomar antibióticos sem prescrição médica ou interromper o tratamento antes do prazo pode causar:',
  ['Seleção de linhagens bacterianas resistentes (superbactérias)', 'Imunidade definitiva contra vírus', 'Cura antecipada de gripes', 'Aumento de glóbulos vermelhos'],
  'A dosagem incompleta mata as bactérias sensíveis e seleciona as variantes geneticamente mais resistentes.');

q('cie-7-d-04', '7º ano', 'dificil', 55, 'EF07CI07', 'Espécies Exóticas Invasoras',
  'A introdução do javali ou do mexilhão-dourado em ecossistemas brasileiros causa graves impactos porque:',
  ['Sem predadores naturais específicos, eles se multiplicam rápido e competem deslealmente com espécies nativas', 'Eles se tornam plantas', 'Eles limpam o solo de poluentes', 'Eles são menores que os nativos'],
  'Espécies invasoras desequilibram nichos ecológicos, transmitem doenças e podem levar espécies nativas à extinção.');

q('cie-7-d-05', '7º ano', 'dificil', 55, 'EF07CI11', 'Eficiência de Máquinas Térmicas',
  'De acordo com as leis fundamentais da termodinâmica, é impossível construir uma máquina térmica que:',
  ['Converta 100% do calor recebido em trabalho mecânico sem perdas', 'Gere movimento', 'Use vapor de água', 'Esquente o ar ao redor'],
  'Nenhuma máquina térmica real atinge rendimento de 100%; parte da energia térmica é inevitavelmente dissipada para uma fonte fria.');

q('cie-7-d-06', '7º ano', 'dificil', 55, 'EF07CI08', 'Sucessão Ecológica Primária',
  'A colonização gradual de uma rocha nua recém-formada por lava vulcânica por líquens e musgos até formar uma floresta madura é chamada:',
  ['Sucessão ecológica primária', 'Erosão sedimentar', 'Decomposição antrópica', 'Eutrofização'],
  'Na sucessão primária, espécies pioneiras (como líquens) desgastam a rocha criando o solo inicial para plantas maiores.');

q('cie-7-d-07', '7º ano', 'dificil', 55, 'EF07CI02', 'Equilíbrio Térmico e Misturas',
  'Ao misturar 100 g de água a 20°C com 100 g de água a 80°C em um calorímetro ideal, a temperatura final de equilíbrio térmico será:',
  ['50°C', '60°C', '40°C', '100°C'],
  'Com massas iguais do mesmo líquido, a temperatura de equilíbrio é a média aritmética: (20 + 80) ÷ 2 = 50°C.');

q('cie-7-d-08', '7º ano', 'dificil', 55, 'EF07CI12', 'Chuva Ácida',
  'A chuva ácida em regiões industrializadas é provocada principalmente pela reação da água da atmosfera com:',
  ['Óxidos de enxofre (SO₂) e de nitrogênio (NOx) emitidos por indústrias e veículos', 'Gás oxigênio puro', 'Poeira de calcário', 'Vapor de água do mar'],
  'Esses gases formam ácido sulfúrico e ácido nítrico na água da chuva, acidificando solos e rios.');

q('cie-7-d-09', '7º ano', 'dificil', 55, 'EF07CI07', 'Mata Atlântica e Hotspots',
  'A Mata Atlântica é considerada um "hotspot" global de biodiversidade porque:',
  ['Apresenta altíssima riqueza de espécies endêmicas e sofreu drástica redução de sua área original (mais de 70%)', 'É a maior floresta em extensão contínua', 'Possui clima polar', 'Não tem árvores com flores'],
  'Hotspots são regiões prioritárias de conservação por terem grande número de espécies exclusivas altamente ameaçadas.');

q('cie-7-d-10', '7º ano', 'dificil', 55, 'EF07CI10', 'Eutrofização de Lagos',
  'O despejo excessivo de esgoto orgânico ou fertilizantes em uma lagoa provoca a proliferação descontrolada de algas, seguida da morte de peixes por:',
  ['Falta de oxigênio dissolvido na água (anoxia) devido à decomposição acelerada', 'Excesso de sal na água', 'Aumento de predadores carnívoros', 'Água gelada demais'],
  'Bactérias aeróbias decompõem a biomassa das algas mortas, consumindo todo o oxigênio da água e asfixiando os peixes.');

q('cie-7-d-11', '7º ano', 'dificil', 55, 'EF07CI11', 'Alavanca Interpotente',
  'Em uma pinça cirúrgica ou no movimento do braço levantando um haltere, a força potente fica aplicada entre o ponto de apoio e a carga. Essa alavanca é:',
  ['Interpotente', 'Interfixa', 'Inter-resistente', 'Plana'],
  'Na alavanca interpotente, o ponto de aplicação da força muscular/potente localiza-se entre o ponto de apoio e a resistência.');

q('cie-7-d-12', '7º ano', 'dificil', 55, 'EF07CI08', 'Capacidade de Suporte do Ecossistema',
  'O limite máximo de indivíduos de uma espécie que um determinado ambiente consegue sustentar a longo prazo com alimento e abrigo é a:',
  ['Capacidade de suporte (carga) do ecossistema', 'Taxa de mortalidade infantil', 'Densidade trófica mínima', 'Amplitude ecológica zero'],
  'Quando a população ultrapassa a capacidade de suporte, a escassez de recursos eleva a mortalidade e estabiliza a população.');

q('cie-7-d-13', '7º ano', 'dificil', 55, 'EF07CI02', 'Dilatação Térmica em Pontes e Trilhos',
  'Por que os engenheiros deixam frestas (juntas de dilatação) entre os blocos de concreto de pontes e entre trilhos de trem?',
  ['Para permitir que os materiais se expandam no calor sem empenar ou quebrar a estrutura', 'Para escoar a água da chuva', 'Para economizar concreto', 'Para ventilar as fundações'],
  'Com o aumento da temperatura, sólidos se dilatam; sem juntas de dilatação, o concreto sofreria trincas estruturais graves.');

q('cie-7-d-14', '7º ano', 'dificil', 55, 'EF07CI09', 'Memória Imunológica',
  'As células do sistema imunitário que permanecem no organismo por anos e reconhecem rapidamente um patógeno já enfrentado são:',
  ['Linfócitos de memória (B e T)', 'Plaquetas sanguíneas', 'Hemácias anucleadas', 'Células adiposas'],
  'Os linfócitos de memória produzem anticorpos em grande escala e velocidade caso o patógeno tente reinfectar o indivíduo.');

q('cie-7-d-15', '7º ano', 'dificil', 55, 'EF07CI13', 'Efeito Coriolis e Ciclones',
  'A rotação da Terra desvia a trajetória dos grandes ventos para a direita no Hemisfério Norte e para a esquerda no Hemisfério Sul. Esse efeito físico é o:',
  ['Efeito Coriolis', 'Efeito Doppler', 'Efeito Joule', 'Efeito Fotoelétrico'],
  'O Efeito Coriolis é uma consequência inercial da rotação do planeta sobre massas de ar e correntes marinhas em movimento.');

// EXPERT (15 questões)
q('cie-7-e-01', '7º ano', 'expert', 80, 'EF07CI01', 'Fluxo de Energia Aberto e Ciclo de Matéria Fechado',
  'Nos ecossistemas terrestres, enquanto a matéria circula ciclicamente (carbono, nitrogênio, água), a energia:',
  ['Flui de maneira unidirecional e decrescente, dissipando-se continuamente como calor', 'É reciclada pelos decompositores de volta ao Sol', 'Permanece constante em quantidade útil', 'Aumenta a cada nível trófico'],
  'A energia não é reciclada; ela entra pelo Sol, sustenta a cadeia trófica e dissipa-se como calor radiante no espaço.');

q('cie-7-e-02', '7º ano', 'expert', 80, 'EF07CI02', 'Calor Latente vs Calor Sensível',
  'Enquanto uma panela de água está fervendo na temperatura de 100°C ao nível do mar, o calor fornecido pela chama do fogão é utilizado para:',
  ['Mudar o estado físico da água de líquido para vapor (calor latente), sem aumentar a temperatura', 'Aumentar a temperatura para 120°C', 'Quebrar átomos de oxigênio', 'Resfriar o fundo da panela'],
  'Durante uma mudança de fase de uma substância pura a pressão constante, a temperatura permanece constante até a transição se completar.');

q('cie-7-e-03', '7º ano', 'expert', 80, 'EF07CI10', 'Zoonoses e Desmatamento',
  'Estudos científicos mostram que o desmatamento acelerado de florestas tropicais aumenta o risco de surgimento de novas pandemias porque:',
  ['Reduz o habitat de animais silvestres, forçando o contato próximo de patógenos com humanos e animais domésticos', 'Aumenta o teor de oxigênio no ar', 'Elimina os mosquitos', 'Esfria o clima'],
  'A perda de florestas e a invasão de ecossistemas expõem humanos a vírus silvestres hospedeiros de morcegos e primatas.');

q('cie-7-e-04', '7º ano', 'expert', 80, 'EF07CI08', 'Princípio da Exclusão Competitiva (Gause)',
  'Se duas espécies distintas em um mesmo habitat disputarem exatamente os mesmos recursos e ocuparem o mesmo nicho ecológico:',
  ['A competidora mais eficiente levará a outra à extinção local ou à mudança de nicho ecológico', 'Ambas se fundirão em uma nova espécie', 'Compartilharão o recurso em paz para sempre', 'Nenhuma sobreviverá'],
  'O princípio de Gause estabelece que duas espécies com nichos ecológicos idênticos não podem coexistir estavelmente no mesmo ambiente.');

q('cie-7-e-05', '7º ano', 'expert', 80, 'EF07CI11', 'Vantagem Mecânica em Sistemas de Polias',
  'Em uma talha exponencial com 3 roldanas móveis, a força necessária para sustentar um bloco de 800 N de peso é de:',
  ['100 N', '200 N', '400 N', '80 N'],
  'Cada roldana móvel reduz a força por 2: F = Peso / 2ⁿ. Com n = 3: F = 800 / 2³ = 800 / 8 = 100 N.');

q('cie-7-e-06', '7º ano', 'expert', 80, 'EF07CI07', 'Endemismo e Ilhas Biogeográficas',
  'Fragmentos isolados de florestas cercados por pastagens funcionam ecologicamente como "ilhas", o que provoca:',
  ['Efeito de borda acentuado e perda de diversidade genética devido ao isolamento das populações', 'Aumento instantâneo de espécies', 'Proteção contra ventos', 'Eliminação de predadores'],
  'A fragmentação florestal isola populações, reduz o fluxo gênico e aumenta a vulnerabilidade a queimadas e secas na borda.');

q('cie-7-e-07', '7º ano', 'expert', 80, 'EF07CI02', 'Comportamento Anômalo da Água',
  'Ao resfriar a água de 4°C até 0°C, ao contrário de quase todos os outros líquidos, ela se expande e fica menos densa. Essa propriedade permite que:',
  ['O gelo flutue sobre a água líquida, isolando o fundo e mantendo a vida aquática protegida nos lagos congelados', 'Os oceanos evaporem no inverno', 'As geleiras afundem', 'O fundo dos rios congele primeiro'],
  'Por ter densidade máxima a 4°C, a água mais fria e o gelo permanecem na superfície, permitindo a sobrevivência de peixes embaixo.');

q('cie-7-e-08', '7º ano', 'expert', 80, 'EF07CI09', 'Doenças Negligenciadas',
  'Doenças como esquistossomose, doença de Chagas e leishmaniose são chamadas de "negligenciadas" pela OMS porque:',
  ['Acometem principalmente populações de baixa renda em países em desenvolvimento e recebem pouco investimento em novos medicamentos', 'Já foram erradicadas do mundo', 'São causadas por vírus incuráveis', 'Não têm sintomas'],
  'Falta de saneamento e pobreza perpetuam essas doenças, que historicamente recebem menor foco das indústrias farmacêuticas globais.');

q('cie-7-e-09', '7º ano', 'expert', 80, 'EF07CI12', 'Acidificação dos Oceanos',
  'A absorção de grandes quantidades de CO₂ atmosférico pelos oceanos altera a química da água, dificultando:',
  ['A formação e manutenção das conchas de moluscos e esqueletos calcários de corais', 'A respiração dos peixes no fundo', 'A flutuação de navios cargueiros', 'A evaporação das marés'],
  'O CO₂ dissolvido forma ácido carbônico, reduzindo o pH marinho e diminuindo a disponibilidade de íons carbonato para calcificação.');

q('cie-7-e-10', '7º ano', 'expert', 80, 'EF07CI11', 'Conservação da Energia Mecânica em Máquinas',
  'Ao utilizar uma máquina simples para erguer um peso gastando metade da força, o que acontece com a distância que devemos puxar a corda?',
  ['A distância percorrida pela mão dobra, pois o trabalho mecânico (força × distância) permanece conservado', 'A distância também cai pela metade', 'A distância fica igual a zero', 'A corda não se move'],
  'Não há criação de energia; a máquina simples troca força por deslocamento mantendo o trabalho mecânico constante.');

q('cie-7-e-11', '7º ano', 'expert', 80, 'EF07CI07', 'Mecanismos de Defesa na Caatinga',
  'Por que muitas árvores da Caatinga (como o juazeiro e o umbuzeiro) perdem suas folhas na estação seca e possuem raízes que acumulam água?',
  ['Para reduzir a perda de água por transpiração foliar e sobreviver a meses sem chuva', 'Para absorver mais oxigênio', 'Para evitar o ataque de fungos', 'Porque morrem todos os anos'],
  'A queda das folhas (caducifólia) reduz a área superficial de evapotranspiração, mantendo a água nos tecidos internos.');

q('cie-7-e-12', '7º ano', 'expert', 80, 'EF07CI08', 'Efeito Cascata Trófica',
  'A reintrodução de lobos no Parque Nacional de Yellowstone (EUA) controlou os rebanhos de cervos, permitiu a regeneração de florestas nas margens e estabilizou os rios. Esse evento é um exemplo clássico de:',
  ['Cascata trófica de topo para a base (top-down)', 'Sucessão antrópica destrutiva', 'Parasitismo generalizado', 'Competição intraespecífica'],
  'A presença do predador de topo altera o comportamento e abundância dos herbívoros, beneficiando a vegetação e o ecossistema fluvial.');

q('cie-7-e-13', '7º ano', 'expert', 80, 'EF07CI02', 'Zero Absoluto de Temperatura',
  'O zero absoluto na escala Kelvin (0 K ou -273,15°C) representa teoricamente:',
  ['O estado em que a agitação térmica das partículas atinge o mínimo fundamental possível', 'A temperatura de congelamento da água', 'A temperatura do polo sul no inverno', 'O ponto em que o calor é infinito'],
  'No zero absoluto, a energia cinética das moléculas é mínima, sendo o limite termodinâmico inferior do universo.');

q('cie-7-e-14', '7º ano', 'expert', 80, 'EF07CI09', 'Anticorpos Monoclonais e Biotecnologia',
  'Os testes rápidos de farmácia para COVID-19 ou gravidez utilizam tiras reagentes impregnadas com anticorpos que detectam antígenos específicos por:',
  ['Reação específica chave-fechadura entre antígeno e anticorpo com indicador visual colorido', 'Medição do calor corporal', 'Reação de fusão atômica', 'Filtração por gravidade'],
  'A alta especificidade da ligação imunológica gera a linha reagente colorida em minutos.');

q('cie-7-e-15', '7º ano', 'expert', 80, 'EF07CI13', 'El Niño e La Niña',
  'O fenômeno climático periódico conhecido como "El Niño" é caracterizado pelo:',
  ['Aquecimento anormal das águas superficiais do Oceano Pacífico Equatorial, alterando padrões de chuva no Brasil', 'Resfriamento das águas do Oceano Atlântico', 'Congelamento da bacia amazônica', 'Aumento de vulcões marinhos'],
  'O aquecimento das águas do Pacífico altera a circulação atmosférica global, provocando secas no Nordeste e chuvas intensas no Sul do Brasil.');

console.log('Total até 7º ano Ciências:', list.length);

fs.writeFileSync('scripts/fundamental_science_temp_7.json', JSON.stringify(list, null, 2));
