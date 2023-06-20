/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("clicks the button", () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();
    // Act
    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();
    // Assert
    expect(document.querySelector("#message")).not.toBeNull();
  });
});
