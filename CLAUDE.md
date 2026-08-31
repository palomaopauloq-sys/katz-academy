# Katz Academy — contexto do projeto

Plataforma de treinamento e onboarding do Grupo Katz (construtora/incorporadora). Site estático (HTML/CSS/JS puro, sem build, sem framework) publicado no GitHub Pages.

## Links

- **Site no ar:** https://palomaopauloq-sys.github.io/katz-academy
- **Repositório:** https://github.com/palomaopauloq-sys/katz-academy (branch `main`, deploy automático via GitHub Pages — Settings → Pages → "Deploy from a branch" → `main` / `root`)
- **Pasta local:** `C:\Users\Paloma\Documents\_Claude\Academia-Treinamento\katz-academy\katz-academy`

## Stack e arquivos

```
index.html   — marcação (login + shell do app)
styles.css   — todo o CSS (design tokens em :root, componentes)
app.js       — todo o conteúdo (dados) + toda a lógica do app
assets/
  katz-logo.png
  team/*.jpg — fotos da equipe (já recortadas em quadrado)
README.md    — documentação de uso/edição do projeto (mais detalhada que este arquivo)
```

Sem dependências, sem `package.json`, sem bundler. Editar direto e recarregar o navegador.

## ⚠️ Ambiente local (Windows, sem Python/Node/Pandoc instalados)

Este ambiente **não tem** `python`, `node` nem `pandoc` disponíveis (os comandos existem como stubs do Microsoft Store que falham). Alternativas que funcionam e já foram usadas neste projeto:

- **Servidor local para testar no navegador:** PowerShell com `System.Net.HttpListener` (rodar em background). Se a porta 8000 já estiver ocupada por uma instância travada, usar outra porta (ex: 8010). Sempre tratar `/` → `index.html` e definir `Content-Type` por extensão, senão a página carrega em branco.
- **Ler `.docx`:** não há `pandoc`; extrair texto do XML manualmente: `unzip` o `.docx`, depois `sed` para trocar `</w:p>` por quebra de linha e remover tags XML.
- **Recortar/redimensionar imagens:** não há ImageMagick; usar PowerShell + `System.Drawing` (`Add-Type -AssemblyName System.Drawing`, `Bitmap`, `Graphics.DrawImage` para crop quadrado centrado no rosto).
- **Fotos coladas no chat:** imagens coladas diretamente no chat não podem ser salvas em arquivo por mim — preciso do arquivo real. Na prática, quando o usuário usa o WhatsApp Desktop no Windows, as imagens que ele visualiza no app costumam já estar sincronizadas em `C:\Users\Paloma\Downloads\WhatsApp Image *.jpeg` — vale procurar lá por arquivos recentes (`find ... -newermt "-N minutes"`) e comparar visualmente antes de assumir qual é qual.

## Deploy

Não há CI/CD além do próprio GitHub Pages servindo a branch `main`. Fluxo:
```bash
git add -A
git commit -m "mensagem"
git push origin main
```
O site atualiza sozinho em ~1–3 min. **Sempre testar localmente no navegador antes de dar push** (usar o servidor PowerShell acima + o Browser tool).

Já tentamos GitHub Actions para o deploy e deu conflito com "Deploy from a branch" — **não recriar o workflow**, manter simples (deploy direto da branch).

## Login do app

Não há backend/autenticação real. Senha de acesso fica em `app.js`:
```js
const ACCESS_PASSWORD = 'katz2026';
```
Nome do usuário é livre (usado só para salvar progresso).

## Estrutura da trilha (módulos)

Definida no array `modules` + `unlockOrder` em `app.js`. Cada módulo só libera depois que o anterior é marcado como concluído (`inicio` é sempre livre e **não** aparece como card clicável dentro de si mesmo — isso já foi um bug corrigido).

Ordem atual (8 módulos + Início):
1. `principios` — Boas-vindas & Princípios Katz (inclui Missão/Sonho/Negócio/Valores)
2. `organograma` — Nossa Estrutura (organograma + seção **Colaboradores**, diretório de contatos)
3. `lideranca` — Guia de Liderança
4. `dp` — Departamento Pessoal (**inclui como sub-módulo, na mesma página**, a Documentação de Empreiteiras — não é mais módulo separado)
5. `planejamento` — POP Planejamento de Obras (**inclui como sub-módulo, na mesma página**, os Fluxogramas do sistema MEGA/A.D.O. — 10 passo-a-passos operacionais)
6. `financeiro` — POP Financeiro
7. `compras` — POP Compras
8. `marketing` — POP Marketing (5 processos: campanhas, criação de materiais, implementação técnica, monitoramento/otimização, redes sociais)

Cada POP é um array de seções (`popSections`, `docEmpSections`, `popPlanejamentoSections`, `fluxogramasAdoSections`, `popFinanceiroSections`, `popComprasSections`, `popMarketingSections`) renderizado como accordion. Ver comentários no topo de `app.js`.

⚠️ **Atenção ao adicionar/remover módulo:** o texto "Módulo NN" dentro de cada renderer (`<div class="section-label">Módulo 05 · ...`) é **hardcoded** e separado do campo `num` em `modules` — os dois precisam ser atualizados juntos manualmente. Já aconteceu de ficarem dessincronizados depois de remover um módulo do meio da lista.

## Seção "Colaboradores" (dentro de Nossa Estrutura)

Array `colaboradores` em `app.js`, um objeto por pessoa: `{nome, cargo, telefone, email, foto}`.
- `foto`: caminho em `assets/team/`. Vazio → avatar com iniciais automaticamente.
- `telefone`/`email`: viram links clicáveis (`tel:`/`mailto:`) automaticamente. Formato padronizado do telefone: `(DD) NNNNN-NNNN`, sem `+55`.

**Já cadastrados (7, todos completos com foto):** Daniel Katz (CEO), Bernardo C. L. Tavares (Diretor Comercial), Caetano Aliani (Superintendente de Obras), Guilherme Caldeira (Controladoria), Lucas Arieh (Marketing Digital), Paloma Oliveira (Coordenadora de Qualidade), Juliana de Mello (Gerente Financeiro).

⚠️ **Cuidado ao atribuir fotos a nomes**: já aconteceu de duas fotos parecidas (mesma pessoa, ângulos/dias diferentes) serem confundidas com pessoas diferentes. Sempre confirmar com o usuário antes de assumir "essa foto é de fulano" quando houver qualquer ambiguidade — reatribuir foto errada a uma pessoa real é um erro sério, não só cosmético.

## Coisas já corrigidas (não repetir)

- Card "Início" não deve aparecer dentro da grade de módulos da própria tela de Início (já blindado em `moduleCardHTML`).
- Workflow do GitHub Actions para Pages foi removido — usar sempre "Deploy from a branch".
- Contador de progresso hardcoded no `index.html` (`id="progressLabel"`) precisa bater com o total de módulos trackable — hoje é "0 de 7".

## Pendências conhecidas (perguntar ao usuário se relevante)

- Nenhuma pendência aberta no momento — todos os 6 colaboradores têm foto, cargo, telefone e e-mail preenchidos.
- Se o usuário mandar mais gente para "Colaboradores", seguir o mesmo padrão: pedir nome + cargo + telefone (+ e-mail, opcional) + foto (arquivo, não colada — ver seção de ambiente acima).
