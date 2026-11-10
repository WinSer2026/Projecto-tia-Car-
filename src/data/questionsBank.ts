import { DifficultyLevel, LevelMeta, QuizQuestion, ThemeId, ThemeMeta } from '../types/quiz';

export const THEME_METADATA: Record<ThemeId, ThemeMeta> = {
  identificacao_problema: {
    id: 'identificacao_problema',
    title: 'Contextualização, Problematização e Objectivos',
    shortTitle: 'Problema & Objectivos',
    chapterRef: 'Elementos Pré-Textuais e Capítulo 1 (Secções 1.1 a 1.6)',
    pagesRef: 'pp. i–x e pp. 1–6 (PDF pp. 1–18)',
    description:
      'Enquadramento da pesquisa na UP-Maputo, problematização da transição de 7 para 9 classes no Município de Maputo, pergunta de partida, questões secundárias, justificativa e objectivos.',
    keyAuthors: ['Saviani (2008)', 'MINEDH (2020)', 'UNESCO (2015, 2020)', 'Dias (2010)'],
    studyFocus:
      'Dominar a pergunta de partida principal, as 4 questões secundárias, os 4 objectivos específicos e os dados de problematização do MINEDH (2020, p. 25).'
  },
  ciclo_politicas: {
    id: 'ciclo_politicas',
    title: 'Ciclo de Políticas Educativas (Ball, Bowe & Mainardes)',
    shortTitle: 'Ciclo de Políticas',
    chapterRef: 'Capítulo 2 (Secção 2.1 e Quadro 1)',
    pagesRef: 'pp. 7–14 (PDF pp. 19–26)',
    description:
      'Referencial analítico central: Contexto de Influência, Contexto da Produção do Texto, Contexto da Prática, mais os contextos suplementares de Resultados/Efeitos e Estratégia Política.',
    keyAuthors: ['Ball & Bowe (1992)', 'Bowe, Ball & Gold (1992)', 'Ball (1994)', 'Mainardes (2006)', 'Brandão (2007)'],
    studyFocus:
      'Explicar a superação do modelo top-down, a diferença entre política como texto e como discurso (Ball, 1994), a articulação macro-micro (Mainardes, 2006) e as tácticas de sobrevivência.'
  },
  historico_sne: {
    id: 'historico_sne',
    title: 'Evolução Histórico-Legal do SNE e Lei n.º 18/2018',
    shortTitle: 'Histórico SNE & Leis',
    chapterRef: 'Capítulo 2 (Secção 2.2 e Quadro 2)',
    pagesRef: 'pp. 14–21 (PDF pp. 26–33)',
    description:
      'Trajectória desde a Independência (1975), nacionalização do ensino, Lei n.º 4/83 (Homem Novo), Lei n.º 6/92 (economia de mercado), PCEB de 2004 e a reconfiguração unificada na Lei n.º 18/2018.',
    keyAuthors: ['Gomez (1999)', 'Mazula (1995)', 'Golias (1993)', 'Basílio (2010)', 'INDE/MINED (2003)'],
    studyFocus:
      'Comparar rigorosamente a Lei n.º 6/92 e a Lei n.º 18/2018 (Quadro 2), os 3 ciclos do novo Ensino Básico e as 4 inovações do PCEB de 2004.'
  },
  teoria_critica: {
    id: 'teoria_critica',
    title: 'Política Educacional, Currículo e Inclusão Excludente',
    shortTitle: 'Currículo & Teoria Crítica',
    chapterRef: 'Capítulo 2 (Secções 2.3 e 2.6)',
    pagesRef: 'pp. 21–26 e 35–37 (PDF pp. 33–38 e 47–49)',
    description:
      'Dimensão ideológica do Estado, não-neutralidade curricular, as 5 instâncias de transformação curricular, saberes docentes plurais, protecção social e a crítica da inclusão excludente.',
    keyAuthors: ['Apple (2006)', 'Sacristán (2000)', 'Tardif (2002)', 'Saviani (2008, 2013)', 'Frigotto (2010)', 'Durkheim (2007)'],
    studyFocus:
      'Sustentar teoricamente conceitos como inclusão excludente (Saviani/Frigotto), selecção cultural (Apple), as 5 fases do currículo (Sacristán) e a lacuna empírica do estudo.'
  },
  desafios_percepcoes: {
    id: 'desafios_percepcoes',
    title: 'Desafios Operacionais e Percepções dos Intervenientes',
    shortTitle: 'Desafios & Percepções',
    chapterRef: 'Capítulo 2 (Secções 2.4 e 2.5)',
    pagesRef: 'pp. 26–35 (PDF pp. 38–47)',
    description:
      'Constrangimentos infra-estruturais, falta de laboratórios e manuais, formação generalista (IFP) vs ensino disciplinar, atrasos do ADE, aprovação administrativa e vivências de pais e alunos.',
    keyAuthors: ['Mário & Nangassane (2007)', 'Castiano, Ngoenha & Guro (2005, 2012)', 'Luckesi (2011)', 'Luck (2009)', 'Arroyo (1987)', 'Brandão (2002)'],
    studyFocus:
      'Argumentar sobre o choque entre IFP e ensino disciplinar, os turnos de 35 minutos, a convivência entre crianças de 6 anos e adolescentes de 17 anos e a desvalorização simbólica.'
  },
  metodologia_orcamento: {
    id: 'metodologia_orcamento',
    title: 'Metodologia, Amostra (N=52), Ética, Cronograma e Orçamento',
    shortTitle: 'Metodologia & Amostra',
    chapterRef: 'Capítulo 3 (Secções 3.1 a 3.9), Quadros 3 a 6, Apêndices A–G e Anexos',
    pagesRef: 'pp. 38–45 e 49–58 (PDF pp. 50–70)',
    description:
      'Paradigma interpretativo qualitativo, Estudo de Caso Múltiplo (Yin), 4 EBCs em 3 Distritos Municipais, amostra N=52, instrumentos, Análise de Conteúdo (Bardin), rigor (Lincoln & Guba), TCLE/TALE e orçamento.',
    keyAuthors: ['Yin (2015)', 'Bardin (2011)', 'Bogdan & Biklen (1994)', 'Minayo (2012)', 'Lincoln & Guba (1985)', 'Creswell & Creswell (2018)'],
    studyFocus:
      'Justificar a alocação exacta da amostra (4 directores, 16 professores, 16 alunos, 16 encarregados), os 3 distritos (KaMpfumo, KaMavota, KaMubukwana), as 3 fases de Bardin e o orçamento de 120.750,00 MZN.'
  }
};

export const LEVEL_METADATA: Record<DifficultyLevel, LevelMeta> = {
  1: {
    level: 1,
    title: 'Nível 1 — Domínio Fundamental',
    subtitle: 'Dados Estruturais, Siglas, Datas e Marcos Legais',
    description:
      'Perguntas directas de aquecimento sobre a identidade do projecto, leis estruturantes, siglas oficiais, números da amostra, distritos municipais e estrutura formal.',
    examinerRole: 'Presidente da Mesa (Verificação Formal)',
    targetSkill: 'Prontidão imediata em factos, datas, siglas e números exactos do projecto'
  },
  2: {
    level: 2,
    title: 'Nível 2 — Compreensão Descritiva',
    subtitle: 'Objectivos, Ciclos de Aprendizagem e Instrumentos',
    description:
      'Questões sobre o desdobramento dos objectivos específicos, organização dos ciclos na Lei n.º 18/2018 e no PCEB 2004, composição das escolas e técnicas de recolha.',
    examinerRole: 'Vogal Interno (Coerência Estrutural)',
    targetSkill: 'Clareza na exposição dos objectivos, estrutura curricular e desenho de recolha'
  },
  3: {
    level: 3,
    title: 'Nível 3 — Articulação Teórica',
    subtitle: 'Ball & Bowe, Mainardes, Sacristán, Tardif e Bardin',
    description:
      'Perguntas exigindo domínio dos referenciais teóricos: os contextos do Ciclo de Políticas, instâncias curriculares, saberes docentes e fases da Análise de Conteúdo.',
    examinerRole: 'Vogal Teórico-Epistemológico',
    targetSkill: 'Capacidade de relacionar conceitos sociológicos e autores com o objecto de estudo'
  },
  4: {
    level: 4,
    title: 'Nível 4 — Problematização Empírica',
    subtitle: 'Tensões no Chão da Escola, IFP, ADE e Vivências',
    description:
      'Questões focadas nos dados críticos do terreno: rácios de 75–90 alunos, défice de laboratórios (65% a 90%), choque entre formação IFP e 3.º Ciclo, e percepções dos actores.',
    examinerRole: 'Arguente Especialista em Políticas Educativas',
    targetSkill: 'Sustentação empírica das contradições entre a norma prescrita e a prática escolar'
  },
  5: {
    level: 5,
    title: 'Nível 5 — Arguição Crítica de Defesa',
    subtitle: 'Defesa Epistemológica, Inclusão Excludente e Rigor Científico',
    description:
      'Perguntas incisivas de banca examinadora de mestrado sobre lacuna científica, inclusão excludente (Saviani/Frigotto), condicionalidade externa (FASE), Yin e Lincoln & Guba.',
    examinerRole: 'Arguente Principal de Mestrado (Alta Exigência)',
    targetSkill: 'Defesa crítica, dialéctica e metodológica perante questionamentos complexos da banca'
  }
};

