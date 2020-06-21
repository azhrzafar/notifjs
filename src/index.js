class Notifjs {
  constructor(delay = 2000) {
    this.delay = delay;
    this.container = this.createNotifContainer();
  }

  createNotifContainer() {
    const docFragment = document.createDocumentFragment();
    const notificationContainer = document.createElement("div");
    notificationContainer.className = "notifjs-container";
    docFragment.appendChild(notificationContainer);
    document.body.appendChild(docFragment);
    return notificationContainer;
  }

  error(message) {
    const card = this.createNotifCard(message);
    card.className += " notifjs-error";
    this.container.appendChild(card);
  }

  success(message) {
    const card = this.createNotifCard(message);
    card.className += " notifjs-success";
    this.container.appendChild(card);
  }

  createNotifCard(messageText) {
    const notifCard = document.createElement("div");
    notifCard.className = "notifjs";

    const message = document.createElement("div");
    message.className = "notifjs-message";
    message.innerHTML = messageText;

    notifCard.appendChild(message);

    const _this = this;
    setTimeout(function () {
      notifCard.className += " notifjs-disappear";
      notifCard.addEventListener("animationend", function (event) {
        event.target === notifCard && _this.container.removeChild(notifCard);
      });
    }, this.delay);

    return notifCard;
  }
}

module.exports = Notifjs;
