# Faculdade Horizonte

Site institucional da Faculdade Horizonte, desenvolvido com React e Vite. O projeto apresenta a instituição, seus cursos e informações úteis para quem deseja conhecer a faculdade.

## Funcionalidades

- Navegação responsiva entre as páginas Início, Cursos, Sobre, Ingresso, Notícias e Contato.
- Página de detalhes para cada curso, com descrição e grade curricular por semestre.
- Links de contato por e-mail e telefone.
- Header e footer compartilhados, com o ano atual atualizado automaticamente no rodapé.

## Identidade visual

A interface usa uma paleta acolhedora e de alto contraste:

| Cor | Código | Uso |
| --- | --- | --- |
| Amarelo | `#F5CE54` | Destaques, botões e detalhes visuais |
| Preto suave | `#22221D` | Textos principais, header/footer e elementos de contraste |
| Bege | `#FBF8EF` | Fundo principal |
| Bege claro | `#F2EEE3` | Fundos alternativos para seções |
| Branco quente | `#FFFDF7` | Cartões e superfícies |

As cores principais estão definidas como variáveis CSS em `src/index.css`.

## Tecnologias

- React
- React Router
- Vite
- CSS

## Executar localmente

Requer Node.js e npm instalados.

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Verificações

```bash
npm run build
npm run lint
```

## Estrutura do projeto

```text
src/
  components/
    Footer/
    Header/
    pages/
      contato/
      cursos/
      ingresso/
      inicio/
      noticias/
      sobre/
  assets/
```

Cada página e os componentes de header/footer possuem seus próprios arquivos `index.jsx` e `style.css`.