export const BASE_QUESTIONS: QuizQuestion[] = [
  // ============================================================================
  // NÍVEL 1 — DOMÍNIO FUNDAMENTAL (6 Temas Distribuídos)
  // ============================================================================
  {
    id: 'L1_T1_01',
    baseId: 'L1_T1_01',
    level: 1,
    theme: 'identificacao_problema',
    examinerPersona: 'Presidente da Banca',
    question: 'Qual é o diploma legal que introduziu formalmente a expansão do Ensino Básico de 7 para 9 classes em Moçambique, constituindo o foco central desta pesquisa?',
    options: [
      'Lei n.º 18/2018, de 28 de Dezembro',
      'Lei n.º 6/92, de 6 de Maio',
      'Lei n.º 4/83, de 23 de Março',
      'Decreto Curricular do PCEB de 2004'
    ],
    correctIndex: 0,
    shortAnswer: 'A Lei n.º 18/2018, de 28 de Dezembro, que revogou a Lei n.º 6/92 e reconfigurou o Sistema Nacional de Educação (SNE).',
    detailedExplanation:
      'Conforme exposto no Resumo (p. vi) e no Capítulo 1 (p. 2), a Lei n.º 18/2018, de 28 de Dezembro, revogou a antiga Lei n.º 6/92 e consagrou no seu Artigo 11.º o novo Ensino Básico de 9 Classes (da 1.ª à 9.ª classe) como gratuito e universalmente obrigatório.',
    defenseTip:
      'Na defesa, mencione sempre a data completa (28 de Dezembro de 2018) e o Artigo 11.º, destacando a transição de 7 para 9 classes gratuitas e obrigatórias.',
    sourceReference: 'Resumo (p. vi) e Cap. 1, Secção 1.1 (p. 2)'
  },
  {
    id: 'L1_T2_01',
    baseId: 'L1_T2_01',
    level: 1,
    theme: 'ciclo_politicas',
    examinerPersona: 'Vogal Teórico',
    question: 'Quais são os autores britânicos criadores da Abordagem do Ciclo de Políticas (Policy Cycle Approach) que ancora teoricamente este projecto?',
    options: [
      'Stephen Ball, Richard Bowe e Anne Gold (1992)',
      'Dermeval Saviani e Gaudêncio Frigotto (2008)',
      'Robert K. Yin e Laurence Bardin (2011)',
      'Maurice Tardif e José Gimeno Sacristán (2000)'
    ],
    correctIndex: 0,
    shortAnswer: 'Stephen J. Ball, Richard Bowe e Anne Gold (1992), sistematizados em língua portuguesa por Jefferson Mainardes (2006).',
    detailedExplanation:
      'A fundamentação teórica principal ancora-se na Abordagem do Ciclo de Políticas formulada por Stephen J. Ball, Richard Bowe e Anne Gold (1992) e amplamente sistematizada no espaço lusófono por Jefferson Mainardes (2006).',
    defenseTip:
      'Sempre que citar Ball e Bowe (1992), mencione também Jefferson Mainardes (2006) como o autor que operacionalizou metodologicamente o modelo no contexto lusófono.',
    sourceReference: 'Resumo (p. vi) e Cap. 2, Secção 2.1 (p. 7)'
  },
  {
    id: 'L1_T3_01',
    baseId: 'L1_T3_01',
    level: 1,
    theme: 'historico_sne',
    examinerPersona: 'Vogal de História da Educação',
    question: 'Qual era a taxa aproximada de analfabetismo herdada por Moçambique do sistema colonial aquando da proclamação da independência em 1975?',
    options: [
      'Superior a 93%',
      'Cerca de 65%',
      'Exactamente 50%',
      'Inferior a 40%'
    ],
    correctIndex: 0,
    shortAnswer: 'Uma taxa de analfabetismo superior a 93%, fruto de um sistema colonial dual e discriminatório.',
    detailedExplanation:
      'Segundo Gomez (1999, p. 45) e Cabaço (2007, p. 83), citados nas páginas 1 e 15 do projecto, após a independência a 25 de Junho de 1975, Moçambique herdou um legado colonial dramático com uma taxa de analfabetismo superior a 93%.',
    defenseTip:
      'Use este dado histórico (mais de 93% de analfabetismo em 1975) para contextualizar o esforço contínuo do Estado moçambicano na democratização do acesso.',
    sourceReference: 'Cap. 1, Secção 1.1 (p. 1) e Cap. 2, Secção 2.2.1 (p. 15)'
  },
  {
    id: 'L1_T4_01',
    baseId: 'L1_T4_01',
    level: 1,
    theme: 'teoria_critica',
    examinerPersona: 'Vogal de Sociologia da Educação',
    question: 'O que significa a sigla EBC, adoptada pelo MINEDH para operacionalizar a oferta da 8.ª e 9.ª classes nas comunidades?',
    options: [
      'Escola Básica Completa',
      'Ensino Bilingue Comunitário',
      'Estrutura Base Curricular',
      'Educação Básica Comparticipada'
    ],
    correctIndex: 0,
    shortAnswer: 'Escola Básica Completa (EBC), resultante da reconversão das antigas escolas primárias (EP1 e EP2).',
    detailedExplanation:
      'De acordo com a Lista de Siglas (p. v) e a Secção 1.1 (p. 2), EBC significa Escola Básica Completa: a medida estratégica do MINEDH de converter as antigas escolas primárias para integrarem fisicamente da 1.ª à 9.ª classe.',
    defenseTip:
      'Explique que a criação das EBCs visou evitar a deslocação massiva de adolescentes para edifícios secundários distantes.',
    sourceReference: 'Lista de Siglas (p. v) e Cap. 1, Secção 1.1 (p. 2)'
  },
  {
    id: 'L1_T5_01',
    baseId: 'L1_T5_01',
    level: 1,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Vogal de Gestão Escolar',
    question: 'Qual é o significado da sigla ADE, que constitui a principal fonte de financiamento directo e autónomo das escolas básicas públicas?',
    options: [
      'Apoio Directo às Escolas',
      'Administração Distrital da Educação',
      'Avaliação do Desempenho Escolar',
      'Alocação Docente Especializada'
    ],
    correctIndex: 0,
    shortAnswer: 'Apoio Directo às Escolas (ADE), fundo criado sob os auspícios do Banco Mundial para aquisição de materiais básicos e manutenção.',
    detailedExplanation:
      'Conforme consta na Lista de Siglas (p. v) e na Secção 2.4.3.2 (p. 32), o ADE é o Apoio Directo às Escolas, fundo essencial para compra de giz, expediente e pequenas reparações, mas cujos valores per capita sofrem atrasos e subfinanciamento face à expansão.',
    defenseTip:
      'Destaque que os montantes do ADE não foram reajustados proporcionalmente à entrada das turmas de 8.ª e 9.ª classes.',
    sourceReference: 'Lista de Siglas (p. v) e Cap. 2, Secção 2.4.3.2 (p. 32)'
  },
  {
    id: 'L1_T6_01',
    baseId: 'L1_T6_01',
    level: 1,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Vogal Metodológico',
    question: 'Qual é o tamanho total da amostra intencional (N) definida na metodologia desta pesquisa e como está distribuída pelos grupos de participantes?',
    options: [
      'N = 52 participantes (4 directores, 16 professores, 16 alunos e 16 encarregados de educação)',
      'N = 40 participantes (4 directores, 12 professores, 12 alunos e 12 encarregados de educação)',
      'N = 60 participantes (6 directores, 18 professores, 18 alunos e 18 encarregados de educação)',
      'N = 48 participantes (4 directores, 16 professores, 14 alunos e 14 encarregados de educação)'
    ],
    correctIndex: 0,
    shortAnswer: 'N = 52 participantes: 4 directores de escola, 16 professores, 16 alunos e 16 encarregados de educação.',
    detailedExplanation:
      'Como detalhado no Resumo (p. vi), na Secção 3.4 (pp. 39–40) e no Quadro 4 (p. 44), a amostra intencional compreende exactamente 52 sujeitos, razão de 13 participantes por cada uma das 4 Escolas Básicas Completas (1 director + 4 professores + 4 alunos + 4 encarregados).',
    defenseTip:
      'Memorize a regra "1 + 4 + 4 + 4 = 13 participantes por escola x 4 escolas = 52 participantes no total".',
    sourceReference: 'Resumo (p. vi), Cap. 3, Secção 3.4 (pp. 39–40) e Quadro 4 (p. 44)'
  },
  {
    id: 'L1_T1_02',
    baseId: 'L1_T1_02',
    level: 1,
    theme: 'identificacao_problema',
    examinerPersona: 'Presidente da Banca',
    question: 'Em que instituição de ensino superior, faculdade e curso de mestrado é apresentado o projecto de pesquisa de Carlota Roberto Monjane?',
    options: [
      'Universidade Pedagógica de Maputo (UP-Maputo), Faculdade de Educação e Psicologia, Mestrado em Políticas Públicas Educacionais',
      'Universidade Eduardo Mondlane (UEM), Faculdade de Educação, Mestrado em Administração e Gestão Escolar',
      'Universidade Pedagógica de Maputo (UP-Maputo), Faculdade de Ciências Sociais, Mestrado em Desenvolvimento Curricular',
      'Instituto Nacional do Desenvolvimento da Educação (INDE), Mestrado em Planificação da Educação'
    ],
    correctIndex: 0,
    shortAnswer: 'Universidade Pedagógica de Maputo (UP-Maputo), Faculdade de Educação e Psicologia, Departamento de Psicologia, Curso de Mestrado em Políticas Públicas Educacionais (2026).',
    detailedExplanation:
      'Conforme a Capa e Folha de Rosto (pp. 1–2 do PDF), o projecto é apresentado à Faculdade de Educação e Psicologia, Departamento de Psicologia da Universidade Pedagógica de Maputo, no Curso de Mestrado em Políticas Públicas Educacionais.',
    defenseTip:
      'Mantenha a precisão institucional ao abrir a sua apresentação oral perante o júri.',
    sourceReference: 'Capa, Folha de Rosto e Secção 1.4 (p. 4)'
  },
  {
    id: 'L1_T2_02',
    baseId: 'L1_T2_02',
    level: 1,
    theme: 'ciclo_politicas',
    examinerPersona: 'Vogal Teórico',
    question: 'Quais são os três contextos principais da formulação original do Ciclo de Políticas de Ball e Bowe (1992)?',
    options: [
      'Contexto de Influência, Contexto da Produção do Texto e Contexto da Prática',
      'Contexto Legislativo, Contexto Financeiro e Contexto Avaliativo',
      'Contexto Internacional, Contexto Ministerial e Contexto Sindical',
      'Contexto de Entrada, Contexto de Processamento e Contexto de Saída'
    ],
    correctIndex: 0,
    shortAnswer: 'Contexto de Influência, Contexto da Produção do Texto da Política e Contexto da Prática.',
    detailedExplanation:
      'Na formulação original de 1992 (Cap. 2, Secção 2.1, p. 7), Ball, Bowe e Gold estabeleceram a tríade matricial: Contexto de Influência, Contexto da Produção do Texto e Contexto da Prática.',
    defenseTip:
      'Acrescente que, em 1994, Stephen Ball adicionou dois contextos suplementares: Resultados/Efeitos e Estratégia Política.',
    sourceReference: 'Cap. 2, Secção 2.1 (p. 7) e Quadro 1 (p. 14)'
  },
  {
    id: 'L1_T3_02',
    baseId: 'L1_T3_02',
    level: 1,
    theme: 'historico_sne',
    examinerPersona: 'Vogal de História da Educação',
    question: 'Em que data exacta o Governo pós-independência decretou a nacionalização da educação, da saúde e da justiça em Moçambique?',
    options: [
      '24 de Julho de 1975',
      '25 de Junho de 1975',
      '23 de Março de 1983',
      '6 de Maio de 1992'
    ],
    correctIndex: 0,
    shortAnswer: 'A 24 de Julho de 1975, menos de um mês após a proclamação da independência nacional (25 de Junho de 1975).',
    detailedExplanation:
      'Segundo a Secção 2.2.1.1 (p. 15), a nacionalização da educação, saúde e justiça foi decretada a 24 de Julho de 1975, retirando a tutela do ensino às missões católicas (Acordo Missionário de 1940) e afirmando o Estado laico e centralizado.',
    defenseTip:
      'Não confunda o dia da Independência (25 de Junho de 1975) com o dia das Nacionalizações (24 de Julho de 1975).',
    sourceReference: 'Cap. 2, Secção 2.2.1.1 (p. 15)'
  },
  {
    id: 'L1_T6_02',
    baseId: 'L1_T6_02',
    level: 1,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Vogal Metodológico',
    question: 'Qual é o valor total geral estimado no Orçamento do Projecto de Pesquisa (Quadro 6) e em que moeda está expresso?',
    options: [
      '120.750,00 MZN (Meticais)',
      '85.500,00 MZN (Meticais)',
      '150.000,00 MZN (Meticais)',
      '98.250,00 MZN (Meticais)'
    ],
    correctIndex: 0,
    shortAnswer: '120.750,00 MZN (Meticais), distribuídos por 14 rubricas detalhadas no Quadro 6.',
    detailedExplanation:
      'Conforme o Quadro 6 (pp. 44–45), o orçamento estimativo total do projecto é de 120.750,00 MZN, incluindo transporte no terreno (20.250 MZN), acolhimento para 8 grupos focais (20.000 MZN), transcrição áudio (15.000 MZN), revisão linguística (12.000 MZN) e reserva de contingência (8.000 MZN).',
    defenseTip:
      'Se a banca perguntar quais são os maiores custos do orçamento, destaque as Deslocações no Terreno (20.250 MZN) e os Grupos Focais (20.000 MZN).',
    sourceReference: 'Cap. 3, Quadro 6 (pp. 44–45)'
  },

  // ============================================================================
  // NÍVEL 2 — COMPREENSÃO DESCRITIVA (6 Temas Distribuídos)
  // ============================================================================
  {
    id: 'L2_T1_01',
    baseId: 'L2_T1_01',
    level: 2,
    theme: 'identificacao_problema',
    examinerPersona: 'Vogal Interno',
    question: 'Qual é a Pergunta de Partida Principal formulada na Secção 1.3 para orientar toda a investigação empírica?',
    options: [
      'Quais são os principais desafios operacionais e as perspectivas dos intervenientes educativos no processo de transição e implementação do ensino básico de 7 para 9 classes no Município de Maputo?',
      'Qual é o impacto estatístico da Lei n.º 18/2018 nas taxas de aprovação dos exames nacionais da 9.ª classe em todas as províncias de Moçambique?',
      'Como é que o Banco Mundial e a UNESCO financiam a construção de laboratórios nas escolas secundárias privadas da cidade de Maputo?',
      'Por que razão os professores do ensino primário recusam utilizar o método bilingue nas turmas da 1.ª à 3.ª classe em KaMpfumo?'
    ],
    correctIndex: 0,
    shortAnswer: 'Quais são os principais desafios operacionais e as perspectivas dos intervenientes educativos (gestores escolares, professores, alunos e encarregados de educação) no processo de transição e implementação do ensino básico de 7 para 9 classes no Município de Maputo?',
    detailedExplanation:
      'Na Secção 1.3 (p. 3), a pergunta principal articula directamente os dois eixos do título: (1) os desafios operacionais e (2) as perspectivas dos quatro grupos de intervenientes educativos no contexto do Município de Maputo.',
    defenseTip:
      'Sublinhe a coerência linear entre o Título, a Pergunta de Partida Principal e o Objectivo Geral (Secção 1.5.1).',
    sourceReference: 'Cap. 1, Secção 1.3 (p. 3) e Secção 1.5.1 (p. 5)'
  },
  {
    id: 'L2_T2_01',
    baseId: 'L2_T2_01',
    level: 2,
    theme: 'ciclo_politicas',
    examinerPersona: 'Vogal Teórico',
    question: 'De acordo com o Quadro 1 (Matriz Analítica dos Contextos do Ciclo de Políticas), quem são os "Actores Chave" do Contexto de Influência na reforma moçambicana?',
    options: [
      'Banco Mundial, UNESCO, SADC, doadores internacionais e MINEDH',
      'Exclusivamente os directores de escola, delegados de disciplina e encarregados de educação',
      'Apenas os deputados municipais e as associações de estudantes do ensino secundário',
      'Os institutos médios privados e as editoras livreiras locais'
    ],
    correctIndex: 0,
    shortAnswer: 'Banco Mundial, UNESCO, SADC, doadores internacionais e o próprio MINEDH.',
    detailedExplanation:
      'Conforme sintetizado no Quadro 1 (p. 14) e na Secção 2.1.1 (pp. 8–9), o Contexto de Influência em Moçambique envolve a pressão de organismos multilaterais (Banco Mundial, UNESCO, SADC), parceiros do FASE e o MINEDH para ampliar a escolaridade obrigatória e a retenção escolar.',
    defenseTip:
      'Cite a Declaração de Incheon (2015), o ODS 4 da Agenda 2030 e o Protocolo de Educação e Formação da SADC como marcos desse contexto de influência.',
    sourceReference: 'Cap. 1 (p. 2) e Cap. 2, Secção 2.1.1 e Quadro 1 (pp. 8–9, 14)'
  },
  {
    id: 'L2_T3_01',
    baseId: 'L2_T3_01',
    level: 2,
    theme: 'historico_sne',
    examinerPersona: 'Vogal de Políticas Curriculares',
    question: 'Como se estruturam os três ciclos de aprendizagem do novo Ensino Básico de 9 Classes estabelecido pela Lei n.º 18/2018?',
    options: [
      '1.º Ciclo (1.ª, 2.ª e 3.ª classes); 2.º Ciclo (4.ª, 5.ª e 6.ª classes); e 3.º Ciclo (7.ª, 8.ª e 9.ª classes)',
      '1.º Ciclo (1.ª e 2.ª classes); 2.º Ciclo (3.ª à 5.ª classe); e 3.º Ciclo (6.ª e 7.ª classes)',
      '1.º Ciclo (1.ª à 5.ª classe); 2.º Ciclo (6.ª e 7.ª classes); e 3.º Ciclo (8.ª à 10.ª classe)',
      '1.º Ciclo (1.ª à 4.ª classe); 2.º Ciclo (5.ª à 7.ª classe); e 3.º Ciclo (8.ª e 9.ª classes)'
    ],
    correctIndex: 0,
    shortAnswer: '1.º Ciclo (1.ª a 3.ª classes), 2.º Ciclo (4.ª a 6.ª classes) e 3.º Ciclo (7.ª a 9.ª classes).',
    detailedExplanation:
      'Segundo a Secção 2.2.4.1 (pp. 19–20) e o Quadro 2 (p. 21), a Lei n.º 18/2018 organiza o Ensino Básico de 9 classes em três ciclos de 3 anos cada: 1.º Ciclo (1.ª–3.ª, alfabetização e numerácia), 2.º Ciclo (4.ª–6.ª, ciências integradas e maturação linguística) e 3.º Ciclo (7.ª–9.ª, transição para o modelo disciplinarizado).',
    defenseTip:
      'Atenção para não confundir os ciclos do PCEB de 2004 (1.ª–2.ª, 3.ª–5.ª, 6.ª–7.ª) com os novos ciclos da Lei n.º 18/2018 (1.ª–3.ª, 4.ª–6.ª, 7.ª–9.ª)!',
    sourceReference: 'Cap. 2, Secção 2.2.4.1 (pp. 19–20) e Quadro 2 (p. 21)'
  },
  {
    id: 'L2_T4_01',
    baseId: 'L2_T4_01',
    level: 2,
    theme: 'teoria_critica',
    examinerPersona: 'Vogal de Sociologia',
    question: 'De acordo com a revisão da literatura (Secção 2.3.3.1, UNESCO 2020), que função protectora e social desempenha a permanência diária dos jovens durante 9 anos na escola básica?',
    options: [
      'Previne o trabalho infantil precoce, a exploração laboral, a gravidez na adolescência e adia o casamento prematuro de raparigas',
      'Garante emprego público imediato na administração distrital a todos os graduados da 9.ª classe',
      'Substitui integralmente o ensino técnico-profissional e o ensino superior universitário',
      'Elimina a necessidade de financiamento público para a manutenção das infra-estruturas escolares'
    ],
    correctIndex: 0,
    shortAnswer: 'Desempenha uma função protectora crucial: previne o trabalho infantil, reduz a vulnerabilidade à exploração económica, previne a gravidez precoce e adia o casamento prematuro de raparigas.',
    detailedExplanation:
      'Na Secção 2.3.3.1 (p. 25) e na Secção 2.5.1.1 (p. 33), o projecto destaca que, segundo a UNESCO (2020, p. 30) e o reconhecimento dos próprios gestores e docentes, a retenção até à 9.ª classe na escola comunitária protege adolescentes da marginalidade, do trabalho infantil e do casamento prematuro.',
    defenseTip:
      'Mostre equilíbrio na defesa: reconheça este mérito social protector da Lei n.º 18/2018 antes de apontar os seus constrangimentos operacionais.',
    sourceReference: 'Cap. 2, Secção 2.3.3.1 (p. 25) e Secção 2.5.1.1 (p. 33)'
  },
  {
    id: 'L2_T5_01',
    baseId: 'L2_T5_01',
    level: 2,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Vogal de Gestão Educacional',
    question: 'Quais são as três grandes dimensões nucleares em que o Capítulo 2 (Secção 2.4) organiza os desafios operacionais da implementação do Ensino Básico de 9 classes?',
    options: [
      '1) Constrangimentos Infra-estruturais e Logísticos; 2) Desafios Pedagógicos, Curriculares e Formação Docente; 3) Gestão Escolar, Governação e Recursos Financeiros',
      '1) Ensino Primário; 2) Ensino Secundário; 3) Ensino Superior Universitário',
      '1) Salários Docentes; 2) Transporte Ferroviário; 3) Alimentação Escolar Internacional',
      '1) Contexto Rural; 2) Contexto Provincial; 3) Contexto Internacional da SADC'
    ],
    correctIndex: 0,
    shortAnswer: '1) Constrangimentos Infra-estruturais e Logísticos (2.4.1); 2) Desafios Pedagógicos, Curriculares e Formação Docente (2.4.2); e 3) Gestão Escolar, Governação e Recursos Financeiros (2.4.3).',
    detailedExplanation:
      'A Secção 2.4 (pp. 26–32) estrutura metodologicamente os estrangulamentos do terreno nestas três dimensões interdependentes: física/logística (salas, laboratórios, carteiras, manuais), pedagógica/docente (IFP vs especialidade, sobrelotação, avaliação) e gestionária/financeira (convivência etária e atrasos do ADE).',
    defenseTip:
      'Estruturar a sua resposta oral nestes 3 eixos demonstra elevado domínio e organização mental perante a banca.',
    sourceReference: 'Cap. 2, Secção 2.4 (pp. 26–32)'
  },
  {
    id: 'L2_T6_01',
    baseId: 'L2_T6_01',
    level: 2,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Vogal Metodológico',
    question: 'Como estão distribuídas geograficamente as 4 Escolas Básicas Completas (EBC 1 a EBC 4) que compõem o Estudo de Caso Múltiplo no Município de Maputo?',
    options: [
      '2 na Zona Urbana Consolidada (Distrito Municipal KaMpfumo) e 2 na Zona Periurbana/Suburbana (Distritos Municipais KaMavota e KaMubukwana)',
      '4 escolas situadas exclusivamente no Distrito Municipal KaMpfumo (centro urbano)',
      '2 no Distrito Municipal KaTembe e 2 no Distrito Municipal KaNyaka',
      '1 em Maputo Cidade, 1 na Matola, 1 em Boane e 1 em Marracuene'
    ],
    correctIndex: 0,
    shortAnswer: 'Duas escolas na Zona Urbana Consolidada (KaMpfumo: EBC 1 e EBC 2) e duas na Zona Periurbana/Suburbana (KaMavota: EBC 3; e KaMubukwana: EBC 4).',
    detailedExplanation:
      'Conforme explicitado na Secção 3.3 (p. 39) e no Quadro 4 (p. 44), o campo empírico abrange 3 Distritos Municipais de Maputo: KaMpfumo (EBC 1 e EBC 2, urbanas consolidadas), KaMavota (EBC 3, periurbana) e KaMubukwana (EBC 4, periurbana).',
    defenseTip:
      'Explique que esta escolha permite comparações intra e inter-contextuais entre o centro urbano consolidado e os bairros periféricos de expansão.',
    sourceReference: 'Cap. 3, Secção 3.3 (p. 39) e Quadro 4 (p. 44)'
  },
  {
    id: 'L2_T3_02',
    baseId: 'L2_T3_02',
    level: 2,
    theme: 'historico_sne',
    examinerPersona: 'Vogal de Currículo',
    question: 'Quais foram as quatro principais inovações pedagógicas introduzidas pelo Plano Curricular do Ensino Básico (PCEB) de 2004, concebido pelo INDE?',
    options: [
      'Organização em 3 ciclos com promoção semi-automática, ensino bilingue, currículo local (20% do tempo) e temas transversais (HIV/SIDA, direitos humanos)',
      'Introdução da 8.ª e 9.ª classes no ensino primário, abolição do ensino privado, obrigatoriedade do francês e exames nacionais na 2.ª classe',
      'Nacionalização das escolas missionárias, criação do Homem Novo socialista, uso exclusivo do português e criação do EP1/EP2',
      'Privatização das escolas públicas, cobrança de propinas no EP1, extinção do ADE e redução do ensino primário para 4 anos'
    ],
    correctIndex: 0,
    shortAnswer: '1) Três ciclos de aprendizagem com promoção semi-automática; 2) Ensino bilingue (línguas bantu L1 + português L2); 3) Currículo local (20% do tempo lectivo); e 4) Abordagem transversal de saúde pública e direitos humanos.',
    detailedExplanation:
      'Na Secção 2.2.3.1 (p. 18), o projecto detalha as quatro grandes inovações do PCEB de 2004 (INDE/MINED, 2003, p. 15), destacando como esta reforma aumentou a retenção mas colidiu com a falta de investimento proporcional em infra-estruturas e formação docente.',
    defenseTip:
      'Lembre-se da percentagem exacta reservada ao Currículo Local no PCEB de 2004: 20% do tempo lectivo total.',
    sourceReference: 'Cap. 2, Secção 2.2.3.1 (p. 18)'
  },
  {
    id: 'L2_T6_02',
    baseId: 'L2_T6_02',
    level: 2,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Vogal de Bioética',
    question: 'Como é assegurada a conformidade ética e bioética na recolha de dados junto aos 16 alunos menores de idade da 8.ª e 9.ª classes?',
    options: [
      'Mediante autorização prévia dos pais/tutores no TCLE (Anexo B) cumulativamente com a assinatura dos próprios alunos no TALE (Termo de Assentimento Livre e Esclarecido, Anexo C)',
      'Apenas com a autorização verbal do director da Escola Básica Completa durante o recreio',
      'Através de um termo assinado unicamente pelo professor da turma de Matemática ou Física',
      'Sem necessidade de assinatura documental por se tratar de grupos focais realizados dentro da escola pública'
    ],
    correctIndex: 0,
    shortAnswer: 'Obtém-se cumulativamente a autorização prévia dos pais/tutores no TCLE (Anexo B) e a assinatura pessoal dos alunos no Termo de Assentimento Livre e Esclarecido (TALE, Anexo C).',
    detailedExplanation:
      'Conforme a Secção 3.8 (pp. 42–43), além da Credencial Institucional da UP-Maputo (Anexo A) e do TCLE para todos os adultos, os estudantes menores de idade requerem dupla protecção ética: consentimento dos pais/tutores (TCLE) e assentimento próprio (TALE) em linguagem simples e acolhedora.',
    defenseTip:
      'Distinguir claramente TCLE (Consentimento — adultos e responsáveis legais) de TALE (Assentimento — menores de idade) impressiona muito positivamente a banca.',
    sourceReference: 'Cap. 3, Secção 3.8 (pp. 42–43) e Anexos A, B e C (pp. 56–58)'
  },

  // ============================================================================
  // NÍVEL 3 — ARTICULAÇÃO TEÓRICA & ANALÍTICA (6 Temas Distribuídos)
  // ============================================================================
  {
    id: 'L3_T1_01',
    baseId: 'L3_T1_01',
    level: 3,
    theme: 'identificacao_problema',
    examinerPersona: 'Vogal Teórico-Epistemológico',
    question: 'Na problematização (Secção 1.2), que advertência teórica de Dermeval Saviani (2008, p. 45) é mobilizada para problematizar a expansão da escolaridade por decreto?',
    options: [
      'O risco de uma "democratização ilusória" quando a ampliação do tempo e obrigatoriedade ocorre por decreto sem o devido aporte de recursos materiais, físicos e pedagógicos',
      'A tese de que o alargamento da escolaridade obrigatória deve ser restrito apenas às capitais provinciais industrializadas',
      'O conceito de que os professores generalistas possuem preparação superior aos licenciados para ensinar Física e Química',
      'A ideia de que o Estado não deve fornecer livros escolares gratuitos para estimular a autonomia financeira das famílias'
    ],
    correctIndex: 0,
    shortAnswer: 'Saviani (2008, p. 45) adverte para o risco de uma "democratização ilusória" quando se amplia a escolaridade por decreto sem garantir recursos materiais, físicos e pedagógicos para a permanência com qualidade.',
    detailedExplanation:
      'Na página 3 (Secção 1.2), a citação directa de Saviani (2008, p. 45) constitui a charneira teórica que faz emergir o problema de pesquisa: a contradição entre a intenção legislativa da Lei n.º 18/2018 e a precariedade infra-estrutural e didáctica das escolas de Maputo.',
    defenseTip:
      'Cite a expressão "democratização ilusória" de Saviani (2008) sempre que justificar o problema central da sua dissertação.',
    sourceReference: 'Cap. 1, Secção 1.2 (p. 3)'
  },
  {
    id: 'L3_T2_01',
    baseId: 'L3_T2_01',
    level: 3,
    theme: 'ciclo_politicas',
    examinerPersona: 'Vogal Teórico-Epistemológico',
    question: 'Qual é a principal virtude heurística e metodológica da sistematização do Ciclo de Políticas realizada por Jefferson Mainardes (2006, p. 54)?',
    options: [
      'Superar a tradicional dicotomia analítica entre a dimensão macro-estrutural (Estado, leis e agendas globais) e a dimensão micro-sociológica (quotidiano da sala de aula)',
      'Substituir a pesquisa qualitativa de campo por modelos econométricos de regressão estatística',
      'Demonstrar que as escolas públicas apenas executam passivamente as ordens emanadas do Ministério da Educação',
      'Eliminar a análise do Contexto de Influência internacional nos países em desenvolvimento'
    ],
    correctIndex: 0,
    shortAnswer: 'Superar a dicotomia entre a análise macro-estrutural (centrada no Estado e agendas globais) e a análise micro-sociológica (focada no quotidiano da escola e dos sujeitos).',
    detailedExplanation:
      'Na Secção 2.1.4.1 (p. 13), o projecto destaca que Mainardes (2006, p. 54) permite articular dialecticamente o macro e o micro, compreendendo a circularidade das influências e a capacidade de agência, tradução e recontextualização dos actores locais.',
    defenseTip:
      'Use a expressão "articulação dialéctica macro-micro" (Mainardes, 2006) para explicar como a sua pesquisa liga o FMI/UNESCO/MINEDH ao chão das 4 escolas de Maputo.',
    sourceReference: 'Cap. 2, Secção 2.1.4.1 (p. 13)'
  },
  {
    id: 'L3_T3_01',
    baseId: 'L3_T3_01',
    level: 3,
    theme: 'historico_sne',
    examinerPersona: 'Vogal de História e Filosofia da Educação',
    question: 'Qual era a finalidade teleológica central da Lei n.º 4/83, de 23 de Março, e em que aspecto fundamental a Lei n.º 6/92, de 6 de Maio, rompeu com esse modelo?',
    options: [
      'A Lei 4/83 visava a formação do "Homem Novo" socialista sob monopólio estatal; a Lei 6/92 aboliu o monopólio estatal, abrindo o ensino ao sector privado, comunitário e confessional numa economia de mercado',
      'A Lei 4/83 instituiu o ensino básico de 9 classes; a Lei 6/92 reduziu o ensino primário obrigatório para apenas 5 classes',
      'A Lei 4/83 adoptou as línguas bantu como língua exclusiva de ensino; a Lei 6/92 introduziu pela primeira vez a língua portuguesa',
      'A Lei 4/83 entregou as escolas rurais às missões católicas; a Lei 6/92 nacionalizou todos os estabelecimentos privados'
    ],
    correctIndex: 0,
    shortAnswer: 'A Lei n.º 4/83 visava edificar o "Homem Novo" socialista sob monopólio estatal laico; já a Lei n.º 6/92 liberalizou o sector educativo, abrindo-o ao ensino privado, cooperativo e confessional, mantendo porém o primário de 7 classes.',
    detailedExplanation:
      'Conforme as Secções 2.2.1 e 2.2.2 (pp. 15–17), após o PRE (1987), a Constituição de 1990 e os Acordos de Paz de 1992, a Lei n.º 6/92 expurgou as referências ao socialismo marxista e aboliu o monopólio estatal sobre o ensino, mas cristalizou a mesma estrutura de 7 classes (EP1 e EP2) e o gargalo na transição para a 8.ª classe.',
    defenseTip:
      'Ressalte que, apesar da mudança ideológica entre 1983 e 1992, ambas as leis mantiveram o ensino primário em 7 classes (EP1: 1.ª–5.ª; EP2: 6.ª–7.ª), mudança que só ocorreu em 2018.',
    sourceReference: 'Cap. 2, Secções 2.2.1 e 2.2.2 (pp. 15–17)'
  },
  {
    id: 'L3_T4_01',
    baseId: 'L3_T4_01',
    level: 3,
    theme: 'teoria_critica',
    examinerPersona: 'Vogal de Teoria Curricular',
    question: 'Quais são os cinco patamares ou instâncias de transformação progressiva do currículo propostos pelo pedagogo espanhol José Gimeno Sacristán (2000, p. 105)?',
    options: [
      '1) Currículo Prescrito; 2) Currículo Apresentado aos Professores; 3) Currículo Moldado pelos Professores; 4) Currículo em Acção ou Prático; e 5) Currículo Realizado e Avaliado',
      '1) Currículo Internacional; 2) Currículo Nacional; 3) Currículo Provincial; 4) Currículo Distrital; e 5) Currículo Comunitário',
      '1) Pré-Análise Curricular; 2) Codificação; 3) Categorização; 4) Inferência; e 5) Interpretação',
      '1) Contexto de Influência; 2) Texto Político; 3) Prática Escolar; 4) Resultados; e 5) Estratégia Política'
    ],
    correctIndex: 0,
    shortAnswer: '1) Currículo Prescrito/Oficial; 2) Apresentado aos Professores (manuais); 3) Moldado pelos Professores (planificação); 4) Em Acção/Prático (sala de aula); e 5) Realizado e Avaliado (aprendizagens efectivas).',
    detailedExplanation:
      'Na Secção 2.3.2.1 (pp. 23–24), a tipologia de Sacristán (2000) demonstra que o sucesso de uma reforma não pode ser medido apenas pela estética retórica do Currículo Prescrito (a Lei n.º 18/2018), mas pelas condições reais oferecidas para que o Currículo em Acção se concretize nas salas de aula.',
    defenseTip:
      'Relacione o "Currículo Prescrito" de Sacristán com o "Contexto da Produção do Texto" de Ball, e o "Currículo em Acção" com o "Contexto da Prática".',
    sourceReference: 'Cap. 2, Secção 2.3.2.1 (pp. 23–24)'
  },
  {
    id: 'L3_T5_01',
    baseId: 'L3_T5_01',
    level: 3,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Vogal de Formação de Professores',
    question: 'Segundo Maurice Tardif (2002, p. 36), citado na Secção 2.3.2.2, que saberes compõem a praxis docente e o que ocorre quando o Estado altera o currículo sem capacitar os professores?',
    options: [
      'O trabalho docente mobiliza saberes plurais (da formação profissional, disciplinares, curriculares e experienciais); sem capacitação, os docentes sentem insegurança ontológica e refugiam-se em práticas rotineiras e defensivas',
      'O trabalho docente requer apenas o saber experiencial empírico, tornando desnecessária a formação científica nas disciplinas de Física e Química',
      'A alteração do currículo por decreto estimula automaticamente o construtivismo mesmo em turmas de 90 alunos sem manuais',
      'Os saberes curriculares substituem integralmente os saberes disciplinares nos Institutos de Formação de Professores (IFP)'
    ],
    correctIndex: 0,
    shortAnswer: 'Tardif (2002) identifica quatro saberes plurais (formação profissional, disciplinares, curriculares e práticos/experienciais). Sem capacitação atempada, o docente sofre insegurança ontológica e refugia-se no ensino mecânico e rotineiro.',
    detailedExplanation:
      'Nas páginas 24–25 (Secção 2.3.2.2) e 29–30 (Secção 2.4.2.1), Tardif (2002) e Libâneo (2012) fundamentam por que razão professores oriundos dos IFP (formação generalista), quando alocados abruptamente para leccionar Física ou Química na 8.ª e 9.ª classes sem formação continuada, recusam o debate aberto e se agarram à leitura cega do manual ou ao ditado.',
    defenseTip:
      'Mencione o termo "insegurança ontológica e profissional" (pp. 24 e 30) ao explicar as dificuldades dos docentes generalistas nas disciplinas específicas do 3.º Ciclo.',
    sourceReference: 'Cap. 2, Secção 2.3.2.2 (pp. 24–25) e Secção 2.4.2.1 (pp. 29–30)'
  },
  {
    id: 'L3_T6_01',
    baseId: 'L3_T6_01',
    level: 3,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Vogal Metodológico',
    question: 'Quais são as três fases cronológicas obrigatórias da técnica de Análise de Conteúdo de Laurence Bardin (2011, p. 47) adoptadas na Secção 3.6 para o tratamento dos dados?',
    options: [
      '1) Pré-Análise (leitura flutuante e organização do corpus); 2) Exploração do Material (codificação e categorização); e 3) Tratamento dos Resultados, Inferência e Interpretação',
      '1) Recolha Documental; 2) Aplicação de Escala Likert; e 3) Regressão Estatística Multivariada',
      '1) Observação Directa; 2) Moderação de Grupos Focais; e 3) Assinatura do TCLE e TALE',
      '1) Credibilidade; 2) Transferibilidade; e 3) Confirmabilidade Empírica'
    ],
    correctIndex: 0,
    shortAnswer: '1) Pré-Análise; 2) Exploração do Material (codificação e categorização); e 3) Tratamento dos Resultados, Inferência e Interpretação.',
    detailedExplanation:
      'Conforme as páginas 41–42 (Secção 3.6), os dados transcritos das entrevistas, grupos focais, grelhas de observação e documentos seguem as 3 etapas de Bardin (2011): Pré-Análise (leitura flutuante), Exploração do Material (agregação em categorias derivadas do Ciclo de Políticas) e Tratamento/Inferência/Interpretação em diálogo com Ball, Saviani, Tardif, Gomez, Castiano e Dias.',
    defenseTip:
      'Destaque que, na fase 2 (Exploração do Material), as categorias e subcategorias de análise emergem articuladas com os contextos do Ciclo de Políticas.',
    sourceReference: 'Cap. 3, Secção 3.6 (pp. 41–42)'
  },
  {
    id: 'L3_T2_02',
    baseId: 'L3_T2_02',
    level: 3,
    theme: 'ciclo_politicas',
    examinerPersona: 'Vogal Teórico-Epistemológico',
    question: 'Na abordagem de Stephen Ball (1994, p. 16), qual é a distinção conceptual entre entender a política como "texto" e a política como "discurso"?',
    options: [
      'Como texto, refere-se aos documentos oficiais negociados e abertos à interpretação; como discurso, engloba os modos de pensar, agir e as relações de poder que delimitam o que pode ser dito e pensado nas instituições',
      'Como texto, refere-se apenas aos livros escolares dos alunos; como discurso, refere-se apenas às falas orais dos directores em reuniões de pais',
      'Política como texto é exclusiva das escolas privadas, enquanto política como discurso aplica-se apenas às escolas públicas rurais',
      'Não existe distinção entre texto e discurso, pois ambos significam o cumprimento técnico e linear da legislação'
    ],
    correctIndex: 0,
    shortAnswer: 'A política como texto abrange os documentos formais (leis, programas) sujeitos a descodificação e tradução; como discurso, refere-se às matrizes de poder e modos de pensar/agir que estruturam as possibilidades de acção.',
    detailedExplanation:
      'Na Secção 2.1 (p. 7) e Secção 2.1.2 (p. 10), Ball (1994, p. 16) e Bowe, Ball & Gold (1992) explicam que os textos políticos contêm compromissos, silêncios estratégicos e ambiguidades, enquanto o discurso enquadra hegemonicamente os conceitos de qualidade, eficiência e equidade.',
    defenseTip:
      'Aponte como exemplo de "silêncio estratégico no texto político" o facto de a Lei n.º 18/2018 proclamar a gratuitidade até à 9.ª classe sem vincular estritamente o orçamento para construir laboratórios e salas nas EBCs.',
    sourceReference: 'Cap. 2, Secções 2.1 e 2.1.2.2 (pp. 7, 10–11)'
  },
  {
    id: 'L3_T4_02',
    baseId: 'L3_T4_02',
    level: 3,
    theme: 'teoria_critica',
    examinerPersona: 'Vogal de Sociologia',
    question: 'Segundo Torres (2001, p. 27) e Lima (2011, p. 54), citados na Secção 2.3.1.1, quais são as duas funções paradoxais que as políticas públicas educacionais cumprem no sistema capitalista periférico?',
    options: [
      'Funções de acumulação económica (qualificação da força de trabalho adaptável ao mercado) e funções de legitimação política e ideológica (coesão social e prevenção da ruptura cívica)',
      'Funções de colecta fiscal directa nas escolas primárias e funções de substituição das autarquias locais',
      'Funções de eliminação da escolaridade pública e funções de promoção exclusiva do ensino doméstico',
      'Funções de padronização linguística europeia e funções de extinção dos saberes locais comunitários'
    ],
    correctIndex: 0,
    shortAnswer: 'Por um lado, funções de acumulação económica (formar força de trabalho produtiva); por outro, funções de legitimação política e ideológica (manter a coesão social e legitimar o Estado).',
    detailedExplanation:
      'Na página 22 (Secção 2.3.1.1), apoiando-se em Saviani (2013), Torres (2001), Lima (2011) e Frigotto (2010), a autora explica que o Estado não é um árbitro neutro: em países periféricos como Moçambique, a política educativa vive a tensão permanente entre a visão mercantil de eficiência estatística e a visão democrática da educação como bem público.',
    defenseTip:
      'Articule esta dualidade com a ideia do "compromisso simbólico" da Lei n.º 18/2018 (projectar a imagem de um Estado modernizador).',
    sourceReference: 'Cap. 2, Secção 2.3.1.1 (p. 22)'
  },

  // ============================================================================
  // NÍVEL 4 — PROBLEMATIZAÇÃO EMPÍRICA & TERRENO (6 Temas Distribuídos)
  // ============================================================================
  {
    id: 'L4_T1_01',
    baseId: 'L4_T1_01',
    level: 4,
    theme: 'identificacao_problema',
    examinerPersona: 'Arguente Especialista',
    question: 'Segundo os dados do Relatório de Monitoria do MINEDH (2020, p. 25) citados na Problematização (Secção 1.2), qual é a percentagem de escolas primárias da capital reconvertidas em EBC que não dispõem de laboratórios, bibliotecas ou salas de informática?',
    options: [
      'Mais de 65% das escolas primárias da capital reconvertidas (chegando a mais de 90% na ausência de laboratórios e reagentes segundo Dias, 2010)',
      'Apenas 15% das escolas situadas nas zonas periféricas de KaMavota',
      'Exactamente 25% das escolas da zona urbana consolidada de KaMpfumo',
      'Menos de 10% das Escolas Básicas Completas do Município de Maputo'
    ],
    correctIndex: 0,
    shortAnswer: 'Mais de 65% das escolas primárias da capital reconvertidas não dispõem de laboratórios, bibliotecas ou salas de informática (MINEDH, 2020, p. 25), e mais de 90% das EBCs não possuem laboratórios com reagentes e microscopia (Dias, 2010, p. 28).',
    detailedExplanation:
      'O projecto apresenta dois indicadores empíricos complementares que a candidata deve dominar: na Secção 1.2 (p. 2), o Relatório do MINEDH (2020, p. 25) aponta que mais de 65% das escolas reconvertidas na capital não têm laboratórios, bibliotecas ou salas de informática; já na Secção 2.4.1.2 (p. 28), Dias (2010) atesta que mais de 90% das EBCs reconvertidas a nível geral carecem de laboratórios, reagentes químicos e balcões seguros.',
    defenseTip:
      'Na defesa, cite ambos os números com as respectivas fontes: ">65% na capital sem laboratórios/bibliotecas/informática (MINEDH, 2020)" e ">90% das EBCs sem laboratórios equipados e reagentes (Dias, 2010)".',
    sourceReference: 'Cap. 1, Secção 1.2 (p. 2) e Cap. 2, Secção 2.4.1.2 (p. 28)'
  },
  {
    id: 'L4_T2_01',
    baseId: 'L4_T2_01',
    level: 4,
    theme: 'ciclo_politicas',
    examinerPersona: 'Arguente Especialista',
    question: 'Como se manifestam concretamente, no quotidiano das escolas públicas moçambicanas, as "tácticas de sobrevivência pedagógica" ou estratégias de acomodação informal (Brandão, 2007, p. 102; Michel de Certeau)?',
    options: [
      'Redução informal da profundidade dos programas, substituição de aulas laboratoriais por ensino expositivo, cópia intensiva de sumários no quadro por falta de livros e flexibilização tácita da avaliação',
      'Construção autónoma de laboratórios de Química pelos próprios professores com recursos salariais próprios',
      'Recusa formal e sindical de todos os directores de escola em matricular alunos da 8.ª e 9.ª classes',
      'Substituição das disciplinas de Física e Biologia por actividades desportivas durante todo o ano lectivo'
    ],
    correctIndex: 0,
    shortAnswer: 'Manifestam-se na redução informal da profundidade dos programas, substituição de aulas práticas por expositivas, ditado e cópia intensiva no quadro de giz para suprir a falta de manuais, e flexibilização tácita nos critérios de avaliação.',
    detailedExplanation:
      'Na Secção 2.1.3.2 (p. 12), inspirando-se em Brandão (2007, p. 102) e na teoria da invenção do quotidiano de Michel de Certeau (nota de rodapé 6), a autora demonstra que a "política real" vivenciada na sala de aula resulta destas micro-práticas astuciosas de ajustamento face à escassez severa.',
    defenseTip:
      'Referir Michel de Certeau (nota de rodapé 6, p. 12) sobre o conceito de "tácticas" dos sujeitos perante estruturas normativas mostra leitura profunda do seu próprio texto.',
    sourceReference: 'Cap. 2, Secção 2.1.3.2 (p. 12, nota 6)'
  },
  {
    id: 'L4_T3_01',
    baseId: 'L4_T3_01',
    level: 4,
    theme: 'historico_sne',
    examinerPersona: 'Arguente Especialista',
    question: 'Na vigência da Lei n.º 6/92, qual era a proporção aproximada de graduados da 7.ª classe que conseguia transitar imediatamente para a 8.ª classe no sistema público oficial, caracterizando o "funil de exclusão"?',
    options: [
      'Menos de um terço (1/3) dos graduados da 7.ª classe conseguia vaga imediata na 8.ª classe pública',
      'Cerca de três quartos (75%) dos graduados transitavam imediatamente para o ESG1',
      'Mais de metade (55%) ingressava nas escolas secundárias rurais',
      'Apenas 5% dos estudantes concluíam a 7.ª classe em todo o país'
    ],
    correctIndex: 0,
    shortAnswer: 'Menos de um terço (1/3) dos graduados da 7.ª classe conseguia garantir a transição imediata para a 8.ª classe no sistema público oficial (Castiano, Ngoenha & Guro, 2005, p. 140).',
    detailedExplanation:
      'Na Secção 2.2.2.2 (p. 17), o projecto explica que a concentração histórica das escolas secundárias (ESG1) nas zonas urbanas e sedes distritais criava um estrangulamento perverso: menos de um terço dos graduados da 7.ª classe transitava para a 8.ª classe, empurrando adolescentes de 12 e 13 anos para o abandono escolar forçado e trabalho infantil.',
    defenseTip:
      'Use este dado ("menos de um terço transitava") para demonstrar porque a reforma da Lei n.º 18/2018 era socialmente urgente e necessária.',
    sourceReference: 'Cap. 2, Secção 2.2.2.2 (p. 17)'
  },
  {
    id: 'L4_T4_01',
    baseId: 'L4_T4_01',
    level: 4,
    theme: 'teoria_critica',
    examinerPersona: 'Arguente Especialista',
    question: 'Por que razão, segundo Miguel Arroyo (1987, p. 42) na Secção 2.5.2.2, os adolescentes da 8.ª e 9.ª classes retidos em antigas escolas primárias experimentam um sentimento de "desvalorização simbólica"?',
    options: [
      'Porque ficam privados do ritual de passagem (rite de passage) para uma verdadeira escola secundária e permanecem em espaços e mobiliários dimensionados para crianças pequenas, sentindo-se infantilizados',
      'Porque os diplomas emitidos pelas Escolas Básicas Completas não são reconhecidos legalmente pelo Ministério da Educação',
      'Porque são obrigados a utilizar o mesmo uniforme da pré-escola e a ter aulas exclusivamente de manhã cedo',
      'Porque na 8.ª e 9.ª classes deixam de ter disciplinas científicas como Física, Química e Biologia'
    ],
    correctIndex: 0,
    shortAnswer: 'Porque a adolescência exige novos espaços de autonomia e sociabilidade juvenil; ao permanecerem no edifício primário infantil, sem o "ritual de passagem" para a escola secundária, sentem-se infantilizados e menorizados.',
    detailedExplanation:
      'Nas páginas 34–35 (Secção 2.5.2.2), recorrendo a Miguel Arroyo (1987, p. 42), a autora analisa a dimensão psicológica e simbólica dos alunos de 14 a 17 anos: retidos em edifícios concebidos para infantes, sem campos de jogos adequados ou laboratórios, perdem o prestígio social do "rite de passage" para o ensino secundário.',
    defenseTip:
      'Combine este argumento de Arroyo (1987) com o problema ergonómico/antropométrico das carteiras pequenas da EP1 usadas por adolescentes de 15–16 anos (p. 28).',
    sourceReference: 'Cap. 2, Secção 2.5.2.2 (pp. 34–35) e Secção 2.4.1.2 (p. 28)'
  },
  {
    id: 'L4_T5_01',
    baseId: 'L4_T5_01',
    level: 4,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Arguente Especialista',
    question: 'Quais são os indicadores concretos de sobrelotação, organização de turnos e duração dos tempos lectivos reportados nas turmas de 8.ª e 9.ª classes do Município de Maputo?',
    options: [
      'Rácios entre 75 e 90 alunos por sala, forçando regimes de 3 a 4 turnos diários com tempos lectivos encurtados para 35 ou mesmo 30 minutos',
      'Rácios de 45 a 50 alunos por sala, funcionando em 2 turnos normais com tempos lectivos de 45 minutos',
      'Rácios de 100 a 120 alunos por sala, funcionando apenas em turno único matinal de 60 minutos por aula',
      'Rácios de 35 a 40 alunos por sala, mas com aulas ministradas apenas três dias por semana'
    ],
    correctIndex: 0,
    shortAnswer: 'Rácios de 75 a 90 alunos por sala, obrigando a regimes de 3 a 4 turnos diários consecutivos e reduzindo os tempos lectivos para 35 ou 30 minutos.',
    detailedExplanation:
      'Conforme exposto na Secção 1.2 (p. 3) e na Secção 2.4.1.1 (p. 27), a pressão demográfica nas EBCs de Maputo gera turmas de 75 a 90 alunos e impõe 3 a 4 turnos diários, comprimindo as aulas para 35 ou 30 minutos — tempo que é ainda consumido pelo ditado lento devido à partilha de 1 livro para 3 a 5 alunos (p. 29).',
    defenseTip:
      'Relacione os 3 Factores de Asfixia Didáctica: (1) 75–90 alunos/sala + (2) aulas de 30–35 minutos + (3) 1 livro para 4 alunos = impossibilidade material de metodologias activas.',
    sourceReference: 'Cap. 1, Secção 1.2 (p. 3) e Cap. 2, Secções 2.4.1.1 e 2.4.1.3 (pp. 27, 29)'
  },
  {
    id: 'L4_T6_01',
    baseId: 'L4_T6_01',
    level: 4,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Arguente Metodológico',
    question: 'No Apêndice E (Guião de Observação Directa das Infraestruturas e Prática Pedagógica, p. 53), que evidências de campo estão registadas quanto ao mobiliário escolar e aos manuais didácticos?',
    options: [
      'Cerca de 30% dos alunos da 8.ª e 9.ª classes sentam-se no chão ou em latas, e regista-se 1 livro para cada 4 alunos em Matemática, Física e Química',
      'Todos os alunos possuem carteira bipessoal, mas 50% das salas não possuem quadro de giz nem iluminação natural',
      'Cerca de 80% dos alunos estudam debaixo de árvores e apenas 1 em cada 10 alunos possui livro de Língua Portuguesa',
      'As 4 escolas possuem laboratórios desactivados por falta de água corrente nos sanitários'
    ],
    correctIndex: 0,
    shortAnswer: 'No Apêndice E (p. 53): cerca de 30% dos alunos da 8.ª e 9.ª classes sentam-se no chão ou em latas (classificação: Mau), há 1 livro para 4 alunos em Matemática, Física e Química, e inexistência de laboratórios em 3 das 4 escolas.',
    detailedExplanation:
      'O Apêndice E (p. 53) apresenta seis aspectos observados: 1) Salas de aula: Suficiente (alvenaria com média de 80 alunos/sala); 2) Mobiliário: Mau (30% sentam-se no chão ou em latas); 3) Manuais: Mau (1 livro para 4 alunos); 4) Laboratórios: Não Existe (inexistência total em 3 das 4 escolas); 5) Sanitários: Mau; 6) Clima de Sala de Aula: Suficiente (predomínio expositivo).',
    defenseTip:
      'Conhecer os detalhes do Apêndice E (30% no chão/latas; 3 das 4 escolas sem laboratório; 1 livro para 4 alunos) mostra domínio absoluto dos seus instrumentos!',
    sourceReference: 'Apêndice E (p. 53 / PDF p. 65)'
  },
  {
    id: 'L4_T5_02',
    baseId: 'L4_T5_02',
    level: 4,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Arguente de Gestão Escolar',
    question: 'Que fenómeno ocorre na recepção da reforma pelos encarregados de educação das camadas populares, segundo a análise apoiada em Brandão (2002, p. 58) na Secção 2.5.2.1?',
    options: [
      'O entusiasmo e alívio financeiro inicial (poupança de chapas e propinas) converte-se em perplexidade, revolta contida e ansiedade quando percebem a degradação material e a falta de aprendizagem substantiva',
      'As famílias populares rejeitam desde o primeiro dia a gratuitidade da 8.ª e 9.ª classes por preferirem pagar propinas nas escolas distritais',
      'Os pais mostram-se indiferentes à qualidade pedagógica desde que os filhos recebam o certificado formal da 9.ª classe',
      'Os encarregados de educação financiam integralmente a construção de laboratórios através do Conselho de Escola'
    ],
    correctIndex: 0,
    shortAnswer: 'O alívio financeiro inicial (fim dos gastos com "chapas" e propinas do ESG1) transforma-se em desilusão e ansiedade quanto ao futuro dos filhos perante a falta de carteiras, livros e laboratórios.',
    detailedExplanation:
      'Na Secção 2.5.2.1 (p. 34), a autora cita Brandão (2002, p. 58) para enfatizar que as famílias populares não são alienadas: elas depositam na escola a esperança de mobilidade social intergeracional, mas entram em profunda ansiedade ao verem a escola pública degradada.',
    defenseTip:
      'Destaque esta evolução em dois tempos nos pais: 1.º momento = alívio económico (sem "chapa" nem propina); 2.º momento = ansiedade quanto à qualidade real.',
    sourceReference: 'Cap. 2, Secção 2.5.2.1 (p. 34)'
  },
  {
    id: 'L4_T5_03',
    baseId: 'L4_T5_03',
    level: 4,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Arguente de Avaliação Educacional',
    question: 'Segundo a Secção 2.4.2.3 (pp. 30–31), apoiada em Luckesi (2011) e Dias (2010), como surge o fenómeno da "aprovação administrativa" nas Escolas Básicas Completas?',
    options: [
      'Resulta da forte pressão das direcções provinciais e distritais sobre os directores de escola para cumprirem metas estatísticas de rendimento, transitando compulsivamente alunos sem competências básicas',
      'Resulta de uma portaria oficial da Lei n.º 18/2018 que proibiu a realização de exames nacionais na 9.ª classe',
      'Decorre da elevada preparação académica dos alunos nos laboratórios de ciências do 3.º Ciclo',
      'Resulta da decisão autónoma dos encarregados de educação nos Conselhos de Escola'
    ],
    correctIndex: 0,
    shortAnswer: 'Resulta da pressão burocrática vertical sobre as direcções escolares para cumprirem metas pré-estabelecidas de rendimento e evitarem índices de retenção, gerando promoção semi-automática dissimulada.',
    detailedExplanation:
      'Nas páginas 30–31 (Secção 2.4.2.3), Luckesi (2011, p. 42) e Dias (2010) explicam que a avaliação foi reduzida a um acto burocrático para alimentar a estatística oficial, fazendo transitar da 8.ª para a 9.ª classe milhares de alunos sem domínio de leitura interpretativa e cálculo aritmético.',
    defenseTip:
      'Designe este fenómeno como um "efeito perverso (unintended consequence)" da macropolítica educacional focado na maquilhagem estatística.',
    sourceReference: 'Cap. 2, Secção 2.4.2.3 (pp. 30–31)'
  },

  // ============================================================================
  // NÍVEL 5 — ARGUIÇÃO CRÍTICA DE BANCA DE MESTRADO (6 Temas Distribuídos)
  // ============================================================================
  {
    id: 'L5_T1_01',
    baseId: 'L5_T1_01',
    level: 5,
    theme: 'identificacao_problema',
    examinerPersona: 'Arguente Principal de Mestrado',
    question: 'Se um membro da banca questionar qual é a originalidade e a lacuna científica (Secção 2.6.2) que justifica este mestrado face aos estudos já existentes em Moçambique, qual é a resposta fundamentada no projecto?',
    options: [
      'A maioria dos estudos prévios incide em análises documentais ou relatórios macro-estatísticos assépticos; faltava um estudo empírico qualitativo que aplicasse o Ciclo de Políticas de Ball e Bowe à recontextualização da Lei n.º 18/2018 no chão das EBCs urbanas e periurbanas de Maputo',
      'O projecto é o primeiro trabalho académico em Moçambique a estudar a história da Lei n.º 4/83 e da Lei n.º 6/92 desde a independência nacional',
      'A originalidade reside na aplicação de um censo quantitativo probabilístico a todas as escolas primárias das 11 províncias do país',
      'O estudo preenche a lacuna de criação de novos manuais escolares de Física e Química para o Instituto Nacional do Desenvolvimento da Educação (INDE)'
    ],
    correctIndex: 0,
    shortAnswer: 'Enquanto os estudos anteriores focam análises documentais ou macro-estatísticas ministeriais assépticas, este estudo preenche o hiato de uma investigação qualitativa e polifónica ancorada no Ciclo de Políticas (Ball & Bowe) sobre a vivência real da Lei n.º 18/2018 nas EBCs de Maputo.',
    detailedExplanation:
      'Na Secção 1.4 (p. 4) e na Secção 2.6.2 (pp. 36–37), a autora reconhece os contributos de Gomez (1999), Castiano, Ngoenha & Guro (2005, 2012), Basílio (2010), Mazula (1995), Mário & Nangassane (2007) e Dias (2010), mas demonstra que escasseiam estudos qualitativos empíricos que mergulhem na micropolítica das EBCs de Maputo sob a lente de Ball e Bowe para cruzar as vozes de directores, professores, alunos e pais.',
    defenseTip:
      'Esta é a pergunta mais clássica de qualquer defesa de mestrado ("Qual é o seu contributo original?"). Responda contrastando os "relatórios macro-estatísticos assépticos" com a sua "imersão qualitativa polifónica no contexto da prática".',
    sourceReference: 'Cap. 1, Secção 1.4 (p. 4) e Cap. 2, Secção 2.6.2 (pp. 36–37)'
  },
  {
    id: 'L5_T2_01',
    baseId: 'L5_T2_01',
    level: 5,
    theme: 'ciclo_politicas',
    examinerPersona: 'Arguente Principal de Mestrado',
    question: 'Como o projecto articula os conceitos de "policy borrowing" (empréstimo de políticas) e a condicionalidade financeira via FASE (Castiano, Ngoenha & Guro, 2005, 2012) na análise do Contexto de Influência da Lei n.º 18/2018?',
    options: [
      'A dependência financeira externa via FASE confere ao Banco Mundial e doadores poder de intervenção nas prioridades educativas, induzindo a importação acelerada de metas globais (policy borrowing) que colidem com a escassez estrutural local',
      'O conceito de policy borrowing demonstra que Moçambique exportou o modelo das Escolas Básicas Completas para os países da União Europeia através do FASE',
      'O FASE garantiu autonomia financeira total ao MINEDH, eliminando qualquer influência do Banco Mundial, do FMI ou da SADC na Lei n.º 18/2018',
      'A condicionalidade externa impediu a aprovação da Lei n.º 18/2018, obrigando o Estado a financiar a reforma exclusivamente com receitas municipais'
    ],
    correctIndex: 0,
    shortAnswer: 'A dependência do financiamento externo (FASE) gera um duplo compromisso do Estado e induz o "policy borrowing" (importação acelerada de modelos globais/SADC) sem a correspondente base material e infra-estrutural.',
    detailedExplanation:
      'Nas Secções 2.1.1.1 e 2.1.1.2 (pp. 8–9), com base em Ngoenha (1992) e Castiano, Ngoenha & Guro (2005, p. 112; 2012, p. 74), o trabalho analisa a tensão estrutural entre as aspirações endógenas de cidadania nacional e as exigências exógenas de homogeneização curricular e eficiência de fluxos impostas pelas agências internacionais.',
    defenseTip:
      'Utilize o termo em inglês presente no seu texto — "policy borrowing" (p. 9) — e o conceito de "duplo compromisso do Estado" (perante os cidadãos e perante os doadores do FASE).',
    sourceReference: 'Cap. 2, Secções 2.1.1.1 e 2.1.1.2 (pp. 8–9)'
  },
  {
    id: 'L5_T3_01',
    baseId: 'L5_T3_01',
    level: 5,
    theme: 'historico_sne',
    examinerPersona: 'Arguente Principal de Mestrado',
    question: 'No Quadro 2 (Comparativo entre a Lei n.º 6/92 e a Lei n.º 18/2018, p. 21), qual é a diferença exacta na "Estrutura do Ensino Secundário" e no "Perfil Docente Preponderante" da 8.ª e 9.ª classes?',
    options: [
      'Na Lei 6/92, o Secundário ia da 8.ª à 12.ª (ESG1: 8.ª–10.ª; ESG2: 11.ª–12.ª) com docentes de formação superior; na Lei 18/2018, o Secundário vai da 7.ª à 12.ª (1.º Ciclo: 7.ª–9.ª; 2.º Ciclo: 10.ª–12.ª), gerando nas EBCs a convivência crítica entre docentes dos IFP e licenciados',
      'Na Lei 6/92, o Ensino Secundário começava na 6.ª classe com professores do IFP; na Lei 18/2018, o Ensino Secundário começa apenas na 10.ª classe exclusivamente em universidades',
      'Ambas as leis mantêm o 1.º Ciclo do Ensino Secundário entre a 8.ª e a 10.ª classe, mudando apenas o nome das escolas para EBC',
      'Na Lei 18/2018, a 7.ª, 8.ª e 9.ª classes deixaram de pertencer ao 1.º Ciclo do Ensino Secundário e passaram a ter monodocência (professor único)'
    ],
    correctIndex: 0,
    shortAnswer: 'Na Lei 18/2018 (Art. 11.º e Quadro 2), o Ensino Primário unificou-se da 1.ª à 6.ª classe e o Ensino Secundário passou a ir da 7.ª à 12.ª classe (1.º Ciclo: 7.ª–9.ª; 2.º Ciclo: 10.ª–12.ª), sendo o 1.º Ciclo integrado no Ensino Básico de 9 classes nas EBCs com coexistência entre docentes do IFP e docentes com formação superior.',
    detailedExplanation:
      'Esta é uma subtileza jurídica crucial da Secção 2.2.4.1 (p. 19) e do Quadro 2 (p. 21): no Artigo 11.º da Lei n.º 18/2018, o Ensino Geral divide-se em Ensino Primário (1.ª à 6.ª classe) e Ensino Secundário (7.ª à 12.ª classe, sendo o 1.º Ciclo da 7.ª à 9.ª e o 2.º Ciclo da 10.ª à 12.ª). O Ensino Básico Obrigatório de 9 classes congloba todo o Ensino Primário (1.ª–6.ª) mais o 1.º Ciclo do Secundário (7.ª–9.ª) em tronco comum!',
    defenseTip:
      'Atenção máxima a este detalhe do Quadro 2 (p. 21): na Lei 18/2018, o Ensino Primário tem 6 classes (1.ª–6.ª) e o Ensino Básico tem 9 classes (1.ª–9.ª, englobando o Primário + 1.º Ciclo do Secundário).',
    sourceReference: 'Cap. 2, Secção 2.2.4.1 (p. 19) e Quadro 2 (p. 21)'
  },
  {
    id: 'L5_T4_01',
    baseId: 'L5_T4_01',
    level: 5,
    theme: 'teoria_critica',
    examinerPersona: 'Arguente Principal de Mestrado',
    question: 'Como Saviani (2008), Craidy & Franco (2007) e Frigotto (2010) definem o conceito de "inclusão excludente" (Secção 2.3.3.2) e como ele explica o paradoxo da 9.ª classe nas periferias de Maputo?',
    options: [
      'É o fenómeno em que o Estado garante o acesso físico ao edifício e a matrícula formal, mas exclui o aluno do direito ao conhecimento científico substancial devido à precarização severa das condições de ensino, entregando um certificado esvaziado de competências',
      'É o processo pelo qual os alunos das zonas rurais são transferidos compulsivamente para escolas privadas de elite na zona cimento de Maputo',
      'Refere-se à exclusão legal das raparigas adolescentes do ensino nocturno nas Escolas Básicas Completas',
      'Designa a cobrança oficial de propinas progressivas aos estudantes da 8.ª e 9.ª classes que reprovam mais de duas vezes'
    ],
    correctIndex: 0,
    shortAnswer: 'A "inclusão excludente" (ou exclusão por dentro) ocorre quando o Estado inclui fisicamente o aluno na estatística e no edifício escolar, mas exclui-o do património científico e cognitivo pela degradação material e pedagógica da escola.',
    detailedExplanation:
      'Na Secção 2.3.3.2 (p. 26 e nota de rodapé 9), a autora mobiliza Saviani (2008, p. 45), Craidy & Franco (2007, p. 89) e Frigotto (2010, p. 71) para denunciar que frequentar 9 anos numa escola sem livros, sem carteiras, sem laboratórios e com professores exaustos resulta num certificado formal da 9.ª classe que priva o jovem das competências reais de emancipação.',
    defenseTip:
      'Na defesa, use o par conceptual "inclusão excludente / exclusão por dentro" (Frigotto, 2010; Saviani, 2008) — é um dos argumentos teóricos mais fortes de toda a dissertação.',
    sourceReference: 'Cap. 2, Secção 2.3.3.2 (p. 26, nota 9)'
  },
  {
    id: 'L5_T5_01',
    baseId: 'L5_T5_01',
    level: 5,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Arguente Principal de Mestrado',
    question: 'Que dilemas de governação e clima escolar emergem da convivência no mesmo recinto entre crianças do 1.º Ciclo e adolescentes do 3.º Ciclo (Secção 2.4.3.1), e que práticas financeiras informais surgem devido aos atrasos do ADE (Secção 2.4.3.2)?',
    options: [
      'A coabitação sem recreios nem balneários separados entre crianças de 6–7 anos e jovens de 14–17 anos gera riscos de intimidação/bullying; e os atrasos do ADE forçam gestores a cobrar contribuições informais (taxas de guarda ou limpeza) aos pais',
      'Os adolescentes do 3.º Ciclo assumem formalmente a leccionação das turmas da 1.ª classe, recebendo bolsas pagas pelo fundo do ADE',
      'As direcções escolares encerram as turmas do 1.º Ciclo durante o segundo semestre para alocar todos os recursos do ADE aos laboratórios da 9.ª classe',
      'A ausência de conflitos etários permite às escolas poupar os recursos do ADE e devolvê-los anualmente ao Ministério das Finanças'
    ],
    correctIndex: 0,
    shortAnswer: 'Por um lado, a disparidade etária (6–7 anos vs 14–17 anos) sem separação de espaços/balneários nem apoio psicopedagógico gera focos de tensão e bullying (Carmo, 2014; Luck, 2009); por outro, a falta de liquidez do ADE leva à cobrança de taxas informais de guarda ou limpeza.',
    detailedExplanation:
      'Nas páginas 31–32 (Secções 2.4.3.1 e 2.4.3.2), o projecto evidencia dois estrangulamentos graves de gestão escolar: 1) o choque biológico e comportamental no mesmo pátio entre crianças de 6 anos e adolescentes até 17 anos; e 2) a asfixia financeira provocada pelo congelamento per capita e atrasos semestrais do ADE, empurrando as escolas para taxas informais (teoricamente ilegais face à gratuitidade) de guarda e limpeza.',
    defenseTip:
      'Ao responder sobre gestão escolar, mostre como a falta de recursos do ADE contradiz na prática o princípio legal da gratuitidade (obrigando a taxas informais de guarda/limpeza).',
    sourceReference: 'Cap. 2, Secções 2.4.3.1 e 2.4.3.2 (pp. 31–32)'
  },
  {
    id: 'L5_T6_01',
    baseId: 'L5_T6_01',
    level: 5,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Arguente Principal de Mestrado',
    question: 'Como a investigadora fundamenta o rigor e a confiabilidade científica desta pesquisa qualitativa à luz dos quatro critérios de Yvonna Lincoln e Egon Guba (1985) na Secção 3.7?',
    options: [
      'Através de: 1) Credibilidade (triangulação de fontes/métodos e validação com participantes); 2) Transferibilidade (descrição densa dos contextos); 3) Dependabilidade (auditoria detalhada do processo); e 4) Confirmabilidade (reflexividade crítica contínua)',
      'Através de: 1) Amostragem Aleatória Estratificada; 2) Teste Qui-Quadrado; 3) Alfa de Cronbach; e 4) Generalização Estatística Nacional',
      'Através de: 1) Neutralidade Positivista; 2) Isolamento Experimental de Variáveis; 3) Duplo-Cego; e 4) Replicação Laboratorial',
      'Através de: 1) Pré-Análise; 2) Exploração Codificada; 3) Inferência Dedutiva; e 4) Publicação Oficial no Boletim da República'
    ],
    correctIndex: 0,
    shortAnswer: 'Adopta os 4 critérios de Lincoln & Guba (1985): Credibilidade (triangulação e permanência no campo), Transferibilidade (descrição densa), Dependabilidade (auditoria metodológica) e Confirmabilidade (reflexividade crítica).',
    detailedExplanation:
      'Na Secção 3.7 (p. 42), para responder a eventuais críticas sobre a subjectividade da pesquisa qualitativa, a autora mobiliza Lincoln e Guba (1985) citados em Creswell & Creswell (2018, p. 201), detalhando como cada um dos quatro critérios (Credibilidade, Transferibilidade, Dependabilidade e Confirmabilidade) é operacionalizado no estudo das 4 EBCs.',
    defenseTip:
      'Se o arguente metodológico perguntar "Como garante que os seus dados qualitativos são confiáveis e não enviesados?", enumere imediatamente os 4 critérios de Lincoln & Guba (1985) e a triangulação de 5 técnicas.',
    sourceReference: 'Cap. 3, Secção 3.7 (p. 42)'
  },

  // ============================================================================
  // MAIS QUESTÕES BASE POR NÍVEL E TEMA PARA ROTAÇÃO DENSA
  // ============================================================================
  {
    id: 'L1_T4_02',
    baseId: 'L1_T4_02',
    level: 1,
    theme: 'teoria_critica',
    examinerPersona: 'Presidente da Banca',
    question: 'Quais são as cinco palavras-chave oficiais definidas no Resumo do projecto de pesquisa?',
    options: [
      'Política Educacional; Ensino Básico de 9 Classes; Ciclo de Políticas; Contexto da Prática; Gestão Escolar',
      'Ministério da Educação; Ensino Primário; Banco Mundial; Currículo Local; Ensino Bilingue',
      'Sociologia da Educação; Formação de Professores; Laboratórios de Ciências; Escala Likert; Maputo',
      'Lei n.º 18/2018; Educação para Todos; SADC; Apoio Directo às Escolas; Análise de Conteúdo'
    ],
    correctIndex: 0,
    shortAnswer: 'Política Educacional; Ensino Básico de 9 Classes; Ciclo de Políticas; Contexto da Prática; Gestão Escolar.',
    detailedExplanation:
      'No final do Resumo (p. vi) e do Abstract (p. vii), as 5 palavras-chave sintetizam o objecto, o recorte analítico e o lócus empírico da dissertação.',
    defenseTip:
      'Repare que duas das cinco palavras-chave ("Ciclo de Políticas" e "Contexto da Prática") vêm directamente do referencial de Stephen Ball.',
    sourceReference: 'Resumo (p. vi) e Abstract (p. vii)'
  },
  {
    id: 'L1_T5_02',
    baseId: 'L1_T5_02',
    level: 1,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Vogal Interno',
    question: 'O que significa a sigla IFP, instituição central na discussão sobre a formação inicial dos professores alocados às Escolas Básicas Completas?',
    options: [
      'Instituto de Formação de Professores',
      'Índice de Financiamento Pedagógico',
      'Inspecção da Função Pública',
      'Instituto de Filosofia e Psicologia'
    ],
    correctIndex: 0,
    shortAnswer: 'Instituto de Formação de Professores (IFP), vocacionado historicamente para a formação generalista do ensino primário.',
    detailedExplanation:
      'Conforme a Lista de Siglas (p. v) e a Secção 2.4.2.1 (p. 29), os IFP formam professores de nível médio com perfil generalista para o ensino primário, que foram abruptamente destacados para leccionar disciplinas especializadas da 8.ª e 9.ª classes.',
    defenseTip:
      'Contraste a formação generalista dos IFP com a formação disciplinar universitária da Universidade Pedagógica (UP-Maputo).',
    sourceReference: 'Lista de Siglas (p. v) e Cap. 2, Secção 2.4.2.1 (p. 29)'
  },
  {
    id: 'L2_T1_02',
    baseId: 'L2_T1_02',
    level: 2,
    theme: 'identificacao_problema',
    examinerPersona: 'Vogal Interno',
    question: 'Em que três planos complementares se desdobra a Justificativa da pesquisa apresentada na Secção 1.4 (pp. 4–5)?',
    options: [
      '1) Plano científico e teórico; 2) Plano social e político-institucional; e 3) Plano pessoal e profissional',
      '1) Plano económico; 2) Plano arquitectónico; e 3) Plano internacional da SADC',
      '1) Plano legislativo; 2) Plano sindical; e 3) Plano estatístico nacional',
      '1) Plano pré-colonial; 2) Plano socialista; e 3) Plano neoliberal'
    ],
    correctIndex: 0,
    shortAnswer: '1) Plano científico e teórico (colmatar hiato empírico com o Ciclo de Políticas); 2) Plano social e político-institucional (subsídios práticos ao MINEDH e gestores); e 3) Plano pessoal e profissional (trajectória no Mestrado na UP-Maputo).',
    detailedExplanation:
      'Nas páginas 4–5 (Secção 1.4), a justificativa articula a relevância académica/epistemológica, a utilidade prática para os decisores públicos e o compromisso ético-profissional da mestranda.',
    defenseTip:
      'Quando a banca perguntar "Por que escolheu este tema?", responda estruturando a fala nestes 3 planos: científico, social/institucional e pessoal/profissional.',
    sourceReference: 'Cap. 1, Secção 1.4 (pp. 4–5)'
  },
  {
    id: 'L2_T2_02',
    baseId: 'L2_T2_02',
    level: 2,
    theme: 'ciclo_politicas',
    examinerPersona: 'Vogal Teórico',
    question: 'No Quadro 1 (p. 14), como se manifesta o "Contexto da Produção do Texto" na reforma educacional moçambicana em estudo?',
    options: [
      'Através da promulgação da Lei n.º 18/2018 e publicação dos novos programas curriculares unificados pelos técnicos do MINEDH, juristas e consultores',
      'Através da pressão do Banco Mundial e da UNESCO nas conferências de Jomtien e Dakar',
      'Através da conversão física de salas primárias e realização de aulas de ciências sem laboratórios',
      'Através da avaliação académica independente das taxas reais de alfabetização e retenção'
    ],
    correctIndex: 0,
    shortAnswer: 'Manifesta-se na elaboração legislativa e curricular formal: a promulgação da Lei n.º 18/2018 e a publicação dos novos programas curriculares unificados.',
    detailedExplanation:
      'Segundo o Quadro 1 (p. 14), o Contexto da Produção do Texto tem como foco a elaboração legislativa, curricular e definição de normas formais, protagonizado por técnicos do MINEDH, juristas e consultores educacionais.',
    defenseTip:
      'Explique que o texto legal resulta de negociações políticas e por isso contém compromissos simbólicos e omissões orçamentais.',
    sourceReference: 'Cap. 2, Secção 2.1.2 (pp. 9–11) e Quadro 1 (p. 14)'
  },
  {
    id: 'L2_T4_02',
    baseId: 'L2_T4_02',
    level: 2,
    theme: 'teoria_critica',
    examinerPersona: 'Vogal de Sociologia da Educação',
    question: 'Sob o prisma sociológico clássico de Émile Durkheim (2007, p. 15), citado na Secção 2.3.3.1, qual é o papel atribuído à escola básica compulsória?',
    options: [
      'Inculcar a solidariedade social, as normatividades colectivas e a disciplina moral indispensáveis à prevenção da anomia social e à coesão da sociedade',
      'Promover a competição mercantil privada entre estabelecimentos confessionais e comunitários',
      'Desconstruir a autoridade pedagógica do professor em favor do autodidatismo infantil',
      'Substituir a língua nacional por línguas estrangeiras para inserção nas indústrias extractivas'
    ],
    correctIndex: 0,
    shortAnswer: 'Inculcar a solidariedade social, as normas colectivas e a disciplina moral necessárias para prevenir a anomia social e assegurar a coesão social.',
    detailedExplanation:
      'Na página 25 (Secção 2.3.3.1), a autora articula a perspectiva funcionalista/republicana de Durkheim (2007, p. 15) sobre a coesão social com a perspectiva crítica contemporânea de direitos humanos e cidadania democrática (Carmo, 2014).',
    defenseTip:
      'Mencione como o projecto dialoga tanto com a função integradora clássica (Durkheim) quanto com a sociologia crítica (Saviani, Apple, Frigotto).',
    sourceReference: 'Cap. 2, Secção 2.3.3.1 (p. 25)'
  },
  {
    id: 'L2_T5_02',
    baseId: 'L2_T5_02',
    level: 2,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Vogal Interno',
    question: 'Quais são as cinco técnicas e instrumentos de recolha de dados empíricos detalhados na Secção 3.5 e constantes dos Apêndices A a G?',
    options: [
      '1) Entrevista Semiestruturada; 2) Grupos Focais; 3) Observação Directa Sistemática com Grelha; 4) Inquérito por Questionário com Escala Likert; e 5) Análise Documental Institucional',
      '1) Testes Psicotécnicos; 2) Exames Nacionais de Matemática; 3) Recenseamento Populacional; 4) Sondagem Telefónica; e 5) Auditoria Contabilística',
      '1) História de Vida; 2) Etnografia Digital; 3) Grupo Nominal; 4) Escala de Diferencial Semântico; e 5) Teste Sociométrico',
      '1) Entrevista Fechada; 2) Observação Oculta; 3) Questionário Postal; 4) Experimentação Laboratorial; e 5) Biografia Clínica'
    ],
    correctIndex: 0,
    shortAnswer: 'Entrevistas semiestruturadas (directores e professores), grupos focais (alunos e pais), observação directa sistemática (infra-estruturas e aulas), questionário em Escala Likert (professores) e análise documental.',
    detailedExplanation:
      'Nas páginas 40–41 (Secção 3.5), o uso combinado destes 5 instrumentos (Apêndices A a G) garante a triangulação metodológica indispensável à validade científica do estudo.',
    defenseTip:
      'Associe cada instrumento ao respectivo Apêndice: Apêndice A (Entrevista Directores), B (Entrevista Professores), C (Grupo Focal Alunos), D (Grupo Focal Pais), E (Grelha Observação), F (Likert Professores), G (Ficha Sociodemográfica e Análise Documental).',
    sourceReference: 'Cap. 3, Secção 3.5 (pp. 40–41) e Apêndices A–G (pp. 49–55)'
  },
  {
    id: 'L3_T1_02',
    baseId: 'L3_T1_02',
    level: 3,
    theme: 'identificacao_problema',
    examinerPersona: 'Vogal Metodológico',
    question: 'Como se articulam os quatro Objectivos Específicos (Secção 1.5.2) com a Matriz Metodológica Integrada da Pesquisa (Quadro 3, p. 43)?',
    options: [
      'Cada objectivo específico corresponde a categorias de análise, fontes/sujeitos, instrumentos (Apêndices A–G) e procedimentos de análise próprios, culminando na proposição de linhas estratégicas de intervenção',
      'Todos os quatro objectivos específicos são respondidos exclusivamente através da análise documental da Lei n.º 18/2018 no MINEDH',
      'Os objectivos específicos avaliam apenas os professores de Matemática, excluindo os encarregados de educação e alunos da matriz',
      'O Quadro 3 substitui os objectivos específicos por hipóteses estatísticas dedutivas de correlação linear'
    ],
    correctIndex: 0,
    shortAnswer: 'O Quadro 3 (p. 43) mapeia rigorosamente cada um dos 4 objectivos específicos às suas categorias de análise, sujeitos (MINEDH, 4 directores, 16 professores, 16 alunos, 16 pais), técnicas e procedimentos de análise.',
    detailedExplanation:
      'O Objectivo 1 (implementação legal/curricular) usa Análise Documental (Apêndice G); o Objectivo 2 (desafios infra-estruturais/didácticos/gestão) usa Entrevistas, Likert e Observação (Apêndices A, B, E, F); o Objectivo 3 (percepções de alunos e pais) usa Grupos Focais (Apêndices C e D); e o Objectivo 4 (propor linhas estratégicas) realiza a triangulação global.',
    defenseTip:
      'Citar o Quadro 3 (Matriz Metodológica Integrada, p. 43) é a melhor forma de provar à banca que não há nenhuma ponta solta entre a Introdução e a Metodologia.',
    sourceReference: 'Cap. 1, Secção 1.5.2 (p. 5) e Cap. 3, Quadro 3 (p. 43)'
  },
  {
    id: 'L3_T3_02',
    baseId: 'L3_T3_02',
    level: 3,
    theme: 'historico_sne',
    examinerPersona: 'Vogal de História da Educação',
    question: 'Qual foi o impacto da guerra civil (1977–1992) e do Programa de Reabilitação Económica (PRE, 1987) sobre o Sistema Nacional de Educação instituído em 1983?',
    options: [
      'A guerra destruiu mais de 40% da rede escolar primária e deslocou populações para os centros urbanos; e o PRE (1987) marcou a viragem para a economia de mercado e adesão ao FMI e Banco Mundial',
      'A guerra civil concentrou-se apenas nas universidades urbanas, enquanto o PRE nacionalizou todas as escolas privadas e confessionais em 1987',
      'O conflito armado levou à aprovação imediata do Ensino Básico de 9 classes em 1987 com financiamento exclusivo do orçamento estatal',
      'O PRE extinguiu o ensino secundário geral e substituiu a língua portuguesa pelas línguas bantu em todo o ensino superior'
    ],
    correctIndex: 0,
    shortAnswer: 'A guerra civil provocou a destruição deliberada de mais de 40% da rede escolar primária (Castiano, Ngoenha & Guro, 2005, p. 88), e o PRE em 1987 iniciou a transição para a economia de mercado sob influência de Bretton Woods.',
    detailedExplanation:
      'Conforme as Secções 2.2.1.2 e 2.2.2 (p. 16), a destruição de mais de 40% das escolas primárias e o deslocamento forçado para as cidades deixaram uma crise infra-estrutural crónica, enquanto a adesão ao FMI/Banco Mundial com o PRE (1987) preparou o caminho para a Lei n.º 6/92.',
    defenseTip:
      'Use o dado histórico da destruição de ">40% da rede escolar primária na guerra (1977–1992)" para mostrar que o défice infra-estrutural de Moçambique tem raízes históricas profundas.',
    sourceReference: 'Cap. 2, Secções 2.2.1.2 e 2.2.2 (p. 16)'
  },
  {
    id: 'L3_T5_02',
    baseId: 'L3_T5_02',
    level: 3,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Vogal de Psicologia e Educação',
    question: 'Como o Capítulo 2 (Secções 2.5.1.1 e 2.5.1.2, p. 33) caracteriza a atitude subjectiva dos gestores e professores perante a reforma da Lei n.º 18/2018?',
    options: [
      'Uma profunda ambivalência e dissonância cognitiva: reconhecem o mérito social e protector da lei para os jovens, mas sofrem frustração operacional, burnout e perda de autoridade pedagógica perante a falta de condições',
      'Uma rejeição ideológica total ao direito das crianças pobres estudarem até à 9.ª classe nas escolas comunitárias',
      'Uma satisfação plena com as condições salariais, laboratoriais e com os fundos do ADE transferidos pelo Estado',
      'Um desconhecimento absoluto da existência da Lei n.º 18/2018 e dos novos programas curriculares do 3.º Ciclo'
    ],
    correctIndex: 0,
    shortAnswer: 'Vivem uma profunda ambivalência (dissonância cognitiva): apoiam eticamente a retenção protectora dos alunos até à 9.ª classe, mas sofrem desgaste físico, burnout e frustração face à imposição sem condições materiais.',
    detailedExplanation:
      'Na página 33 (Secção 2.5.1), citando Basílio (2010), Mário & Nangassane (2007) e Luck (2009), a autora descreve o embate entre o dever profissional/compaixão cívica e a incapacidade material de o cumprir em turmas de mais de 80 alunos ao longo de 3 turnos.',
    defenseTip:
      'No Departamento de Psicologia da UP-Maputo, usar os conceitos de "ambivalência subjectiva", "dissonância cognitiva" e "burnout docente" valoriza fortemente a ligação interdisciplinar do seu trabalho.',
    sourceReference: 'Cap. 2, Secção 2.5.1 (pp. 32–33)'
  },
  {
    id: 'L4_T1_02',
    baseId: 'L4_T1_02',
    level: 4,
    theme: 'identificacao_problema',
    examinerPersona: 'Arguente Especialista',
    question: 'Quais são as quatro questões secundárias de investigação que desdobram a Pergunta de Partida Principal na Secção 1.3 (pp. 3–4)?',
    options: [
      '1) Como as directrizes da Lei 18/2018 são recontextualizadas pelas escolas; 2) Quais os constrangimentos enfrentados por directores e professores; 3) Quais as percepções de alunos e pais; e 4) Que linhas estratégicas podem mitigar as lacunas',
      '1) Qual a história colonial; 2) Qual o custo do FASE; 3) Quantos professores existem em Gaza; e 4) Como reformar o ensino superior',
      '1) Como funciona o ensino bilingue; 2) Qual a taxa de natalidade em Maputo; 3) Como construir laboratórios privados; e 4) Como extinguir os exames nacionais',
      '1) Quem redigiu a Lei 4/83; 2) Quem financiou o PCEB 2004; 3) Quantas escolas existem na SADC; e 4) Qual o salário do director distrital'
    ],
    correctIndex: 0,
    shortAnswer: 'As 4 questões secundárias abordam: 1) tradução/recontextualização da Lei 18/2018; 2) constrangimentos infra-estruturais, pedagógicos e financeiros de directores/professores; 3) percepções e expectativas de alunos e pais; e 4) linhas estratégicas de intervenção.',
    detailedExplanation:
      'Nas páginas 3–4 (Secção 1.3), as quatro questões secundárias espelham com simetria perfeita os quatro objectivos específicos da Secção 1.5.2 (p. 5).',
    defenseTip:
      'Mostre à banca que existe um alinhamento 1-para-1 entre as 4 Questões Secundárias (p. 4), os 4 Objectivos Específicos (p. 5) e as 4 linhas do Quadro 3 (p. 43).',
    sourceReference: 'Cap. 1, Secção 1.3 (pp. 3–4) e Secção 1.5.2 (p. 5)'
  },
  {
    id: 'L4_T2_02',
    baseId: 'L4_T2_02',
    level: 4,
    theme: 'ciclo_politicas',
    examinerPersona: 'Arguente Especialista',
    question: 'Quais são os dois contextos suplementares adicionados por Stephen Ball em 1994 (Secção 2.1.4.2, pp. 13–14) à tríade original do Ciclo de Políticas e o que analisa cada um?',
    options: [
      'O Contexto dos Resultados/Efeitos (impactos reais na equidade, retenção e aprendizagem) e o Contexto da Estratégia Política (capacidade de mobilização e acção para enfrentar as desigualdades geradas)',
      'O Contexto Orçamental (transferência de fundos do FMI) e o Contexto Arquitectónico (construção de salas de alvenaria)',
      'O Contexto Pós-Colonial (herança histórica de 1975) e o Contexto Lusófono (cooperação entre Portugal, Brasil e PALOP)',
      'O Contexto Familiar (custos de transporte em chapas) e o Contexto Juvenil (rituais de passagem na adolescência)'
    ],
    correctIndex: 0,
    shortAnswer: '1) Contexto dos Resultados ou Efeitos (avalia os impactos reais e não previstos na equidade e qualidade); e 2) Contexto da Estratégia Política (analisa a mobilização colectiva e acções estratégicas para corrigir desigualdades).',
    detailedExplanation:
      'Nas páginas 7 e 13–14 (Secção 2.1.4.2), a autora explica que Ball (1994, p. 19) e Mainardes (2006) expandiram a tríade original com estes dois contextos suplementares, que fundamentam directamente o 4.º Objectivo Específico da pesquisa (propor linhas estratégicas de intervenção).',
    defenseTip:
      'Ligue o "Contexto da Estratégia Política" de Ball (1994) ao seu 4.º Objectivo Específico: propor linhas estratégicas de intervenção para o MINEDH e escolas!',
    sourceReference: 'Cap. 2, Secção 2.1.4.2 (pp. 13–14)'
  },
  {
    id: 'L4_T3_02',
    baseId: 'L4_T3_02',
    level: 4,
    theme: 'historico_sne',
    examinerPersona: 'Arguente Especialista',
    question: 'Que paradoxo foi revelado pelas avaliações longitudinais de desempenho após a massificação quantitativa promovida pelo PCEB de 2004 e pela abolição das propinas (Secção 2.2.3.2, p. 19)?',
    options: [
      'Embora a taxa bruta de escolarização tenha crescido exponencialmente aproximando-se da matrícula universal, houve uma deterioração na qualidade substantiva, com vastas percentagens de alunos chegando à 5.ª e 7.ª classes sem dominar leitura fluente, escrita e cálculo elementar',
      'A qualidade da leitura e da matemática duplicou nas zonas rurais, mas a matrícula na 1.ª classe caiu para metade devido à falta de professores bilingues',
      'Os alunos passaram a dominar fluentemente o inglês e a química, mas abandonaram o estudo das línguas moçambicanas de matriz bantu',
      'As escolas primárias ficaram com excesso de salas vazias e manuais sobressalentes devido à redução demográfica'
    ],
    correctIndex: 0,
    shortAnswer: 'O paradoxo da massificação quantitativa versus qualidade da aprendizagem: explosão de matrículas acompanhada de grave deterioração nas literacias básicas de leitura, escrita e cálculo nas classes de transição (5.ª e 7.ª).',
    detailedExplanation:
      'Na Secção 2.2.3.2 (p. 19), apoiando-se em Mário & Nangassane (2007) e Dias (2010), o projecto demonstra que o problema actual da 8.ª e 9.ª classes herda o défice histórico de uma expansão quantitativa que não foi acompanhada por investimento proporcional em salas e formação docente.',
    defenseTip:
      'Explique à banca que a Lei n.º 18/2018 corre o risco de repetir na 8.ª e 9.ª classes o mesmo paradoxo (acesso sem qualidade epistémica) verificado após 2004.',
    sourceReference: 'Cap. 2, Secção 2.2.3.2 (p. 19)'
  },
  {
    id: 'L4_T4_02',
    baseId: 'L4_T4_02',
    level: 4,
    theme: 'teoria_critica',
    examinerPersona: 'Arguente Especialista',
    question: 'Segundo Michael Apple (2006, p. 38), citado na Secção 2.3.1.2 (pp. 22–23), por que razão o currículo escolar nunca pode ser considerado um conjunto neutro de conhecimentos técnicos?',
    options: [
      'Porque o currículo é o resultado provisório de uma selecção cultural que expressa relações de poder, visões de mundo e interesses sociais e económicos de grupos dominantes',
      'Porque os manuais escolares de Matemática e Física contêm erros tipográficos decorrentes do atraso logístico na importação',
      'Porque apenas os professores formados nos IFP têm competência para elaborar os programas oficiais do INDE',
      'Porque o currículo local de 20% proíbe o ensino de ciências exactas nas Escolas Básicas Completas'
    ],
    correctIndex: 0,
    shortAnswer: 'Para Apple (2006, p. 38), o currículo nunca é neutro: constitui uma "selecção cultural" historicamente situada, um campo de disputa onde se define o que conta como "conhecimento oficial".',
    detailedExplanation:
      'Nas páginas 22–23 (Secção 2.3.1.2 e nota 8), a autora articula Michael Apple (2006) com Basílio (2010) para mostrar que redefinir o currículo de 9 classes envolve escolhas epistemológicas e axiológicas sobre o perfil de cidadão que o Estado pretende formar.',
    defenseTip:
      'Cite a expressão-chave de Michael Apple (2006): "selecção cultural" e "conhecimento oficial" (nota de rodapé 8, p. 23).',
    sourceReference: 'Cap. 2, Secção 2.3.1.2 (pp. 22–23, nota 8)'
  },
  {
    id: 'L5_T2_02',
    baseId: 'L5_T2_02',
    level: 5,
    theme: 'ciclo_politicas',
    examinerPersona: 'Arguente Principal de Mestrado',
    question: 'Sob a lente do Ciclo de Políticas (Secção 2.1.2.2, pp. 10–11), o que significa afirmar que a Lei n.º 18/2018 gerou um "compromisso simbólico" acompanhado de "silêncios orçamentais"?',
    options: [
      'Significa que a lei proclamou solenemente nos Artigos 11.º e 12.º a gratuitidade e obrigatoriedade de 9 classes (projectando um Estado modernizador), mas omitiu uma matriz calendarizada e vinculação orçamental obrigatória para construir salas e laboratórios, transferindo o ónus da escassez para as escolas',
      'Significa que a Lei n.º 18/2018 tem valor meramente consultivo e facultativo, não tendo sido publicada no Boletim da República',
      'Significa que o Orçamento do Estado proibiu a transferência de recursos para as escolas do Município de Maputo',
      'Significa que os símbolos nacionais e o hino deixaram de fazer parte do currículo obrigatório do 3.º Ciclo'
    ],
    correctIndex: 0,
    shortAnswer: 'O diploma projectou no plano normativo a imagem de um Estado modernizador alinhado aos ODS, mas omitiu garantias orçamentais vinculativas e transição calendarizada para erguer laboratórios e salas, transferindo tacitamente o problema para os gestores locais.',
    detailedExplanation:
      'Nas páginas 10–11 (Secção 2.1.2.2), esta análise crítica do texto da Lei n.º 18/2018 explica a génese das tensões no terreno: o texto político colheu dividendos de legitimidade internacional e interna, mas deixou um vazio logístico que recai sobre os directores e professores.',
    defenseTip:
      'Esta expressão ("compromisso simbólico e silêncios orçamentais na Lei n.º 18/2018", p. 10) é um argumento de nível de excelência para usar na defesa.',
    sourceReference: 'Cap. 2, Secção 2.1.2.2 (pp. 10–11)'
  },
  {
    id: 'L5_T3_02',
    baseId: 'L5_T3_02',
    level: 5,
    theme: 'historico_sne',
    examinerPersona: 'Arguente Principal de Mestrado',
    question: 'Analisando diacronicamente as três leis gerais da educação em Moçambique (Lei n.º 4/83, Lei n.º 6/92 e Lei n.º 18/2018), como evoluiu a relação entre a arquitectura legal do Ensino Básico e as matrizes ideológicas do Estado?',
    options: [
      'Passou da matriz socialista centralizada do "Homem Novo" (4/83, 7 classes) para a liberalização multipartidária e de mercado mantendo o gargalo na 7.ª classe (6/92), até à unificação compulsória de 9 classes sob influência da agenda global dos ODS e da SADC (18/2018)',
      'Manteve exactamente a mesma estrutura de 9 classes gratuitas desde 1983, alterando apenas a designação do Ministério da Educação para MINEDH em 2018',
      'Evoluiu da descentralização privada em 1983 para a estatização absoluta do ensino secundário em 1992 e a extinção do ensino bilingue em 2018',
      'Reduziu progressivamente a escolaridade obrigatória de 12 classes em 1983 para 10 classes em 1992 e 9 classes em 2018'
    ],
    correctIndex: 0,
    shortAnswer: '1983 (Lei 4/83): Estado socialista monopólico, "Homem Novo", primário de 7 classes (EP1+EP2); 1992 (Lei 6/92): Estado regulador/mercado, abertura ao privado, mantém 7 classes e funil na 8.ª; 2018 (Lei 18/2018): convergência com ODS 4/SADC, Ensino Básico unificado de 9 classes nas EBCs.',
    detailedExplanation:
      'A Secção 2.2 (pp. 14–21), apoiada em Gomez (1999), Mazula (1995), Golias (1993), Basílio (2010) e Castiano et al. (2005, 2012), reconstrói esta linha histórica demonstrando que cada lei do SNE reflecte o projecto político-económico da sua época, mas herda estrangulamentos infra-estruturais não resolvidos.',
    defenseTip:
      'Domine as datas completas das 3 Leis do SNE: Lei n.º 4/83 (23 de Março), Lei n.º 6/92 (6 de Maio) e Lei n.º 18/2018 (28 de Dezembro).',
    sourceReference: 'Cap. 2, Secção 2.2 (pp. 14–21) e Quadro 2 (p. 21)'
  },
  {
    id: 'L5_T6_02',
    baseId: 'L5_T6_02',
    level: 5,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Arguente Metodológico Principal',
    question: 'Por que razão metodológica o estudo adopta o design de "Estudo de Caso Múltiplo" fundamentado em Robert K. Yin (2015, pp. 16, 58) em vez de um estudo de caso único ou de um levantamento puramente estatístico?',
    options: [
      'Porque permite investigar um fenómeno contemporâneo em profundidade no seu contexto real e realizar comparações intra e inter-contextuais entre escolas urbanas consolidadas (KaMpfumo) e periurbanas (KaMavota e KaMubukwana), gerando evidência mais robusta e analiticamente generalizável',
      'Porque o Estudo de Caso Múltiplo de Yin dispensa a realização de entrevistas e análise documental, baseando-se apenas na Escala Likert',
      'Porque Yin (2015) exige exactamente 52 participantes para validar estatisticamente um censo demográfico nacional',
      'Porque as fronteiras entre a política educativa e o contexto escolar estão totalmente isoladas e controladas em laboratório'
    ],
    correctIndex: 0,
    shortAnswer: 'Segundo Yin (2015, pp. 16, 58), o Estudo de Caso Múltiplo investiga um fenómeno contemporâneo no seu contexto real e permite comparações intra e inter-contextuais (urbano vs periurbano), produzindo evidência mais robusta e analiticamente generalizável do que um caso único.',
    detailedExplanation:
      'Na Secção 3.2 (pp. 38–39), a escolha de 4 EBCs distribuídas entre o centro urbano consolidado (KaMpfumo) e a cintura periurbana (KaMavota e KaMubukwana) é justificada pela lógica de replicação e contraste de Yin (2015): permite identificar tanto os padrões comuns da reforma quanto as especificidades socioespaciais de cada território.',
    defenseTip:
      'Na defesa, use o termo técnico de Yin (2015): "generalização analítica" (e não generalização estatística) obtida por comparações intra e inter-contextuais.',
    sourceReference: 'Cap. 3, Secções 3.2 e 3.3 (pp. 38–39)'
  },
  {
    id: 'L5_T6_03',
    baseId: 'L5_T6_03',
    level: 5,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Arguente Metodológico Principal',
    question: 'De acordo com o Cronograma de Execução (Quadro 5, p. 44) e o Apêndice F (Escala Likert, p. 54), como se articulam temporalmente as 6 fases da pesquisa em 2026 e qual o papel do questionário Likert num estudo predominantemente qualitativo?',
    options: [
      'O cronograma distribui 6 fases mensais de Julho a Dezembro de 2026 (sendo o Trabalho de Campo em Setembro e a Defesa em Dezembro), e a Escala Likert (10 itens de 1 a 5 aplicada aos 16 professores) funciona como instrumento complementar de caracterização sumária e triangulação de atitudes',
      'O cronograma prevê 2 anos de trabalho de campo entre 2026 e 2028, e a Escala Likert é aplicada apenas aos 16 encarregados de educação analfabetos',
      'A recolha de dados ocorre em Julho antes do parecer ético, e a Escala Likert substitui as entrevistas semiestruturadas dos 4 directores',
      'Todas as 6 fases ocorrem simultaneamente no mês de Outubro de 2026, utilizando a Escala Likert para avaliar a nota de exame dos alunos'
    ],
    correctIndex: 0,
    shortAnswer: 'O Cronograma (Quadro 5) abrange os 6 meses de Julho a Dezembro de 2026 (Jul: Projecto; Ago: Ética/Credenciais; Set: Campo; Out: Transcrição/Análise; Nov: Redacção; Dez: Revisão e Defesa), e o questionário Likert de 10 afirmações (Apêndice F) serve para triangular as atitudes dos 16 docentes com as suas entrevistas.',
    detailedExplanation:
      'Esta pergunta responde a uma dúvida muito comum em bancas: "Por que há uma Escala Likert (Apêndice F) numa pesquisa qualitativa?". A Secção 3.5.4 (p. 41) explica claramente que o questionário Likert de 5 pontos (10 afirmações) não desvirtua a abordagem qualitativa; actua como instrumento complementar de caracterização sumária e triangulação das percepções docentes.',
    defenseTip:
      'Se um vogal perguntar sobre o Apêndice F (Escala Likert), responda prontamente: "Nos termos da Secção 3.5.4 (p. 41), é um instrumento complementar de triangulação das atitudes dos 16 professores, reforçando a credibilidade proposta por Lincoln & Guba".',
    sourceReference: 'Cap. 3, Secção 3.5.4 (p. 41), Quadro 5 (p. 44) e Apêndice F (p. 54)'
  }
];

