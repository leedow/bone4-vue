/*eslint-disable */
// PC&Mobile演示DEMO路由
const Product = (resolve) => {
  require.ensure(['../other/product/demo'], () => {
    resolve(require('../other/product/demo'));
  });
};

const Shoppingbar = (resolve) => {
  require.ensure(['../other/shopping-bar/demo'], () => {
    resolve(require('../other/shopping-bar/demo'));
  });
};

const Playground = (resolve) => {
  require.ensure(['../other/playground/demo'], () => {
    resolve(require('../other/playground/demo'));
  });
};

const Content = (resolve) => {
  require.ensure(['../other/content/demo'], () => {
    resolve(require('../other/content/demo'));
  });
};


/*eslint-enable */
export default [{
  path: 'product',
  component: Product
}, {
  path: 'shoppingBar',
  component: Shoppingbar
}, {
  path: 'playground',
  component: Playground
}, {
  path: 'content',
  component: Content
}]
