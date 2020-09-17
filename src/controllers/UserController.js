import passwordGenerator from 'password-generator';

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: passwordGenerator(15, false),
    };

    return res.json(user);
  }
};
