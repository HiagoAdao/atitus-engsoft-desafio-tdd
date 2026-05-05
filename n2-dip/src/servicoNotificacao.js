export class ServicoNotificacao {
  constructor() {
    // ❌ Acoplamento Forte: A classe instancia sua própria dependência (Simulação)
    this.gatewayEmail = {
      enviar: async (email, mensagem) => {
        console.log(`[REAL] Enviando e-mail para ${email}: ${mensagem}`);
        return true;
      }
    };
  }

  async enviarBoasVindas(usuario) {
    return await this.gatewayEmail.enviar(usuario.email, 'Bem-vindo!');
  }
}
