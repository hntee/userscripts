// ==UserScript==
// @name         驴妈妈
// @namespace    https://greasyfork.org/en/users/22079-hntee
// @version      0.1
// @description  驴妈妈银联显示
// @author       You
// @match        https://pay.lvmama.com/payfront/view/orderView.do?*
// @grant        none
// ==/UserScript==


(function() {
    var html = `
        <li clickevent="beforeSubmitGateway(this,'unionpayDirect')" paymentgateway="UNIONPAY_DIRECTOR" paymentgatewayconfigid="100047" onclick="setPayLimitNotice('银联快捷：单笔限额2000元，单日限额5000元','','paylimitNotice1')" class="active"><i class="bank unionpay-quick" title="银联快捷"></i><input class="paylimit" type="hidden" value="1999"></li>
    `;
    $('#PAY_PLATFORM_UL > li.pay-disabled').html(html);
})();