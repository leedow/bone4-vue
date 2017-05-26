/*eslint-disable */
const Buttons = (resolve) => {
  require.ensure(['./components/btn/demo'], () => {
    resolve(require('./components/btn/demo'));
  });
};
const List = (resolve) => {
  require.ensure(['./components/list/demo2'], () => {
    resolve(require('./components/list/demo'));
  });
};
const Listdown = (resolve) => {
  require.ensure(['./components/list/demo2'], () => {
    resolve(require('./components/list/demo2'));
  });
};
const Listup = (resolve) => {
  require.ensure(['./components/list/demo3'], () => {
    resolve(require('./components/list/demo3'));
  });
};
const modal = (resolve) => {
  require.ensure(['./components/modal/demo'], () => {
    resolve(require('./components/modal/demo'));
  });
};
const form = (resolve) => {
  require.ensure(['./components/form-group/demo'], () => {
    resolve(require('./components/form-group/demo'));
  });
};
const tabs = (resolve) => {
  require.ensure(['./components/tabs/demo'], () => {
    resolve(require('./components/tabs/demo'));
  });
};
const inputs = (resolve) => {
  require.ensure(['./components/bo-input/demo'], () => {
    resolve(require('./components/bo-input/demo'));
  });
};

const select = (resolve) => {
  require.ensure(['./components/bo-select/demo'], () => {
    resolve(require('./components/bo-select/demo'));
  });
};

const toast = (resolve) => {
  require.ensure(['./components/toast/demo'], () => {
    resolve(require('./components/toast/demo'));
  });
};
const menuVertical = (resolve) => {
  require.ensure(['./components/menu-vertical/demo'], () => {
    resolve(require('./components/menu-vertical/demo'));
  });
};
const menusHorizon = (resolve) => {
  require.ensure(['./components/menus-horizon/demo'], () => {
    resolve(require('./components/menus-horizon/demo'));
  });
};
const input = (resolve) => {
  require.ensure(['./components/bo-input/demo'], () => {
    resolve(require('./components/bo-input/demo'));
  });
};


const drawer = (resolve) => {
  require.ensure(['./components/drawer/demo'], () => {
    resolve(require('./components/drawer/demo'));
  });
};

const slider = (resolve) => {
  require.ensure(['./components/slider/demo'], () => {
    resolve(require('./components/slider/demo'));
  });
};

const Switch = (resolve) => {
  require.ensure(['./components/bo-switch/demo'], () => {
    resolve(require('./components/bo-switch/demo'));
  });
};

const Stars = (resolve) => {
  require.ensure(['./components/stars/demo'], () => {
    resolve(require('./components/stars/demo'));
  });
};


const Slide = (resolve) => {
  require.ensure(['./components/slide/demo'], () => {
    resolve(require('./components/slide/demo'));
  });
};

const login = (resolve) => {
  require.ensure(['./other/login/demo'], () => {
    resolve(require('./other/login/demo'));
  });
};


const seller = (resolve) => {
  require.ensure(['./other/seller/demo'], () => {
    resolve(require('./other/seller/demo'));
  });
};

const touch = (resolve) => {
  require.ensure(['./other/touch/demo'], () => {
    resolve(require('./other/touch/demo'));
  });
};

const code =  (resolve) => {
  require.ensure(['./components/phone-code/demo'], () => {
    resolve(require('./components/phone-code/demo'));
  });
};

const number =  (resolve) => {
  require.ensure(['./components/bo-number/demo'], () => {
    resolve(require('./components/bo-number/demo'));
  });
};

const calendar =  (resolve) => {
  require.ensure(['./components/calendar/demo'], () => {
    resolve(require('./components/calendar/demo'));
  });
};

const sidebar =  (resolve) => {
  require.ensure(['./components/sidebar/demo'], () => {
    resolve(require('./components/sidebar/demo'));
  });
};

const selector =  (resolve) => {
  require.ensure(['./components/selector/demo'], () => {
    resolve(require('./components/selector/demo'));
  });
};

const selectorTime =  (resolve) => {
  require.ensure(['./components/selector-time/demo'], () => {
    resolve(require('./components/selector-time/demo'));
  });
};


const MapLocation =  (resolve) => {
  require.ensure(['./components/bo-map/demo'], () => {
    resolve(require('./components/bo-map/demo'));
  });
};

const Keyboard =  (resolve) => {
  require.ensure(['./components/keyboard/demo'], () => {
    resolve(require('./components/keyboard/demo'));
  });
};

const PayPassword =  (resolve) => {
  require.ensure(['./components/pay-password/demo'], () => {
    resolve(require('./components/pay-password/demo'));
  });
};


/*eslint-enable */

export default [{
  path: 'form-input',
  component: input
}, {
  path: 'bo-select',
  component: select
}, {
  path: 'list',
  component: List
}, {
  path: 'listdown',
  component: Listdown
}, {
  path: 'listup',
  component: Listup
}, {
  path: 'modal',
  component: modal
}, {
  path: 'btn',
  component: Buttons
}, {
  path: 'form-group',
  component: form
}, {
  path: 'tabs',
  component: tabs
}, {
  path: 'toast',
  component: toast
}, {
  path: 'menu-vertical',
  component: menuVertical
}, {
  path: 'menus-horizon',
  component: menusHorizon
}, {
  path: 'drawer',
  component: drawer
}, {
  path: 'slider',
  component: slider
}, {
  path: 'bo-switch',
  component: Switch
}, {
  path: 'slide',
  component: Slide
}, {
  path: 'login',
  component: login
}, {
  path: 'seller',
  component: seller
}, {
  path: 'touch',
  component: touch
}, {
  path: 'stars',
  component: Stars
}, {
  path: 'phone-code',
  component: code
}, {
  path: 'number',
  component: number
}, {
  path: 'calendar',
  component: calendar
}, {
  path: 'sidebar',
  component: sidebar
}, {
  path: 'selector',
  component: selector
}, {
  path: 'selectorTime',
  component: selectorTime
}, {
  path: 'map',
  component: MapLocation
}, {
  path: 'keyboard',
  component: Keyboard
}, {
  path: 'paypassword',
  component: PayPassword
}]
