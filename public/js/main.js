$("select").minimalect({
    onchange: function(value, text, el) {
        var priceWrapper    = el.parent(),
            totalPrice      = priceWrapper.find('.total-price'),
            oneItemPrice    = priceWrapper.find('.price-for-one').html();

        totalPrice.html(+oneItemPrice*(+value));
    }
}); // Styling drop-down

$(function(){
    $('*[name=date]').appendDtpicker({
        "locale": "ru",
        "firstDayOfWeek" : 1,
        "futureOnly": true,
        "todayButton": false,
        "closeOnSelected": true,
        "animation": false,
        "minuteInterval": 60
    });
}); //datePicker activation

$(document).mouseup(function(e) {
    var datePicker = $(".datepicker"),
        orderBody = $('.order-body-wrapper');
    if (datePicker.css('display')=='inline-block') {
        if (!datePicker.is(e.target) // if the target of the click isn't the container...
            && datePicker.has(e.target).length === 0) // ... nor a descendant of the container
        {
            datePicker.hide();
        }
    } else {
        if ((!orderBody.is(e.target) && orderBody.has(e.target).length === 0) && (!$('.add-to-cart').is(e.target)))
        {
            orderBody.slideUp(function(){orderBody.removeClass('active');});
        }
    }
}); //hide datepicker or body on mouse out click
$(document).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        var datePicker = $(".datepicker"),
            orderBody = $('.order-body-wrapper');
        if (datePicker.css('display')=='inline-block') {
            datePicker.hide();
        } else {
            orderBody.slideUp();
            orderBody.removeClass('active');
        }
    }
}); //hide datepicker or order body on esk press

$('.order-button-wrapper').click(function(){
    var $body = $('.order-body-wrapper');
    if ($body.hasClass('active')) {
        $body.slideUp().removeClass('active')
    } else {
        $body.slideDown().addClass('active')
    }
}); //Свернуть развернуть заказ


