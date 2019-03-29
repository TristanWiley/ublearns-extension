if (window.model) {
  setMinRows();
} else {
  Object.defineProperty(window, "model", {
    set: function (val) {
      this._myVar = val;
      if (window.model.minimumRows !== 500) {
        setMinRows();
        window.hasCalled = true;
      }
    },
    get: function () {
      return this._myVar;
    }
  })
}

function setMinRows() {
  window.model.minimumRows = 500;
  GradebookGridUtil.reloadAndShowInlineReceipt();
}