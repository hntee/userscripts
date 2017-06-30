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
        var selectedText = $('#cardPay > div.listrow.cardrow > div.list_right > div.cardinfo > div.card_num > div.card_left > em').text();
        var endNum = selectedText.substring(8,12);

        var cards = $('#cardPay > div.listrow.cardrow > div.list_right > div.cardinfo > div.more_list.dn > ul > li');
        var card = cards.filter(function (index, c) {
            var cardNumber = c.getAttribute('cardnumberdisplay');
            return cardNumber.endsWith(endNum);
        });
        card.click();
    }

    $('#btnCardPay').after('<input class="btn_blue139p CardDefault" id="refresh" type="button" value="刷新">');
    $('#refresh').click(function() {
        refreshCard();
    });
})();
