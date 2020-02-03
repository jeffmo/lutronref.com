import {PageChrome} from "/js/ui/PageChrome.js";

export function init(rootNode) {
  window.el = React.createElement;
  window.useEffect = React.useEffect;
  window.useState = React.useState;

  ReactDOM.render(el(PageChrome), rootNode);
};
