/* ============================ DATA ============================ */

const principles = [
 {n:'01', title:'Decisões baseadas em DADOS',
  short:'O feeling é a hipótese inicial; o dado é quem confirma. Decidir no escuro é apostar — decidir com dado é gerir.',
  meaning:'O feeling tem valor — é a hipótese inicial do líder experiente. Mas hipótese não é conclusão. Antes de agir, perguntamos: o dado confirma? Decidir no escuro é apostar; decidir com dado é gerir.',
  behaviors:['Antes de aprovar uma decisão relevante do time, pergunte "que dado sustenta isso?"','Transforme opinião em número: defina a métrica antes de discutir a solução.','Combata o viés de confirmação — busque ativamente o dado que contraria sua tese.','Se o dado não existe, mande buscá-lo antes de decidir; não preencha o vazio com achismo.'],
  practice:'Um gerente diz "acho que o cliente X vai fechar". Resposta Katz: "Ok, qual o histórico de conversão desse perfil? Quantos contatos já tivemos? Qual o ticket médio?" O feeling vira plano quando vira número.',
  framework:'Siilasmaa (Transforming Nokia): "Face facts" e "Ask why" — o \'porquê\' é onde mora a estratégia. Rumelt (O Crux): diagnostique antes de agir. Robert Greene: vigie o viés de confirmação.'},
 {n:'02', title:'Fazer o melhor sempre',
  short:'Excelência é o piso, não o teto. "Bom o suficiente" não é o padrão Katz.',
  meaning:'Excelência é o piso, não o teto. "Bom o suficiente" não é o padrão Katz. Isso vale para a entrega ao cliente e para a forma como cuidamos uns dos outros.',
  behaviors:['Estabeleça expectativas claras de qualidade — e não tolere mediocridade silenciosa.','Dê o exemplo: o padrão do time nunca sobe acima do padrão do líder.','Reconheça publicamente quem entrega acima da média; ela puxa o resto.','Separe \'pessoa\' de \'trabalho\': critique a ideia, nunca a pessoa.'],
  practice:'Ao revisar uma proposta mediana, o líder Katz não a aprova "para não criar atrito". Ele devolve com clareza: "isto ainda não é o nosso melhor — aqui está o gap".',
  framework:'Extreme Teams (Shaw): os melhores times são obcecados pelo trabalho; a Netflix dispensa até os medianos. Pixar (Catmull): "Criticize ideas, not people." Culture is the Way: o ownership mindset liga tudo.'},
 {n:'03', title:'Criatividade e inquietação',
  short:'A tensão saudável entre orgulho do que fizemos e insatisfação com o que ainda pode melhorar.',
  meaning:'Inquietação é não se acomodar com o que já funciona. É a tensão saudável entre orgulho do que fizemos e insatisfação com o que ainda pode ser melhor. Criatividade é o motor; inquietação é o combustível.',
  behaviors:['Proteja a inovação do dia a dia: reserve tempo para projetos que melhoram o status quo.','Em sessões de ideia, use amplificadores ("sim, e...", "e se...") em vez de silenciadores ("isso não vai dar certo").','Desafie o processo: pergunte "por que fazemos assim?" pelo menos uma vez por semana.','Dê incentivo para o time arriscar — e não puna a tentativa honesta que falhou.'],
  practice:'Um diretor que já bateu a meta pergunta "mas como dobramos isso no próximo ciclo?" em vez de comemorar e parar. A inquietação produtiva nunca vira contentamento.',
  framework:'The Invincible Company (Osterwalder): mantenha um portfólio de inovação paralelo ao core. Pixar Plussing: amplificadores > silenciadores. Kouzes & Posner: "Challenge the process".'},
 {n:'04', title:'Cliente em primeiro lugar (e todos são clientes)',
  short:'Parceiro, fornecedor e colaborador também são clientes. Cada interação soma ou subtrai capital de relacionamento.',
  meaning:'O cliente está sempre em primeiro lugar. E a definição de cliente é ampla: parceiro, fornecedor e colaborador também são clientes. Cada interação adiciona ou subtrai capital de relacionamento.',
  behaviors:['Pergunte sempre: que \'job\' a outra parte está tentando resolver ao falar comigo?','Trate o colaborador com o mesmo cuidado com que trata o cliente externo.','Responda rápido — atraso é uma forma silenciosa de dizer \'você não é prioridade\'.','Meça satisfação interna (time, parceiros) como mede a externa.'],
  practice:'Um fornecedor liga com um problema. O líder Katz não trata como "problema dele" — trata como cliente: resolve, porque a relação é capital. Cada micro-interação positiva soma.',
  framework:'Jobs to be Done (Christensen): clientes contratam soluções para um job — vale para sócios e parceiros também. WOO WOW WIN: cada interação adiciona ou subtrai capital, interno e externo. CARE Loop: Connect, Achieve, Respect, Empower.'},
 {n:'05', title:'Respeito e integridade',
  short:'A regra de ouro como sistema operacional. Integridade é fazer o certo mesmo quando ninguém vê.',
  meaning:'A regra de ouro como sistema operacional: faço para o outro o que faria para mim, e respondo ao outro como gostaria de ser respondido. Integridade é fazer o certo mesmo quando ninguém vê.',
  behaviors:['Seja transparente — autenticidade e coragem para a conversa difícil.','Não tolere líderes abusivos no seu time, por mais que entreguem resultado.','Cumpra o combinado; a palavra do líder é o ativo mais frágil e mais valioso.','Lidere de baixo: sua função é levantar os outros, não se exibir.'],
  practice:'Um líder de alto desempenho trata mal a equipe. Pelo princípio Katz, resultado não compra o direito de desrespeitar. A conversa de correção acontece — com respeito, mas sem rodeios.',
  framework:'Servant Leader (Johnston): líder na base da pirâmide invertida, levantando os outros. Accountable Leader (Molinaro): não tolere mediocridade nem abuso. Graceful Leader: transparência e poder compassivo.'},
 {n:'06', title:'Tudo é possível',
  short:'Se não achei a solução, é porque não procurei o suficiente. Obstáculo é etapa, não parede.',
  meaning:'Tudo é possível, nada é impossível. Se não achei a solução, é porque não procurei o suficiente. Se não sei, busco a informação. Não é otimismo ingênuo — é persistência disciplinada somada à crença de que somos capazes.',
  behaviors:['Pense em metas, não em obstáculos — o foco do líder define o foco do time.','Quando o time disser "não dá", pergunte "o que precisaríamos para dar?"','Prepare-se para o pior cenário e energize com o melhor — isso constrói resiliência real.','Não saber é aceitável; não buscar não é. Transforme dúvida em pesquisa.'],
  practice:'Diante de um "não tem como", o líder Katz não aceita nem nega — investiga. "Já testamos quantas alternativas? Quem no mercado já resolveu isso?" A solução costuma estar do outro lado do esforço.',
  framework:'Paranoid Optimism (Siilasmaa): prepare-se para o pior, energize com o melhor. "Be persistent" + "Never stop dreaming". Tim Irwin: persiga metas, não obstáculos. Welcome to Management: preparação supera o medo.'},
 {n:'07', title:'Energia positiva',
  short:'O estado emocional do líder é contagioso — ele define o clima da sala.',
  meaning:'Energia positiva sempre — o pensamento tem poder. O estado emocional do líder é contagioso: ele define o clima da sala. Positividade aqui não é negar problemas, é encarar dificuldades sem perder a esperança ativa.',
  behaviors:['Entre nas reuniões consciente da energia que você está trazendo.','Crie micro-momentos positivos consistentes — eles geram reação em cadeia no time.','Cultive otimismo deliberadamente, sobretudo em momentos de pressão.','Evite frases que plantam resistência ("vocês não vão gostar, mas...").'],
  practice:'Em uma semana difícil, o diretor abre a reunião reconhecendo o problema com franqueza — e em seguida aponta o caminho com energia. O time sai com clareza e combustível, não com medo.',
  framework:'Coach Leader (Ziglar): positivity e light entre as virtudes. What Your Employees Need (Palmer): micro-momentos positivos geram reação em cadeia. Audrey Tang: cultivar otimismo como prática de resiliência.'},
 {n:'08', title:'Senso de urgência',
  short:'"É melhor aproximadamente agora do que exatamente nunca." Velocidade com direção.',
  meaning:'Velocidade é vantagem competitiva. "É melhor aproximadamente agora do que exatamente nunca." Mas urgência inteligente não é correr sem rumo — é agir rápido depois de mirar no que importa.',
  behaviors:['Defina poucas prioridades claras e ataque-as com velocidade.','Combata o perfeccionismo paralisante: 80% entregue hoje vale mais que 100% mês que vem.','Antes de correr, nomeie o ponto mais difícil (o crux) — para correr na direção certa.','Crie ritmo: prazos curtos, follow-up frequente, decisão sem procrastinação.'],
  practice:'Uma oportunidade aparece na sexta. O líder Katz não "deixa para segunda". Ele decide o essencial agora e ajusta os detalhes depois — porque a janela não espera.',
  framework:'"Melhor aproximadamente agora do que exatamente nunca." Cuban: "Sales cure all" — execução acima de plano perfeito. Rumelt (O Crux): mire no ponto mais difícil antes de acelerar. Gardeners not Mechanics: aja rápido, mas planeje o suficiente.'},
 {n:'09', title:'Mindfulness',
  short:'Mente clara decide melhor, escuta melhor e lidera melhor — sustenta os outros 8 princípios sob pressão.',
  meaning:'Presença e consciência em tudo o que fazemos. Mente clara decide melhor, escuta melhor e lidera melhor. Mindfulness é o que sustenta os outros oito princípios sob pressão — sem ela, a urgência vira ansiedade e a energia vira reatividade.',
  behaviors:['Pause antes de reagir — especialmente em conflito ou má notícia.','Esteja inteiro na conversa: sem celular, sem dividir atenção, escuta real.','Cuide da própria saúde física e mental; o líder esgotado contamina o time.','Reserve momentos de reflexão na rotina — pensar é parte do trabalho, não um luxo.'],
  practice:'Diante de uma má notícia, o líder Katz respira antes de responder. A pausa de cinco segundos evita a reação que custaria cinco semanas de reparo.',
  framework:'Lead Care Win: cultive a euthymia (Seneca) — confiar na própria direção sem se distrair. Graceful Leader: pausar, introspecção, presente + futuro. Audrey Tang (ADOPT): grounding e reflexão como prática de equipe.'}
];

const orgData = {
  support:['Controladoria','Jurídico','Tecnologia & IA'],
  branches:[
    {name:'Financeiro', main:false, items:[
      ['Contas a Pagar'],['Contas a Receber'],['Cobrança'],
      ['Contabilidade (Controladoria)'],
      ['Departamento Pessoal (DP)'],
      ['Tesouraria','Fluxo de caixa diário · mensal'],
      ['Tributário & Impostos'],['DRE & Demonstrações','Resultado · Patrimônio líquido'],
      ['Custos & Orçamento','sugestão a validar'],['Captação & Financiamentos','sugestão a validar']
    ]},
    {name:'Comercial', main:true, items:[
      ['Novos Negócios'],['Incorporação'],['Vendas'],
      ['Relacionamento com o Cliente','Pós-venda · CRM'],
      ['Marketing','Online & Offline']
    ]},
    {name:'Engenharia', main:false, items:[
      ['Obras'],['Compras & Suprimentos'],['Qualidade'],
      ['Planejamento','PCP · Cronograma físico-financeiro'],
      ['Pós-venda','Assistência técnica · garantia de obra'],
      ['Segurança do Trabalho','sugestão a validar'],
      ['Projetos & Compatibilização','sugestão a validar']
    ]}
  ]
};

/* Colaboradores — diretório de contatos exibido em "Nossa Estrutura".
   Preencha um objeto por pessoa: {nome, cargo, telefone, email, foto}.
   - foto: caminho do arquivo dentro de assets/ (ex: 'assets/team/joana.jpg'). Se vazio/omitido, mostra um avatar com as iniciais do nome.
   - telefone: aceita qualquer formato de exibição; vira link clicável (tel:) automaticamente. Pode deixar '' se não tiver.
   - email: vira link clicável (mailto:) automaticamente. Pode deixar '' se não tiver.
   Exemplo:
   {nome:'Joana Silva', cargo:'Coordenadora de Planejamento', telefone:'(11) 91234-5678', email:'joana@katz.com.br', foto:'assets/team/joana.jpg'} */