$(function(){
    var orderListWrapper = $('.order-list-wrapper'),
        orderAmount,
        addToCart = $('.add-to-cart'),
        remove,
        amountAndPriceWrapper,
        itemName,
        itemId,
        priceForOne,
        totalPrice,
        oneItemAmount,
        declination,
        orderAmountWord,
        orderButton = $('.order-button-wrapper'),
        inTotal = 0,
        inTotalWrapper = $('.in-total'),
        i,
        orderWrapper = $('.order-wrapper');

    remove = orderListWrapper.find('.remove');

    function getOrderAmountWord(amount) {
        switch (amount) {
            case 1:
                orderAmountWord = 'рецепт';
                break;
            case 2:
                orderAmountWord = 'рецепта';
                break;
            case 3:
                orderAmountWord = 'рецепта';
                break;
            case 4:
                orderAmountWord = 'рецепта';
                break;
            case 21:
                orderAmountWord = 'рецепт';
                break;
            default:
                orderAmountWord = 'рецептов';
                break;
        }
        return orderAmountWord
    } // Склонения для слова рецепт

    function countTotal(amount) {
        inTotal = 0;
        for(i = 0; i < amount; i++) {
            inTotal += +orderListWrapper.find('dl').eq(i).find('.total-price').html();
        } // подсчет общей суммы
        inTotalWrapper.html(inTotal);
    }

    function removeItem(item) {
        item.remove();
        var itemId = item.find('.itemId').val();
        console.log(itemId);
        $.ajax({
            data : {
                "id": itemId,
                "smthing": 'test'
            },
            type : "GET",
            url : "/store/removeitem",
            dataType: 'JSON',
            success : function(response) {
                console.log(response)
            }
        });
        orderAmount = orderListWrapper.find('dl').length;
        orderButton.find('.recipe-amount').html(orderAmount);
        getOrderAmountWord(orderAmount);
        orderButton.find('.recipe-amount-word').html(orderAmountWord);
        countTotal(orderAmount);
        if (orderAmount==0) {
            var wrapper = $('.order-wrapper');
            wrapper.slideUp();
            wrapper.children('.order-body-wrapper').removeClass('active').slideUp();
        }
    }

    addToCart.each(function(){
        var $this = $(this);
        $this.click(function(){

            var $form =  $this.parent().parent().parent().parent();
            $.ajax({
                data : {
                    "_token": $form.find( 'input[name=_token]' ).val(),
                    "id": $form.find('input[name=id]').val(),
                    "amount": $form.find('select[name=amount]').val()
                },
                type : "POST",
                url : "/store/addtocart",
                dataType: 'JSON',
                success : function(answer) {
                    console.log(answer)
                }
            });

            /*
            window.location.hash = 'add';
            _gaq.push(['_trackPageview',location.pathname + location.search  + location.hash]);
            window.yaCounter23885122.hit(window.location.href);
            */
            orderWrapper.show();
            amountAndPriceWrapper = $this.parent();
            itemName = amountAndPriceWrapper.parent().find('.item-name').html();
            itemId = amountAndPriceWrapper.parent().find('.itemId').val();
            priceForOne = +amountAndPriceWrapper.find('.price-for-one').html();
            oneItemAmount = +amountAndPriceWrapper.find('.amount').val();
            totalPrice = priceForOne*oneItemAmount;
            orderAmount = orderListWrapper.find('dl').length; // Кол-во добавленных рецептов
            function getDeclination(amount){
                switch (amount) {
                    case 1:
                        declination = 'порция';
                        break;
                    case 2:
                        declination = 'порции';
                        break;
                    case 3:
                        declination = 'порции';
                        break;
                    case 4:
                        declination = 'порции';
                        break;
                    default:
                        declination = 'порций';
                        break;
                }
                return declination;
            } // Склонения для слова порция

            if (!orderAmount) {
                addToOrderList(itemId,itemName,priceForOne,oneItemAmount,totalPrice,getDeclination(oneItemAmount));
            } else {
                if(!checkForSame(itemId,orderAmount)) {
                    console.log(checkForSame(itemId,orderAmount));
                    addToOrderList(itemId,itemName,priceForOne,oneItemAmount,totalPrice,getDeclination(oneItemAmount));
                } else {
                    updateAmountAndPrice(checkForSame(itemId,orderAmount)-1,oneItemAmount,priceForOne)
                }

            }

            function showAddAnimation(btn) {
                var orderWrapper        = $('.order-wrapper'),
                    wrapperPosition     = orderWrapper.offset(),
                    wrapperPositionX    = +wrapperPosition.left,
                    wrapperPositionY    = +wrapperPosition.top,
                    wrapperWidth        = +orderWrapper.width(),
                    btnPosition         = btn.offset(),
                    clone;
                clone = $this.clone().css('position','absolute').css(btnPosition).css('height','64px');
                $('body').append(clone);
                clone.animate({
                    top: wrapperPositionY,
                    left: [wrapperPositionX,'easeOutBack'],
                    width: wrapperWidth,
                    height: 52
                }, 500, function(){
                    clone.remove();
                });
            }
            showAddAnimation($this);

            function updateAmountAndPrice(position,amount,price) {
                var currentItemWrapper = orderListWrapper.find('dl').eq(position),
                    currentAmountWrapper = currentItemWrapper.find('.count'),
                    currentDeclinationWrapper = currentItemWrapper.find('.declination'),
                    currentTotalPrice = currentItemWrapper.find('.total-price'),
                    currentAmount = currentAmountWrapper.html(),
                    countedAmount = +currentAmount+amount;
                currentAmountWrapper.html(countedAmount);
                currentDeclinationWrapper.html(' '+getDeclination(countedAmount));
                currentTotalPrice.html(countedAmount*price);

            }

            function checkForSame(id,amount) {
                for (i = 0; i < amount; i++) {
                    if(orderListWrapper.find('.itemId').eq(i).val()==id) {
                        return(i+1);
                    }
                }
                return(false);
            }

            function addToOrderList(id,name,price,amount,totalprice,declination) {
                orderListWrapper.append('<dl>' +
                    '<dt>' +
                    '<span class="recipe-name">'+name+'</span>' +
                    '<input class="itemId" name="id" type="hidden" value="'+id+'">' +
                    '</dt>' +
                    '<dd>' +
                    '<span class="count">'+amount+'</span>' +
                    '<span class="declination"> '+declination+'</span>' +
                    '<span> × </span>' +
                    '<span class="price">'+price+'</span>' +
                    '<span>Р = </span>' +
                    '<span class="total-price">'+totalprice+'</span>' +
                    '<span>Р</span>' +
                    '</dd>' +
                    '<dd class="remove">×</dd>' +
                    '</dl>');

                orderAmount = orderListWrapper.find('dl').length;

                return orderAmount;
            }



            countTotal(orderAmount);

            getOrderAmountWord(orderAmount);


            if (orderAmount>0) {orderButton.slideDown(function(){
                $(this).next().next().show();
                })}
            orderButton.find('.recipe-amount').html(orderAmount);
            orderButton.find('.recipe-amount-word').html(orderAmountWord);

            remove = orderListWrapper.find('.remove');

            remove.click(function(){
                removeItem($(this).parent());
            })
        })
    });

    remove.click(function(){
        removeItem($(this).parent());
    })
}); //Действия по нажатию кнопки добавить


