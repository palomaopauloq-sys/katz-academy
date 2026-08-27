# Katz Academy

Plataforma de treinamento e onboarding do Grupo Katz — trilha de integração para novos colaboradores, cultura (Princípios Katz), estrutura organizacional, Departamento Pessoal, Guia de Liderança e Documentação de Empreiteiras.

Site estático (HTML/CSS/JS puro), sem build, sem dependências de backend. Roda inteiramente no navegador.

## Estrutura do projeto

```
katz-academy/
├── index.html        # marcação da página (login + shell do app)
├── styles.css         # todo o CSS (design tokens em :root, componentes)
├── app.js              # conteúdo (princípios, POP, organograma...) + lógica do app
├── assets/
│   └── katz-logo.png   # logo oficial da Katz (não alterar/recolorir)
└── README.md
```

## Como rodar localmente

Não precisa de build nem instalação. Duas formas:

**Opção 1 — abrir direto**
Dê duplo clique em `index.html`. Abre no navegador padrão.

**Opção 2 — servidor local (recomendado durante desenvolvimento)**
```bash
python3 -m http.server 8000
# depois abra http://localhost:8000
```
(Evita bloqueios de `file://` em alguns navegadores e deixa o carregamento de fontes mais estável.)

## Login e senha de acesso

Não há backend/autenticação real — é um portão simples em JS.

- **Nome**: livre, qualquer texto. É esse nome que identifica o progresso da pessoa.
- **Senha de acesso**: definida em `app.js`, procure por:
  ```js
  const ACCESS_PASSWORD = 'katz2026'; // altere aqui a senha de acesso da equipe
  ```
  Troque o valor e salve para atualizar a senha de todo mundo.

⚠️ Isso não é segurança de verdade — qualquer pessoa com acesso ao código-fonte vê a senha. Serve só para filtrar acesso casual.

## Progresso por módulo

O progresso (quais módulos cada pessoa concluiu) é salvo via `window.storage`, uma API de armazenamento disponível **apenas quando o arquivo é aberto dentro do ambiente do Claude** (artifact). Fora dele — hospedado num site normal, aberto localmente etc. — o app cai automaticamente num fallback em memória (`memoryStore` em `app.js`), e o progresso não persiste entre sessões/recarregamentos.

Se for hospedar em produção para uso real da equipe, o ideal a médio prazo é substituir esse fallback por uma persistência real (ex: `localStorage`, um backend simples, Supabase, Firebase etc.) — hoje o app não tem isso implementado.

## Trilha de módulos (ordem de desbloqueio)

Definida em `app.js`, array `unlockOrder`. Ordem atual:

1. `principios` — Boas-vindas & Princípios Katz
2. `organograma` — Nossa Estrutura
3. `lideranca` — Guia de Liderança
4. `dp` — Departamento Pessoal
5. `empreiteiras` — Documentação de Empreiteiras

Cada módulo só é liberado depois que o anterior é marcado como concluído. `inicio` (visão geral) é sempre livre.

Para reordenar: mude a ordem dos objetos no array `modules` (afeta menu e cards) **e** a ordem correspondente no array `unlockOrder` (afeta o desbloqueio). Os campos `num` dos módulos são só o rótulo exibido — atualize-os manualmente para bater com a nova ordem.

## Editar conteúdo

Todo o conteúdo textual está em `app.js`, em constantes no topo do arquivo:

| Constante | Conteúdo |
|---|---|
| `principles` | Os 9 Princípios Katz + Guia de Liderança (comportamentos, exemplo, framework) |
| `orgData` | Organograma (CEO → áreas de apoio → Financeiro / Comercial / Engenharia) |
| `popSections` | POP do Departamento Pessoal (accordion) |
| `docEmpSections` | Documentação de Empreiteiras (accordion) |
| `modules` | Lista de módulos da trilha (id, número, categoria, ícone, cor) |

## Design

Tokens de cor/tipografia em `styles.css`, bloco `:root`. Paleta baseada na identidade Katz (navy + âmbar), fundo claro/neutro. Fontes: Manrope (display), Inter (corpo), IBM Plex Mono (dados/labels) — carregadas via Google Fonts no `<head>` do `index.html`.

## Publicar / hospedar

Como é 100% estático, qualquer hospedagem de arquivos estáticos serve:

- **Netlify Drop** (`app.netlify.com/drop`) — arraste a pasta inteira (não só o `index.html`) para gerar um link em segundos, sem conta.
- **Netlify CLI / GitHub Pages / Vercel** — se o projeto for versionado em Git (veja abaixo), qualquer uma dessas opções publica direto do repositório.
- **Servidor próprio da empresa** — copie a pasta inteira (`index.html`, `styles.css`, `app.js`, `assets/`) para dentro do `public_html` (ou equivalente) do domínio.

Importante: ao publicar, envie a **pasta inteira**, não só o `index.html` — ele depende de `styles.css`, `app.js` e `assets/katz-logo.png`.

## Controle de versão

```bash
git init
git add .
git commit -m "Katz Academy — versão inicial modular"
```

Depois, para conectar a um repositório remoto (GitHub, GitLab etc.):
```bash
git remote add origin <url-do-repositorio>
git push -u origin main
```
