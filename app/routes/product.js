/* global Ember, $ */

export default Ember.Route.extend({
  model: function(params) {
    return $.ajax({
      url: "http://charles.lvh.me/api/products/" + params.product_id,
      method: "GET",
      contentType: "application/json; charset=utf-8",
      crossDomain: true,
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Spree-Token', 'a19d529a7ee5bc807a0b30b83adf998399f3c1804323f349');
        xhr.setRequestHeader('Access-Control-Allow-origin', '*');
      }
    });
  },

  serialize: function(product) {
    return { product_id: Ember.get(product, 'slug') };
  }
});
