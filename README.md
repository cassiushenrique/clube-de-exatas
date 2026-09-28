# Clube de Exatas — Matemática para o ENEM

Landing page do projeto de extensão **Clube de Exatas: Matemática para o ENEM**, ICTIN/UFLA — Câmpus São Sebastião do Paraíso.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `clube-de-exatas`.
2. Envie `index.html` e a pasta `assets/` para a raiz do repositório.
3. No GitHub, acesse **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve. Após a publicação, o GitHub exibirá a URL do site.

## Configurar formulários

Abra `assets/script.js` e altere apenas:

```js
const FORMULARIOS = {
  participantes: "LINK_DO_FORMULARIO_DA_COMUNIDADE",
  extensionistas: "LINK_DO_FORMULARIO_DOS_EXTENSIONISTAS"
};
```

Recomenda-se usar um serviço próprio para coleta de dados, como Google Forms ou Microsoft Forms. O site não armazena dados pessoais.

## Estrutura

- `index.html` — conteúdo e estrutura.
- `assets/style.css` — identidade visual e responsividade.
- `assets/script.js` — menu e links dos formulários.

## Antes da divulgação

Revise datas, cronograma, regras de inscrição, carga horária e situação da seleção. A informação sobre bolsa foi redigida como possibilidade futura condicionada à disponibilidade e aprovação institucional.