const colaboradores = [
  {nome:'Daniel Katz', cargo:'CEO', telefone:'(31) 99981-4538', email:'daniel@katz.eng.br', foto:'assets/team/daniel-katz.jpg'},
  {nome:'Bernardo C. L. Tavares', cargo:'Diretor Comercial', telefone:'(31) 9550-1511', email:'novosnegocios@katz.eng.br', foto:'assets/team/bernardo-tavares.jpg'},
  {nome:'Caetano Aliani', cargo:'Superintendente de Obras — responsável pela Engenharia', telefone:'(31) 98403-4563', email:'caetano@katz.eng.br', foto:'assets/team/caetano-aliani.jpg'},
  {nome:'Guilherme Caldeira', cargo:'Controladoria', telefone:'(31) 9860-8035', email:'controller@katz.eng.br', foto:'assets/team/guilherme-caldeira.jpg'},
  {nome:'Lucas Arieh', cargo:'Marketing Digital', telefone:'(31) 8340-8872', email:'marketing@katz.eng.br', foto:'assets/team/lucas-arieh.jpg'},
  {nome:'Paloma Oliveira', cargo:'Coordenadora de Qualidade', telefone:'(38) 98835-6472', email:'supervisao@katz.eng.br', foto:'assets/team/paloma-oliveira.jpg'},
  {nome:'Juliana de Mello', cargo:'Gerente Financeiro', telefone:'(31) 9066-8713', email:'adm@katz.eng.br', foto:'assets/team/juliana.jpg'}
  // demais colaboradores entram aqui conforme forem enviados
];

/* POP - Departamento Pessoal */
const popSections = [
 {tag:'1–2', title:'Objetivo e campo de aplicação', body:`
   <p>Este POP estabelece diretrizes padronizadas para todas as atividades do Departamento Pessoal da Construtora Katz/Hauz, garantindo o cumprimento das obrigações trabalhistas, previdenciárias e fiscais — da admissão ao desligamento, incluindo benefícios, ponto, folha e documentação de empreiteiros.</p>
   <div class="badge-list">
     <span class="badge">Funcionários internos</span>
     <span class="badge">Funcionários de obra</span>
     <span class="badge">Terceiros e empreiteiros</span>
   </div>
   <p style="margin-top:12px">Envolve DP (responsável principal), Financeiro, Contábil, Gestores de Obras, Segurança do Trabalho e Jurídico.</p>`},
 {tag:'5', title:'Matriz de responsabilidades (RACI)', body:`
   <table class="doctable">
     <tr><th>Atividade</th><th>DP</th><th>Contábil</th><th>Gestores</th><th>Segurança</th><th>Financeiro</th></tr>
     <tr><td>Admissão</td><td>R</td><td>A</td><td>C</td><td>C</td><td>I</td></tr>
     <tr><td>Folha de Pagamento</td><td>R</td><td>A</td><td>C</td><td>I</td><td>A</td></tr>
     <tr><td>Rescisão</td><td>R</td><td>A</td><td>C</td><td>C</td><td>A</td></tr>
     <tr><td>Exames Médicos</td><td>C</td><td>I</td><td>I</td><td>R</td><td>I</td></tr>
     <tr><td>Treinamentos</td><td>C</td><td>I</td><td>C</td><td>R</td><td>I</td></tr>
     <tr><td>Pagamentos</td><td>C</td><td>C</td><td>I</td><td>I</td><td>R</td></tr>
   </table>
   <p style="font-size:12px; color:var(--slate)"><b>R</b> Responsável · <b>A</b> Aprovador · <b>C</b> Consultado · <b>I</b> Informado</p>`},
 {tag:'6.1.1', title:'Admissão — funcionários internos', body:`
   <div class="flow">
     <div class="fnode">Gestor preenche formulário de admissão (Anexo A) — até 5 dias úteis antes</div>
     <span class="farrow">→</span>
     <div class="fnode">DP confere documentação — até 2 dias úteis</div>
     <span class="farrow">→</span>
     <div class="fnode">Exame admissional (ASO) — até 2 dias úteis</div>
     <span class="farrow">→</span>
     <div class="fnode">Contrato de trabalho — até 3 dias úteis</div>
     <span class="farrow">→</span>
     <div class="fnode">Registro no eSocial pela Contabilidade — até 3 dias úteis</div>
     <span class="farrow">→</span>
     <div class="fnode">Liberação e integração — até 3 dias úteis</div>
   </div>
   <p><b>Documentos obrigatórios:</b> RG e CPF, CTPS, comprovante de residência (máx. 3 meses), certidão de nascimento/casamento, reservista (homens), título de eleitor, comprovante de escolaridade, foto 3x4, dados bancários, declaração de dependentes, cartão de vacinação.</p>
   <p><b>Eventos eSocial:</b> S-2200 (Cadastramento Inicial do Vínculo), S-2300 (sem vínculo, quando aplicável), S-2400 (beneficiário, quando aplicável).</p>`},
 {tag:'6.1.2 / 6.1.3', title:'Ponto e folha de pagamento', body:`
   <p><b>Período de apuração:</b> dia 16 do mês anterior ao dia 15 do mês atual.</p>
   <table class="doctable">
     <tr><th>Data</th><th>Etapa</th></tr>
     <tr><td class="val">Dia 16</td><td>Início da coleta de informações para a folha</td></tr>
     <tr><td class="val">Dia 20</td><td>Prazo final para envio de alterações pelos gestores</td></tr>
     <tr><td class="val">Dia 22</td><td>Fechamento da folha pelo DP</td></tr>
     <tr><td class="val">Dia 25</td><td>Processamento pela Contabilidade e emissão de contracheques</td></tr>
     <tr><td class="val">Dia 28</td><td>Pagamento de salários (até 5º dia útil)</td></tr>
     <tr><td class="val">Dia 05 seguinte</td><td>Pagamento de adiantamento (ref. dia 20)</td></tr>
   </table>
   <p><b>Horas extras:</b> máx. 2h/dia e 10h/mês (salvo acordo específico) · adicional de 50% em dias úteis, 100% em domingos e feriados.</p>`},
 {tag:'6.1.4 – 6.1.6', title:'Benefícios, férias e rescisão', body:`
   <p><b>Benefícios:</b> vale-transporte (desconto de 6% do salário base, limitado ao valor do benefício), auxílio-alimentação, plano de saúde e seguro de vida (renovação anual).</p>
   <p><b>Alertas de férias vencendo:</b></p>
   <ul>
     <li>90 dias antes do limite → 1ª comunicação ao gestor</li>
     <li>60 dias antes → 2ª comunicação com cópia à diretoria</li>
     <li>30 dias antes → comunicação final com agendamento obrigatório</li>
     <li>Após o limite → férias em dobro, conforme legislação</li>
   </ul>
   <p><b>Rescisão:</b> exame demissional dispensado até 135 dias da demissão, obrigatório acima disso ou com exposição a agentes nocivos. Prazos: aviso prévio trabalhado até o 1º dia útil seguinte; aviso indenizado até o 10º dia corrido.</p>`},
 {tag:'6.2', title:'Funcionários de obra', body:`
   <p>Mesmo fluxo de admissão dos funcionários internos, acrescido de documentação e treinamentos específicos de segurança antes do início das atividades.</p>
   <div class="badge-list">
     <span class="badge alt">NR-18</span><span class="badge alt">NR-35 (trabalho em altura)</span><span class="badge alt">NR-06 (EPI)</span><span class="badge alt">Integração de segurança da obra</span>
   </div>
   <p style="margin-top:12px"><b>Ponto em obra:</b> cartão manual, livro de ponto ou sistema eletrônico — encarregado confere e assina diariamente; administrativo consolida semanalmente e envia ao DP até o dia 16.</p>
   <p><b>Cesta básica:</b> controle mensal com assinatura dos colaboradores, relação enviada ao DP até dia 16.</p>
   <p><b>Devolução de equipamentos</b> no desligamento: EPIs, ferramentas, uniformes, crachá — no último dia de trabalho, com desconto por perdas ou danos quando aplicável.</p>`},
 {tag:'6.3', title:'Gestão de empreiteiros', body:`
   <p><b>Habilitação:</b> empreiteiro envia documentação completa → obra confere e organiza na ordem do checklist → DP confere validade e autenticidade → jurídico valida → aprovação ou complementação.</p>
   <p><b>Controle mensal (entre os dias 15 e 22):</b></p>
   <ul>
     <li><b>Empresas com funcionários CLT:</b> detalhamento FGTS do mês anterior, cartões de ponto, guia FGTS + comprovante, cesta básica, holerites, DCTWEB + comprovante, comprovante INSS, nota fiscal.</li>
     <li><b>MEIs:</b> DAS + comprovante de pagamento, nota fiscal.</li>
   </ul>
   <p><b>Controle de validade dos documentos:</b></p>
   <table class="doctable">
     <tr><th>Documento</th><th>Validade</th></tr>
     <tr><td>Certidões negativas</td><td class="val">180 dias</td></tr>
     <tr><td>ASOs dos funcionários</td><td class="val">1 ano</td></tr>
     <tr><td>Certificados de treinamento</td><td class="val">2 anos</td></tr>
     <tr><td>PGR e PCMSO</td><td class="val">1 ano</td></tr>
   </table>`},
 {tag:'DP/RH', title:'Checklist — contratação de MEI (9 itens)', body:`
   <p>Relação de documentos exigidos para contratação de prestador MEI (microempreendedor individual) em obra.</p>
   <table class="doctable">
     <tr><th>#</th><th>Documento</th></tr>
     <tr><td class="num">01</td><td>Certificado de NR 18 (Técnico de Segurança do Trabalho)</td></tr>
     <tr><td class="num">02</td><td>Certificado de NR 35 (Técnico de Segurança do Trabalho)</td></tr>
     <tr><td class="num">03</td><td>Ordem de Serviço (de acordo com a função)</td></tr>
     <tr><td class="num">04</td><td>Ficha de EPI</td></tr>
     <tr><td class="num">05</td><td>ASO (exame médico)</td></tr>
     <tr><td class="num">06</td><td>Cartão CNPJ (atualizado)</td></tr>
     <tr><td class="num">07</td><td>Comprovante de endereço</td></tr>
     <tr><td class="num">08</td><td>RG e CPF</td></tr>
     <tr><td class="num">09</td><td>Contrato de Prestação de Serviço (caso haja contratação de terceiros)</td></tr>
   </table>
   <p style="font-size:12px;color:var(--slate)">Complementa a documentação mensal de MEI descrita na Gestão de Empreiteiros (DAS + comprovante + nota fiscal) e as novas formas de contratação do Módulo 05.</p>`},
 {tag:'7', title:'Indicadores de desempenho', body:`
   <table class="doctable">
     <tr><th>Indicador</th><th>Meta</th></tr>
     <tr><td>Prazo de admissão</td><td class="val">≤ 7 dias úteis</td></tr>
     <tr><td>Erros na folha de pagamento</td><td class="val">≤ 2%</td></tr>
     <tr><td>Entrega de obrigações legais no prazo</td><td class="val">100%</td></tr>
     <tr><td>Prazo médio de rescisão</td><td class="val">≤ 5 dias úteis</td></tr>
     <tr><td>Férias vencidas</td><td class="val">0%</td></tr>
     <tr><td>Horas extras sobre total trabalhado</td><td class="val">≤ 10%</td></tr>
     <tr><td>Empreiteiros com documentação regular</td><td class="val">100%</td></tr>
     <tr><td>Satisfação dos gestores com o DP</td><td class="val">≥ 8,0 / trimestral</td></tr>
   </table>`}
];

