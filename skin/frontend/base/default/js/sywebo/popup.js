// var oldSetLocation = setLocation;
// var setLocation = (function() {
//     return function(url){
//         if( url.search('checkout/cart/add') != -1 ) {
//             //its simple/group/downloadable product
//             ajaxcart.ajaxCartSubmit(url);
//         } else if( url.search('checkout/cart/delete') != -1 ) {
//             ajaxcart.ajaxCartSubmit(url);
//         } else if( url.search('options=cart') != -1 ) {
//             //its configurable/bundle product
//             url += '&ajax=true';
//             ajaxcart.getConfigurableOptions(url);
//         } else {
//             oldSetLocation(url);
//         }
//     };
// })();