[].slice.call( document.querySelectorAll( 'button.progress-button' ) ).forEach( function( bttn ) {
    new ProgressButton( bttn, {
        callback : function( instance ) {
            var progress = 0,
                interval = setInterval( function() {
                    progress = Math.min( progress + Math.random() * 0.4, 1 );
                    instance._setProgress( progress );

                    if( progress === 1 ) {
                        instance._stop(1);
                        clearInterval( interval );
                    }
                }, 300 );
        }
    } );
} ); // активация кнопки прогресса заказа

$(document).ready(function(){

    $('.button.progress-button').attr('disabled','disabled'); //Делаем кнопку отправки неактивной в самом начале

    var metrics = [
        [ '#name', 'presence', '' ],
        [ '#data', 'presence', '' ],
        [ '#adress', 'presence', '' ],
        [ '#phone', 'presence', '' ],
        [ '#email', 'presence', '' ],
        [ '#email', 'email', '' ]
    ];
    var options = {
        'delay' : 200,
        'submitBtnSelector' : '.button.progress-button',
        'silentSubmit' : true
    };
    jQuery(".order-form").nod(metrics,options);

    $('.order-form').on('silentSubmit', submitFn );
}); // Активация валидации


var submitFn = function(){
    var name = $('input[name="name"]'),
        nameVal = name.val(),
        phone = $('input[name="phone"]'),
        phoneVal = phone.val(),
        email = $('input[name="email"]'),
        emailVal = email.val(),
        date = $('input[name="date"]'),
        dateVal = date.val(),
        address = $('input[name="adress"]'),
        addressVal = address.val(),
        totalCostWrapper = $('.in-total'),
        totalCost = +totalCostWrapper.html(),
        progressBtn = $('.button.progress-button'),
        thanksForOrder = $('.thanksForOrder'),
        orderList = [],
        orderListWrapper = $('.order-list-wrapper'),
        orderListWrapperDl = orderListWrapper.find('dl'),
        orderListLength = orderListWrapperDl.length,
        i, recipeName, amount;

    /*
    window.location.hash = 'ordered';
    _gaq.push(['_trackPageview',location.pathname + location.search  + location.hash]);
    window.yaCounter23885122.hit(window.location.href);
    */

    for (i=0; i < orderListLength; i++) {
        recipeName = orderListWrapperDl.eq(i).find('.recipe-name').html();
        amount = +orderListWrapperDl.eq(i).find('.count').html();
        orderList[i] = [recipeName, amount];
    }
     $.post( "sendmail.php", {
     name: nameVal,
     phone: phoneVal,
     email: emailVal,
     date: dateVal,
     adress: addressVal,
     totalCost: totalCost,
     orderList: orderList
     });
    setTimeout(function(){
        thanksForOrder.fadeIn('slow');
    },3000);
    setTimeout(function(){
        orderListWrapperDl.remove();
        totalCostWrapper.html('0');
        name.val('');
        phone.val('');
        email.val('');
        date.val('');
        address.val('');
        progressBtn.attr('disabled','disabled');
        $('.order-body-wrapper').removeClass('active').slideUp(function(){
            $(this).prev().slideUp(function(){
                $(this).parent().hide();
            })
        });
        thanksForOrder.fadeOut();
    },12000)

}; //Действия при отправке


$('#phone').mask("9 - (999) - 999 - 9999"); //Ставим маску на телефон

//Спойлер рецепта

$(document).ready(function(){
   var $recipeName = $('.recipeName'),
       $spoiler = $('.spoiler'),
       $recipeText = $('.recipeText');
    $recipeName.click(function(){
        $recipeText.slideToggle();
    });
    $spoiler.click(function(){
        $recipeText.slideToggle();
    });
});

$(document).ready(function(){
    var $multiSelect = $('.multiSelect');
    if ($multiSelect.length) {
        $multiSelect.multiselect({
            enableFiltering: true
        })
    }
});

