module.exports = function (that, test) {
    that.then(function () {
        test.assertTruthy(function () {
            var flag = this.evaluate(function () {
                if(jQuery('app-root').length > 0
                    && jQuery('app-topbar').length > 0
                    && jQuery('app-crud').length > 0){

                    return true;
                }else{
                    return false;
                }
            });
            return flag;
        }, 'There exist 3 components: app-root, app-topbar, app-crud.');
    });
};
