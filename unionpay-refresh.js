// ==UserScript==
// @name         银联刷新
// @namespace    https://greasyfork.org/en/users/22079-hntee
// @version      0.1
// @description  银联刷新按钮
// @author       You
// @match        https://cashier.95516.com/b2c/showCard.action?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function refreshCard() {
        var endNum = $('#select_endNum').val();
        if (endNum == "") {
            var selectedText = $('#cardPay > div.listrow.cardrow > div.list_right > div.cardinfo > div.card_num > div.card_left > em').text();
            endNum = selectedText.substring(8,12);
        }
        var cards = $('#cardPay > div.listrow.cardrow > div.list_right > div.cardinfo > div.more_list.dn > ul > li');
        var card = cards.filter(function (index, c) {
            var cardNumber = c.getAttribute('cardnumberdisplay');
            return cardNumber.endsWith(endNum);
        });
        card.click();
    }

    function validate() {
        var pagePrice = $('#order_upoint > div.order_u_pay.dn > span').text();
        var expectPrice = $("#expect_price").val();
        var text = pagePrice == expectPrice ? "正确" : "错误";
        $('#validation').val(text);
    }

    function getPagePrice() {
        var pagePrice = $('#order_upoint > div.order_u_pay.dn > span').text();
        $('#current_price').text(pagePrice);
        $("#current_price").css({"font-size": "1.4em", "color": "red"});
        return pagePrice;
    }

    function initPage() {
        $('#cardPay > div.listrow.CardMobileShow').after('<div class="listrow"> <div class="list_left">页面当前金额：</div><div class="list_right"> <span id="current_price"></span><div class="clear"></div></div><br/>');
        $('#cardPay > div.listrow.CardMobileShow').after('<div class="listrow"> <div class="list_left">正确金额：</div><div class="list_right"> <input name="expect_price" id="expect_price"> </div><div class="clear"></div></div>');
        $('#cardPay > div.listrow.CardMobileShow').after('<div class="listrow"> <div class="list_left">选择卡的尾号：</div><div class="list_right"> <input name="select_endNum" id="select_endNum"> </div><div class="clear"></div></div>');
        $('#btnCardPay').after('<input class="btn_blue139p CardDefault" id="validation" type="button" value="">');
        $('#btnCardPay').after('<input class="btn_blue139p CardDefault" id="refresh" type="button" value="刷新">');
    }

    initPage();
    $('#refresh').click(function() {
        refreshCard();
        getPagePrice();
        validate();
    });



})();