/* Documentação de Empreiteiras (treinamento abril/2024) */
const docEmpSections = [
 {tag:'Base legal', title:'Obrigatoriedade legal', body:`
   <p>Lei de Terceirização (Lei 13.429/17): a empresa tomadora de serviços é responsável <b>subsidiariamente</b> pelas verbas trabalhistas não pagas pela prestadora, no limite da prestação de serviços — e tem o dever de fiscalizar.</p>
   <div class="quote-block">O empregado pode pleitear esses direitos na Justiça do Trabalho; se reconhecidos, a tomadora arca de forma subsidiária, caso a prestadora não pague.</div>
   <table class="doctable">
     <tr><th>Contratação (in eligendo)</th><th>Fiscalização (in vigilando)</th></tr>
     <tr><td>Documentação da empresa + documentação de entrada de funcionário</td><td>Documentação de pagamento</td></tr>
   </table>`},
 {tag:'Contratação', title:'Due diligence na contratação', body:`
   <p>Culpa <i>in eligendo</i> ocorre por falta de cautela na escolha do preposto ou da empresa a quem se confia a execução do serviço.</p>
   <p>Antes da contratação, solicitar: CNPJ atualizado, inscrição estadual/municipal, alvará de funcionamento, consulta ao SERASA, contrato social, declaração de contabilidade regular, CND federal/INSS/FGTS, regime tributário (CRT) e documentação de segurança do trabalho (PGR/PCMSO).</p>
   <p>Fluxo: <b>solicitação de orçamento → ficha de cadastro do empreiteiro</b> preenchida antes do início da prestação de serviço.</p>`},
 {tag:'Fluxo', title:'Documentação online e entrada na obra', body:`
   <p>Pasta de rede <span class="mono">Z:\\RH_Obras</span> centraliza a documentação, compartilhada entre obras — menos pedidos repetidos às subempreiteiras e mais agilidade na contratação.</p>
   <div class="flow">
     <div class="fnode">Verificar se há pasta da empresa</div>
     <span class="fdiamond">Já contratada em outra obra?</span>
     <div class="fnode">Verificar documentação e validade de cada item</div>
     <span class="farrow">→</span>
     <div class="fnode">Solicitar documentos vencidos / faltantes</div>
     <span class="farrow">→</span>
     <div class="fnode">Conferir, salvar na rede (numeração do checklist) e enviar ao RH</div>
   </div>
   <div class="callout"><span class="ico">⚠</span> Nenhuma empresa é autorizada a entrar na obra sem contrato assinado.</div>`},
 {tag:'Anexo B', title:'Checklist — documentação da empresa (13 itens)', body:`
   <table class="doctable">
     <tr><th>#</th><th>Documento</th><th>Validade</th></tr>
     <tr><td class="num">–</td><td>Minuta de contrato assinada</td><td class="val">N/A</td></tr>
     <tr><td class="num">1</td><td>Ficha de cadastro preenchida</td><td class="val">1 ano</td></tr>
     <tr><td class="num">2</td><td>Cartão CNPJ</td><td class="val">31/out do 2º ano após emissão</td></tr>
     <tr><td class="num">3</td><td>Inscrição estadual e/ou municipal</td><td class="val">N/A</td></tr>
     <tr><td class="num">4</td><td>Alvará de funcionamento (e/ou TLF paga)</td><td class="val">1 ano</td></tr>
     <tr><td class="num">5</td><td>Consulta ao SERASA</td><td class="val">60 dias</td></tr>
     <tr><td class="num">6</td><td>Contrato social — última alteração</td><td class="val">N/A</td></tr>
     <tr><td class="num">7</td><td>RG e CPF dos sócios</td><td class="val">N/A</td></tr>
     <tr><td class="num">8</td><td>Declaração de contabilidade regular</td><td class="val">60 dias</td></tr>
     <tr><td class="num">9</td><td>CND — tributos federais</td><td class="val">60 dias</td></tr>
     <tr><td class="num">10</td><td>CND — INSS</td><td class="val">60 dias</td></tr>
     <tr><td class="num">11</td><td>CND — FGTS</td><td class="val">30 dias</td></tr>
     <tr><td class="num">12</td><td>Documentação de segurança (PGR / PCMSO)</td><td class="val">1 ano</td></tr>
     <tr><td class="num">13</td><td>Livro de inspeção do Ministério do Trabalho</td><td class="val">Por obra</td></tr>
   </table>
   <p style="font-size:12px;color:var(--slate)">Ficha de cadastro e controle de validade também disponíveis em planilha própria (Ficha de Cadastro do Empreiteiro).</p>`},
 {tag:'Anexo F', title:'Checklist — entrada de funcionário (8 itens)', body:`
   <table class="doctable">
     <tr><th>#</th><th>Documento</th><th>Validade</th></tr>
     <tr><td class="num">1</td><td>Contrato de trabalho (CTPS assinada/digital, e-Social)</td><td class="val">N/A</td></tr>
     <tr><td class="num">2</td><td>Livro de registro assinado</td><td class="val">N/A</td></tr>
     <tr><td class="num">3</td><td>ASO (admissional/periódico, conforme PCMSO)</td><td class="val">Conforme PCMSO</td></tr>
     <tr><td class="num">4</td><td>Certificado NR 35</td><td class="val">2 anos</td></tr>
     <tr><td class="num">5</td><td>Certificado NR 18</td><td class="val">2 anos</td></tr>
     <tr><td class="num">6</td><td>Ordem de serviço por função (assinada)</td><td class="val">N/A</td></tr>
     <tr><td class="num">7</td><td>Ficha de EPI</td><td class="val">2 anos</td></tr>
     <tr><td class="num">8</td><td>Comprovação de experiência e/ou teste prático</td><td class="val">N/A</td></tr>
   </table>
   <p>Salvar dentro da pasta da empresa, por obra.</p>`},
 {tag:'Pagamento', title:'Documentação de pagamento — calendário mensal', body:`
   <table class="doctable">
     <tr><th>Documento</th><th>Vencimento</th></tr>
     <tr><td>Cartões de ponto assinados (frente e verso, etiquetado)</td><td class="val">Dia 01</td></tr>
     <tr><td>Entrega de cesta básica</td><td class="val">Dia 10</td></tr>
     <tr><td>Demonstrativo FGTS</td><td class="val">Dia 20</td></tr>
     <tr><td>Holerite de adiantamento</td><td class="val">Dia 20</td></tr>
     <tr><td>DARF do mês anterior + comprovante</td><td class="val">Dia 19</td></tr>
     <tr><td>Guia FGTS paga</td><td class="val">Dia 19</td></tr>
     <tr><td>Holerite de pagamento</td><td class="val">5º dia útil</td></tr>
   </table>
   <p style="font-size:12px;color:var(--slate)">Exemplo de ciclo (outubro): recebe dia 05 → envia GPS paga (competência agosto) e holerite de adiantamento (competência setembro). Recebe dia 20 → envia GFIP, cartão de ponto, FGTS paga, cesta básica e holerite de pagamento (competência setembro).</p>`},
 {tag:'1ª medição / retenção', title:'1ª medição e retenção técnica', body:`
   <p><b>1ª medição:</b> exigir o demonstrativo de FGTS <i>anterior</i> à prestação de serviço — comprova que os profissionais ainda não estavam alocados na obra no mês antecedente.</p>
   <p><b>Retenção técnica:</b> exigir o demonstrativo de FGTS do mês <i>seguinte</i> à prestação de serviço, comprovando que os profissionais foram retirados da obra no demonstrativo. Não pode haver nenhuma pendência de documentação anterior.</p>`},
 {tag:'Contratação', title:'Novas formas de contratação', body:`
   <div class="badge-list"><span class="badge">MEI</span><span class="badge">RPA</span></div>
   <p style="margin-top:10px">Alternativas de contratação avaliadas junto ao jurídico e à documentação padrão de due diligence, mantendo o mesmo rigor de conferência.</p>`}
];

/* POP — Planejamento de Obras */
const popPlanejamentoSections = [
 {tag:'1–4', title:'Objetivo, aplicação e definições', body:`
   <p>Este POP estabelece diretrizes, responsabilidades e rotinas para o Setor de Planejamento, padronizando processos, otimizando recursos e garantindo o controle eficaz dos projetos e a qualidade das informações para a tomada de decisão.</p>
   <p>Aplica-se a todos os colaboradores do Setor de Planejamento e às interfaces com Obras, Orçamentos, Financeiro, RH e Diretoria.</p>
   <p><b>Principais definições:</b></p>
   <ul>
     <li><b>MS Project:</b> software de gerenciamento de projetos para elaboração e controle de cronogramas.</li>
     <li><b>Curva S:</b> gráfico da evolução acumulada de uma variável (física ou financeira), comparando planejado x realizado.</li>
     <li><b>PAMO:</b> Planilha de Acompanhamento de Medição de Obra.</li>
     <li><b>Mega / Approvo:</b> ERP da empresa e sistema de aprovação de pagamentos e documentos.</li>
     <li><b>Lean Construction:</b> filosofia de gestão focada na eliminação de desperdícios na construção.</li>
     <li><b>Linha de Balanço:</b> técnica de planejamento e controle para obras com atividades repetitivas.</li>
   </ul>`},
 {tag:'5', title:'Responsabilidades', body:`
   <table class="doctable">
     <tr><th>Papel</th><th>Responsabilidade</th></tr>
     <tr><td>Coordenador de Planejamento</td><td>Lidera a equipe, garante prazos e processos, valida relatórios gerenciais e é a interface principal com a diretoria.</td></tr>
     <tr><td>Analista de Planejamento (Cronogramas)</td><td>Elaboração e atualização de cronogramas, acompanhamento físico das obras, relatórios e suporte à análise de dados.</td></tr>
     <tr><td>Analista de Planejamento (Orçamentário)</td><td>Controle orçamentário, cronogramas físico-financeiros e análise de desvios financeiros.</td></tr>
     <tr><td>Analista de Planejamento (Sistemas)</td><td>Gestão dos sistemas Mega e Approvo, suporte aos usuários, parametrizações e treinamentos.</td></tr>
   </table>`},
 {tag:'6.1.1 / 6.1.2', title:'Cronograma executivo e acompanhamento semanal', body:`
   <div class="flow">
     <div class="fnode">Recebimento do orçamento e escopo da obra</div>
     <span class="farrow">→</span>
     <div class="fnode">Estruturação no MS Project (atividades, predecessoras, durações, recursos)</div>
     <span class="farrow">→</span>
     <div class="fnode">Validação em reunião com Engenheiro da Obra e Coordenador</div>
     <span class="farrow">→</span>
     <div class="fnode">Linha de base (baseline) salva no MS Project</div>
   </div>
   <p style="margin-top:14px"><b>Acompanhamento semanal da evolução física:</b></p>
   <table class="doctable">
     <tr><th>Quando</th><th>O quê</th><th>Quem</th></tr>
     <tr><td class="val">Sexta, até 17h</td><td>Informa o avanço físico das atividades</td><td>Engenheiro da Obra</td></tr>
     <tr><td class="val">Segunda, até 12h</td><td>Atualiza o cronograma no MS Project com os dados recebidos</td><td>Analista de Planejamento</td></tr>
     <tr><td>—</td><td>Análise de desvios (atrasos, adiantamentos) em relação à linha de base</td><td>Analista de Planejamento</td></tr>
     <tr><td>—</td><td>Relatório de acompanhamento enviado à equipe da obra e ao Coordenador</td><td>Analista de Planejamento</td></tr>
   </table>`},
 {tag:'6.1.3 – 6.1.5', title:'Reuniões, simulação de cenários e gestão à vista', body:`
   <p><b>Reuniões semanais de alinhamento:</b> o Coordenador agenda reunião semanal com os engenheiros das obras — pauta com análise de desvios, riscos e planos de ação corretivos; uma ata registra decisões e responsáveis.</p>
   <p><b>Simulação de cenários:</b> a diretoria ou a obra solicita simulações (ex.: impacto de chuvas, falta de material) → o Analista usa o MS Project para simular impactos em prazo e custo → os resultados são apresentados para a tomada de decisão.</p>
   <p><b>Gestão à vista:</b> cronogramas simplificados e os principais indicadores são impressos e fixados em local visível no canteiro de obras, com atualização semanal pelo Analista de Planejamento ou pelo estagiário da área.</p>`},
 {tag:'6.2', title:'Orçamento e físico-financeiro', body:`
   <p><b>Controle orçado x executado (mensal):</b> o Coordenador extrai os custos realizados do sistema Mega → compara com os valores previstos no orçamento da obra → identifica e analisa os principais desvios, apontando causas → um relatório de análise crítica é enviado ao Coordenador e à diretoria.</p>
   <p><b>Cronograma físico-financeiro:</b> a pedido da diretoria ou de instituições financeiras, o Coordenador elabora a projeção de desembolso mensal com base no cronograma executivo e no orçamento, e valida antes do envio.</p>
   <p><b>Aditivos orçamentários:</b> a equipe da obra identifica a necessidade (serviço extra, mudança de escopo) → após aprovação da diretoria, o Analista de Planejamento cria o aditivo no sistema Mega.</p>
   <div class="callout"><span class="ico">ℹ</span><span>O orçamentista elabora e envia o orçamento ao Analista de Planejamento. A partir desse envio, o Planejamento assume a gestão físico-financeira do contrato e o controle e registro dos aditivos no Mega.</span></div>`},
 {tag:'6.3', title:'Gestão de sistemas (Mega e Approvo)', body:`
   <p><b>Suporte aos usuários:</b> dúvidas e solicitações são enviadas por e-mail ao setor de Planejamento, que soluciona junto ao suporte do Mega — atendimento por ordem de chegada, com prioridade para erros que impeçam a continuidade do trabalho.</p>
   <p><b>Criação e liberação de acessos:</b> no Mega, o RH envia e-mail à responsável (Marina) solicitando a criação do usuário; no Approvo, o gestor da área solicita ao Planejamento a criação e a definição do perfil de acesso. A criação é feita e o novo colaborador é comunicado.</p>
   <p><b>Treinamentos internos:</b> todo novo colaborador ou estagiário passa por um treinamento introdutório de Mega e Planejamento — o setor agenda e ministra os treinamentos, mantendo manuais e tutoriais atualizados.</p>`},
 {tag:'6.4 – 6.5', title:'Relatórios, apresentações e desenvolvimento interno', body:`
   <p><b>Relatórios gerenciais:</b> o Analista de Planejamento consolida os dados de avanço físico, financeiro e de desempenho das obras, monta os relatórios em templates padronizados e envia à diretoria e demais áreas interessadas nas datas pré-definidas.</p>
   <p><b>Apresentações mensais:</b> o Analista reúne os principais resultados e análises do mês e monta a apresentação em formato padrão; o Coordenador valida antes da reunião com a diretoria.</p>
   <p><b>Estruturação de processos:</b> o Coordenador mapeia os processos atuais, identifica gargalos e oportunidades de melhoria, atualiza este POP e comunica as mudanças a toda a equipe.</p>
   <p><b>Novas metodologias:</b> o Coordenador estuda e seleciona metodologias (ex.: Lean Construction), testa em um projeto piloto, monitora os resultados e expande para outras obras se forem positivos.</p>`},
 {tag:'7', title:'Indicadores de desempenho (KPIs)', body:`
   <table class="doctable">
     <tr><th>Indicador</th><th>Meta</th><th>Frequência</th></tr>
     <tr><td>Aderência ao Cronograma</td><td class="val">≥ 85%</td><td>Semanal</td></tr>
     <tr><td>Desvio de Prazo Médio</td><td class="val">≤ 3 dias</td><td>Semanal</td></tr>
     <tr><td>Eficiência da Curva S</td><td class="val">≤ 5%</td><td>Mensal</td></tr>
     <tr><td>Controle Orçamentário</td><td class="val">95–105%</td><td>Mensal</td></tr>
     <tr><td>Desvio Físico-Financeiro</td><td class="val">≤ 3%</td><td>Mensal</td></tr>
     <tr><td>Tempo de Resposta do Suporte</td><td class="val">≤ 4h</td><td>Semanal</td></tr>
     <tr><td>Taxa de Resolução de Problemas</td><td class="val">≥ 80%</td><td>Mensal</td></tr>
     <tr><td>Pontualidade na Entrega de Relatórios</td><td class="val">≥ 95%</td><td>Mensal</td></tr>
     <tr><td>Implementação de Melhorias</td><td class="val">≥ 80%</td><td>Trimestral</td></tr>
   </table>`}
];

