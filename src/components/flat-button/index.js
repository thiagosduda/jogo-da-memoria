const flatButton = (function () {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id}{
        background-color: ${active ? "#f25a70" : "#eae6da"};
        color: ${active ? "#fff" : "#fffcee"};
        font-size: 24px;
        font-weight: bold;
        width: 50vw;
        height: 176px;
        padding-bottom: 14px;
        text-transform: uppercase;
        cursor: pointer;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (content = "", active = false) => {
    module._id++;
    module._style(active);
    return `<button class="flat-button-${module._id}"> ${content} </button>`;
  }

  return {
    render: module.render
  };
})();