import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3,
    attempts: 2
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Fulano <fulano@teste.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo.`
    });
  },
};