/* POP — Financeiro (Contas a Receber, Contas a Pagar e Fluxo de Caixa) */
const popFinanceiroSections = [
 {tag:'1–3', title:'Objetivo, aplicação e definições', body:`
   <p>Garantir a padronização, eficiência e acuracidade dos processos financeiros — Contas a Receber, Contas a Pagar e Gestão do Fluxo de Caixa — assegurando conformidade com as políticas internas e contribuindo para a saúde financeira e a tomada de decisões estratégicas.</p>
   <p>Aplica-se a todas as atividades e colaboradores das operações financeiras da Construtora Katz, nas áreas de Contas a Receber, Contas a Pagar e Gestão do Fluxo de Caixa.</p>
   <p><b>Principais definições:</b></p>
   <ul>
     <li><b>Sistema MEGA:</b> ERP utilizado para registro e controle das operações financeiras.</li>
     <li><b>Contas a Receber (CR):</b> valores que a empresa tem a receber de clientes ou outras fontes.</li>
     <li><b>Contas a Pagar (CP):</b> valores que a empresa tem a pagar a fornecedores ou outras obrigações.</li>
     <li><b>Fluxo de Caixa:</b> movimentação de entradas e saídas de dinheiro em um determinado período.</li>
     <li><b>Conciliação Bancária:</b> conferência entre o extrato bancário e os registros contábeis da empresa.</li>
     <li><b>Inadimplência:</b> não cumprimento de uma obrigação financeira no prazo estabelecido.</li>
     <li><b>Alçada de Aprovação:</b> nível de autoridade necessário para aprovar determinadas transações financeiras.</li>
   </ul>`},
 {tag:'3.2', title:'Responsabilidades', body:`
   <table class="doctable">
     <tr><th>Área</th><th>Responsabilidade</th></tr>
     <tr><td>Setor Financeiro</td><td>Execução das atividades operacionais, registro, controle, conciliação e geração de relatórios.</td></tr>
     <tr><td>Setor de Incorporação/Vendas</td><td>Fornecer os dados de vendas de forma precisa e em tempo hábil para o registro das Contas a Receber.</td></tr>
     <tr><td>Diretoria/Gerência</td><td>Aprovação de pagamentos, definição de prioridades e decisões estratégicas com base nas informações financeiras.</td></tr>
     <tr><td>Contabilidade</td><td>Receber e processar os documentos financeiros para fins de escrituração contábil e fiscal.</td></tr>
   </table>`},
 {tag:'4', title:'Contas a Receber', body:`
   <p>Garante o registro e o controle dos valores devidos à empresa, desde a origem da venda até a conciliação bancária, minimizando riscos de inadimplência e otimizando o fluxo de caixa.</p>
   <div class="flow">
     <div class="fnode">4.1 Receber dados de vendas do setor de incorporação</div>
     <span class="farrow">→</span>
     <div class="fnode">4.2 Lançar a venda no sistema de gestão</div>
     <span class="farrow">→</span>
     <div class="fnode">4.3 Cadastrar o contrato no Mega</div>
     <span class="farrow">→</span>
     <div class="fnode">4.4 Criar proposta, forma de pagamento e lançar o contrato no Mega</div>
     <span class="farrow">→</span>
     <div class="fnode">4.5 Criar planilha de controle do pagamento do cliente</div>
     <span class="farrow">→</span>
     <div class="fnode">4.6 Controlar os pagamentos financeiros</div>
     <span class="farrow">→</span>
     <div class="fnode">4.7 Verificar pagamentos do dia e levantar saldos bancários</div>
   </div>
   <p style="font-size:12px;color:var(--slate);margin-top:10px">Responsável em todas as etapas: <b>Financeiro</b>. Ferramentas: e-mail, sistema integrado, planilha eletrônica, Sistema MEGA, extratos bancários.</p>`},
 {tag:'5', title:'Contas a Pagar', body:`
   <p>Gerencia as obrigações financeiras da empresa, desde o recebimento dos documentos até a efetivação do pagamento e sua conciliação, visando pontualidade e otimização dos recursos.</p>
   <div class="flow">
     <div class="fnode">5.1 Receber notas, faturas e boletos (e-mail ou físico)</div>
     <span class="farrow">→</span>
     <div class="fnode">5.2 Lançar notas, faturas e boletos no Mega</div>
     <span class="farrow">→</span>
     <div class="fnode">5.3 Anexar no Mega o PDF da conta lançada</div>
     <span class="farrow">→</span>
     <div class="fnode">5.4 Programação da semana</div>
     <span class="farrow">→</span>
     <div class="fnode">5.5 Emitir relatório das contas em aberto (semana seguinte)</div>
     <span class="farrow">→</span>
     <div class="fnode">5.6 Compor pasta física com as contas lançadas e impressas</div>
     <span class="farrow">→</span>
     <div class="fnode">5.7 Anexar relatório impresso na pasta física</div>
   </div>
   <p style="font-size:12px;color:var(--slate);margin-top:10px">Todos os documentos devem estar completos e válidos antes do lançamento; o comprovante digitalizado garante auditoria e rastreabilidade.</p>`},
 {tag:'6', title:'Composição do Fluxo de Caixa', body:`
   <p>Permite o acompanhamento diário das entradas e saídas, a projeção de cenários e a tomada de decisão sobre pagamentos e investimentos.</p>
   <div class="flow">
     <div class="fnode">6.1 Receber saldos das contas diários</div>
     <span class="farrow">→</span>
     <div class="fnode">6.2 Receber notas e boletos para programação do dia</div>
     <span class="farrow">→</span>
     <div class="fnode">6.3 Avaliar prioridade de pagamento com o diretor</div>
     <span class="farrow">→</span>
     <div class="fnode">6.4 Gerente e diretor aprovam os pagamentos do dia</div>
     <span class="farrow">→</span>
     <div class="fnode">6.5 Realizar os pagamentos aprovados</div>
     <span class="farrow">→</span>
     <div class="fnode">6.6 Anexar comprovante no sistema, servidor e pasta física</div>
     <span class="farrow">→</span>
     <div class="fnode">6.7 Realizar baixas via sistema</div>
   </div>
   <div class="callout" style="margin-top:14px"><span class="ico">⚠</span><span>A aprovação formaliza a liberação dos pagamentos, garantindo conformidade com as políticas de alçada.</span></div>`}
];