/**
 * Dynamic Question Perspectives & Combinatorial Synthesizer Templates
 * Generates hundreds of unique defense questions across Levels 1 to 5 and all 6 Themes,
 * ensuring each level has near-infinite rotational variety without repeating consecutive themes.
 */
export interface ParametricQuestionSeed {
  seedId: string;
  level: DifficultyLevel;
  theme: ThemeId;
  examinerPersona: string;
  angles: Array<{
    tag: string;
    questionText: string;
  }>;
  correctStatement: string;
  distractors: [string, string, string];
  shortAnswer: string;
  detailedExplanation: string;
  defenseTip: string;
  sourceReference: string;
}

export const PARAMETRIC_QUESTION_SEEDS: ParametricQuestionSeed[] = [
  // NÍVEL 1 SEEDS
  {
    seedId: 'SEED_L1_SIGLAS_PCEB_INDE',
    level: 1,
    theme: 'historico_sne',
    examinerPersona: 'Presidente da Banca',
    angles: [
      {
        tag: 'Direto',
        questionText: 'Qual é o significado exacto das siglas PCEB e INDE, frequentemente mobilizadas no Capítulo 2 da revisão da literatura?'
      },
      {
        tag: 'Contextualizado',
        questionText: 'Ao abordar a reforma curricular intermédia de 2004, a autora refere-se ao PCEB concebido pelo INDE. O que significam estas duas siglas oficiais?'
      },
      {
        tag: 'Arguição Rápida',
        questionText: 'Para efeitos de precisão terminológica na defesa: como se desdobram as siglas PCEB e INDE constantes da Lista de Siglas (p. v)?'
      }
    ],
    correctStatement: 'PCEB significa Plano Curricular do Ensino Básico e INDE significa Instituto Nacional do Desenvolvimento da Educação',
    distractors: [
      'PCEB significa Programa Comunitário de Educação Bilingue e INDE significa Inspecção Nacional de Directores Escolares',
      'PCEB significa Projecto Central de Escolas Básicas e INDE significa Instituto Normativo de Docentes Especializados',
      'PCEB significa Plano Científico de Ensino Básico e INDE significa Instituição Nacional de Dados Estatísticos'
    ],
    shortAnswer: 'PCEB = Plano Curricular do Ensino Básico; INDE = Instituto Nacional do Desenvolvimento da Educação.',
    detailedExplanation:
      'Conforme a Lista de Siglas e Acrónimos (p. v) e a Secção 2.2.3.1 (p. 18), o INDE (Instituto Nacional do Desenvolvimento da Educação) concebeu o PCEB (Plano Curricular do Ensino Básico) implementado em 2004.',
    defenseTip: 'Associe sempre o INDE à concepção técnico-curricular dos planos e programas de ensino em Moçambique.',
    sourceReference: 'Lista de Siglas (p. v) e Cap. 2, Secção 2.2.3.1 (p. 18)'
  },
  {
    seedId: 'SEED_L1_CAPITULOS_ESTRUTURA',
    level: 1,
    theme: 'identificacao_problema',
    examinerPersona: 'Presidente da Banca',
    angles: [
      {
        tag: 'Estrutura Formal',
        questionText: 'De acordo com a Secção 1.6 (pp. 5–6), como se organiza a estrutura capitular deste projecto de pesquisa?'
      },
      {
        tag: 'Apresentação Oral',
        questionText: 'Ao apresentar a arquitectura formal do seu trabalho à banca, quais são os capítulos que compõem o documento e os seus elementos pós-textuais?'
      },
      {
        tag: 'Verificação Documental',
        questionText: 'Segundo a descrição da estrutura na página 5 e 6, que conteúdos integram os capítulos centrais e a parte pós-textual do projecto?'
      }
    ],
    correctStatement: 'Integra Introdução (Cap. 1), Revisão da Literatura (Cap. 2), Metodologia da Pesquisa (Cap. 3) e síntese de contributos/recomendações, seguidos de Referências (APA 7.ª ed.), Apêndices (A a G) e Anexos (A a C)',
    distractors: [
      'Integra cinco capítulos estatísticos já com os dados recolhidos e analisados em todas as 11 províncias de Moçambique',
      'Divide-se apenas em dois capítulos (História Colonial e Orçamento Financeiro), sem apêndices nem instrumentos de recolha',
      'Organiza-se segundo as normas Vancouver com dez capítulos dedicados exclusivamente ao ensino secundário privado'
    ],
    shortAnswer: 'Articula-se nos capítulos de Introdução (Cap. 1), Revisão da Literatura (Cap. 2), Metodologia da Pesquisa (Cap. 3) e considerações/contributos antecipados, seguidos de Referências (APA 7.ª ed.), Apêndices (A–G) e Anexos (A–C).',
    detailedExplanation:
      'Na Secção 1.6 (pp. 5–6), a autora explicita a organização dos capítulos, a conformidade das referências com a norma APA 7.ª edição, os 7 Apêndices (guiões e instrumentos) e os 3 Anexos (Credencial, TCLE e TALE).',
    defenseTip: 'Destaque que as Referências Bibliográficas seguem estritamente a 7.ª edição das normas APA.',
    sourceReference: 'Cap. 1, Secção 1.6 (pp. 5–6)'
  },
  {
    seedId: 'SEED_L1_QUADROS_LISTA',
    level: 1,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Vogal Metodológico',
    angles: [
      {
        tag: 'Lista de Quadros',
        questionText: 'Quantos quadros sinópticos estruturam o projecto de pesquisa (Lista de Quadros, p. iv) e quais os temas dos Quadros 1 e 2?'
      },
      {
        tag: 'Síntese Visual',
        questionText: 'O projecto utiliza 6 quadros analíticos e metodológicos ao longo do texto. O que sintetizam especificamente o Quadro 1 e o Quadro 2 no Capítulo 2?'
      },
      {
        tag: 'Domínio do Documento',
        questionText: 'Se um membro da banca abrir a Lista de Quadros na página iv, que informação encontrará nos dois primeiros quadros do trabalho?'
      }
    ],
    correctStatement: 'São 6 quadros no total: o Quadro 1 apresenta a Matriz Analítica dos Contextos do Ciclo de Políticas aplicados a Moçambique, e o Quadro 2 o Comparativo entre a Lei n.º 6/92 e a Lei n.º 18/2018',
    distractors: [
      'São 2 quadros no total, ambos dedicados apenas ao orçamento de transporte e fotocópias em Meticais',
      'São 10 quadros estatísticos sobre as notas de exame de Física e Química nas escolas privadas da Matola',
      'O Quadro 1 apresenta o cronograma de 2026 e o Quadro 2 apresenta a escala Likert de professores'
    ],
    shortAnswer: 'Existem 6 Quadros: Quadro 1 (Matriz do Ciclo de Políticas), Quadro 2 (Comparativo Lei 6/92 vs Lei 18/2018), Quadro 3 (Matriz Metodológica), Quadro 4 (Alocação da Amostra N=52), Quadro 5 (Cronograma 2026) e Quadro 6 (Orçamento em MZN).',
    detailedExplanation:
      'A Lista de Quadros (p. iv) enumera os 6 quadros que conferem rigor visual e analítico ao projecto: 2 no Capítulo 2 (Quadros 1 e 2) e 4 no Capítulo 3 (Quadros 3, 4, 5 e 6).',
    defenseTip: 'Referenciar pelo número do Quadro durante a arguição oral demonstra domínio cirúrgico do seu próprio texto.',
    sourceReference: 'Lista de Quadros (p. iv), Cap. 2 (pp. 14, 21) e Cap. 3 (pp. 43–45)'
  },
  {
    seedId: 'SEED_L1_CICLO_AUTORES_LUSOFONIA',
    level: 1,
    theme: 'ciclo_politicas',
    examinerPersona: 'Vogal Teórico',
    angles: [
      {
        tag: 'Autor Lusófono',
        questionText: 'Qual é o investigador brasileiro responsável pela sistematização e disseminação metodológica do Ciclo de Políticas de Stephen Ball no espaço lusófono (Portugal, Brasil e PALOP)?'
      },
      {
        tag: 'Referência Base',
        questionText: 'Na Secção 2.1.4 (pp. 12–13), que autor de língua portuguesa de 2006 é destacado por oferecer um instrumental analítico estruturado para aplicar Ball e Bowe à pesquisa empírica?'
      }
    ],
    correctStatement: 'Jefferson Mainardes (2006), no seu artigo clássico publicado na revista Educação & Sociedade',
    distractors: [
      'Dermeval Saviani (2013), na sua obra sobre a Pedagogia Histórico-Crítica',
      'Cipriano Luckesi (2011), nos seus estudos sobre avaliação da aprendizagem escolar',
      'António Carlos Gil (2008), no manual de métodos e técnicas de pesquisa social'
    ],
    shortAnswer: 'Jefferson Mainardes (2006), autor da obra de referência sobre a operacionalização metodológica do Ciclo de Políticas em língua portuguesa.',
    detailedExplanation:
      'Na Secção 2.1.4 (pp. 12–13) e nas Referências (p. 47), Jefferson Mainardes (2006) é citado como o elo fundamental que traduziu e sistematizou as formulações de Ball, Bowe e Gold (1992) para os investigadores lusófonos.',
    defenseTip: 'Mencione sempre a dupla "Ball & Bowe (1992) e Mainardes (2006)" como a espinha dorsal teórica do seu Capítulo 2.',
    sourceReference: 'Cap. 2, Secção 2.1.4 (pp. 12–13) e Referências (p. 47)'
  },

  // NÍVEL 2 SEEDS
  {
    seedId: 'SEED_L2_APENDICES_DETALHE',
    level: 2,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Vogal Metodológico',
    angles: [
      {
        tag: 'Estrutura dos Guiões',
        questionText: 'Como estão organizados internamente os guiões de entrevista e grupo focal constantes dos Apêndices A, B, C e D (pp. 49–52)?'
      },
      {
        tag: 'Adequação Linguística',
        questionText: 'Nos Apêndices A a D, como a investigadora adaptou o tom e a linguagem dos instrumentos para cada um dos quatro grupos de sujeitos da amostra (directores, professores, alunos e pais)?'
      },
      {
        tag: 'Operacionalização de Campo',
        questionText: 'Se a banca examinar os Apêndices A, B, C e D (pp. 49–52), quantas perguntas compõem cada guião e como varia o registo linguístico entre gestores e encarregados de educação?'
      }
    ],
    correctStatement: 'Cada guião contém 8 perguntas organizadas em blocos temáticos (3 a 4 blocos), adaptando o tom: formal/institucional para directores (Apêndice A), pedagógico para professores (B), simples/acolhedor para adolescentes de 13–16 anos (C) e popular/acessível sem jargão técnico para pais (D)',
    distractors: [
      'Todos os quatro guiões utilizam exactamente as mesmas 25 perguntas académicas redigidas em linguagem jurídica complexa',
      'Os guiões de alunos e encarregados de educação são compostos apenas por tabelas de verdadeiro ou falso sem espaço para fala livre',
      'O Apêndice A destina-se aos alunos da 8.ª classe e o Apêndice D destina-se exclusivamente aos inspectores do MINEDH'
    ],
    shortAnswer: 'Cada um dos 4 guiões (Apêndices A, B, C e D) possui 8 questões divididas em blocos temáticos, com linguagem cuidadosamente adaptada ao perfil sociocultural e etário de cada grupo.',
    detailedExplanation:
      'Nas páginas 49 a 52, os instrumentos mostram elevado cuidado metodológico: Apêndice A (Directores: 4 blocos, 8 questões, tom formal institucional); Apêndice B (Professores: 3 blocos, 8 questões, tom profissional didáctico); Apêndice C (Alunos: 3 blocos, 8 questões, linguagem clara para 13–16 anos); Apêndice D (Pais: 3 blocos, 8 questões, linguagem popular e directa).',
    defenseTip: 'Apontar que adaptou o registo linguístico no Apêndice C (adolescentes) e no Apêndice D (linguagem popular para os pais) demonstra sensibilidade etnográfica exemplar!',
    sourceReference: 'Apêndices A, B, C e D (pp. 49–52 / PDF pp. 61–64)'
  },
  {
    seedId: 'SEED_L2_PEE_HISTORICO',
    level: 2,
    theme: 'historico_sne',
    examinerPersona: 'Vogal de Planificação Educativa',
    angles: [
      {
        tag: 'Planos Estratégicos',
        questionText: 'Quais foram os Planos Estratégicos da Educação (PEE) elaborados entre 1999 e 2016 (Secção 2.2.3, p. 18) e o Plano actual citado nas referências (2019–2029), e que prioridades definiram?'
      },
      {
        tag: 'Evolução de Políticas',
        questionText: 'Na viragem do milénio, sob influência da Conferência de Dakar (2000), que sucessão de Planos Estratégicos da Educação (PEE) norteou a acção governamental em Moçambique?'
      }
    ],
    correctStatement: 'A sucessão do PEE I (1999–2003), PEE II (2006–2011), PEE III (2012–2016) e o PEE 2019–2029, priorizando a expansão do acesso, abolição de propinas no ensino de base, redução das disparidades de género e eficiência do sistema',
    distractors: [
      'Apenas um único Plano Estratégico elaborado em 1975 que permaneceu inalterado até à aprovação da Lei n.º 18/2018',
      'Planos quinquenais que determinaram o encerramento das escolas primárias rurais e a cobrança de propinas em moeda estrangeira',
      'Programas exclusivos para o ensino universitário que retiraram todo o financiamento do ensino primário entre 2000 e 2018'
    ],
    shortAnswer: 'PEE I (1999–2003), PEE II (2006–2011), PEE III (2012–2016) e o PEE 2019–2029 ("Por uma educação inclusiva, patriótica e de qualidade"), focados na expansão do acesso, gratuitidade na base e equidade de género.',
    detailedExplanation:
      'Na Secção 2.2.3 (p. 18) e na Secção 3.5.5 (p. 41), a autora situa os sucessivos PEE como os documentos programáticos que prepararam a expansão do acesso e que enquadram o actual PEE 2019–2029 do MINEDH.',
    defenseTip: 'Recorde o lema do PEE 2019–2029 (p. 48): "Por uma educação inclusiva, patriótica e de qualidade".',
    sourceReference: 'Cap. 2, Secção 2.2.3 (p. 18), Cap. 3 (p. 41) e Referências (p. 48)'
  },
  {
    seedId: 'SEED_L2_AMOSTRA_PARIDADE_CRITERIOS',
    level: 2,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Vogal Metodológico',
    angles: [
      {
        tag: 'Selecção dos Sujeitos',
        questionText: 'Na Secção 3.4 (pp. 39–40), que critérios orientaram a selecção dos 16 professores, 16 alunos e 16 encarregados de educação nas 4 escolas da amostra?'
      },
      {
        tag: 'Composição dos Grupos',
        questionText: 'Como a investigadora garantiu a diversidade disciplinar nos professores e a representatividade de género e classe nos alunos seleccionados em cada Escola Básica Completa?'
      }
    ],
    correctStatement: 'Amostragem intencional não probabilística: em cada escola, 4 professores (áreas de Ciências Naturais, Matemática e Ciências Sociais/Línguas na 8.ª/9.ª), 4 alunos (2 da 8.ª e 2 da 9.ª classe com paridade de género) e 4 encarregados (membros do Conselho de Escola ou comunidade)',
    distractors: [
      'Sorteio aleatório simples apenas entre professores de Educação Física e alunos da 1.ª à 3.ª classe do turno da manhã',
      'Selecção exclusiva de alunos do sexo masculino da 9.ª classe e professores com mais de 30 anos de serviço no MINEDH',
      'Inclusão apenas de pais que sejam funcionários públicos do Ministério da Educação no Distrito de KaMpfumo'
    ],
    shortAnswer: 'Por escola: 1 director/adjunto pedagógico; 4 docentes da 8.ª/9.ª (Ciências Naturais, Matemática e Ciências Sociais/Línguas); 4 alunos (2 da 8.ª e 2 da 9.ª, com paridade de género); e 4 pais/tutores (Conselho de Escola/comunidade).',
    detailedExplanation:
      'Na página 40 (Secção 3.4), a composição interna de cada escola é criteriosamente equilibrada para captar todas as sensibilidades curriculares (exatas, naturais e humanas), paridade de género entre rapazes e raparigas na 8.ª e 9.ª classes, e participação comunitária.',
    defenseTip: 'Destacar a "paridade de género" nos alunos (2 da 8.ª e 2 da 9.ª por escola) e a cobertura das 3 áreas curriculares nos professores mostra rigor metodológico.',
    sourceReference: 'Cap. 3, Secção 3.4 (pp. 39–40)'
  },

  // NÍVEL 3 SEEDS
  {
    seedId: 'SEED_L3_PARADIGMA_QUALITATIVO_BOGDAN',
    level: 3,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Vogal Epistemológico',
    angles: [
      {
        tag: 'Paradigma Interpretativo',
        questionText: 'Segundo a Secção 3.1 (p. 38), em que paradigma epistemológico se filia o estudo e quais são as cinco características nucleares da investigação qualitativa segundo Bogdan e Biklen (1994, p. 49)?'
      },
      {
        tag: 'Fundamentação Qualitativa',
        questionText: 'Se a banca pedir para justificar teoricamente a opção pela abordagem qualitativa interpretativa (Bogdan & Biklen, 1994; Minayo, 2012), que características estruturais deve apresentar?'
      }
    ],
    correctStatement: 'Filia-se no paradigma interpretativo (hermenêutico-fenomenológico), assumindo 5 características (Bogdan & Biklen, 1994): 1) ambiente natural como fonte directa e investigador como instrumento principal; 2) carácter descritivo; 3) foco no processo social; 4) análise indutiva; e 5) vital importância do significado atribuído pelos sujeitos',
    distractors: [
      'Filia-se no paradigma positivista experimental, assumindo a neutralidade matemática, a dedução a priori e o controlo laboratorial de variáveis',
      'Filia-se no paradigma quantitativo censitário, focando apenas o produto estatístico final e descartando as percepções subjectivas dos actores',
      'Filia-se no paradigma behaviorista clássico, avaliando apenas os reflexos motores dos alunos sem realizar entrevistas ou grupos focais'
    ],
    shortAnswer: 'Paradigma interpretativo (hermenêutico-fenomenológico), com as 5 características de Bogdan & Biklen (1994, p. 49): ambiente natural/investigador instrumento, dados descritivos, foco no processo, análise indutiva e centralidade dos significados dos sujeitos.',
    detailedExplanation:
      'Na página 38 (Secção 3.1), apoiada em Bogdan & Biklen (1994, pp. 48–49), Minayo (2012, pp. 21–24) e Creswell & Creswell (2018, p. 42), a autora fundamenta que a recontextualização da política não se reduz a variáveis mensuráveis descontextualizadas.',
    defenseTip: 'Mencione a expressão exacta da página 38: "paradigma interpretativo (hermenêutico-fenomenológico)".',
    sourceReference: 'Cap. 3, Secção 3.1 (p. 38)'
  },
  {
    seedId: 'SEED_L3_RECONTEXTUALIZACAO_BALL_BOWE',
    level: 3,
    theme: 'ciclo_politicas',
    examinerPersona: 'Vogal Teórico-Epistemológico',
    angles: [
      {
        tag: 'Conceito de Recontextualização',
        questionText: 'Na Secção 2.1.3.1 (pp. 11–12), por que razão Bowe, Ball e Gold (1992, p. 22) afirmam que os profissionais da educação não são "meros executores passivos" da política educacional?'
      },
      {
        tag: 'Agência Docente',
        questionText: 'Como se processa a descodificação e recontextualização da Lei n.º 18/2018 quando o texto normativo penetra o chão das Escolas Básicas Completas?'
      }
    ],
    correctStatement: 'Porque os professores e gestores são sujeitos activos e mediadores críticos que leem e traduzem as políticas através dos filtros da sua história, biografia formativa, valores, cultura profissional e das limitações materiais e temporais do seu local de trabalho',
    distractors: [
      'Porque os directores de escola têm poder constitucional para revogar formalmente as leis aprovadas pela Assembleia da República',
      'Porque as escolas públicas funcionam sem qualquer programa curricular emitido pelo Ministério da Educação',
      'Porque os professores recebem formação médica e jurídica para alterar os artigos da Lei do Sistema Nacional de Educação'
    ],
    shortAnswer: 'Os profissionais trazem as suas histórias, experiências, valores e crenças para a prática; eles descodificam, interpretam e recriam a política perante as restrições materiais concretas da escola (Bowe, Ball & Gold, 1992, p. 22).',
    detailedExplanation:
      'Nas páginas 11–12 (Secção 2.1.3), a citação directa de Bowe, Ball & Gold (1992, p. 22) demonstra que a escola não é uma "correia de transmissão dócil", mas uma arena onde a norma sofre uma mutação pedagógica ao interagir com as condições reais.',
    defenseTip: 'Use a metáfora presente na página 11–12: "A escola não é uma correia de transmissão dócil; é um campo de forças".',
    sourceReference: 'Cap. 2, Secção 2.1.3 (pp. 11–12)'
  },
  {
    seedId: 'SEED_L3_AUTORES_MOCAMBICANOS_ESTADO_ARTE',
    level: 3,
    theme: 'teoria_critica',
    examinerPersona: 'Vogal de Epistemologia Moçambicana',
    angles: [
      {
        tag: 'Autores Nacionais',
        questionText: 'Na Secção 2.6.1 (p. 36), que autores moçambicanos de referência são destacados pelos seus contributos para a compreensão histórica, sociológica e da qualidade da educação no país?'
      },
      {
        tag: 'Literatura Endógena',
        questionText: 'Se a banca questionar como o projecto valoriza a produção académica e filosófica moçambicana, que autores nacionais estruturam a revisão da literatura e com que focos?'
      }
    ],
    correctStatement: 'Gomez (1999, transição pós-independência), Castiano, Ngoenha & Guro (2005, 2012, crítica às condicionalidades do Banco Mundial e história do SNE), Basílio (2010, identidade política e currículo), Mazula (1995, cultura e democracia), Mário & Nangassane (2007) e Dias (2010, desigualdades e qualidade)',
    distractors: [
      'O projecto utiliza exclusivamente autores britânicos e norte-americanos, por inexistirem obras publicadas sobre educação em Moçambique',
      'Cita apenas relatórios internos de contabilidade bancária sem recorrer a filósofos ou sociólogos da educação moçambicanos',
      'Baseia-se unicamente em autores coloniais anteriores a 1974 para analisar a implementação da Lei n.º 18/2018'
    ],
    shortAnswer: 'Destaca Gomez (1999), Castiano, Ngoenha & Guro (2005, 2012), Basílio (2010), Mazula (1995), Golias (1993), Cabaço (2007), Mário & Nangassane (2007) e Hildizina Dias (2010).',
    detailedExplanation:
      'Na página 36 (Secção 2.6.1), a autora sintetiza o contributo específico de cada um destes grandes intelectuais moçambicanos, articulando-os com a teoria crítica internacional (Ball, Saviani, Apple, Tardif, Sacristán).',
    defenseTip: 'Saber associar cada autor moçambicano à sua obra-chave (ex.: Gomez -> história 1962-1984; Mazula -> cultura e democratização; Castiano & Ngoenha -> longa marcha / Banco Mundial; Basílio -> identidade política; Dias -> desigualdades sociais) garante nota máxima na defesa!',
    sourceReference: 'Cap. 2, Secção 2.6.1 (p. 36) e Referências (pp. 46–48)'
  },

  // NÍVEL 4 SEEDS
  {
    seedId: 'SEED_L4_ERGONOMIA_LIVROS_DITADO',
    level: 4,
    theme: 'desafios_percepcoes',
    examinerPersona: 'Arguente Especialista',
    angles: [
      {
        tag: 'Antropometria e Manuais',
        questionText: 'De que forma a inadequação antropométrica do mobiliário escolar (Secção 2.4.1.2, p. 28) e o atraso logístico na entrega do Livro Escolar Gratuito (Secção 2.4.1.3, pp. 28–29) comprometem a aprendizagem nas turmas de 8.ª e 9.ª classes?'
      },
      {
        tag: 'Cotidiano da Sala de Aula',
        questionText: 'O que acontece fisicamente e pedagogicamente nas salas da 8.ª e 9.ª classes quando se mantém o mobiliário da antiga EP1 e os manuais chegam apenas no 2.º ou 3.º trimestre?'
      }
    ],
    correctStatement: 'Adolescentes de 14 a 16 anos sentam-se a 3 ou 4 em carteirinhas bipessoais concebidas para crianças de 6–7 anos (ou no chão/latas), sofrendo desconforto e lesões posturais; e a partilha de 1 livro para 3 a 5 alunos reduz a aula de 40/35 min a um ditado lento e cópia exaustiva no quadro',
    distractors: [
      'Os alunos adolescentes utilizam computadores portáteis fornecidos pelo ADE para substituir os livros em atraso',
      'As carteiras da EP1 são excessivamente grandes para os alunos da 9.ª classe, obrigando à redução da carga horária semanal',
      'Os manuais escolares da 8.ª e 9.ª classes são vendidos pelas editoras directamente aos alunos no início do mês de Janeiro'
    ],
    shortAnswer: 'No plano físico, adolescentes de 14–16 anos espremem-se a 3 ou 4 em carteirinhas da 1.ª classe (contorcionismo ortopédico) ou no chão; no plano didáctico, 3 a 5 alunos partilham um único livro degradado, vampirizando o tempo de aula com ditado lento e cópia mecânica.',
    detailedExplanation:
      'Nas páginas 28 e 29 (Secções 2.4.1.2 e 2.4.1.3), a descrição densa das condições materiais mostra como falhas na cadeia logística (adjudicação, importação, transporte) e a falta de renovação do mobiliário inviabilizam o trabalho de casa e a explicação dialógica.',
    defenseTip: 'Mencione o termo "antropometria e saúde pública escolar" (p. 28) ao abordar o problema dos adolescentes sentados em carteirinhas do EP1.',
    sourceReference: 'Cap. 2, Secções 2.4.1.2 e 2.4.1.3 (pp. 28–29)'
  },
  {
    seedId: 'SEED_L4_LIKERT_ITENS_PROFESSORES',
    level: 4,
    theme: 'metodologia_orcamento',
    examinerPersona: 'Arguente Metodológico',
    angles: [
      {
        tag: 'Apêndice F',
        questionText: 'Quais são as dimensões avaliadas nas 10 afirmações do Questionário em Escala Likert de 1 a 5 destinado aos professores (Apêndice F, p. 54)?'
      },
      {
        tag: 'Triangulação Docente',
        questionText: 'No Apêndice F (p. 54), que indicadores específicos os 16 professores da 8.ª e 9.ª classes classificam de 1 (Discordo Totalmente) a 5 (Concordo Totalmente)?'
      }
    ],
    correctStatement: 'Avaliam 10 dimensões: 1) formação/capacitação; 2) suficiência de manuais; 3) infraestrutura física; 4) condições para aulas práticas científicas; 5) rácio aluno/turma; 6) supervisão distrital; 7) redução da evasão/abandono; 8) suficiência do ADE; 9) convivência etária; e 10) motivação/valorização profissional',
    distractors: [
      'Avaliam apenas a proficiência dos alunos na língua inglesa e o domínio de informática avançada dos directores',
      'Classificam o desempenho individual nominal de cada encarregado de educação nas reuniões trimestrais',
      'Medem exclusivamente a distância geográfica em quilómetros entre a residência do professor e o Ministério da Educação'
    ],
    shortAnswer: 'As 10 afirmações do Apêndice F cobrem: capacitação recebida, manuais disponíveis, infraestrutura física, aulas práticas, rácio por turma, supervisão distrital, redução da evasão, fundos do ADE, convivência entre ciclos e motivação/valorização docente.',
    detailedExplanation:
      'O Apêndice F (p. 54 / PDF p. 66) sintetiza em 10 itens escalonados (DT, D, N, C, CT) todos os eixos da problematização do Capítulo 2, permitindo cruzar de imediato as respostas objectivas dos 16 professores com os seus relatos nas entrevistas do Apêndice B.',
    defenseTip: 'Note que o item 7 do Apêndice F mede um aspecto positivo ("A expansão para 9 classes contribuiu para reduzir a evasão escolar"), evitando viés unilateral no instrumento!',
    sourceReference: 'Apêndice F (p. 54 / PDF p. 66)'
  },

  // NÍVEL 5 SEEDS
  {
    seedId: 'SEED_L5_CONTRASTE_URBANO_PERIURBANO',
    level: 5,
    theme: 'identificacao_problema',
    examinerPersona: 'Arguente Principal de Mestrado',
    angles: [
      {
        tag: 'Assimetria Socioterritorial',
        questionText: 'Como se diferenciam os constrangimentos operacionais das Escolas Básicas Completas situadas na Zona Urbana Consolidada (KaMpfumo: EBC 1 e 2) face às situadas na Zona Periurbana/Suburbana (KaMavota e KaMubukwana: EBC 3 e 4)?'
      },
      {
        tag: 'Comparação Inter-Contextual',
        questionText: 'Se o arguente perguntar por que razão até as escolas da zona cimento consolidada (KaMpfumo) sofrem com a transição para 9 classes, e em que diferem das escolas periféricas de KaMavota e KaMubukwana, qual é a resposta fundamentada na Secção 3.3?'
      }
    ],
    correctStatement: 'Em KaMpfumo (EBC 1 e 2), embora existam edifícios de alvenaria históricos com água e electricidade, há severa pressão de matrículas oriundas das periferias e falta de laboratórios adaptados; já em KaMavota e KaMubukwana (EBC 3 e 4), somam-se instalações físicas precárias, escassez aguda de mobiliário, falta de vedação, menor renda familiar e até 4 turnos diários',
    distractors: [
      'Nas escolas de KaMpfumo não existem quaisquer problemas operacionais, servindo apenas como grupo de controlo perfeito face às escolas de KaMavota',
      'As escolas periurbanas de KaMavota e KaMubukwana possuem mais laboratórios e menor rácio de alunos por sala do que as escolas de KaMpfumo',
      'A única diferença entre as duas zonas reside no facto de KaMpfumo aplicar a Lei n.º 18/2018 e KaMavota continuar sob o regime da Lei n.º 6/92'
    ],
    shortAnswer: 'KaMpfumo (EBC 1 e 2) dispõe de alvenaria, água e energia, mas sofre forte pressão de matrículas pendulares das periferias e falta de espaços laboratoriais; KaMavota e KaMubukwana (EBC 3 e 4) enfrentam expansão demográfica explosiva, precariedade física, falta de carteiras e muros, e até 4 turnos.',
    detailedExplanation:
      'Conforme a Secção 3.3 (p. 39) e a Secção 2.4.1.1 (p. 27), a comparação inter-contextual revela que a reforma de 9 classes gera tensões diferenciadas mas igualmente estruturais tanto no centro urbano consolidado como na cintura suburbana/periurbana de Maputo.',
    defenseTip: 'Destaque o fenómeno do fluxo pendular: alunos das periferias procuram matrícula nas escolas de KaMpfumo em busca de melhores condições, sobrelotando também o centro urbano.',
    sourceReference: 'Cap. 3, Secção 3.3 (p. 39) e Cap. 2, Secção 2.4.1.1 (p. 27)'
  },
  {
    seedId: 'SEED_L5_SINTESE_RECOMENDACOES_OBJECTIVO4',
    level: 5,
    theme: 'teoria_critica',
    examinerPersona: 'Arguente Principal de Mestrado',
    angles: [
      {
        tag: 'Propositividade da Pesquisa',
        questionText: 'Para responder ao 4.º Objectivo Específico e à 4.ª Questão Secundária, que linhas estratégicas de intervenção na gestão pública educacional e na prática pedagógica emergem da matriz do projecto (Quadro 3 e Capítulo 2)?'
      },
      {
        tag: 'Contributo para Políticas Públicas',
        questionText: 'Sendo este um Mestrado em Políticas Públicas Educacionais, que recomendações estratégicas concretas o estudo propõe ao MINEDH, às Direcções Distritais e às escolas para superar a "inclusão excludente"?'
      }
    ],
    correctStatement: 'Propõe três eixos estratégicos articulados (Quadro 3, p. 43): 1) Políticas de valorização e capacitação docente contínua/disciplinar para professores das EBCs; 2) Readequação infra-estrutural calendarizada (salas, carteiras antropometricamente adequadas, kits/laboratórios e entrega atempada de manuais); e 3) Gestão participativa e indexação/pontualidade dos fundos do ADE',
    distractors: [
      'Propõe a revogação imediata da Lei n.º 18/2018 e o regresso definitivo ao ensino primário obrigatório de apenas 7 classes com exames selectivos',
      'Recomenda a transferência de todas as Escolas Básicas Completas públicas para a gestão de empresas privadas com cobrança de propinas mensais',
      'Sugere a extinção das disciplinas de Física, Química e Biologia na 8.ª e 9.ª classes para eliminar a necessidade de laboratórios escolares'
    ],
    shortAnswer: '1) Capacitação científica e pedagógica contínua e valorização dos docentes; 2) Investimento infra-estrutural vinculativo (salas, mobiliário adequado a adolescentes, laboratórios/kits experimentais e logística atempada do livro escolar); e 3) Reajuste per capita e pontualidade do ADE com gestão escolar participativa.',
    detailedExplanation:
      'Na Secção 1.4 (p. 4), Secção 1.5.2 (p. 5) e no Quadro 3 (p. 43, Objectivo Específico 4), a pesquisa afirma o seu carácter propositivo: não pretende revogar a conquista social das 9 classes, mas transformar o compromisso simbólico da Lei n.º 18/2018 numa democratização substantiva e de qualidade.',
    defenseTip: 'Feche sempre a sua arguição com esta síntese propositiva: defender a manutenção das 9 classes gratuitas, mas exigir o suporte material, financeiro (ADE) e formativo (docentes) para garantir equidade epistémica.',
    sourceReference: 'Cap. 1, Secções 1.4 e 1.5.2 (pp. 4–5) e Cap. 3, Quadro 3 (p. 43)'
  }
];
