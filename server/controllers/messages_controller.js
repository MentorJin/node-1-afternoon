let messages = [];
let id = 0;

module.exports = {
  Create: (req, res) => {
    const { title, sender, text, time } = req.body;
    messages.push({ id, title, sender, text, time });
    id++;
    res.status(200).send(messages);
  },
  Read: (req, res) => {
    res.status(200).send(messages);
  },
  Update: (req, res) => {
    const { text } = req.body;
    const { id } = req.params;
    messages.forEach(e => {
      if (e[id] === id) {
        e.text = text;
      }
    });
    res.status(200).send(messages);
  },
  Delete: (req, res) => {
    const { id } = req.params;
    let filteredMessages = messages.filter(e => !e[id] === id);
    messages = filteredMessages;
    res.status(200).send(messages);
  }
};