/* POP — Compras */
const popComprasSections = [
 {tag:'1–4', title:'Objetivo, escopo, definições e responsabilidades', body:`
   <p>Padronizar e orientar as atividades do processo de compras, do recebimento da solicitação ao acompanhamento da entrega, garantindo eficiência, transparência e conformidade com as políticas da empresa.</p>
   <p>Aplica-se a todas as compras de materiais e serviços solicitados pelas obras — de requisições simples a compras de alto valor que necessitam aprovações especiais.</p>
   <p><b>Definições:</b></p>
   <ul>
     <li><b>RM:</b> Requisição de Material.</li>
     <li><b>MEGA:</b> sistema de gestão utilizado pela empresa.</li>
     <li><b>Mapa de Cotação:</b> documento comparativo das propostas recebidas dos fornecedores.</li>
     <li><b>Obras KATZ / Obras HAUZ:</b> tipos de obra com regras específicas de aprovação.</li>
   </ul>
   <p><b>Responsabilidades:</b></p>
   <table class="doctable">
     <tr><th>Papel</th><th>Responsabilidade</th></tr>
     <tr><td>Obra</td><td>Envio da solicitação e acompanhamento da entrega.</td></tr>
     <tr><td>Setor de Compras</td><td>Execução do processo de cotação, negociação e emissão do pedido.</td></tr>
     <tr><td>Gerenciador de Custos</td><td>Aprovação do mapa de cotação (quando aplicável).</td></tr>
     <tr><td>Engenheiro</td><td>Aprovação de compras até R$ 5.000.</td></tr>
     <tr><td>Superintendente Caetano</td><td>Aprovação conforme limites estabelecidos.</td></tr>
     <tr><td>Diretor Guilherme Vargas</td><td>Aprovação de compras acima de R$ 15.000 (obras HAUZ).</td></tr>
   </table>`},
 {tag:'5.1 – 5.2', title:'Recebimento da solicitação e abertura da requisição', body:`
   <p><b>Etapa 1 — Recebimento (Setor de Compras):</b> a obra envia a solicitação por e-mail, com o número da RM e a descrição detalhada do material. Prazo: <b>D+3</b> (dia do recebimento + 3 dias úteis). Especificações erradas reiniciam o prazo D+3; materiais de difícil localização podem ter prazo estendido mediante comunicação prévia à obra.</p>
   <p>Ações: verificar se as informações obrigatórias estão presentes, confirmar o recebimento da solicitação para a obra e registrar a data de recebimento para controle de prazo.</p>
   <p><b>Etapa 2 — Abertura da requisição no MEGA (Obra):</b> acessar o sistema, inserir o número da RM, gerar a requisição com todas as informações necessárias e validar os dados inseridos.</p>`},
 {tag:'5.3 – 5.4', title:'Cotação com fornecedores e negociação', body:`
   <p><b>Cotação</b> (mínimo obrigatório: 3 fornecedores): baixar a RM no sistema, identificar fornecedores qualificados para o material solicitado, enviar e-mail solicitando cotação, estabelecer prazo para retorno das propostas, receber e analisar as cotações e montar o Mapa de Cotação no sistema MEGA.</p>
   <p><b>Análise e negociação</b> — critérios de avaliação: preço, prazo de pagamento, prazo de entrega, qualidade do produto/serviço e histórico do fornecedor. O Setor de Compras compara as propostas, negocia preços e prazos, avalia o melhor custo-benefício e documenta as negociações realizadas.</p>`},
 {tag:'5.5 – 5.6', title:'Envio do mapa de cotação e aprovação da compra', body:`
   <p><b>Envio do mapa de cotação</b> (mínimo 3 propostas):</p>
   <ul>
     <li><b>Obras com Gerenciador de Custos:</b> Compras envia o mapa para a obra → a obra encaminha ao gerenciador de custos → aguarda aprovação.</li>
     <li><b>Obras sem Gerenciador:</b> o Setor de Compras escolhe a melhor opção com base no custo-benefício e documenta a justificativa da escolha.</li>
   </ul>
   <p><b>Regras de aprovação por valor e tipo de obra:</b></p>
   <table class="doctable">
     <tr><th>Tipo de obra</th><th>Faixa de valor</th><th>Aprovador</th></tr>
     <tr><td>KATZ</td><td class="val">Até R$ 5.000,00</td><td>Engenheiro (no sistema)</td></tr>
     <tr><td>KATZ</td><td class="val">Acima de R$ 5.000,00</td><td>Superintendente Caetano</td></tr>
     <tr><td>HAUZ</td><td class="val">Até R$ 5.000,00</td><td>Engenheiro</td></tr>
     <tr><td>HAUZ</td><td class="val">R$ 5.000,01 a R$ 15.000,00</td><td>Superintendente Caetano</td></tr>
     <tr><td>HAUZ</td><td class="val">Acima de R$ 15.000,00</td><td>Diretor Guilherme Vargas</td></tr>
   </table>`},
 {tag:'5.7 – 5.8', title:'Emissão do pedido e acompanhamento da entrega', body:`
   <p><b>Emissão do pedido de compra:</b> gerar o PDF do pedido no sistema, enviar ao fornecedor para confirmação, enviar cópia à obra para ciência e arquivar cópia no sistema. Documentos gerados: Pedido de Compra em PDF e comprovante de envio.</p>
   <p><b>Acompanhamento da entrega:</b></p>
   <ul>
     <li><b>Obra:</b> acompanha o prazo de entrega, cobra em caso de atraso, comunica problemas ao Setor de Compras e confirma o recebimento dos materiais.</li>
     <li><b>Setor de Compras:</b> dá suporte à obra, intermedia a comunicação com o fornecedor quando necessário e atualiza o status no sistema MEGA.</li>
   </ul>`},
 {tag:'Fluxo', title:'Fluxograma do processo', body:`
   <div class="flow">
     <div class="fnode">Obra envia solicitação (e-mail)</div>
     <span class="farrow">→</span>
     <div class="fnode">Compras recebe e abre a RM no MEGA</div>
     <span class="farrow">→</span>
     <div class="fnode">Cotação com fornecedores (mín. 3)</div>
     <span class="farrow">→</span>
     <div class="fnode">Análise e negociação</div>
     <span class="farrow">→</span>
     <div class="fnode">Envio do mapa de cotação</div>
     <span class="fdiamond">Com gerenciador de custos?</span>
     <div class="fnode">Sim → obra encaminha ao gerenciador · Não → Compras escolhe a melhor opção</div>
     <span class="farrow">→</span>
     <div class="fnode">Aprovação conforme hierarquia</div>
     <span class="farrow">→</span>
     <div class="fnode">Emissão do pedido de compra</div>
     <span class="farrow">→</span>
     <div class="fnode">Envio para fornecedor e obra</div>
     <span class="farrow">→</span>
     <div class="fnode">Acompanhamento da entrega</div>
   </div>`},
 {tag:'7', title:'Indicadores de desempenho', body:`
   <table class="doctable">
     <tr><th>Indicador</th><th>O que mede</th></tr>
     <tr><td>Prazo de Atendimento</td><td>% de solicitações atendidas dentro do prazo D+3</td></tr>
     <tr><td>Economia Gerada</td><td>% de economia obtida através das negociações</td></tr>
     <tr><td>Qualidade dos Fornecedores</td><td>Índice de satisfação com as entregas realizadas</td></tr>
     <tr><td>Conformidade do Processo</td><td>% de processos executados conforme este POP</td></tr>
   </table>
   <p style="font-size:12px;color:var(--slate)">Documento controlado — cópia não controlada quando impressa. Todos os colaboradores envolvidos no processo devem ser treinados neste procedimento.</p>`}
];

/* Fluxogramas A.D.O. — passo a passo no sistema MEGA (sub-seção dentro de Planejamento) */
const fluxogramasAdoSections = [
 {tag:'ADO 1', title:'Apropriação de Empreiteiros', body:`
   <ol>
     <li>Acessar sistema Mega</li>
     <li>Acessar opção Gestão Empresarial / ERP</li>
     <li>Selecionar Construção</li>
     <li>Contratos de Empreiteiros</li>
     <li>Selecionar Contratos</li>
     <li>Selecionar Empreiteiro cadastrado</li>
     <li>Selecionar Outros</li>
     <li>Clicar em Dados Opcionais</li>
     <li>Selecionar Apropriação</li>
     <li>Clicar em Inserir</li>
     <li>Inserir código de orçamento</li>
     <li>Clicar nos 3 pontinhos de Estruturado</li>
     <li>Inserir código estruturado no campo de busca</li>
     <li>Selecionar os serviços do orçamento</li>
     <li>Clicar nos 3 pontinhos do cód. insumo</li>
     <li>Inserir código do tipo de insumo</li>
     <li>Selecionar insumos do orçamento</li>
     <li>Inserir quantidade contratada</li>
     <li>Selecionar Confirmar para finalizar</li>
   </ol>`},
 {tag:'ADO 2', title:'Lançamento de Contrato', body:`
   <ol>
     <li>Acessar sistema Mega</li>
     <li>Acessar opção Gestão Empresarial / ERP</li>
     <li>Acessar opção Construção</li>
     <li>Acessar a opção Contratos de Empreiteiros</li>
     <li>Acessar a opção Contratos</li>
     <li>Acessar a opção Inserir</li>
     <li>Clicar nos três pontinhos de Fornecedor</li>
     <li>Pesquisar empreiteiro no campo de busca</li>
     <li>Selecionar Empreiteiro</li>
     <li>Clicar nos três pontinhos de Obra/Projeto</li>
     <li>Selecionar Obra</li>
     <li>Inserir data de início e data final</li>
     <li>Inserir tabela de preço cadastrada</li>
     <li>Inserir centro de custo determinado</li>
     <li>Na aba Serviços, clicar nos três pontinhos da opção Cód. Item</li>
     <li>Buscar no campo de pesquisa o serviço contratado</li>
     <li>Selecionar a opção de busca</li>
     <li>Selecionar a classe 147 — Serviços de Empreiteiro</li>
     <li>Inserir medida contratada</li>
     <li>Inserir PR.Contrato</li>
     <li>Inserir quantidade total</li>
     <li>Selecionar a aba Menor Aprovação de Alçada</li>
     <li>Selecionar a aba Retenções</li>
     <li>Selecionar a aba Menor de Retenções</li>
     <li>Excluir histórico de retenções</li>
     <li>Clicar em Percentual</li>
     <li>Selecionar a opção Caução Contratual por Medição</li>
     <li>Preencher o percentual estabelecido (10%)</li>
     <li>Mudar para aba Menor Aprovação Fiscal</li>
     <li>Clicar em Aprovação, se confirmar</li>
     <li>Voltar para aba Contratos</li>
     <li>Clicar em Confirmar</li>
   </ol>`},
 {tag:'ADO 3', title:'Medição', body:`
   <ol>
     <li>Acessar o sistema Mega</li>
     <li>Acessar a opção Gestão Empresarial / ERP</li>
     <li>Acessar a opção Construção</li>
     <li>Acessar a opção Contratos de Empreiteiros</li>
     <li>Acessar a opção Medição</li>
     <li>Selecionar o contrato cadastrado</li>
     <li>Selecionar a opção Inserir</li>
     <li>Selecionar Fornecedor nos três pontinhos de opção</li>
     <li>Acessar a aba Itens do Contrato</li>
     <li>Selecionar a opção Inserir</li>
     <li>Na aba Medição, selecionar Valor Total e inserir valor de medição</li>
     <li>Acessar a opção Local e selecionar opção Obra</li>
     <li>Acessar a aba Apropriação</li>
     <li>Selecionar a opção Inserir</li>
     <li>Selecionar a obra de apropriação</li>
     <li>Na opção Estruturado, selecionar tipo de serviço</li>
     <li>Na opção Quantidade, selecionar a quantidade a ser apropriada</li>
     <li>Selecionar Confirmar</li>
     <li>Confirmar para liberar a medição para aprovação</li>
   </ol>`},
 {tag:'ADO 4', title:'Lançamento de Notas — Empreiteiro', body:`
   <ol>
     <li>Acessar o sistema Mega</li>
     <li>Acessar a opção Gestão Empresarial / ERP</li>
     <li>Acessar a opção Construção</li>
     <li>Acessar a opção Contratos de Empreiteiros</li>
     <li>Acessar a opção Entradas</li>
     <li>Selecionar Contratos</li>
     <li>Selecionar a opção Inserir</li>
     <li>Na aba Documentos, selecionar a opção Cód. Medição e inserir código</li>
     <li>Selecionar nº documento e tipo doc. (financeiro) e inserir dados</li>
     <li>Inserir tipo de documento financeiro</li>
     <li>Selecionar D.T. Entrada e inserir a data</li>
     <li>Selecionar D.T. Emissão e inserir a data</li>
     <li>Selecionar D.T. Competência e inserir a data</li>
     <li>Selecionar cód. per. st. serviço</li>
     <li>Selecionar aba Itens Medição e conferir dados</li>
     <li>Acessar aba Observações</li>
     <li>Gravar alterações</li>
     <li>Selecionar Anexos</li>
     <li>Na aba Anexos, selecionar Inserir</li>
     <li>Selecionar arquivo do computador</li>
     <li>Selecionar Abrir arquivo</li>
     <li>Inserir descrição do documento e confirmar</li>
     <li>Selecionar Gerar CPAG/TRF</li>
     <li>Selecionar Gerar Parcelas</li>
     <li>Inserir a data de vencimento e confirmar</li>
     <li>Confirmar e selecionar a exportação da nota</li>
     <li>Selecionar OK para confirmar autorização de pagamento</li>
   </ol>`},
 {tag:'ADO 5', title:'Solicitação de Material', body:`
   <ol>
     <li>Acessar sistema Mega</li>
     <li>Acessar opção Gestão Empresarial / ERP</li>
     <li>Acessar opção Construção</li>
     <li>Acessar a opção Administração de Obras</li>
     <li>Acessar a opção de Orçamentos</li>
     <li>Acessar a opção Solicitações</li>
     <li>Acessar a aba de Solicitações</li>
     <li>Selecionar a opção Inserir</li>
     <li>Selecionar a aba Itens Solicitados</li>
     <li>Selecionar Serviço, Insumo</li>
     <li>Confirmar opção selecionada</li>
     <li>Selecionar a descrição</li>
     <li>Selecionar a opção Trocar</li>
     <li>Selecionar a opção Troca de Itens</li>
     <li>Selecionar a opção Inserir</li>
     <li>Selecionar o código do item e inserir</li>
     <li>Inserir cód. de classe</li>
     <li>Inserir cód. aplicação</li>
     <li>Inserir custo unitário</li>
     <li>Inserir qtde. a selecionar</li>
     <li>Selecionar a opção Selecionar Troca</li>
     <li>Selecionar OK para confirmar</li>
     <li>Selecionar a aba Geral</li>
     <li>Inserir observações (fornecedor e tipo de lançamento)</li>
     <li>Confirmar solicitação</li>
   </ol>`},
 {tag:'ADO 6', title:'Cotação de Material', body:`
   <ol>
     <li>Acessar sistema Mega</li>
     <li>Acessar opção Gestão Empresarial / ERP</li>
     <li>Acessar opção Empresarial</li>
     <li>Acessar a opção Materiais</li>
     <li>Acessar a opção de Suprimentos</li>
     <li>Acessar a opção de Cotação</li>
     <li>Acessar a opção Em Aberto</li>
     <li>Selecionar a aba Itens e Fornecedores</li>
     <li>Selecionar a opção Itens Solicitados</li>
     <li>Na aba Filtro, inserir data e filtrar</li>
     <li>Na aba Itens Disponíveis, selecionar a opção desejada e confirmar</li>
     <li>Selecionar a opção Inserir Fornecedor</li>
     <li>No campo de pesquisa, inserir Fornecedor e selecionar</li>
     <li>Selecionar a opção de Valores da Cotação</li>
     <li>Selecionar a aba Fornecedor</li>
     <li>Selecionar Condições de Pagamento e inserir</li>
     <li>Selecionar a aba Itens</li>
     <li>Inserir valor a converter</li>
     <li>Selecionar em Encerrar e encerrar cotação</li>
     <li>Confirmar cotação</li>
   </ol>`},
 {tag:'ADO 7', title:'Lançamento de Notas Fiscal', body:`
   <ol>
     <li>Acessar sistema Mega</li>
     <li>Acessar opção Gestão Empresarial / ERP</li>
     <li>Acessar opção Empresarial</li>
     <li>Acessar a opção Materiais</li>
     <li>Acessar a opção Entradas</li>
     <li>Inserir nº do documento</li>
     <li>Inserir data de emissão</li>
     <li>Selecionar Agente e inserir</li>
     <li>Selecionar tipo de preço</li>
     <li>Selecionar cond. pagamento e inserir</li>
     <li>Selecionar e inserir centro de custo</li>
     <li>Selecionar e inserir projeto padrão</li>
     <li>Selecionar e inserir valor das mercadorias</li>
     <li>Selecionar a aba Itens</li>
     <li>Selecionar a opção Inserir</li>
     <li>Selecionar itens de pedido e confirmar</li>
     <li>Selecionar a aba Edição de Itens</li>
     <li>Atualizar dados mediante nota fiscal e confirmar</li>
     <li>Selecionar aba de Itens</li>
     <li>Selecionar opção Outros</li>
     <li>Selecionar a opção Anexos</li>
     <li>Selecionar a opção Inserir</li>
     <li>Selecionar Nota Fiscal e abrir</li>
     <li>Inserir descrição e confirmar</li>
     <li>Selecionar a opção Confirmar</li>
     <li>Atualizar data de vencimento e prorrogado</li>
     <li>Selecionar Confirmar e OK para finalizar o lançamento</li>
   </ol>`},
 {tag:'ADO 8', title:'Relatório de Custo Realizado (ADO)', body:`
   <ol>
     <li>Acessar sistema Mega</li>
     <li>Acessar opção Gestão Empresarial / ERP</li>
     <li>Acessar opção Construção</li>
     <li>Acessar a opção Administração de Obras</li>
     <li>Acessar a opção Relatórios</li>
     <li>Selecionar a opção Relatórios Operacionais</li>
     <li>Selecionar a opção Custo Realizado</li>
     <li>Atualizar parâmetros (orçamento, data de referência, custo realizado)</li>
     <li>Selecionar na opção Visualizar</li>
     <li>Selecionar a opção Exportar Relatório</li>
     <li>Selecionar o tipo de arquivo</li>
     <li>Selecionar Este Computador</li>
     <li>Selecionar o local de armazenamento</li>
     <li>Selecionar a opção Salvar</li>
     <li>Quando aparecer finalizado, visualizar na seta Downloads</li>
   </ol>`},
 {tag:'ADO 9', title:'Cadastrar Primeiro Acesso', body:`
   <ol>
     <li>Acessar link de primeiro acesso</li>
     <li>Acessar <span class="mono">agenda.megaerp.online/login</span></li>
     <li>Inserir conta: 177</li>
     <li>Clicar na aba de Cadastro de Usuário</li>
     <li>Preencher Nome</li>
     <li>Preencher Sobrenome</li>
     <li>Preencher Display Name</li>
     <li>Preencher e-mail</li>
     <li>Selecionar Departamento</li>
     <li>Clicar em Salvar</li>
     <li>Receber senha de segundo acesso</li>
     <li>Selecionar Grupo de Usuário</li>
     <li>Inserir Grupo</li>
     <li>Preencher login nome.sobrenome</li>
     <li>Preencher e-mail</li>
     <li>Preencher Nome</li>
     <li>Preencher senha e confirmar senha</li>
     <li>Configurar regra de validade para senha</li>
     <li>Selecionar a aba Perfil por Organização e confirmar</li>
     <li>Confirmar login de usuário</li>
   </ol>`},
 {tag:'ADO 10', title:'Passo a passo para abrir ticket no MEGA', body:`
   <ol>
     <li>Printar tela do erro</li>
     <li>Anexar na abertura do ticket</li>
     <li>Utilizar o link e clicar em Suporte</li>
     <li>Acessar <span class="mono">oci.megaerp.online</span></li>
     <li>Realizar login na página do MEGA ou cadastrar se primeiro acesso</li>
     <li>Clicar em enviar uma solicitação</li>
     <li>Preencher os campos em aberto</li>
     <li>Explicar de forma detalhada, no campo da descrição, o que tentou ser feito e não obteve êxito</li>
     <li>Selecionar tipo de solicitação</li>
     <li>Selecionar módulo do sistema</li>
     <li>Adicionar em anexo o print da tela do erro ocorrido</li>
     <li>Enviar solicitação</li>
     <li>Receber protocolo</li>
     <li>Avaliar resposta do MEGA (2 dias para retorno)</li>
   </ol>`}
];

