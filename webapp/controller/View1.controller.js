sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("demoproject.controller.View1", {
        generatedCaptcha: "",

    // Generate CAPTCHA
    onGenerateCaptcha: function () {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let captcha = '';
      for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      this.generatedCaptcha = captcha;

      // Update the displayed CAPTCHA text
      this.byId("captchaText").setText(captcha);
    },

    // Validate the input CAPTCHA
    onValidateCaptcha: function () {
      const userInput = this.byId("captchaInput").getValue();
      const message = this.byId("captchaMessage");

      if (userInput === this.generatedCaptcha) {
        message.setText("Captcha verified successfully!").setColor("green");
      } else {
        message.setText("Incorrect CAPTCHA. Please try again.").setColor("red");
      }
    },

    // Handle input change event (Enable submit button when input is non-empty)
    onInputChange: function (oEvent) {
      const value = oEvent.getParameter("newValue");
      const submitButton = this.byId("submitButton");

      // Enable submit button if input is not empty
      submitButton.setEnabled(value.length > 0);
    },
		onInit: function () {
			this.onGenerateCaptcha();

		}
    });
});