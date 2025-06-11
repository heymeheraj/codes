      function fillVoucherCode() {
        var inputField = document.querySelector('input[type="text"].ant-input[placeholder="Voucher Code"]');
        if (inputField) {
          inputField.type = 'password';
          inputField.value = "${widget.voucherCode}";
          inputField.readOnly = true;
          inputField.style.height = '36px';
          inputField.style.textAlign = 'left';
          inputField.style.backgroundColor = '#f0f0f0';
          var event = new Event('input', { bubbles: true });
          inputField.dispatchEvent(event);
          
          var loginButton = document.querySelector('button.button-area.ant-btn');
          if (loginButton) {
            loginButton.click();
          }
        } else {
          setTimeout(fillVoucherCode, 500);
        }
      }
      fillVoucherCode();