/* POP — Marketing */
const popMarketingSections = [
 {tag:'1', title:'Planejamento de Campanhas', body:`
   <ol>
     <li>Receber solicitação de campanha via sistema interno ou reunião</li>
     <li>Documentar objetivos, público-alvo, orçamento e prazo</li>
     <li>Definir KPIs e metas de performance</li>
     <li>Encaminhar briefing para análise</li>
     <li>Analisar concorrência e tendências do mercado</li>
     <li>Pesquisar comportamento do público-alvo</li>
     <li>Identificar oportunidades e ameaças</li>
     <li>Definir estratégia e canais recomendados</li>
     <li>Documentar análise em relatório padronizado</li>
     <li>Revisar briefing e análise de mercado</li>
     <li>Definir cronograma detalhado de execução</li>
     <li>Alocação de recursos humanos e financeiros</li>
     <li>Estabelecer marcos de entrega (milestones)</li>
     <li>Aprovar início da fase criativa</li>
   </ol>`},
 {tag:'2', title:'Criação de Materiais', body:`
   <ol>
     <li>Analisar briefing e diretrizes da marca</li>
     <li>Desenvolver conceito criativo alinhado aos objetivos</li>
     <li>Definir tom de comunicação e elementos visuais</li>
     <li>Documentar conceito para orientar</li>
     <li>Submeter conceito para aprovação interna</li>
     <li>Receber briefing e conceito criativo aprovado</li>
     <li>Produzir textos seguindo diretrizes da marca</li>
     <li>Adaptar conteúdo para diferentes canais</li>
     <li>Revisar ortografia e gramática</li>
     <li>Submeter textos para revisão interna</li>
     <li>Receber briefing, conceito e textos aprovados</li>
     <li>Criar layouts seguindo identidade visual</li>
     <li>Desenvolver variações para diferentes formatos</li>
     <li>Otimizar materiais para cada plataforma</li>
     <li>Submeter artes para revisão interna</li>
     <li>Revisar alinhamento com briefing e objetivos</li>
     <li>Verificar consistência com identidade da marca</li>
     <li>Validar especificações técnicas</li>
     <li>Solicitar ajustes se necessário</li>
     <li>Aprovar materiais para apresentação ao cliente</li>
     <li>Apresentar materiais em formato de mockup</li>
     <li>Coletar feedback e solicitações de ajuste</li>
     <li>Documentar alterações solicitadas</li>
     <li>Implementar ajustes aprovados</li>
     <li>Obter aprovação final por escrito</li>
   </ol>`},
 {tag:'3', title:'Implementação Técnica', body:`
   <ol>
     <li>Configurar pixels de rastreamento nas plataformas</li>
     <li>Definir públicos-alvo e segmentações</li>
     <li>Estabelecer orçamentos e lances</li>
     <li>Configurar metas e eventos de conversão</li>
     <li>Testar configurações antes da publicação</li>
     <li>Inserir materiais aprovados nas plataformas</li>
     <li>Configurar segmentações e orçamentos</li>
     <li>Agendar publicações conforme cronograma</li>
     <li>Revisar configurações finais</li>
     <li>Manter conteúdo em modo rascunho</li>
     <li>Fazer revisão final de todos os elementos</li>
     <li>Ativar campanhas conforme cronograma</li>
     <li>Verificar se publicações estão ativas</li>
     <li>Documentar horário e data de ativação</li>
     <li>Comunicar ativação para equipe</li>
   </ol>`},
 {tag:'4', title:'Monitoramento e Otimização', body:`
   <ol>
     <li>Verificar performance das campanhas ativas</li>
     <li>Monitorar métricas principais (CTR, CPC, conversões)</li>
     <li>Identificar campanhas com performance abaixo do esperado</li>
     <li>Implementar otimizações básicas (ajuste de lance, pausar anúncios)</li>
     <li>Documentar alterações realizadas</li>
     <li>Compilar dados de performance da semana</li>
     <li>Calcular KPIs principais (ROI, CAC, taxa de conversão)</li>
     <li>Comparar resultados com metas estabelecidas</li>
     <li>Identificar insights e oportunidades de melhoria</li>
     <li>Apresentar relatório para coordenação</li>
     <li>Consolidar dados de performance do mês anterior</li>
     <li>Analisar tendências e padrões de comportamento</li>
     <li>Avaliar ROI geral das campanhas</li>
     <li>Identificar campanhas de maior e menor sucesso</li>
     <li>Propor ajustes estratégicos para próximo período</li>
   </ol>`},
 {tag:'5', title:'Gestão de Redes Sociais', body:`
   <ol>
     <li>Criar calendário editorial semanal/mensal</li>
     <li>Definir temas e formatos de conteúdo</li>
     <li>Alinhar conteúdo com campanhas ativas</li>
     <li>Programar dias e horários de publicação</li>
     <li>Submeter calendário para aprovação</li>
     <li>Produzir conteúdo conforme calendário</li>
     <li>Criar materiais visuais necessários</li>
     <li>Revisar conteúdo antes da publicação</li>
     <li>Publicar nos dias e horários programados</li>
     <li>Monitorar primeiras interações</li>
     <li>Responder comentários e mensagens em até 2h em tempo real</li>
     <li>Moderar comentários inadequados</li>
     <li>Engajar com seguidores de forma proativa</li>
     <li>Identificar oportunidades de relacionamento</li>
     <li>Escalar questões complexas para coordenação</li>
   </ol>`}
];

/* ============================ MODULES ============================ */

const modules = [
 {id:'inicio', num:'00', label:'Início', crumb:'Início', category:'GLOBAL', icon:'◎', iconBg:'#e8f3ee', iconColor:'#2f8f5b'},
 {id:'principios', num:'01', label:'Boas-vindas & Princípios', crumb:'Boas-vindas & Princípios Katz', category:'TRILHA DE CULTURA', icon:'✺', iconBg:'#fdf1de', iconColor:'#dd8f2e'},
 {id:'organograma', num:'02', label:'Nossa Estrutura', crumb:'Nossa Estrutura', category:'TRILHA DE CULTURA', icon:'▤', iconBg:'#e9f0f9', iconColor:'#2a5484'},
 {id:'lideranca', num:'03', label:'Guia de Liderança', crumb:'Guia de Liderança', category:'TRILHA DE LIDERANÇA', icon:'◈', iconBg:'#e6f4f3', iconColor:'#2b8f86'},
 {id:'dp', num:'04', label:'Departamento Pessoal', crumb:'Departamento Pessoal', category:'TRILHA DE PROCESSOS', icon:'▣', iconBg:'#f2ecf9', iconColor:'#7c5cb8'},
 {id:'planejamento', num:'05', label:'Planejamento de Obras', crumb:'POP · Planejamento de Obras', category:'TRILHA DE PROCESSOS', icon:'◫', iconBg:'#eef0fb', iconColor:'#5b5fc7'},
 {id:'financeiro', num:'06', label:'Financeiro', crumb:'POP · Financeiro', category:'TRILHA DE PROCESSOS', icon:'¤', iconBg:'#fdeeee', iconColor:'#c0392b'},
 {id:'compras', num:'07', label:'Compras', crumb:'POP · Compras', category:'TRILHA DE PROCESSOS', icon:'⚒', iconBg:'#eaf6fb', iconColor:'#1f7a99'},
 {id:'marketing', num:'08', label:'Marketing', crumb:'POP · Marketing', category:'TRILHA DE PROCESSOS', icon:'◉', iconBg:'#fdf0f5', iconColor:'#c23a7a'}
];

