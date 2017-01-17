module.exports = function (that, test) {
    var thenRegCount, nowRegCount;
    var flag = false;
    var addBtnSelector = '.btn-primary[type="button"]';

    that.then(function () {
        thenRegCount = this.evaluate(function() {
            return jQuery('tbody tr').length;
        });

        that.click(addBtnSelector);

        that.wait(1000, function(){
            nowRegCount = this.evaluate(function() {
                return jQuery('tbody tr').length;
            });

            if(nowRegCount > thenRegCount){
                flag = true;
            }
            test.assertTruthy(flag, 'A new register was added.');
        });
    });
};
