# 🟡 Nível 2: DIP (Mocks)

O `ServicoNotificacao` depende de um gateway de e-mail. Aplique injeção de dependência para testá-lo isoladamente.

### Tarefas:
- [ ] Injetar `GatewayEmail` no construtor do serviço.
- [ ] Usar `jest.fn()` para criar um Mock do gateway no teste.
- [ ] Validar se o gateway é chamado com os dados corretos.

### Como rodar:
```bash
npm install && npm test
```

> 🪟 **Aviso para usuários de Windows:**
> Para rodar os scripts definidos no `package.json` que injetam variáveis de ambiente (como `NODE_NO_WARNINGS=1`), é necessário instalar a biblioteca `cross-env`.
> 
> Caso ocorram erros na execução, instale a dependência usando:
> ```bash
> npm install -D cross-env
> ```
> Depois, basta alterar o comando `"test"` no seu `package.json` inserindo `cross-env` no início:
> `"test": "cross-env NODE_NO_WARNINGS=1 node ..."`