/* ordem de desbloqueio — cada módulo exige o anterior concluído; 'inicio' é sempre livre */
/* 'empreiteiras' não é mais um módulo separado: seu conteúdo virou uma seção dentro de 'dp' (Departamento Pessoal) */
const unlockOrder = ['principios','organograma','lideranca','dp','planejamento','financeiro','compras','marketing'];
function isLocked(id){
  if(id === 'inicio') return false;
  const i = unlockOrder.indexOf(id);
  if(i <= 0) return false;
  const prev = unlockOrder[i-1];
  return !completed[prev];
}
function prevLabel(id){
  const i = unlockOrder.indexOf(id);
  if(i <= 0) return '';
  return modules.find(m=>m.id===unlockOrder[i-1]).label;
}

let current = 'inicio';
const trackableModules = modules.filter(m => m.id !== 'inicio');

/* ---------- auth + progress storage ---------- */
const ACCESS_PASSWORD = 'katz2026'; // altere aqui a senha de acesso da equipe
let username = '';
let completed = {};
let memoryStore = {}; // fallback quando window.storage não está disponível (arquivo aberto fora do claude.ai)
let hasRealStorage = !!(window.storage && window.storage.get);

async function storageGet(key){
  if(hasRealStorage){
    try{ const r = await window.storage.get(key, true); return r ? r.value : null; }
    catch(e){ return null; }
  }
  return memoryStore[key] ?? null;
}
async function storageSet(key, value){
  if(hasRealStorage){
    try{ await window.storage.set(key, value, true); return; }catch(e){ /* cai no fallback */ }
  }
  memoryStore[key] = value;
}

async function loadProgress(name){
  const raw = await storageGet('progress:' + name.toLowerCase());
  try{ completed = raw ? JSON.parse(raw) : {}; }catch(e){ completed = {}; }
}
async function saveProgress(){
  await storageSet('progress:' + username.toLowerCase(), JSON.stringify(completed));
}
function toggleComplete(id){
  completed[id] = !completed[id];
  saveProgress();
  renderProgressBar();
  renderNav();
  const btn = document.getElementById('completeToggle');
  if(btn){
    const done = !!completed[id];
    btn.textContent = done ? '✓ Módulo concluído' : 'Marcar como concluído';
    btn.classList.toggle('done', done);
  }
}
function renderProgressBar(){
  const total = trackableModules.length;
  const done = trackableModules.filter(m => completed[m.id]).length;
  const pct = total ? Math.round((done/total)*100) : 0;
  const label = document.getElementById('progressLabel');
  const pctEl = document.getElementById('progressPct');
  const fill = document.getElementById('progressFill');
  if(label) label.textContent = `${done} de ${total} concluídos`;
  if(pctEl) pctEl.textContent = pct + '%';
  if(fill) fill.style.width = pct + '%';
}

/* ---------- login flow ---------- */
let userRole = '';
document.getElementById('loginForm').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const name = document.getElementById('loginName').value.trim();
  const role = document.getElementById('loginRole').value.trim();
  const pass = document.getElementById('loginPass').value;
  const errEl = document.getElementById('loginError');
  if(pass !== ACCESS_PASSWORD){
    errEl.textContent = 'Senha incorreta. Confira com o RH e tente novamente.';
    return;
  }
  if(!name){
    errEl.textContent = 'Informe seu nome.';
    return;
  }
  errEl.textContent = '';
  username = name;
  userRole = role || 'Colaborador(a) Katz';
  await loadProgress(username);
  document.getElementById('userName').textContent = username;
  document.getElementById('tbName').textContent = username;
  document.getElementById('tbRole').textContent = userRole;
  document.getElementById('tbAvatar').textContent = username.trim().charAt(0).toUpperCase() || '?';
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('appRoot').style.display = '';
  go('inicio');
});
document.getElementById('logoutBtn').addEventListener('click', ()=>{
  document.getElementById('appRoot').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginPass').value = '';
  document.getElementById('loginError').textContent = '';
});

function renderNav(){
  const ul = document.getElementById('navlist');
  ul.innerHTML = modules.map(m => {
    const locked = isLocked(m.id);
    return `
    <li><button data-id="${m.id}" class="${m.id===current?'active':''} ${locked?'locked':''}" ${locked?'title="Conclua o módulo anterior para desbloquear"':''}>
      <span class="num">${locked ? '🔒' : m.num}</span>${m.label}
      ${completed[m.id] ? '<span class="nav-check">✓</span>' : ''}
    </button></li>`;
  }).join('');
  ul.querySelectorAll('button').forEach(b=>{
    b.addEventListener('click', ()=>{ go(b.dataset.id); document.getElementById('navlist').classList.remove('open'); });
  });
}

function go(id){
  if(isLocked(id)){
    current = id;
    renderNav(); renderProgressBar();
    document.getElementById('crumbTitle').textContent = modules.find(m=>m.id===id).crumb;
    document.getElementById('view').innerHTML = lockedView(id);
    wireCards();
    window.scrollTo({top:0, behavior:'instant'});
    return;
  }
  current = id;
  document.getElementById('crumbTitle').textContent = modules.find(m=>m.id===id).crumb;
  renderNav();
  renderProgressBar();
  const view = document.getElementById('view');
  view.innerHTML = renderers[id]();
  wireAccordions();
  wireCards();
  const toggleBtn = document.getElementById('completeToggle');
  if(toggleBtn){
    toggleBtn.addEventListener('click', ()=> toggleComplete(id));
  }
  window.scrollTo({top:0, behavior:'instant'});
}

function lockedView(id){
  const m = modules.find(x=>x.id===id);
  return `
  <div class="section-label">${m.category}</div>
  <h2 class="page-title">${m.label}</h2>
  <div class="callout" style="margin-top:18px;">
    <span class="ico">🔒</span>
    <span>Este módulo é liberado depois que você concluir <b>${prevLabel(id)}</b>. Volte para o módulo anterior e marque como concluído para seguir a trilha.</span>
  </div>
  <div class="pager" style="margin-top:24px;">
    <button data-go="inicio"><div class="lbl">← Voltar</div><div class="ttl">Início</div></button>
    <div></div>
  </div>`;
}

function completeBarHTML(id){
  const done = !!completed[id];
  return `<div class="complete-bar">
    <div class="txt">${done ? '<b>Concluído.</b> Você já marcou este módulo como estudado.' : 'Terminou de revisar este módulo?'}</div>
    <button class="complete-toggle ${done?'done':''}" id="completeToggle">${done ? '✓ Módulo concluído' : 'Marcar como concluído'}</button>
  </div>`;
}

function pagerHTML(id){
  const i = modules.findIndex(m=>m.id===id);
  const prev = modules[i-1], next = modules[i+1];
  const bar = id==='inicio' ? '' : completeBarHTML(id);
  return `${bar}<div class="pager">
    ${prev ? `<button data-go="${prev.id}"><div class="lbl">← Anterior</div><div class="ttl">${prev.label}</div></button>` : '<div></div>'}
    ${next ? `<button data-go="${next.id}" class="next"><div class="lbl">Próximo →</div><div class="ttl">${next.label}</div></button>` : '<div></div>'}
  </div>`;
}

function wireCards(){
  document.querySelectorAll('[data-goto]').forEach(el=>{
    el.addEventListener('click', ()=> go(el.dataset.goto));
  });
  document.querySelectorAll('[data-go]').forEach(el=>{
    el.addEventListener('click', ()=> go(el.dataset.go));
  });
}

function wireAccordions(){
  document.querySelectorAll('.acc-item').forEach(item=>{
    const head = item.querySelector('.acc-head');
    const body = item.querySelector('.acc-body');
    head.addEventListener('click', ()=>{
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open', !isOpen);
      body.style.maxHeight = isOpen ? null : body.scrollHeight + 'px';
    });
  });
  document.querySelectorAll('.principle-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      go('lideranca');
      setTimeout(()=>{
        const item = document.querySelector(`.acc-item[data-n="${card.dataset.n}"]`);
        if(item){ item.querySelector('.acc-head').click(); item.scrollIntoView({behavior:'smooth', block:'start'}); }
      }, 30);
    });
  });
}

/* ============================ RENDERERS ============================ */

