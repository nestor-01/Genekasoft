var mode;
var path = '/geneka/api';

module.exports = {
  request: {
    400: 'Problema al realizar la petición',
    401: 'Problema al autorizar la petición',
    404: 'Problema localizando recurso en el servidor',
    405: 'Problema con el método utilizado para realizar la petición',
    500: 'Problema en el servidor',
    503: 'El servicio no está disponible'
  },
  response: {
    status: {
      OK: 'OK',
      ERROR: 'ERROR',
      EXCEPTION: 'EXCEPTION'
    },
  },
  modes: {
    DEVELOPMENT: 'http://localhost:8080',
    TESTING: 'https://restfulmock.herokuapp.com',
    PRODUCTION: 'http://localhost:8080'
  },
  setMode: function(_mode)
  {
    mode = _mode;
  }.bind(this),
  getMode()
  {
    return mode;
  },

  Security: {
    signIn: function() {
      return mode + path + '/user/loginUser';
    },
    signOut: function() {
      return mode + path + '/user/logOut';
    }
  },

  Users: {
    saveUser: function() {
      return mode + path + '/user/saveUser';
    }
  },

  Products: {
    getCategories: function() {
      return mode + path + '/category/getAllCategories';
    },
    getProduct: function() {
      return mode + path + '/product/getById';
    },
    getProducts: function() {
      return mode + path + '/product/getAll';
    },
    saveProduct: function() {
      return mode + path + '/product/save';
    },
    deleteProduct: function() {
      return mode + path + '/product/deleteProduct';
    }
  }
};
