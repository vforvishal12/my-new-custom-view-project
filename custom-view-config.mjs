/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'My New Custom View Project',
  cloudIdentifier: 'aws-eu',
  env: {
    development: {
      initialProjectKey: 'ct-training-1',
    },
    production: {
      customViewId: 'cmi8twzi90013v901gw1xc478',
      url: 'https://ct-view-custom.netlify.app',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: ['products.product_details.general'],
};

export default config;
