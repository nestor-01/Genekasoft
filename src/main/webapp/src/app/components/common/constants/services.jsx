var mode;
var path = '/geneka/api';

module.exports = {
  modes: {
    DEVELOPMENT: 'http://localhost:8080',
    TESTING: 'https://geneka.getsandbox.com',
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
    saveProduct: function() {
      return mode + path + '/user/logOut';
    }
  }
};
