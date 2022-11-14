class Message {
  constructor(name, text) {
   
    const now = new Date();
    const current = now.getHours() + ":" + now.getMinutes();
   
    this.name = name;
    this.text = text;
    this.time = current;
  }
  toHtml() {
    return this.name, this.time, this.text;
  }
}

class Messenger extends Message {
  constructor(name, text) {
    super(name, text);
    this.history = [];
  }

  send(senderName, senderText) {
    this.name = senderName;
    this.text = senderText;
    const message = new Message(senderName, senderText)
    this.history.push(message);
    
  }

  showHistory() {
    this.history.forEach(element => {
        console.log(element.time, element.name, element.text )
    });
}
}

let messenger = new Messenger();
messenger.send("lale", "ilk mesaj");
messenger.send("guney", "ikinci mesaj");
messenger.send("gnl", "ucuncu mesaj");
messenger.send("sebne", "ikinci mesaj");
messenger.showHistory();
