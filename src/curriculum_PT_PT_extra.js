// Conteúdos de urgência alta — Português do Brasil para hispanohablantes
// Pontuação PT · Tipos de texto · Acento diferencial

export const CURRICULUM_PT_EXTRA = {
  units: [
    {
      id: "PT-EXTRA-U1",
      title: "Pontuação em Português — Diferenças com o Espanhol",
      description: "O que muda na pontuação ao aprender português",
      lessons: [
        {
          id: "PT-EXTRA-U1-L1",
          title: "O Que o Português NÃO Tem — e o Espanhol Tem",
          shadowing: "— Em português não existem sinais de abertura de pergunta ou exclamação.\n— Então como o leitor sabe antes de ler que é uma pergunta?\n— Não sabe. Só descobre no final: 'Você vai vir?' — o ? só aparece no final.\n— E as exclamações?\n— Igual: 'Que incrível!' — só o ! no final.\n— E o travessão?\n— O travessão existe em português, mas funciona diferente: é mais comum no diálogo do que na oralidade cotidiana.\n— E as aspas?\n— Português usa as aspas duplas normais: 'texto' em PT é como marcador informal.",
          memoryPhrases: [
            "PT não tem ¿ nem ¡ — só ponto no final: ? e !",
            "Você vai vir? (sem sinal de abertura — diferente do espanhol)",
            "Que incrível! (! só no final)",
            "Travessão — usado em PT no diálogo direto",
            "Aspas em PT: \"texto\" (duplas) ou 'texto' (simples informal)",
            "Ponto final sempre DEPOIS das aspas de fechamento em PT"
          ],
          oralProduction: "Escreva 5 perguntas e 5 exclamações em português, lembrando que não há sinal de abertura.",
          exercises: [
            { id: "PT-EXTRA-U1-L1-E1", type: "multiple_choice", skill: "grammar", question: "Como se escrevem perguntas em português?", options: ["¿Você vai vir?", "Você vai vir?", "Você vai vir¿", "?Você vai vir?"], answer: 1, explanation: "Em português não existe sinal de abertura de interrogação. A pergunta só tem ? no final: 'Você vai vir?' — ao contrário do espanhol que tem ¿...?" },
            { id: "PT-EXTRA-U1-L2-E2", type: "multiple_choice", skill: "grammar", question: "Qual é a pontuação correta de uma exclamação em português?", options: ["¡Que ótimo!", "Que ótimo!", "!Que ótimo!", "Que ótimo¡"], answer: 1, explanation: "'Que ótimo!' — só o ! no final, sem sinal de abertura. Em português (e inglês) a exclamação é marcada apenas no final." },
            { id: "PT-EXTRA-U1-L1-E3", type: "fill_blank", skill: "grammar", question: "Reescreva em português correto (sem sinais de abertura): '¿Você sabe onde fica o banco? ¡Que longe!'", answer: ["Você sabe onde fica o banco? Que longe!"], hint: "remova os sinais de abertura — PT não tem ¿ nem ¡", explanation: "Em português: 'Você sabe onde fica o banco? Que longe!' — sem ¿ nem ¡." },
            { id: "PT-EXTRA-U1-L1-E4", type: "translation", skill: "writing", question: "Traduza para português com pontuação correta: '¿Sabes qué hora es? ¡Son las tres! ¿Ya comiste?'", answer: ["Você sabe que horas são? São três horas! Você já comeu?"], explanation: "Perguntas sem ¿ de abertura. Exclamação sem ¡ de abertura. PT: 'que horas são?' (plural), 'São três horas!' (são, não es)." },
            { id: "PT-EXTRA-U1-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um diálogo de 10 linhas em português sobre combinar um encontro, usando pelo menos 4 perguntas e 3 exclamações com pontuação correta (sem sinais de abertura).", prompt: "Lembre: pontuação só no final. Use também vírgulas e travessão no diálogo.", hint: "— Oi! Você está livre amanhã? — Estou sim! Por quê? — Que ótimo! Vamos ao cinema?" }
          ]
        },
        {
          id: "PT-EXTRA-U1-L2",
          title: "Travessão, Vírgula e Ponto e Vírgula em Português",
          shadowing: "— O travessão em português tem usos muito parecidos com o espanhol.\n— No diálogo: um travessão abre cada fala.\n— Exato: '— Bom dia — disse ela.' O travessão substitui as aspas no diálogo.\n— E a vírgula?\n— A maior diferença: em português é mais comum separar orações longas com vírgula antes de 'e' e 'ou'.\n— Em espanhol não se faz isso?\n— Em espanhol é menos comum. Em português se usa mais a vírgula antes de 'e' quando as orações têm sujeitos diferentes.\n— E o ponto e vírgula?\n— Mesmo uso: separa orações relacionadas com pausa maior que a vírgula.",
          memoryPhrases: [
            "Travessão em PT: — texto (uma só raya abre a fala)",
            "— Boa noite — disse ele. (segunda raya antes do verbo dicendi)",
            "Vírgula antes de 'e': mais comum em PT que em ES",
            "João foi ao mercado, e Maria ficou em casa. (sujeitos diferentes)",
            "Ponto e vírgula: pausa entre orações relacionadas",
            "Ela chegou cedo; ele chegou tarde. (causa-efeito implícito)"
          ],
          oralProduction: "Escreva um texto narrativo de 8 linhas em português usando travessão no diálogo e vírgula corretamente.",
          exercises: [
            { id: "PT-EXTRA-U1-L2-E1", type: "multiple_choice", skill: "grammar", question: "Como se escreve diálogo em português?", options: ["\"Bom dia\" disse ela.", "— Bom dia — disse ela.", "-Bom dia- disse ela.", "«Bom dia» disse ela."], answer: 1, explanation: "'— Bom dia — disse ela.' — travessão abre a fala, segunda ocorrência do travessão antes do verbo dicendi. Aspas no diálogo são menos comuns em português." },
            { id: "PT-EXTRA-U1-L2-E2", type: "multiple_choice", skill: "grammar", question: "Qual uso da vírgula é mais aceito em português do que em espanhol?", options: ["Vírgula entre sujeito e verbo", "Vírgula antes de 'e' quando os sujeitos são diferentes", "Vírgula depois do verbo", "Vírgula antes de qualquer 'e'"], answer: 1, explanation: "Em português é mais aceita a vírgula antes de 'e' quando as orações têm sujeitos diferentes: 'João saiu, e Maria ficou.' Em espanhol isso é menos comum e pode soar estranho." },
            { id: "PT-EXTRA-U1-L2-E3", type: "fill_blank", skill: "grammar", question: "Reescreva o diálogo com travessão correto: 'Boa tarde disse João. Tudo bem perguntou Maria.'", answer: ["— Boa tarde — disse João. — Tudo bem? — perguntou Maria."], hint: "travessão abre + pergunta + segunda raya antes do verbo", explanation: "'— Boa tarde — disse João.' Travessão abre, segunda raya antes do 'disse'. Pergunta: '— Tudo bem? — perguntou Maria.'" },
            { id: "PT-EXTRA-U1-L2-E4", type: "translation", skill: "writing", question: "Traduza para português com pontuação adequada: '—Buenos días —dijo él—. ¿Cómo estás? Llegué tarde; lo siento.'", answer: ["— Bom dia — disse ele. — Como vai você? Cheguei atrasado; sinto muito.", "— Bom dia — disse ele —. Como você está? Cheguei tarde; me desculpe."], explanation: "Travessão no diálogo. Pergunta sem ¿. Ponto e vírgula entre orações relacionadas." },
            { id: "PT-EXTRA-U1-L2-E5", type: "free_writing", skill: "writing", question: "Escreva uma cena narrativa de 12 linhas em português com pelo menos 4 falas em diálogo (usando travessão), 2 pontos e vírgula e vírgula correta antes de 'e' quando necessário.", prompt: "Tema: duas pessoas se reencontram depois de muito tempo.", hint: "Ela o viu da rua; ele estava sentado na janela. — João! — gritou ela. — Maria — disse ele, levantando-se —, que surpresa!" }
          ]
        },
        {
          id: "PT-EXTRA-U1-L3",
          title: "Dois Pontos, Reticências e Aspas em Português",
          shadowing: "— Os dois pontos em português têm os mesmos usos do espanhol.\n— Introduzir lista, citação ou explicação.\n— Exato: 'Preciso de três coisas: tempo, dinheiro e paciência.'\n— E as reticências?\n— Mesmo uso: algo não dito, pausa dramática, insinuação. 'Se você quiser...'\n— E as aspas?\n— Para citar, para ironizar ou para indicar que uma palavra está sendo usada de forma especial: 'o chamado projeto de \"renovação\"'.",
          memoryPhrases: [
            "Dois pontos (:) = introduz lista, citação ou explicação",
            "Preciso de duas coisas: tempo e dinheiro.",
            "Reticências (...) = algo não dito, pausa, insinuação",
            "Bem, se você insistir... (insinuação)",
            "Aspas em PT: para citar, ironizar ou destacar palavra",
            "O chamado 'desenvolvimento' foi na verdade um retrocesso."
          ],
          oralProduction: "Escreva 3 frases com dois pontos, 3 com reticências e 3 com aspas em português.",
          exercises: [
            { id: "PT-EXTRA-U1-L3-E1", type: "multiple_choice", skill: "grammar", question: "Qual sinal completa corretamente: 'Ela disse uma coisa importante___ não vou mais esperá-lo.'?", options: [":", ";", ",", "—"], answer: 0, explanation: "Dois pontos (:) introduz o que ela disse — uma citação ou explicação do que é 'uma coisa importante'. 'Ela disse uma coisa importante: não vou mais esperá-lo.'" },
            { id: "PT-EXTRA-U1-L3-E2", type: "multiple_choice", skill: "grammar", question: "Em qual frase as reticências são usadas corretamente em português?", options: ["Eu vim... logo eu sou.", "Se você quiser vir..., pode vir.", "Não sei o que dizer... foi difícil.", "Preciso de ajuda... imediatamente!"], answer: 2, explanation: "'Não sei o que dizer... foi difícil.' — reticências indicando pausa e dificuldade de expressar. As outras têm problemas: D usaria ! sem reticências, B tem vírgula desnecessária após reticências." },
            { id: "PT-EXTRA-U1-L3-E3", type: "fill_blank", skill: "grammar", question: "Adicione dois pontos onde necessário: 'Ela tinha um sonho viajar pelo mundo inteiro.'", answer: ["Ela tinha um sonho: viajar pelo mundo inteiro."], hint: "dois pontos antes da explicação do sonho", explanation: "'Ela tinha um sonho: viajar pelo mundo inteiro.' — dois pontos introduzem o que era o sonho." },
            { id: "PT-EXTRA-U1-L3-E4", type: "translation", skill: "writing", question: "Traduza para português com pontuação correta: 'Necesito tres cosas: tiempo, dinero y suerte. Si no las tengo... no sé qué haré.'", answer: ["Preciso de três coisas: tempo, dinheiro e sorte. Se não as tiver... não sei o que farei.", "Preciso de três coisas: tempo, dinheiro e sorte. Sem elas... não sei o que farei."], explanation: "Dois pontos antes da lista. Reticências para a pausa/incerteza. 'Se não as tiver' = subjuntivo futuro em português." },
            { id: "PT-EXTRA-U1-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um texto de 10 linhas em português que use corretamente: dois pontos, reticências, aspas, vírgula e travessão no diálogo.", prompt: "Tema livre. Marque entre [ ] qual sinal usou e por quê.", hint: "Ela chegou com uma notícia [dois pontos]: o projeto foi cancelado. — Como assim? [pergunta] — disse ele, incrédulo [vírgula]. Bem... [reticências] é que o chamado 'investidor' [aspas]..." }
          ]
        },
        {
          id: "PT-EXTRA-U1-L4",
          title: "Vírgula em Português — Os Casos Mais Importantes",
          shadowing: "— A regra mais importante da vírgula em português é a mesma do espanhol: nunca entre sujeito e verbo.\n— 'A Maria, foi ao mercado' está errado?\n— Erradíssimo. 'A Maria foi ao mercado.' — sem vírgula.\n— E os aposto e vocativo?\n— Esses pedem vírgula: 'Maria, venha aqui.' ou 'João, meu amigo, chegou ontem.'\n— E as orações adjetivas?\n— Com vírgula = explicativa (informação adicional). Sem vírgula = restritiva (identifica qual).",
          memoryPhrases: [
            "NUNCA vírgula entre sujeito e verbo",
            "A Maria foi ao mercado. (sem vírgula) ✅",
            "Vocativo: Maria, venha aqui! (vírgula depois do nome)",
            "Aposto: João, meu irmão mais velho, chegou. (vírgulas)",
            "Explicativa: Minha irmã, que mora em SP, veio visitar. (vírgulas)",
            "Restritiva: A aluna que chegou atrasada ficou de recuperação. (sem)"
          ],
          oralProduction: "Escreva 8 frases em português praticando o uso correto da vírgula.",
          exercises: [
            { id: "PT-EXTRA-U1-L4-E1", type: "multiple_choice", skill: "grammar", question: "Qual frase está correta?", options: ["O Pedro, foi ao cinema.", "O Pedro foi ao cinema.", "O Pedro foi, ao cinema.", "O, Pedro foi ao cinema."], answer: 1, explanation: "NUNCA vírgula entre sujeito e verbo em português. 'O Pedro foi ao cinema.' — sem vírgula entre 'O Pedro' (sujeito) e 'foi' (verbo)." },
            { id: "PT-EXTRA-U1-L4-E2", type: "multiple_choice", skill: "grammar", question: "Qual é a diferença de significado? A) 'Os alunos que chegaram atrasados perderam a aula.' B) 'Os alunos, que chegaram atrasados, perderam a aula.'", options: ["São iguais", "A: só os atrasados perderam. B: TODOS os alunos perderam (e todos chegaram atrasados).", "A: todos perderam. B: só os atrasados.", "A é informal, B é formal."], answer: 1, explanation: "A (sem vírgula, restritiva): especifica QUAIS alunos (os atrasados). B (com vírgulas, explicativa): TODOS os alunos perderam a aula, e TODOS chegaram atrasados." },
            { id: "PT-EXTRA-U1-L4-E3", type: "fill_blank", skill: "grammar", question: "Adicione vírgulas onde necessário: 'Carlos meu melhor amigo que mora em Porto Alegre vai me visitar semana que vem.'", answer: ["Carlos, meu melhor amigo, que mora em Porto Alegre, vai me visitar semana que vem."], hint: "aposto entre vírgulas + explicativa entre vírgulas", explanation: "'Carlos, meu melhor amigo,' (aposto entre vírgulas), 'que mora em Porto Alegre,' (explicativa entre vírgulas), 'vai me visitar semana que vem.' (verbo sem vírgula antes)." },
            { id: "PT-EXTRA-U1-L4-E4", type: "translation", skill: "writing", question: "Traduza com vírgulas corretas: 'Mi hermana, que vive en Río, viene el lunes. La chica que habló ayer es mi prima.'", answer: ["Minha irmã, que mora no Rio, vem na segunda. A garota que falou ontem é minha prima.", "Minha irmã, que mora no Rio de Janeiro, chega na segunda-feira. A moça que falou ontem é minha prima."], explanation: "'Minha irmã, que mora no Rio,' — explicativa com vírgulas. 'A garota que falou ontem' — restritiva sem vírgulas (identifica qual garota)." },
            { id: "PT-EXTRA-U1-L4-E5", type: "free_writing", skill: "writing", question: "Corrija as vírgulas neste texto (há 5 erros): 'Minha mãe, é médica. Ela trabalha, no hospital público. O hospital que fica no centro da cidade, atende muitas pessoas. Maria minha colega de trabalho também é médica e mora perto.'", prompt: "Identifique cada erro e justifique a correção.", hint: "1. Minha mãe é médica. (nunca vírgula sujeito-verbo) 2. Ela trabalha no hospital... 3. O hospital que fica no centro (restritiva, sem vírgula)... 4. Maria, minha colega... (aposto)" }
          ]
        },
        {
          id: "PT-EXTRA-U1-L5",
          title: "Revisão — Pontuação Portuguesa Completa",
          shadowing: "— Resumindo as diferenças principais entre pontuação em português e espanhol.\n— Primeira: português não tem sinais de abertura ¿ e ¡.\n— Segunda: o travessão em português é mais simples — só uma raya por fala.\n— Terceira: aspas em português são as duplas normais, não as latinas «».\n— E as semelhanças?\n— Dois pontos, ponto e vírgula e reticências têm os mesmos usos.\n— E a vírgula?\n— Mesmo princípio: nunca entre sujeito e verbo. O resto é muito similar.",
          memoryPhrases: [
            "DIFERENÇAS PT-ES: sem ¿ nem ¡ / aspas duplas normais",
            "Travessão PT: — fala (mais simples que o ES — fala — verbo —)",
            "IGUAL em PT e ES: : ; ... e regra geral da vírgula",
            "Aposto e vocativo: vírgulas em PT e ES",
            "Explicativa vs restritiva: mesma lógica em PT e ES",
            "Ponto final: SEMPRE depois das aspas em PT"
          ],
          oralProduction: "Explique em português as 3 diferenças mais importantes de pontuação entre espanhol e português.",
          exercises: [
            { id: "PT-EXTRA-U1-L5-E1", type: "multiple_choice", skill: "grammar", question: "Qual afirmação sobre pontuação em português é FALSA?", options: ["Não existe sinal de abertura de interrogação", "A vírgula pode separar sujeito e verbo para dar ênfase", "O travessão é usado para diálogos", "O ponto e vírgula separa orações relacionadas"], answer: 1, explanation: "FALSA: A vírgula NUNCA separa sujeito e verbo em português. Não existe exceção estilística para isso — é sempre um erro." },
            { id: "PT-EXTRA-U1-L5-E2", type: "multiple_choice", skill: "grammar", question: "Qual texto tem pontuação completamente correta em português?", options: ["¡Que dia lindo! ¿Você viu o pôr do sol?", "Que dia lindo! Você viu o pôr do sol?", "Que dia lindo¡ Você viu o pôr do sol¿", "!Que dia lindo! ?Você viu o pôr do sol?"], answer: 1, explanation: "'Que dia lindo! Você viu o pôr do sol?' — exclamação e interrogação apenas com sinal final, sem abertura." },
            { id: "PT-EXTRA-U1-L5-E3", type: "fill_blank", skill: "grammar", question: "Corrija a pontuação: '¡Que surpresa! ¿Por que você veio?' → correto em português:", answer: ["Que surpresa! Por que você veio?"], hint: "remova os sinais de abertura", explanation: "Em português: 'Que surpresa! Por que você veio?' — sem sinais de abertura ¡¿." },
            { id: "PT-EXTRA-U1-L5-E4", type: "translation", skill: "writing", question: "Traduza com pontuação completamente correta para português: '¡Oye, Juan! ¿Sabes qué hora es? —Son las tres —respondió él—. ¡Llegas tarde!'", answer: ["Ei, João! Você sabe que horas são? — São três horas — respondeu ele. — Você está atrasado!", "Oi, João! Que horas são? — São três — disse ele. — Você chegou tarde!"], explanation: "Sem ¡ nem ¿. 'Que horas são?' (PT usa plural). Travessão simples no diálogo. ! só no final." },
            { id: "PT-EXTRA-U1-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um texto narrativo de 15 linhas em português com diálogo, que use corretamente: ! ? : ; ... — vírgula e aspas. Marque cada sinal e justifique.", prompt: "Tema: alguém que perdeu algo importante e o encontra inesperadamente.", hint: "Ela procurava as chaves há horas; estava desesperada. — Meu Deus! — exclamou. — Onde estão? De repente, viu um brilho: estavam debaixo do tapete..." }
          ]
        }
      ]
    },
    {
      id: "PT-EXTRA-U2",
      title: "Tipos de Texto em Português",
      description: "Narrativo, descritivo, expositivo, argumentativo e instrucional em português",
      lessons: [
        {
          id: "PT-EXTRA-U2-L1",
          title: "Texto Narrativo em Português",
          shadowing: "— O texto narrativo em português usa os mesmos tempos do espanhol, mas com outros nomes.\n— Pretérito perfeito simples = indefinido do espanhol.\n— Exato: 'Cheguei, vi e venci.' Ações pontuais que avançam a história.\n— E o pretérito imperfeito?\n— Igual ao espanhol: pinta o cenário de fundo. 'Estava chovendo quando cheguei.'\n— E o mais-que-perfeito?\n— Para o que aconteceu antes: 'Quando cheguei, ela já tinha saído.'\n— Os conectores temporais?\n— De repente, em seguida, logo depois, enfim, por fim, nesse momento.",
          memoryPhrases: [
            "Perfeito simples = motor da narrativa: cheguei, disse, foi",
            "Imperfeito = fundo/contexto: estava, havia, fazia frio",
            "Mais-que-perfeito: já tinha saído quando cheguei",
            "De repente / Nesse momento / Em seguida / Logo depois",
            "Por fim / Enfim = finalmente (PT coloquial: 'enfim' também = 'afinal')",
            "A história avança: perfeito. O cenário: imperfeito."
          ],
          oralProduction: "Conte em português uma história pessoal de 2 minutos usando os três tempos do passado.",
          exercises: [
            { id: "PT-EXTRA-U2-L1-E1", type: "multiple_choice", skill: "grammar", question: "Qual tempo verbal 'faz a história avançar' na narrativa em português?", options: ["Pretérito imperfeito", "Pretérito perfeito simples", "Mais-que-perfeito", "Presente"], answer: 1, explanation: "O pretérito perfeito simples (cheguei, disse, foi) é o motor da narrativa — faz os eventos avançarem. O imperfeito pinta o cenário estático." },
            { id: "PT-EXTRA-U2-L1-E2", type: "multiple_choice", skill: "grammar", question: "Complete a narrativa: 'Quando _____ (chegar) em casa, minha mãe já _____ (fazer) o jantar. _____ (sentar) à mesa e _____ (começar) a comer.'", options: ["cheguei, tinha feito, Sentei, comecei", "chegava, fez, Sentava, começava", "cheguei, fez, Sentei, começo", "chegava, tinha feito, Sentei, comecei"], answer: 0, explanation: "cheguei (perfeito simples - ação), tinha feito (mais-que-perfeito - anterior ao cheguei), Sentei, comecei (perfeito simples - ações que avançam)." },
            { id: "PT-EXTRA-U2-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete com o conector temporal adequado: 'Ela saiu de casa. _____, começou a chover. _____, ela não tinha guarda-chuva.' (De repente / Infelizmente)", answer: ["De repente, Infelizmente"], hint: "conectores para evento inesperado + comentário sobre situação", explanation: "'De repente, começou a chover.' (evento inesperado). 'Infelizmente, ela não tinha guarda-chuva.' (comentário sobre a situação)." },
            { id: "PT-EXTRA-U2-L1-E4", type: "translation", skill: "writing", question: "Traduza para português com os tempos corretos: 'Era una tarde tranquila cuando de repente sonó el teléfono. Ella respondió; era su hermano, que llevaba años sin llamar.'", answer: ["Era uma tarde tranquila quando de repente o telefone tocou. Ela atendeu; era seu irmão, que há anos não ligava.", "Era uma tarde calma quando de repente o telefone tocou. Ela atendeu — era seu irmão, que fazia anos que não ligava."], explanation: "Era (imperfeito-fundo), tocou (perfeito-evento), atendeu (perfeito-evento), era (imperfeito-identificação), não ligava / há anos não ligava (imperfeito-estado)." },
            { id: "PT-EXTRA-U2-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um texto narrativo de 15 linhas em português sobre um dia inesquecível. Use os três tempos do passado e pelo menos 5 conectores temporais.", prompt: "Marque entre [ ] qual tempo verbal usou e por quê.", hint: "Era uma manhã comum [imperfeito] quando de repente [conector] o telefone tocou [perfeito]. Eu ainda estava [imperfeito] dormindo quando..." }
          ]
        },
        {
          id: "PT-EXTRA-U2-L2",
          title: "Texto Descritivo em Português",
          shadowing: "— O texto descritivo em português é estático: pinta com palavras sem avançar no tempo.\n— Qual é o tempo verbal principal?\n— O presente ou o imperfeito. Sem ações que fazem a história progredir.\n— O que é típico?\n— Adjetivos precisos, comparações, verbos de estado: ser, estar, ter, parecer, ficar.\n— E o vocabulário?\n— 'Ficar' é muito usado em PT para localização: 'A escola fica na rua central.'\n— Em espanhol seria 'estar'.\n— Exato. 'Ficar' = estar/quedar em sentido de localização. Uma das maiores diferenças PT-ES.",
          memoryPhrases: [
            "Descrição = presente ou imperfeito (estático)",
            "FICAR = localização em PT: 'A escola fica na rua...'",
            "Verbos: ser, estar, ter, parecer, ficar, medir, pesar",
            "Comparações: tão... quanto / mais... do que",
            "Cores + adjetivos: tingido de / repleto de / coberto de",
            "Sensorial: cheirar a / soar como / parecer de"
          ],
          oralProduction: "Descreva em português um lugar que você conhece sem mencionar o nome — o parceiro tenta adivinhar.",
          exercises: [
            { id: "PT-EXTRA-U2-L2-E1", type: "multiple_choice", skill: "grammar", question: "Como se diz 'El banco está en la calle principal' em português?", options: ["O banco está na rua principal.", "O banco fica na rua principal.", "O banco é na rua principal.", "O banco tem na rua principal."], answer: 1, explanation: "'O banco fica na rua principal.' — FICAR é o verbo de localização em português: onde algo está situado. 'Estar' em PT é mais para estado temporário do que localização." },
            { id: "PT-EXTRA-U2-L2-E2", type: "multiple_choice", skill: "grammar", question: "Qual texto é predominantemente descritivo?", options: ["Primeiro, misture a farinha. Em seguida, acrescente os ovos.", "A praça era enorme. As árvores centenárias davam sombra aos bancos.", "Acredito que devemos investir mais em educação. Os dados mostram que...", "Ele chegou tarde. O ônibus havia quebrado."], answer: 1, explanation: "'A praça era enorme. As árvores centenárias davam sombra...' — imperfeito descritivo, adjetivos, sem progressão de eventos." },
            { id: "PT-EXTRA-U2-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete a descrição: 'A cidade _____ (ser) antiga e _____ (ter) ruas estreitas que _____ (cheirar) a especiarias. _____ (ficar) no alto de uma colina.'", answer: ["era, tinha, cheiravam, Ficava"], hint: "imperfeito descritivo + ficar para localização", explanation: "era, tinha, cheiravam (imperfeito descritivo), Ficava (localização com FICAR no imperfeito)." },
            { id: "PT-EXTRA-U2-L2-E4", type: "translation", skill: "writing", question: "Traduza para português esta descrição: 'La biblioteca quedaba en el centro. Era un edificio enorme, repleto de libros que olían a papel viejo.'", answer: ["A biblioteca ficava no centro. Era um edifício enorme, repleto de livros que cheiravam a papel velho.", "A biblioteca ficava no centro da cidade. Era um prédio enorme, cheio de livros que cheiravam a papel antigo."], explanation: "FICAVA (localização com FICAR), era (imperfeito), repleto/cheio de (adjetivo), cheiravam a (verbo sensorial + preposição 'a')." },
            { id: "PT-EXTRA-U2-L2-E5", type: "free_writing", skill: "writing", question: "Escreva uma descrição de 12 linhas em português de um lugar que você ama. Use FICAR para localização, pelo menos 10 adjetivos, 3 comparações e verbos sensoriais.", prompt: "Estrutura: parágrafo 1 = visão geral e localização / parágrafo 2 = detalhes visuais / parágrafo 3 = sons, cheiros, sensações.", hint: "Meu lugar favorito fica... O local tem... As árvores são tão altas quanto... O ar cheira a... O som de... parece..." }
          ]
        },
        {
          id: "PT-EXTRA-U2-L3",
          title: "Texto Expositivo em Português",
          shadowing: "— O texto expositivo em português informa sem tomar partido.\n— Quais são suas marcas?\n— Presente verbal atemporal, vocabulário técnico ou preciso, ausência de primeira pessoa.\n— E os conectores específicos?\n— Para explicar: ou seja, isto é, quer dizer. Para adicionar: além disso, ademais, outrossim.\n— 'Outrossim' é muito formal?\n— Sim, é literário. O mais comum é 'além disso' ou 'ademais'.\n— E para concluir?\n— Em suma, portanto, assim sendo, em definitivo, concluindo.",
          memoryPhrases: [
            "Presente atemporal: 'A fotossíntese é o processo pelo qual...'",
            "Ou seja / isto é / quer dizer = es decir (explicação)",
            "Além disso / ademais = asimismo / además",
            "Outrossim = além disso (muito formal, literário)",
            "Em suma / portanto / assim sendo = en definitiva / por lo tanto",
            "3ª pessoa + sem opinião = marca do expositivo"
          ],
          oralProduction: "Explique em português, de forma expositiva, como funciona algo que você conhece bem.",
          exercises: [
            { id: "PT-EXTRA-U2-L3-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a principal marca do texto expositivo?", options: ["Uso do imperfeito para descrever", "Presente atemporal e ausência de opinião pessoal", "Primeira pessoa e argumentação", "Verbos no imperativo"], answer: 1, explanation: "O texto expositivo usa o presente atemporal ('A energia solar é...' — verdade geral) e evita a primeira pessoa e opinião. O objetivo é informar objetivamente." },
            { id: "PT-EXTRA-U2-L3-E2", type: "multiple_choice", skill: "grammar", question: "Qual conector é típico do texto expositivo para explicar um conceito em português?", options: ["No entanto", "Embora", "Ou seja / isto é", "Portanto"], answer: 2, explanation: "'Ou seja' / 'isto é' reformulam e esclarecem — típicos do texto expositivo. 'No entanto' e 'embora' são adversativos. 'Portanto' é conclusivo." },
            { id: "PT-EXTRA-U2-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete o texto expositivo: 'A energia solar _____ (ser) renovável, _____ dizer, não _____ (esgotar) com o uso. _____ _____, apresenta limitações em regiões com pouca luz.'", answer: ["é, ou, se esgota, No entanto"], hint: "presente atemporal + ou seja + no entanto", explanation: "é (presente atemporal), ou seja (conector explicativo), se esgota (presente atemporal), No entanto (adversativo para a limitação)." },
            { id: "PT-EXTRA-U2-L3-E4", type: "translation", skill: "writing", question: "Reescreva de forma expositiva (sem opinião): 'Eu acho que o português é difícil para hispanofalantes. Na minha opinião, a pronúncia é o maior desafio.'", answer: ["O português apresenta particularidades fonéticas que representam um desafio para os falantes de espanhol, especialmente no que diz respeito à pronúncia das vogais nasais.", "O português do Brasil possui características fonéticas que dificultam sua aquisição por parte de falantes de espanhol, sobretudo no âmbito da pronúncia."], explanation: "Remove 'eu acho', 'na minha opinião'. Usa presente atemporal e terceira pessoa. Foco em fatos verificáveis." },
            { id: "PT-EXTRA-U2-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um texto expositivo de 12 linhas em português explicando o que é o 'duende' de Lorca para um leitor brasileiro que nunca ouviu falar. Use presente atemporal, 'ou seja', 'além disso', 'no entanto' e evite a primeira pessoa.", prompt: "Estruture: definição → características → exemplos → importância → limitações.", hint: "O 'duende' é um conceito estético desenvolvido pelo poeta Federico García Lorca... Ou seja, trata-se de... Além disso, este fenômeno... No entanto, o duende..." }
          ]
        },
        {
          id: "PT-EXTRA-U2-L4",
          title: "Texto Argumentativo em Português",
          shadowing: "— O texto argumentativo em português tem a mesma estrutura do espanhol: tese, argumentos, conclusão.\n— E os conectores?\n— Para argumentar: em primeiro lugar, além disso, ademais, cabe ressaltar.\n— Para contra-argumentar: no entanto, todavia, contudo, embora.\n— Há diferença entre eles?\n— 'No entanto' e 'todavia' são mais formais. 'Mas' é mais coloquial. 'Contudo' é literário.\n— E para concluir?\n— Portanto, assim sendo, em suma, diante do exposto.",
          memoryPhrases: [
            "Tese: A educação bilíngue apresenta vantagens significativas.",
            "Em primeiro lugar / Para começar = En primer lugar",
            "Além disso / Ademais = Asimismo / Además",
            "No entanto / Todavia / Contudo = Sin embargo (adversativo formal)",
            "Embora = aunque/si bien (concessivo)",
            "Portanto / Assim sendo / Diante do exposto = Por todo lo anterior"
          ],
          oralProduction: "Defenda em português uma posição sobre um tema polêmico usando a estrutura argumentativa completa.",
          exercises: [
            { id: "PT-EXTRA-U2-L4-E1", type: "multiple_choice", skill: "grammar", question: "Qual conector introduz um contra-argumento com elegância em português?", options: ["Em primeiro lugar", "Além disso", "Embora seja verdade que... no entanto...", "Diante do exposto"], answer: 2, explanation: "'Embora seja verdade que... no entanto...' = 'Si bien es cierto que... sin embargo...' — reconhece o argumento contrário antes de refutá-lo. Mais sofisticado que 'mas'." },
            { id: "PT-EXTRA-U2-L4-E2", type: "multiple_choice", skill: "grammar", question: "Qual é a diferença entre 'no entanto', 'todavia' e 'mas'?", options: ["São sinônimos, sem diferença", "'No entanto' e 'todavia' são mais formais; 'mas' é mais coloquial", "'Mas' é mais formal que os outros", "'Todavia' é errado em português"], answer: 1, explanation: "'No entanto' e 'todavia' são conectores formais do texto argumentativo/expositivo. 'Mas' é o adversativo coloquial mais comum na fala e em textos informais." },
            { id: "PT-EXTRA-U2-L4-E3", type: "fill_blank", skill: "grammar", question: "Complete o texto argumentativo: 'Acredito que as redes sociais fazem mais mal do que bem. _____ _____, elas geram ansiedade. _____ _____, são viciantes. _____, alguns argumentam que conectam pessoas. _____, os riscos superam os benefícios.'", answer: ["Em primeiro lugar, Além disso, No entanto, Portanto"], hint: "arg.1 / arg.2 / contra-arg. / conclusão", explanation: "Em primeiro lugar (arg.1), Além disso (arg.2), No entanto (contra-argumento), Portanto (conclusão)." },
            { id: "PT-EXTRA-U2-L4-E4", type: "translation", skill: "writing", question: "Traduza para português: 'Si bien es cierto que el trabajo remoto reduce los costos, sin embargo los estudios muestran que la productividad cae. Por todo lo anterior, el modelo híbrido parece la mejor opción.'", answer: ["Embora seja verdade que o trabalho remoto reduz os custos, no entanto os estudos mostram que a produtividade cai. Diante do exposto, o modelo híbrido parece a melhor opção.", "Embora o trabalho remoto reduza os custos, os estudos mostram que a produtividade diminui. Portanto, o modelo híbrido parece ser a melhor solução."], explanation: "Embora... no entanto (concessivo + adversativo). Diante do exposto / Portanto (conclusivo). Reduz/reduza — indicativo ou subjuntivo ambos corretos." },
            { id: "PT-EXTRA-U2-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um texto argumentativo de 15 linhas em português sobre se a inteligência artificial vai substituir os professores. Use a estrutura completa: tese → 2 argumentos → 1 contra-argumento → conclusão.", prompt: "Use: em primeiro lugar / além disso / embora... no entanto / diante do exposto.", hint: "Tese: A inteligência artificial não substituirá os professores... Em primeiro lugar... Além disso... Embora seja verdade que... no entanto... Diante do exposto..." }
          ]
        },
        {
          id: "PT-EXTRA-U2-L5",
          title: "Texto Instrucional em Português",
          shadowing: "— O texto instrucional em português usa o imperativo ou o infinitivo impessoal.\n— Como no espanhol?\n— Muito similar, mas em português o infinitivo impessoal é ainda mais comum em textos formais.\n— Exemplos?\n— 'Preaquecer o forno a 180°C.' 'Adicionar a farinha aos poucos.' 'Misturar bem.'\n— E os conectores de sequência?\n— Primeiro / Em seguida / Depois / Por fim / Finalmente. Igual ao espanhol.\n— E 'acrescentar'?\n— 'Acrescentar' = agregar/añadir — muito usado em receitas. Ou 'adicionar'.",
          memoryPhrases: [
            "Imperativo: Misture bem. / Adicione sal. / Corte em pedaços.",
            "Infinitivo impessoal (formal): Misturar bem. / Preaquecer o forno.",
            "Impessoal com SE: Mistura-se bem. / Acrescenta-se...",
            "Primeiro / Em seguida / Depois / Por fim / Finalmente",
            "Acrescentar = agregar / Misturar = mezclar / Preaquecer = precalentar",
            "Certificar-se de que + subjuntivo = asegurarse de que"
          ],
          oralProduction: "Explique em português como fazer uma receita ou como usar um aplicativo.",
          exercises: [
            { id: "PT-EXTRA-U2-L5-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a forma verbal preferida em instruções formais escritas em português?", options: ["Imperativo: 'Adicione o sal!'", "Infinitivo impessoal: 'Adicionar o sal'", "Futuro: 'Você adicionará o sal'", "Subjuntivo: 'Que se adicione o sal'"], answer: 1, explanation: "O infinitivo impessoal (Adicionar, Misturar, Preaquecer) é preferido em textos instrucionais formais: receitas, manuais, bulas." },
            { id: "PT-EXTRA-U2-L5-E2", type: "multiple_choice", skill: "grammar", question: "Qual conector NÃO é típico de texto instrucional?", options: ["Em seguida", "Por fim", "No entanto", "Primeiramente"], answer: 2, explanation: "'No entanto' é adversativo — típico de textos argumentativos. Textos instrucionais usam conectores de sequência temporal: em seguida, por fim, primeiramente." },
            { id: "PT-EXTRA-U2-L5-E3", type: "fill_blank", skill: "grammar", question: "Reescreva em infinitivo impessoal formal: 'Primeiro, misture a farinha com o açúcar. Depois, adicione os ovos. Por fim, asse por 30 minutos.'", answer: ["Primeiro, misturar a farinha com o açúcar. Depois, adicionar os ovos. Por fim, assar por 30 minutos."], hint: "imperativos → infinitivos", explanation: "misture → misturar / adicione → adicionar / asse → assar. Infinitivo impessoal para instruções formais." },
            { id: "PT-EXTRA-U2-L5-E4", type: "translation", skill: "writing", question: "Traduza para instrucional formal em português: 'Primero, descargar la aplicación. A continuación, crear una cuenta. Por último, confirmar el registro.'", answer: ["Primeiro, baixar o aplicativo. Em seguida, criar uma conta. Por último, confirmar o cadastro.", "Primeiramente, fazer o download do aplicativo. Em seguida, criar uma conta. Por fim, confirmar o cadastro."], explanation: "Infinitivos impessoais. Baixar = descargar (app). Em seguida / Por fim = conectores de sequência. Cadastro = registro (PT)." },
            { id: "PT-EXTRA-U2-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um texto instrucional de 12 linhas em português sobre como aprender português eficazmente em 3 meses. Use infinitivos impessoais, conectores de sequência e pelo menos 2 estruturas com 'certificar-se de que + subjuntivo'.", prompt: "Estruture em etapas numeradas ou com conectores de sequência.", hint: "1. Estabelecer um objetivo claro. Em seguida, dedicar... Certificar-se de que o estudo seja consistente... Por fim, praticar com falantes nativos..." }
          ]
        }
      ]
    },
    {
      id: "PT-EXTRA-U3",
      title: "Acento Diferencial em Português — pôr/por, pêlo/pelo, vêm/vem",
      description: "Os pares que mudam de significado com ou sem acento em português",
      lessons: [
        {
          id: "PT-EXTRA-U3-L1",
          title: "PÔR vs POR / PÔDE vs PODE / VÊM vs VEM",
          shadowing: "— O acento diferencial em português é menos complexo que no espanhol, mas tem suas armadilhas.\n— Quais são as mais importantes?\n— 'Pôr' com acento é o verbo (put). 'Por' sem acento é a preposição.\n— 'Pôde' com acento é o passado. 'Pode' sem acento é o presente.\n— E 'vêm'?\n— 'Vêm' com acento é a terceira pessoa do plural. 'Vem' sem acento é a terceira do singular.\n— Essas distinções existem no espanhol?\n— Não da mesma forma. Por isso hispanohablantes as ignoram e erram.",
          memoryPhrases: [
            "PÔR (verbo, colocar) ≠ POR (preposição)",
            "Vou pôr o livro por cima da mesa. (os dois na mesma frase!)",
            "PÔDE (conseguiu, passado) ≠ PODE (consegue, presente)",
            "Ela pôde ontem / Ela pode hoje. (tempo muda o acento!)",
            "VÊM (eles/elas, plural) ≠ VEM (ele/ela, singular)",
            "Eles vêm amanhã. / Ela vem amanhã."
          ],
          oralProduction: "Crie 8 frases em português usando cada par na mesma frase ou em frases contrastivas.",
          exercises: [
            { id: "PT-EXTRA-U3-L1-E1", type: "multiple_choice", skill: "grammar", question: "Qual frase está correta?", options: ["Vou por o livro por cima.", "Vou pôr o livro por cima.", "Vou pôr o livro pôr cima.", "Vou por o livro pôr cima."], answer: 1, explanation: "'Vou pôr o livro por cima.' — PÔR (verbo colocar, com acento circunflexo) + POR (preposição, sem acento)." },
            { id: "PT-EXTRA-U3-L1-E2", type: "multiple_choice", skill: "grammar", question: "Complete: 'Ela _____ ir ontem, mas hoje não _____.'", options: ["pôde / pode", "pode / pôde", "pode / pode", "pôde / pôde"], answer: 0, explanation: "PÔDE (passado, conseguiu — com acento) + PODE (presente, consegue — sem acento). 'Ela pôde ir ontem, mas hoje não pode.'" },
            { id: "PT-EXTRA-U3-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Eles _____ visitar, mas ela não _____ vir.' (plural vs singular)", answer: ["vêm", "vem"], hint: "VÊM = plural (eles/elas) / VEM = singular (ele/ela)", explanation: "VÊM (terceira pessoa do plural, com acento) / VEM (terceira pessoa do singular, sem acento). 'Eles vêm visitar, mas ela não vem vir.'" },
            { id: "PT-EXTRA-U3-L1-E4", type: "translation", skill: "writing", question: "Traduza para português com os acentos corretos: 'Ellos vienen mañana pero ella no puede venir. Ayer pudo pero hoy no.'", answer: ["Eles vêm amanhã, mas ela não pode vir. Ontem ela pôde, mas hoje não.", "Eles vêm amanhã, mas ela não consegue vir. Ontem pôde, mas hoje não."], explanation: "VÊM (plural, circunflexo), PODE (singular, sem acento), PÔde (passado, circunflexo)." },
            { id: "PT-EXTRA-U3-L1-E5", type: "free_writing", skill: "writing", question: "Escreva 6 frases em português usando: pôr/por (2 frases), pôde/pode (2 frases) e vêm/vem (2 frases). Em cada par, use os dois elementos.", prompt: "Exemplo: 'Preciso pôr o documento por baixo da pilha.'", hint: "Pôr/por: Posso pôr o café por você? / Por favor, coloque por aqui. / Pôde/pode: Pôde ontem, pode hoje? / Vêm/vem: Eles vêm cedo, mas ela vem tarde." }
          ]
        },
        {
          id: "PT-EXTRA-U3-L2",
          title: "Interrogativos em Português — SEMPRE com Acento",
          shadowing: "— Assim como no espanhol, os pronomes interrogativos em português sempre levam acento.\n— Quais são?\n— Quê, quem, qual, como, quando, onde, quanto, por quê.\n— Atenção especial para 'por quê'.\n— Sim: 'por quê' separado e com acento é a pergunta. 'Porque' junto e sem acento é a resposta.\n— 'Porquê' junto com acento?\n— É o substantivo: 'o porquê das coisas' — a razão. Três formas diferentes para sons parecidos!\n— E 'quê' sozinho?\n— Nas perguntas diretas no final: 'Você quer o quê?'",
          memoryPhrases: [
            "POR QUÊ? (pergunta, separado, acento) = ¿Por qué?",
            "PORQUE (resposta, junto, sem acento) = porque",
            "O PORQUÊ (substantivo, junto, com acento) = el porqué",
            "Por que você veio? / Vim porque queria. / O porquê da minha vinda.",
            "QUÊ sozinho no final: Você quer o quê?",
            "ONDE / QUANDO / COMO / QUEM = sempre acento em interrogativas"
          ],
          oralProduction: "Formule 5 perguntas diretas e 5 indiretas em português usando todos os interrogativos.",
          exercises: [
            { id: "PT-EXTRA-U3-L2-E1", type: "multiple_choice", skill: "grammar", question: "Qual sequência está correta?", options: ["Por que você foi? / Fui porque quis. / O porque da viagem.", "Por quê você foi? / Fui porque quis. / O porquê da viagem.", "Por que você foi? / Fui porque quis. / O porquê da viagem.", "Porquê você foi? / Fui por que quis. / O porque da viagem."], answer: 2, explanation: "'Por que você foi?' (pergunta: separado, sem acento antes do substantivo) / 'Fui porque quis.' (resposta: junto, sem acento) / 'O porquê da viagem.' (substantivo: junto, com acento)." },
            { id: "PT-EXTRA-U3-L2-E2", type: "multiple_choice", skill: "grammar", question: "Qual frase tem os acentos interrogativos corretos?", options: ["Não sei onde você mora.", "Não sei onde você mora.", "Nao sei onde voce mora.", "Não sei onde você mora."], answer: 1, explanation: "'Não sei onde você mora.' — ONDE com acento mesmo em pergunta indireta. Em português, os interrogativos indiretos também levam acento." },
            { id: "PT-EXTRA-U3-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete com a forma correta: 'Você sabe _____ ele veio? / Ele veio _____ precisava de ajuda. / Ninguém entende o _____ de tudo isso.'", answer: ["por que, porque, porquê"], hint: "pergunta / resposta / substantivo", explanation: "por que (pergunta indireta) / porque (resposta, causa) / porquê (substantivo = a razão)." },
            { id: "PT-EXTRA-U3-L2-E4", type: "translation", skill: "writing", question: "Traduza com acentuação correta: '¿Por qué no viniste? —Porque no sabía dónde ni cuándo era. Nadie me dijo el porqué.'", answer: ["Por que você não veio? — Porque eu não sabia onde nem quando era. Ninguém me disse o porquê.", "Por que não vieste? — Porque não sabia onde nem quando. Ninguém me explicou o porquê."], explanation: "Por que (pergunta), porque (causa/resposta), onde, quando (interrogativos indiretos, com acento), o porquê (substantivo)." },
            { id: "PT-EXTRA-U3-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um texto de 10 linhas em português que use: por que (pergunta), porque (resposta), porquê (substantivo), onde, quando, como, quem — todos com acentuação correta. Sublinhe cada ocorrência.", prompt: "Texto livre. O objetivo é usar todos os interrogativos e as três formas de por que/porque/porquê naturalmente.", hint: "Por que isso aconteceu? Porque... Não sei onde... Quem pode explicar o porquê... Quando e como..." }
          ]
        },
        {
          id: "PT-EXTRA-U3-L3",
          title: "Acento nas Formas Verbais — Cantámos vs Cantamos",
          shadowing: "— Uma diferença importante: em Portugal, 'cantámos' com acento é o passado. 'Cantamos' sem acento é o presente.\n— E no Brasil?\n— No Brasil, a reforma de 2009 eliminou esse acento diferencial. 'Cantamos' é igual para os dois tempos.\n— Como diferenciar então?\n— Pelo contexto: 'Ontem cantamos muito' = passado. 'Hoje cantamos sempre' = presente.\n— Isso confunde?\n— Um pouco. Mas é a norma brasileira. Para hispanofalantes que aprendem PB, não há esse problema.\n— E verbos como 'têm' vs 'tem'?\n— Esses continuam com distinção: TÊM (plural) / TEM (singular).",
          memoryPhrases: [
            "No PB: cantamos = presente E passado (pelo contexto)",
            "TÊM (eles têm, plural) ≠ TEM (ele tem, singular) — acento mantido",
            "VÊM (eles vêm, plural) ≠ VEM (ele vem, singular) — acento mantido",
            "DÊEM (eles deem? = subj.) / DÊ (dê! imperativo) — menos comum",
            "Ontem cantamos / Hoje cantamos = contexto diferencia",
            "Em Portugal: cantámos (passado) ≠ cantamos (presente)"
          ],
          oralProduction: "Produza frases em português distinguindo singular e plural com os pares têm/tem e vêm/vem.",
          exercises: [
            { id: "PT-EXTRA-U3-L3-E1", type: "multiple_choice", skill: "grammar", question: "Qual frase está correta no português brasileiro?", options: ["Eles têm um carro e ela tem dois.", "Eles tem um carro e ela têm dois.", "Eles têm um carro e ela têm dois.", "Eles tem um carro e ela tem dois."], answer: 0, explanation: "'Eles TÊM (plural, com circunflexo) um carro e ela TEM (singular, sem acento) dois.' — TÊM para terceira pessoa do plural, TEM para terceira do singular." },
            { id: "PT-EXTRA-U3-L3-E2", type: "multiple_choice", skill: "grammar", question: "Em PB, como se diferencia 'compramos ontem' de 'compramos todos os dias'?", options: ["Pelo acento: comprámos (passado) / compramos (presente)", "Pelo contexto: 'ontem' indica passado, 'todos os dias' indica presente", "Não há diferença — são idênticos", "Pelo tom de voz"], answer: 1, explanation: "No português brasileiro (após o Acordo Ortográfico de 1990), 'compramos' é idêntico para presente e passado. A distinção é feita pelo contexto e pelos advérbios de tempo." },
            { id: "PT-EXTRA-U3-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Eles _____ muito dinheiro, mas ela não _____ nada. Eles _____ amanhã, mas ela _____ na semana que vem.'", answer: ["têm, tem, vêm, vem"], hint: "têm/tem (singular vs plural) + vêm/vem (singular vs plural)", explanation: "TÊEM/TÊM (plural) + TEM (singular) para 'ter'. VÊM (plural) + VEM (singular) para 'vir'." },
            { id: "PT-EXTRA-U3-L3-E4", type: "translation", skill: "writing", question: "Traduza para português, distinguindo singular e plural: 'Ellos tienen razón pero ella también tiene. Ellos vienen hoy y ella viene mañana.'", answer: ["Eles têm razão, mas ela também tem. Eles vêm hoje e ela vem amanhã.", "Eles têm razão e ela também tem. Eles vêm hoje, ela vem amanhã."], explanation: "TÊM (plural eles) + TEM (singular ela). VÊM (plural eles) + VEM (singular ela)." },
            { id: "PT-EXTRA-U3-L3-E5", type: "free_writing", skill: "writing", question: "Escreva 8 frases em português usando os pares TÊM/TEM e VÊM/VEM, sendo que 4 frases devem ter os dois elementos do par na mesma frase.", prompt: "Exemplo: 'Eles têm mais experiência do que ela tem.'", hint: "Eles têm filhos mas ele não tem. / Elas vêm cedo mas ela vem tarde. / Meus amigos têm um apartamento e minha irmã tem uma casa. / Eles vêm visitar e ela vem depois." }
          ]
        },
        {
          id: "PT-EXTRA-U3-L4",
          title: "POR QUE vs PORQUE vs POR QUÊ vs PORQUÊ — Domínio Total",
          shadowing: "— Este é um dos pontos onde mais brasileiros erram, imagina um estrangeiro.\n— Mas agora entendo: são quatro formas diferentes com usos diferentes.\n— Exato. 'Por que' separado sem acento = pergunta direta ou indireta antes de verbo.\n— 'Porque' junto sem acento = resposta, causa, explicação.\n— 'Por quê' separado com acento = no final de frase ou pausa.\n— 'Porquê' junto com acento = substantivo.\n— Como saber qual usar?\n— Substitua por 'por qual razão' (pergunta), 'pois' (causa) ou 'a razão' (substantivo).",
          memoryPhrases: [
            "Por que = pergunta: Por que você foi? = Por qual razão você foi?",
            "Porque = causa: Fui porque quis. = Fui pois quis.",
            "Por quê = final de frase: Fui, mas não sei por quê.",
            "Porquê = substantivo: Explica o porquê. = Explica a razão.",
            "Teste: substitua por 'pois' → se funcionar, use 'porque'",
            "Teste: substitua por 'por qual razão' → se funcionar, use 'por que'"
          ],
          oralProduction: "Crie frases com cada uma das quatro formas em contextos diferentes.",
          exercises: [
            { id: "PT-EXTRA-U3-L4-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a forma correta? 'Não entendo _____ isso aconteceu.'", options: ["porque", "por que", "por quê", "porquê"], answer: 1, explanation: "'Não entendo por que isso aconteceu.' — pergunta indireta (= 'por qual razão isso aconteceu?'). Use 'por que' separado sem acento antes de verbo em pergunta direta ou indireta." },
            { id: "PT-EXTRA-U3-L4-E2", type: "multiple_choice", skill: "grammar", question: "Qual forma preenche: 'Ele saiu sem explicar o _____ de sua decisão.'?", options: ["porque", "por que", "por quê", "porquê"], answer: 3, explanation: "'O porquê de sua decisão' — substantivo (= 'a razão de sua decisão'). PORQUÊ junto com acento quando é substantivo, precedido de artigo." },
            { id: "PT-EXTRA-U3-L4-E3", type: "fill_blank", skill: "grammar", question: "Complete: '_____ você não veio? / Não vim _____ estava doente. / Você foi, mas não entendo _____.'", answer: ["Por que, porque, por quê"], hint: "pergunta / causa / final de frase", explanation: "Por que (pergunta direta), porque (causa = 'pois estava'), por quê (final de frase, depois de pausa)." },
            { id: "PT-EXTRA-U3-L4-E4", type: "translation", skill: "writing", question: "Traduza com as quatro formas corretas: '¿Por qué no vino? Porque estaba enfermo. No entiendo el porqué de su ausencia. Se fue sin decir por qué.'", answer: ["Por que não veio? Porque estava doente. Não entendo o porquê de sua ausência. Foi embora sem dizer por quê.", "Por que ele não veio? Porque estava doente. Não entendo o porquê da ausência dele. Saiu sem explicar por quê."], explanation: "Por que (pergunta), porque (causa), o porquê (substantivo), por quê (final de frase)." },
            { id: "PT-EXTRA-U3-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um texto de 12 linhas em português que use as quatro formas (por que, porque, por quê, porquê) pelo menos 2 vezes cada. Sublinhe cada ocorrência e indique qual forma é.", prompt: "Texto livre sobre qualquer tema. O objetivo é usar as quatro formas em contexto natural.", hint: "Por que [pergunta] ela não apareceu? Ninguém sabe por quê [fim]. Porque [causa] ela... O porquê [subst.] de tudo isso..." }
          ]
        },
        {
          id: "PT-EXTRA-U3-L5",
          title: "Revisão — Acento Diferencial em Português",
          shadowing: "— Resumindo: o acento diferencial em português é menos extenso que no espanhol.\n— Os casos mais importantes são?\n— Pôr/por, pôde/pode, vêm/vem, têm/tem, por que/porque/por quê/porquê.\n— E os interrogativos?\n— Onde, quando, como, quem, qual, quanto — sempre com acento em perguntas diretas ou indiretas.\n— Alguma pegadinha?\n— 'Por que' e 'porque' são o par mais confuso. E 'têm' vs 'tem' — muitos brasileiros erram também.\n— Dica final?\n— Contexto, contexto, contexto. Em PB, o contexto faz muito trabalho que o acento não faz.",
          memoryPhrases: [
            "Os pares mais importantes: pôr/por · pôde/pode · vêm/vem · têm/tem",
            "O quarteto do porque: por que / porque / por quê / porquê",
            "Interrogativos: onde · quando · como · quem · quanto (acento sempre)",
            "Contexto em PB: 'ontem fizemos' vs 'hoje fazemos' — acento igual!",
            "Erros mais comuns: 'por que' (causa) → deve ser 'porque'",
            "Erro 2: 'tem' no plural → deve ser 'têm'"
          ],
          oralProduction: "Ditado mental: ouça frases em português e escreva com os acentos corretos.",
          exercises: [
            { id: "PT-EXTRA-U3-L5-E1", type: "multiple_choice", skill: "grammar", question: "Quantos erros de acento há? 'Eles tem muito trabalho. Não sei porque não vem mais cedo. Quero saber o porque disso.'", options: ["2 erros", "3 erros", "4 erros", "5 erros"], answer: 2, explanation: "4 erros: TÊM (plural, precisa de circunflexo), PORQUE deve ser 'por que' (pergunta indireta), VÊM (plural, precisa de circunflexo), O PORQUÊ (substantivo, deve ser junto com acento). Total: 4 erros." },
            { id: "PT-EXTRA-U3-L5-E2", type: "multiple_choice", skill: "grammar", question: "Corrija a frase: 'Não sei por quê eles não vem, por que tem muito trabalho.'", options: ["Não sei por que eles não vêm, porque têm muito trabalho.", "Não sei porquê eles não vem, por que têm muito trabalho.", "Não sei por que eles não vêm, porquê têm muito trabalho.", "Não sei por quê eles não vêm, porque têm muito trabalho."], answer: 0, explanation: "'Não sei por que eles não vêm, porque têm muito trabalho.' — por que (pergunta indireta, antes de verbo), vêm (plural), porque (causa), têm (plural)." },
            { id: "PT-EXTRA-U3-L5-E3", type: "fill_blank", skill: "grammar", question: "Coloque os acentos corretos: 'Eles tem razão. Não sei porque não vem mais. Vou por o documento por baixo.'", answer: ["Eles têm razão. Não sei por que não vêm mais. Vou pôr o documento por baixo."], hint: "têm (plural) / por que (pergunta indireta) / vêm (plural) / pôr (verbo)", explanation: "TÊM (plural), POR QUE (pergunta indireta = por qual razão), VÊM (plural), PÔR (verbo colocar)." },
            { id: "PT-EXTRA-U3-L5-E4", type: "translation", skill: "writing", question: "Traduza com TODOS os acentos corretos: '¿Por qué no tienen tiempo? Porque vienen tarde. No sé el porqué de eso.'", answer: ["Por que não têm tempo? Porque vêm tarde. Não sei o porquê disso.", "Por que eles não têm tempo? Porque vêm tarde demais. Não entendo o porquê disso."], explanation: "POR QUE (pergunta), TÊM (plural), PORQUE (causa), VÊM (plural), PORQUÊ (substantivo)." },
            { id: "PT-EXTRA-U3-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um texto de 12 linhas em português com: pôr/por, pôde/pode, têm/tem, vêm/vem, por que/porque/porquê e os interrogativos onde/quando/como. Sublinhe tudo e indique a regra de cada acento.", prompt: "Texto livre. O objetivo é demonstrar domínio completo do acento diferencial em português.", hint: "Eles têm [plural] uma teoria sobre por que [pergunta] as coisas mudam. Porque [causa] há razões que... O porquê [subst.] disso... Não sei onde [interr.] nem quando [interr.]..." }
          ]
        }
      ]
    }
  ]
};
