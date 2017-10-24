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

/*eslint-enable */
export default [{
  path: 'product',
  component: Product
}, {
  path: 'shoppingBar',
  component: Shoppingbar
}]
