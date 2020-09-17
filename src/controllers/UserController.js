import passwordGenerator from 'password-generator';
import Mail from '../lib/Mail';

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: passwordGenerator(15, false),
    };

    Mail.sendMail({
      from: 'Fulano <fulano@tal.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo.`
    });

    return res.json(user);
  }
};
