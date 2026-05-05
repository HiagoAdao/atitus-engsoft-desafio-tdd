import { ServicoNotificacao } from '../src/servicoNotificacao.js';
import { jest } from '@jest/globals';

describe('ServicoNotificacao', () => {
  test('deve chamar o gateway de email com os dados corretos', async () => {
    // TODO: Implementar teste usando Mocks e Injeção de Dependência
    // 1. Crie um mock do gateway de email usando jest.fn()
    // 2. Refatore a classe ServicoNotificacao para aceitar o gateway pelo construtor (DIP)
    // 3. Injete o mock instanciando o serviço: new ServicoNotificacao(mockGateway)
    // 4. Chame o método enviarBoasVindas
    // 5. Verifique se mockGateway.enviar foi chamado com os parâmetros corretos
  });
});