const renderers = {

inicio(){
  const done = trackableModules.filter(m=>completed[m.id]).length;
  return `
  <div class="hero">
    <div class="eyebrow">Katz Academy</div>
    <h1>Olá, ${username || 'colaborador(a)'}. Sua trilha de integração começa aqui.</h1>
    <p>Um painel único com os Princípios Katz, a estrutura organizacional, o Departamento Pessoal, o Guia de Liderança e a gestão de empreiteiras. Siga a trilha na ordem — cada módulo libera o próximo. Você concluiu <b style="color:var(--amber-600)">${done} de ${trackableModules.length}</b> módulos.</p>
  </div>

  <div class="stats">
    <div class="stat"><div class="n">9</div><div class="l">Princípios Katz</div></div>
    <div class="stat"><div class="n">4</div><div class="l">Áreas corporativas</div></div>
    <div class="stat"><div class="n">21</div><div class="l">Itens de checklist (empresa + funcionário)</div></div>
    <div class="stat"><div class="n">8</div><div class="l">Indicadores de desempenho do DP</div></div>
  </div>

  <div class="section-label">Sua trilha</div>
  <div class="card-grid">
    ${trackableModules.map(m => moduleCardHTML(m)).join('')}
  </div>
  `;
},

principios(){
  return `
  <div class="section-label">Módulo 01 · Trilha de Cultura</div>
  <h2 class="page-title">Os Princípios Katz</h2>
  <p class="page-sub">A régua que usamos para decidir, liderar e trabalhar. Cada líder do Grupo Katz é guardião desta cultura: o padrão do time nunca sobe acima do padrão do líder. Clique em um princípio para abrir o detalhamento completo no Guia de Liderança.</p>

  <div class="callout" style="align-items:flex-start;">
    <span class="ico">◈</span>
    <span><b>Por que estes princípios existem:</b> eles não são um cartaz na parede — são o critério que usamos para decidir, contratar, vender, atender e liderar. Quando houver dúvida sobre o que fazer, voltamos aqui. Para quem lidera — gerentes e diretores — estes princípios são também a régua: a liderança começa pelo exemplo, a cultura se materializa no que os líderes fazem, não no que dizem.</span>
  </div>

  <div class="section-label" style="margin-top:28px;">Missão, Sonho, Negócio e Valores</div>
  <div class="accordion" style="margin-bottom:24px;">
    <div class="acc-body-inner" style="padding:20px;">
      <p><b>Missão:</b> Trabalhar com qualidade e ética, dentro das normas técnicas, para que nossos produtos sejam superiores, nossos funcionários e parceiros compartilhem de nosso sucesso e nossos investidores tenham maior retorno financeiro.</p>
      <p><b>Sonho:</b> Construir os empreendimentos mais modernos e luxuosos do Brasil.</p>
      <p><b>Negócio:</b> Incorporação, construção e vendas no setor da construção civil.</p>
      <p style="margin-top:14px"><b>Valores:</b></p>
      <ul>
        <li><b>Eficiência</b> — Atendimento das metas nos prazos estabelecidos.</li>
        <li><b>Comprometimento</b> — Cumprimento das responsabilidades e compromissos assumidos.</li>
        <li><b>Resultados</b> — Gestão com foco em resultados.</li>
        <li><b>Ética</b> — Perfeita execução dos serviços aliada à transparência na execução dos mesmos.</li>
        <li><b>Qualidade</b> — Acompanhamento e verificação de todos os serviços visando a satisfação de nossos clientes.</li>
      </ul>
    </div>
  </div>

  <div class="principle-grid">
    ${principles.map(p=>`
      <div class="principle-card" data-n="${p.n}">
        <div class="pn">${p.n}</div>
        <h4>${p.title}</h4>
        <p>${p.short}</p>
      </div>`).join('')}
  </div>
  <div class="quote-block" style="margin-top:22px; font-size:14px;">Cultura não é o que dizemos. É o que fazemos quando ninguém está olhando.</div>

  <div class="section-label" style="margin-top:34px;">Como usamos isto no dia a dia</div>
  <div class="accordion" style="margin-bottom:0;">
    <div class="acc-body-inner" style="padding:18px 20px;">
      <ul>
        <li><b>Decisão difícil?</b> Pergunte: os dados confirmam? É o nosso melhor? Respeita o outro?</li>
        <li><b>Contratação e promoção:</b> primeiro selecionamos quem encarna estes valores, depois treinamos habilidade.</li>
        <li><b>Feedback e reconhecimento:</b> celebramos quem vive os princípios; corrigimos quem se afasta deles.</li>
        <li><b>Reuniões e metas:</b> trazemos dados, definimos poucas prioridades e agimos com urgência.</li>
      </ul>
    </div>
  </div>

  ${pagerHTML('principios')}
  `;
},

lideranca(){
  return `
  <div class="section-label">Módulo 03 · Trilha de Liderança</div>
  <h2 class="page-title">Guia de Liderança</h2>
  <p class="page-sub">Os Princípios Katz aplicados à gestão de pessoas — para gerentes e diretores. Para cada princípio: o que significa na prática, comportamentos esperados, um exemplo do dia a dia e o framework de apoio.</p>
  <div class="accordion">
    ${principles.map((p,i)=>`
      <div class="acc-item ${i===0?'open':''}" data-n="${p.n}">
        <div class="acc-head">
          <div class="htitle"><span class="tag">${p.n}</span><h4>${p.title}</h4></div>
          <span class="chev">▾</span>
        </div>
        <div class="acc-body" style="${i===0?'max-height:none':'max-height:0'}">
          <div class="acc-body-inner">
            <p><b>O que significa:</b> ${p.meaning}</p>
            <p><b>Comportamentos esperados:</b></p>
            <ul>${p.behaviors.map(b=>`<li>${b}</li>`).join('')}</ul>
            <div class="quote-block">${p.practice}</div>
            <p><b>Framework de apoio:</b> ${p.framework}</p>
          </div>
        </div>
      </div>`).join('')}
  </div>
  <div class="quote-block" style="font-size:14px;">Decide com dado, entrega o melhor, nunca se acomoda, coloca o outro em primeiro lugar, age com respeito e urgência — e mantém a mente clara e a energia positiva.</div>
  ${pagerHTML('lideranca')}
  `;
},

organograma(){
  return `
  <div class="section-label">Módulo 02 · Trilha de Cultura</div>
  <h2 class="page-title">Estrutura & Organograma</h2>
  <p class="page-sub">Katz Construções · Construtora & Incorporadora — estrutura corporativa. Documento de uso interno.</p>
  <div class="org">
    <div class="org-ceo">CEO<span>Direção Geral</span></div>
    <div class="org-stem"></div>
    <div class="org-support">
      ${orgData.support.map(s=>`<div class="chip">${s}</div>`).join('')}
    </div>
    <div style="font-size:11px; color:var(--slate); font-family:'IBM Plex Mono'; margin-bottom:2px;">↑ áreas de apoio · assessoria ligada à Direção Geral</div>
    <div class="org-branches">
      ${orgData.branches.map(b=>`
        <div class="org-branch ${b.main?'main':''}">
          <h5>${b.main?'<span class="star">★</span> ':''}${b.name}${b.main?' <span style="font-size:10px;color:var(--slate);font-weight:400">área principal</span>':''}</h5>
          <ul>${b.items.map(it=>`<li>${it[0]}${it[1]?`<small>${it[1]}</small>`:''}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>
  </div>
  <div class="draft-note">v1 · rascunho para validação — itens marcados "sugestão a validar" ainda não confirmados</div>

  <div class="section-label" style="margin-top:34px;">Colaboradores</div>
  ${colaboradores.length === 0 ? `
  <div class="callout">
    <span class="ico">👥</span>
    <span>Diretório de contatos da equipe em preparação — nomes, cargos, telefones e fotos entram aqui em breve.</span>
  </div>` : `
  <div class="people-grid">
    ${colaboradores.map(c => colaboradorCardHTML(c)).join('')}
  </div>`}

  ${pagerHTML('organograma')}
  `;
},

dp(){
  return `
  <div class="section-label">Módulo 04 · Trilha de Processos</div>
  <h2 class="page-title">POP · Departamento Pessoal</h2>
  <p class="page-sub">Procedimento Operacional Padrão da Construtora Katz/Hauz — diretrizes para admissão, ponto, folha, benefícios, férias, rescisão e gestão de empreiteiros. Revisão 00 · 19/08/2025.</p>
  <div class="accordion">
    ${popSections.map((s,i)=>`
      <div class="acc-item ${i===0?'open':''}">
        <div class="acc-head">
          <div class="htitle"><span class="tag">${s.tag}</span><h4>${s.title}</h4></div>
          <span class="chev">▾</span>
        </div>
        <div class="acc-body" style="${i===0?'max-height:none':'max-height:0'}">
          <div class="acc-body-inner">${s.body}</div>
        </div>
      </div>`).join('')}
  </div>

  <div class="section-label" style="margin-top:34px;">Sub-módulo · Documentação de Empreiteiras</div>
  <p class="page-sub">Treinamento Katz/Hauz sobre due diligence, documentação de entrada e documentação de pagamento de empresas terceirizadas em obra. Abril 2024.</p>
  <div class="accordion">
    ${docEmpSections.map((s,i)=>`
      <div class="acc-item">
        <div class="acc-head">
          <div class="htitle"><span class="tag">${s.tag}</span><h4>${s.title}</h4></div>
          <span class="chev">▾</span>
        </div>
        <div class="acc-body" style="max-height:0">
          <div class="acc-body-inner">${s.body}</div>
        </div>
      </div>`).join('')}
  </div>

  ${pagerHTML('dp')}
  `;
},

planejamento(){
  return `
  <div class="section-label">Módulo 05 · Trilha de Processos</div>
  <h2 class="page-title">POP · Planejamento de Obras</h2>
  <p class="page-sub">Procedimento Operacional Padrão do Setor de Planejamento — cronogramas, acompanhamento físico, orçamento, sistemas (Mega/Approvo) e relatórios gerenciais. Revisão 00 · 19/09/2025.</p>
  <div class="accordion">
    ${popPlanejamentoSections.map((s,i)=>`
      <div class="acc-item ${i===0?'open':''}">
        <div class="acc-head">
          <div class="htitle"><span class="tag">${s.tag}</span><h4>${s.title}</h4></div>
          <span class="chev">▾</span>
        </div>
        <div class="acc-body" style="${i===0?'max-height:none':'max-height:0'}">
          <div class="acc-body-inner">${s.body}</div>
        </div>
      </div>`).join('')}
  </div>

  <div class="section-label" style="margin-top:34px;">Sub-módulo · Fluxogramas — Sistema MEGA (A.D.O.)</div>
  <p class="page-sub">Passo a passo operacional no sistema MEGA para Administração de Obras: apropriação, contratos, medição, notas, materiais, relatórios e acessos.</p>
  <div class="accordion">
    ${fluxogramasAdoSections.map((s,i)=>`
      <div class="acc-item">
        <div class="acc-head">
          <div class="htitle"><span class="tag">${s.tag}</span><h4>${s.title}</h4></div>
          <span class="chev">▾</span>
        </div>
        <div class="acc-body" style="max-height:0">
          <div class="acc-body-inner">${s.body}</div>
        </div>
      </div>`).join('')}
  </div>

  ${pagerHTML('planejamento')}
  `;
},

financeiro(){
  return `
  <div class="section-label">Módulo 06 · Trilha de Processos</div>
  <h2 class="page-title">POP · Financeiro</h2>
  <p class="page-sub">Procedimento Operacional Padrão do Setor Financeiro — Contas a Receber, Contas a Pagar e Composição do Fluxo de Caixa. Revisão 00 · 12/05/2025.</p>
  <div class="accordion">
    ${popFinanceiroSections.map((s,i)=>`
      <div class="acc-item ${i===0?'open':''}">
        <div class="acc-head">
          <div class="htitle"><span class="tag">${s.tag}</span><h4>${s.title}</h4></div>
          <span class="chev">▾</span>
        </div>
        <div class="acc-body" style="${i===0?'max-height:none':'max-height:0'}">
          <div class="acc-body-inner">${s.body}</div>
        </div>
      </div>`).join('')}
  </div>
  ${pagerHTML('financeiro')}
  `;
},

compras(){
  return `
  <div class="section-label">Módulo 07 · Trilha de Processos</div>
  <h2 class="page-title">POP · Compras</h2>
  <p class="page-sub">Procedimento Operacional Padrão do Setor de Compras — cotação, negociação, aprovação por alçada e acompanhamento de entrega. Revisão 00 · 29/08/2025.</p>
  <div class="accordion">
    ${popComprasSections.map((s,i)=>`
      <div class="acc-item ${i===0?'open':''}">
        <div class="acc-head">
          <div class="htitle"><span class="tag">${s.tag}</span><h4>${s.title}</h4></div>
          <span class="chev">▾</span>
        </div>
        <div class="acc-body" style="${i===0?'max-height:none':'max-height:0'}">
          <div class="acc-body-inner">${s.body}</div>
        </div>
      </div>`).join('')}
  </div>
  ${pagerHTML('compras')}
  `;
},

marketing(){
  return `
  <div class="section-label">Módulo 08 · Trilha de Processos</div>
  <h2 class="page-title">POP · Marketing</h2>
  <p class="page-sub">Processos do Setor de Marketing — planejamento de campanhas, criação de materiais, implementação técnica, monitoramento/otimização e gestão de redes sociais.</p>
  <div class="accordion">
    ${popMarketingSections.map((s,i)=>`
      <div class="acc-item ${i===0?'open':''}">
        <div class="acc-head">
          <div class="htitle"><span class="tag">${s.tag}</span><h4>${s.title}</h4></div>
          <span class="chev">▾</span>
        </div>
        <div class="acc-body" style="${i===0?'max-height:none':'max-height:0'}">
          <div class="acc-body-inner">${s.body}</div>
        </div>
      </div>`).join('')}
  </div>
  ${pagerHTML('marketing')}
  `;
}
};

function moduleDesc(id){
  const map = {
    inicio:'Sua visão geral: progresso na trilha, indicadores e acesso rápido a todos os módulos.',
    principios:'Quem somos e como decidimos, lideramos e trabalhamos — comece por aqui no seu primeiro dia.',
    organograma:'Onde você se encaixa: Financeiro, Comercial e Engenharia sob a Direção Geral.',
    dp:'Seus direitos e deveres como colaborador(a): admissão, ponto, folha, benefícios, férias, rescisão — e a documentação de empreiteiras (due diligence, checklists e pagamento de terceiros).',
    lideranca:'Para gestores e diretores: cada princípio aplicado à gestão de pessoas, com exemplos e frameworks.',
    planejamento:'Cronogramas, acompanhamento físico, orçamento e sistemas (Mega/Approvo) — do Setor de Planejamento.',
    financeiro:'Contas a Receber, Contas a Pagar e Composição do Fluxo de Caixa — do Setor Financeiro.',
    compras:'Cotação, negociação, aprovação por alçada e acompanhamento de entrega — do Setor de Compras.',
    marketing:'Planejamento de campanhas, criação de materiais, implementação técnica e gestão de redes sociais — do Setor de Marketing.'
  };
  return map[id] || '';
}

function initials(name){
  return (name||'').trim().split(/\s+/).slice(0,2).map(w=>w.charAt(0).toUpperCase()).join('') || '?';
}

function colaboradorCardHTML(c){
  const tel = (c.telefone||'').trim();
  const telHref = tel ? 'tel:' + tel.replace(/[^\d+]/g,'') : '';
  const email = (c.email||'').trim();
  const photo = c.foto
    ? `<img class="people-photo" src="${c.foto}" alt="${c.nome||''}">`
    : `<div class="people-avatar">${initials(c.nome)}</div>`;
  return `
    <div class="people-card">
      ${photo}
      <div class="people-info">
        <h4>${c.nome||''}</h4>
        ${c.cargo ? `<p class="people-role">${c.cargo}</p>` : ''}
        ${tel ? `<a class="people-phone" href="${telHref}">${tel}</a>` : ''}
        ${email ? `<a class="people-email" href="mailto:${email}">${email}</a>` : ''}
      </div>
    </div>`;
}

function moduleCardHTML(m){
  if(m.id === 'inicio') return ''; // card de Início nunca aparece na própria grade da trilha
  const locked = isLocked(m.id);
  const done = !!completed[m.id];
  let footer;
  if(done) footer = `<span class="done-cta">✓ Concluído</span>`;
  else if(locked) footer = `<span class="lock-cta">🔒 Bloqueado</span>`;
  else footer = `<span class="cta">Abrir módulo →</span>`;
  return `
    <div class="mod-card ${locked?'locked':''} ${done?'done':''}" data-goto="${m.id}">
      <div class="icon-sq" style="background:${m.iconBg}; color:${m.iconColor}">${m.icon}</div>
      <div class="eyebrow-row">
        <span class="eyebrow">${m.category}</span>
        <h3>${m.label}</h3>
      </div>
      <p>${moduleDesc(m.id)}</p>
      <div class="card-foot">${footer}</div>
    </div>`;
}

/* init */
document.getElementById('navToggle').addEventListener('click', ()=>{
  document.getElementById('navlist').classList.toggle('open');
});
document.getElementById('loginName').focus();
