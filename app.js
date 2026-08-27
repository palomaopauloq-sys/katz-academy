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
      ['Contabilidade'],
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

/* ============================ MODULES ============================ */

const modules = [
 {id:'inicio', num:'00', label:'Início', crumb:'Início', category:'GLOBAL', icon:'◎', iconBg:'#e8f3ee', iconColor:'#2f8f5b'},
 {id:'principios', num:'01', label:'Boas-vindas & Princípios', crumb:'Boas-vindas & Princípios Katz', category:'TRILHA DE CULTURA', icon:'✺', iconBg:'#fdf1de', iconColor:'#dd8f2e'},
 {id:'organograma', num:'02', label:'Nossa Estrutura', crumb:'Nossa Estrutura', category:'TRILHA DE CULTURA', icon:'▤', iconBg:'#e9f0f9', iconColor:'#2a5484'},
 {id:'lideranca', num:'03', label:'Guia de Liderança', crumb:'Guia de Liderança', category:'TRILHA DE LIDERANÇA', icon:'◈', iconBg:'#e6f4f3', iconColor:'#2b8f86'},
 {id:'dp', num:'04', label:'Departamento Pessoal', crumb:'Departamento Pessoal', category:'TRILHA DE PROCESSOS', icon:'▣', iconBg:'#f2ecf9', iconColor:'#7c5cb8'},
 {id:'empreiteiras', num:'05', label:'Documentação de Empreiteiras', crumb:'Documentação de Empreiteiras', category:'TRILHA DE PROCESSOS', icon:'⛊', iconBg:'#fdece7', iconColor:'#d9622b'}
];

/* ordem de desbloqueio — cada módulo exige o anterior concluído; 'inicio' é sempre livre */
const unlockOrder = ['principios','organograma','lideranca','dp','empreiteiras'];
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
    ${modules.map(m => moduleCardHTML(m)).join('')}
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
  ${pagerHTML('dp')}
  `;
},

empreiteiras(){
  return `
  <div class="section-label">Módulo 05 · Trilha de Processos</div>
  <h2 class="page-title">Documentação de Empreiteiras</h2>
  <p class="page-sub">Treinamento Katz/Hauz sobre due diligence, documentação de entrada e documentação de pagamento de empresas terceirizadas em obra. Abril 2024.</p>
  <div class="accordion">
    ${docEmpSections.map((s,i)=>`
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
  ${pagerHTML('empreiteiras')}
  `;
}
};

function moduleDesc(id){
  const map = {
    inicio:'Sua visão geral: progresso na trilha, indicadores e acesso rápido a todos os módulos.',
    principios:'Quem somos e como decidimos, lideramos e trabalhamos — comece por aqui no seu primeiro dia.',
    organograma:'Onde você se encaixa: Financeiro, Comercial e Engenharia sob a Direção Geral.',
    dp:'Seus direitos e deveres como colaborador(a): admissão, ponto, folha, benefícios, férias e rescisão.',
    lideranca:'Para gestores e diretores: cada princípio aplicado à gestão de pessoas, com exemplos e frameworks.',
    empreiteiras:'Para quem gerencia obra e qualidade: due diligence, checklists e calendário de pagamento de terceiros.'
  };
  return map[id] || '';
}

function moduleCardHTML(m){
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
