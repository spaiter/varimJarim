// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        } if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});






/************************************
 MINIMALECT 0.8b
 A minimalistic select replacement

 jQuery 1.7+ required.
 Developed by @groenroos
 http://www.groenroos.fi

 Github: http://git.io/Xedg9w

 Licensed under the MIT license.

 ************************************/

;(function ( $, window, document, undefined ) {

    var pluginName = "minimalect",
        defaults = {
            // settings
            theme: "", // name of the theme used
            transition: "fade",
            remove_empty_option: true,

            // messages
            placeholder: "Select a choice", // default placeholder when nothing is selected
            empty: "No results match your keyword.", // error message when nothing matches the filter search term

            // classes
            class_container: "minict_wrapper", // wrapper div for the element
            class_group: "minict_group", // list item for an optgroup
            class_empty: "minict_empty", // "No results" message
            class_active: "active", // applied to wrapper when the dropdown is displayed
            class_selected: "selected", // the currently selected item in the dropdown
            class_hidden: "hidden", // an item that doesn't match the filter search term
            class_highlighted: "highlighted", // item highlighted by keyboard navigation
            class_first: "minict_first", // first visible element
            class_last: "minict_last", // last visible element

            // callbacks
            beforeinit: function(){}, // called before Minimalect is initialized
            afterinit: function(){}, // called right after Minimalect is initialized
            onchange: function(){}, // called whenever the user changes the selected value
            onopen: function(){}, // called when the dropdown is displayed
            onclose: function(){}, // called when the dropdown is hidden
            onfilter: function(){} // called every time the filter has been activated
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = $(element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.label = $('[for="'+this.element.attr('id')+'"]').attr('for', 'minict_'+this.element.attr('id'));

        this.init();
    }

    Plugin.prototype = {

        init: function() {

            // before init callback
            this.options.beforeinit();

            // PREPWORK

            var m = this;

            // create the wrapper
            this.wrapper = $('<div class="'+this.options.class_container+'"></div>');
            // hide the original select and add the wrapper
            this.element.hide().after(this.wrapper);
            // apply the current theme to the wrapper
            if(this.options.theme) this.wrapper.addClass(this.options.theme);
            // create and add the input
            this.input = $('<input type="text" readonly="readonly" class="amount" value="'+(this.element.find("option[selected]").html())+'" placeholder="'+(this.element.find("option[selected]").html() || this.options.placeholder)+'" '+ (this.element.is('[tabindex]') ? ('tabindex='+this.element.attr('tabindex')) : '') +' />').appendTo(this.wrapper);

            // parse the select itself, and create the dropdown markup
            this.ul = $('<ul>'+m.parseSelect()+'<li class="'+m.options.class_empty+'">'+m.options.empty+'</li></ul>').appendTo(this.wrapper);
            this.items = this.wrapper.find('li');
            // if it's preselected, select the option itself as well
            if(this.element.find("option[selected]").length)
                this.items.filter('[data-value="'+this.element.find("option[selected]").val()+'"]').addClass(m.options.class_selected);

            // LISTEN TO THE ORIGINAL FOR CHANGES
            m.element.on("change", function(){
                var current = m.items.filter("."+m.options.class_selected),
                    markup = m.parseSelect();

                if(m.element.val() != current.data("value")){
                    m.hideChoices(m.wrapper, function() {
                        if (m.element.val() === "") {
                            // A common convention is to have an
                            // empty option in a select list to act
                            // as a place holder. Thus we only want
                            // display an input value if the input
                            // is non-empty
                            m.input.val(m.options.placeholder);
                        } else {
                            m.ul.html(markup+'<li class="'+m.options.class_empty+'">'+m.options.empty+'</li>');
                            m.items = m.wrapper.find('li');
                            m.selectChoice(m.items.filter('[data-value="'+m.element.val()+'"]'));
                        }
                    });
                }
            });

            // BIND EVENTS
            // hide dropdown when you click elsewhere
            $(document).on("click", function(){ m.hideChoices(m.wrapper) });
            // hide dropdown when moving focus outside it
            $("*").not(m.wrapper).not(m.wrapper.find('*')).on("focus", function(){ m.hideChoices(m.wrapper) });
            // toggle dropdown when you click on the dropdown itself
            this.wrapper.on("click", function(e){ e.stopPropagation(); m.toggleChoices() });
            // toggle dropdown when you click on the associated label, if present
            this.label.on("click", function(e){ e.stopPropagation(); m.input.trigger('focus') });
            // select choice when you click on it
            this.wrapper.on("click", "li:not(."+m.options.class_group+", ."+m.options.class_empty+")", function(){ m.selectChoice($(this)) });
            // stop the dropdown from closing when you click on a group or empty placeholder
            this.wrapper.on("click", "li."+m.options.class_group+", li."+m.options.class_empty, function(e){
                e.stopPropagation();
                m.input.focus();
            });
            // key bindings for the input element
            this.input.on("focus click", function(e){
                e.stopPropagation();
                m.showChoices();
            }).on("keydown", function(e){
                    // keyboard navigation
                    switch(e.keyCode) {
                        // up
                        case 38:
                            m.navigateChoices('up');
                            break;
                        // down
                        case 40:
                            m.navigateChoices('down');
                            break;
                        // enter
                        case 13:
                        // tab
                        case 9:
                            // select the highlighted choice
                            if(m.items.filter("."+m.options.class_highlighted).length)
                                m.selectChoice(m.items.filter("."+m.options.class_highlighted));
                            // or if there is none, select the first choice after filtering
                            else if(m.input.val())
                                m.selectChoice(m.items.not("."+m.options.class_group+", ."+m.options.class_empty).filter(':visible').first());
                            if(e.keyCode===13){
                                e.preventDefault();
                                m.hideChoices(m.wrapper);
                            }
                            break;
                        // escape
                        case 27:
                            // close the select and don't change the value
                            m.hideChoices(m.wrapper);
                            break;
                    }
                }).on("keyup", function(e){
                    // if we're not navigating, filter
                    if($.inArray(e.keyCode, [38, 40, 13, 9, 27]) === -1){
                        m.filterChoices();
                    }
                });

            // after init callback
            this.options.afterinit();
        },

        // navigate with a keyboard
        // dr - direction we're going, either "up" or "down"
        navigateChoices: function(dr) {
            var m = this,
                wr = m.wrapper, // jQuery reference for the wrapper
                op = m.options, // options object
                items = m.items;
            // list all the elements that aren't navigatable
            var ignored = "."+op.class_hidden+", ."+op.class_empty+", ."+op.class_group;

            if(!items.filter("."+op.class_highlighted).length) { // if nothing is selected, select the first or last
                if(dr === 'up') {
                    items.not(ignored).last().addClass(op.class_highlighted);
                } else if (dr === 'down') {
                    items.not(ignored).first().addClass(op.class_highlighted);
                }
                return false;
            } else { // if something is selected...
                // ...remove current selection...
                cur = items.filter("."+op.class_highlighted);
                cur.removeClass(op.class_highlighted);
                // ...and figure out the next one
                if(dr === 'up') {
                    if(items.not(ignored).first()[0] != cur[0]) { // if we're not at the first
                        cur.prevAll("li").not(ignored).first().addClass(op.class_highlighted); // highlight the prev
                        // make sure it's visible in a scrollable list
                        var offset = items.filter("."+op.class_highlighted).offset().top - m.ul.offset().top + m.ul.scrollTop();
                        if (m.ul.scrollTop() > offset)
                            m.ul.scrollTop(offset);
                    } else { // if we are at the first
                        items.not(ignored).last().addClass(op.class_highlighted); // highlight the last
                        // make sure it's visible in a scrollable list
                        m.ul.scrollTop(m.ul.height());
                    }
                } else if (dr === 'down') {
                    if(items.not(ignored).last()[0] != cur[0]) { // if we're not at the last
                        cur.nextAll("li").not(ignored).first().addClass(op.class_highlighted); // highlight the next
                        // make sure it's visible in a scrollable list
                        var ddbottom = m.ul.height(),
                            libottom = items.filter("."+op.class_highlighted).offset().top - m.ul.offset().top + items.filter("."+op.class_highlighted).outerHeight();
                        if (ddbottom < libottom)
                            m.ul.scrollTop(m.ul.scrollTop() + libottom - ddbottom);
                    } else { // if we are at the last
                        items.not(ignored).first().addClass(op.class_highlighted); // highlight the first
                        // make sure it's visible in a scrollable list
                        m.ul.scrollTop(0);
                    }
                }
            }
        },

        // parse the entire select based on whether it has optgroups or not, and return the new markup
        parseSelect: function() {
            var m = this, ulcontent = "";
            if( !m.element.find("optgroup").length ) { // if we don't have groups
                // just parse the elements regularly
                ulcontent = this.parseElements( m.element.html() );
            } else { // if we have groups
                // parse each group separately
                m.element.find("optgroup").each(function(){
                    // create a group element
                    ulcontent += '<li class="'+m.options.class_group+'">'+$(this).attr("label")+'</li>';
                    // and add its children
                    ulcontent += m.parseElements( $(this).html() );
                });
            }
            return ulcontent;
        },

        // turn option elements into li elements
        // elhtml - HTML containing the options
        parseElements: function(elhtml) {
            var m = this, readyhtml = "";
            // go through each option
            $( $.trim(elhtml) ).filter("option").each(function(){
                var $el = $(this);
                if ($el.attr('value') === '' && m.options.remove_empty_option) return;
                // create an li with a data attribute containing its value
                readyhtml += '<li data-value="'+$el.val()+'" class="'+($el.attr("class") || "")+'">'+$el.text()+'</li>';
            });
            // spit it out
            return readyhtml;
        },

        // toggle the visibility of the dropdown
        toggleChoices: function(){
            (!this.wrapper.hasClass(this.options.class_active)) ? this.showChoices() : this.hideChoices(this.wrapper);
        },

        // show the dropdown
        // cb - callback before the animation plays
        showChoices: function(cb){
            var m = this,
                wr = this.wrapper, // jQuery reference for the wrapper
                op = this.options; // options object
            if (!wr.hasClass(op.class_active)){
                // keep the first and last classes up to date
                this.updateFirstLast(false);
                // close all other open minimalects
                $("."+op.class_container).each(function(){ //todo this doesn't work if the container classes are different
                    if($(this)[0] !== wr[0])
                        m.hideChoices($(this));
                });
                // internal callback
                if(typeof cb === 'function') cb.call();
                // add the active class
                wr.addClass(op.class_active);
                switch(op.transition) {
                    case "fade":
                        m.ul.fadeIn(150);
                        break;
                    default:
                        m.ul.show();
                        break;
                }
                // make the input editable
                //this.input.val("").focus(); - // убрал чтобы не показывался серый плэйсхолдер (зато перестал работать выбор стрелками)
                // callback
                this.options.onopen();
            } else {
                // internal callback
                if(typeof cb === 'function') cb.call();
            }
        },

        resetDropdown: function(cb){
            var op = this.options; // options object
            // reset the filtered elements
            this.items.removeClass(op.class_hidden);
            // hide the empty error message
            this.wrapper.find("."+op.class_empty).hide();
            // reset keyboard navigation
            this.items.filter("."+op.class_highlighted).removeClass(op.class_highlighted);
            // internal callback
            if(typeof cb === 'function') cb.call();
        },

        // hide the dropdown
        // wr - jQuery reference for the wrapper
        // cb - callback for after the animation has played
        hideChoices: function(wr, cb){
            var op = this.options, // options object
                input = wr.find('input');
            if (wr.hasClass(op.class_active)){
                // remove the active class and fade out
                wr.removeClass(op.class_active);

                switch(op.transition) {
                    case "fade":
                        wr.children("ul").fadeOut(100);
                        break;
                    default:
                        wr.children("ul").hide();
                        break;
                }

                this.resetDropdown(cb);

                // blur the input
                input.blur();
                // reset it
                if(input.attr("placeholder") != op.placeholder) {
                    // if we have a previously selected value, restore that
                    input.val(input.attr("placeholder"));
                } else if(!this.items.filter("."+op.class_selected).length) {
                    // if we have no selection, empty it to show placeholder
                    input.val("");
                }
                // callback
                op.onclose();
            } else {
                // internal callback
                if(typeof cb === 'function') cb.call();
            }
        },

        // filter choices based on user input
        filterChoices: function(){
            var wr = this.wrapper, // jQuery reference for the wrapper
                op = this.options; // options object
            // get the filter value
            var filter = this.input.val();
            // reset keyboard navigation
            this.items.filter("."+op.class_highlighted).removeClass(op.class_highlighted);

            // filter through each option
            this.items.not(op.class_group).each(function(){
                // if there's no match, hide it. otherwise, unhide it
                if ($(this).text().search(new RegExp(filter, "i")) < 0)
                    $(this).addClass(op.class_hidden);
                else
                    $(this).removeClass(op.class_hidden);
            });

            // make sure optgroups with no choices are hidden
            // sort of a kludge since we have no hierarchy
            this.items.filter("."+op.class_group).removeClass(op.class_hidden).each(function(){
                nextlis = $(this).nextAll("li").not("."+op.class_hidden+", ."+op.class_empty);
                if(nextlis.first().hasClass(op.class_group) || !nextlis.length) $(this).addClass(op.class_hidden);
            });

            // show a "no results" placeholder if there's nothing to show
            wr.find("."+op.class_empty).hide();
            if(!this.items.not("."+op.class_hidden+", ."+op.class_empty).length) {
                wr.find("."+op.class_empty).show();
                // callback, no results found
                this.options.onfilter(false);
            } else {
                // callback, results found
                this.options.onfilter(true);
            }

            // keep the first and last classes up to date
            this.updateFirstLast(true);
        },

        // select the choice defined
        // ch - jQuery reference for the li element the user has chosen
        selectChoice: function(ch){
            var el = this.element, // jQuery reference for the original select element
                op = this.options; // options object
            // apply the selected class
            this.items.removeClass(op.class_selected);
            ch.addClass(op.class_selected);

            // show it up in the input
            if(!ch.data('value')){
                // empty value = reset to placeholder
                this.input.val('').attr("placeholder", op.placeholder);
            }else{
                // new value
                this.input.val(ch.text()).attr("placeholder", ch.text());
            }

            // if the selected choice is different
            if(el.find('option:selected').val() != ch.data('value')){
                // update the original select element
                el.find("option:selected").prop("selected", false);
                el.find('option[value="'+ch.data("value")+'"]').prop("selected", true);
                // call original select change event
                el.trigger('change');
            }

            // callback
            this.options.onchange(ch.data("value"), ch.text(), el);
        },

        // keep the first and last classes up-to-date
        // vi - whether we want to count visibility or not
        updateFirstLast: function(vi){
            var wr = this.wrapper, // jQuery reference for the wrapper
                op = this.options; // options object
            wr.find("."+op.class_first+", ."+op.class_last).removeClass(op.class_first+" "+op.class_last);
            if(vi) {
                this.items.filter(":visible").first().addClass(op.class_first);
                this.items.filter(":visible").last().addClass(op.class_last);
            } else {
                this.items.first().addClass(op.class_first);
                this.items.not("."+op.class_empty).last().addClass(op.class_last);
            }
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );












/**
 * jquery-simple-datetimepicker (jquery.simple-dtpicker.js)
 * (c) Masanori Ohgita - 2013.
 * https://github.com/mugifly/jquery-simple-datetimepicker
 */

(function($) {
    var lang = {
        en: {
            days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            sep: '-',
            format: 'YYYY-MM-DD hh:mm',
            prevMonth: 'Previous month',
            nextMonth: 'Next month',
            today: 'Today'
        },
        ja: {
            days: ['?', '?', '?', '?', '?', '?', '?'],
            months: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ],
            sep: '/',
            format: 'YYYY/MM/DD hh:mm'
        },
        ru: {
            days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
            format: 'DD.MM.YYYY hh:mm',
            prevMonth: 'Предыдущий месяц',
            nextMonth: 'Следующий месяц',
            today: 'Сегодня'
        },
        br: {
            days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S?b'],
            months: [ "Janeiro", "Fevereiro", "Mar?o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
            format: 'DD/MM/YYYY hh:mm'
        },
        pt: {
            days: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 's?b'],
            months: [ "janeiro", "fevereiro", "mar?o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" ]
        },
        cn: {
            days: ['?', '?', '?', '?', '?', '?', '?'],
            months: [ "??", "??", "??", "??", "??", "??", "??", "??", "??", "??", "???", "???" ]
        },
        de: {
            days: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            months: [ "Jan", "Feb", "M?rz", "Apr", "Mai", "Juni", "Juli", "Aug", "Sept", "Okt", "Nov", "Dez" ],
            format: 'DD.MM.YYYY hh:mm'
        },
        sv: {
            days: ['S?', 'M?', 'Ti', 'On', 'To', 'Fr', 'L?'],
            months: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Juni", "Juli", "Aug", "Sept", "Okt", "Nov", "Dec" ]
        },
        id: {
            days: ['Min','Sen','Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
            months: [ "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des" ]
        },
        it: {
            days: ['Dom','Lun','Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
            months: [ "Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic" ],
            format: 'DD/MM/YYYY hh:mm'
        },
        tr: {
            days: ['Pz', 'Pzt', 'Sal', '?ar', 'Per', 'Cu', 'Cts'],
            months: [ "Ock", "?ub", "Mar", "Nis", "May", "Haz", "Tem", "Agu", "Eyl", "Ekm", "Kas", "Arlk" ]
        },
        es: {
            days: ['dom', 'lun', 'mar', 'mi?r', 'jue', 'vi?', 's?b'],
            months: [ "ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic" ],
            format: 'DD/MM/YYYY hh:mm'
        },
        ko: {
            days: ['?', '?', '?', '?', '?', '?', '?'],
            months: [ "1?", "2?", "3?", "4?", "5?", "6?", "7?", "8?", "9?", "10?", "11?", "12?" ]
        },
        nl: {
            days: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
            months: [ "jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec" ],
            format: 'DD-MM-YYYY hh:mm'
        },
        cz: {
            days: ['Ne', 'Po', '?t', 'St', '?t', 'P?', 'So'],
            months: [ "Led", "?no", "B?e", "Dub", "Kv?", "?er", "?vc", "Srp", "Z??", "??j", "Lis", "Pro" ],
            format: 'DD.MM.YYYY hh:mm'
        },
        fr: {
            days: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            months: [ "Janvier", "F?vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao?t", "Septembre", "Octobre", "Novembre", "D?cembre" ],
            format: 'DD-MM-YYYY hh:mm'
        },
        pl: {
            days: ['N', 'Pn', 'Wt', '?r', 'Cz', 'Pt', 'So'],
            months: [ "Stycze?", "Luty", "Marzec", "Kwiecie?", "Maj", "Czerwiec", "Lipiec", "Sierpie?", "Wrzesie?", "Pa?dziernik", "Listopad", "Grudzie?" ],
            sep: '-',
            format: 'YYYY-MM-DD hh:mm',
            prevMonth: 'Poprzedni miesi?c',
            nextMonth: 'Nast?pny miesi?c',
            today: 'Dzisiaj'
        }
    };
    /* ----- */

    var PickerHandler = function($picker, $input){
        this.$pickerObject = $picker;
        this.$inputObject = $input;
    };

    /* Get a picker */
    PickerHandler.prototype.getPicker = function(){
        return this.$pickerObject;
    };

    /* Get a input-field */
    PickerHandler.prototype.getInput = function(){
        return this.$inputObject;
    };

    /* Show a picker */
    PickerHandler.prototype.show = function(){
        var $picker = this.$pickerObject;
        var $input = this.$inputObject;

        $picker.show();

        if ($picker.data('isInline') == false) { // Float mode
            // Move position of a picker
            var _position = $input.parent().css('position');
            if(_position === 'relative' || _position === 'absolute'){
                $picker.parent().css("top", $input.outerHeight() + 24 + "px");
                $picker.parent().css("left", $input.position().left -46 + "px");
            }
            else{
                $picker.parent().css("top", $input.position().top + $input.outerHeight() + 2 + "px");
                $picker.parent().css("left", $input.position().left + "px");
            }
        }
    };

    /* Hide a picker */
    PickerHandler.prototype.hide = function(){
        var $picker = this.$pickerObject;
        var $input = this.$inputObject;
        $picker.hide();
    };

    /* Destroy a picker */
    PickerHandler.prototype.destroy = function(){
        var $picker = this.$pickerObject;
        var picker_id = $picker.data('pickerId');
        PickerObjects[picker_id] = null;
        $picker.remove();
    };

    /* ----- */

    var PickerObjects = [];
    var InputObjects = [];
    var ActivePickerId = -1;

    var getParentPickerObject = function(obj) {
        return $(obj).closest('.datepicker');
    };

    var getPickersInputObject = function($obj) {
        var $picker = getParentPickerObject($obj);
        if ($picker.data("inputObjectId") != null) {
            return $(InputObjects[$picker.data("inputObjectId")]);
        }
        return null;
    }

    var setToNow = function($obj) {
        var $picker = getParentPickerObject($obj);
        var date = new Date();
        draw($picker, {
            "isAnim": true,
            "isOutputToInputObject": true
        }, date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
    };

    var beforeMonth = function($obj) {
        var $picker = getParentPickerObject($obj);

        if ($picker.data('stateAllowBeforeMonth') == false) { // Not allowed
            return;
        }

        var date = getPickedDate($picker);
        var targetMonth_lastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        if (targetMonth_lastDay < date.getDate()) {
            date.setDate(targetMonth_lastDay);
        }
        draw($picker, {
            "isAnim": true,
            "isOutputToInputObject": true
        }, date.getFullYear(), date.getMonth() - 1, date.getDate(), date.getHours(), date.getMinutes());

        var todayDate = new Date();
        var isCurrentYear = todayDate.getFullYear() == date.getFullYear();
        var isCurrentMonth = isCurrentYear && todayDate.getMonth() == date.getMonth();

        if (!isCurrentMonth || !$picker.data("futureOnly")) {
            if (targetMonth_lastDay < date.getDate()) {
                date.setDate(targetMonth_lastDay);
            }
            draw($picker, {
                "isAnim": true,
                "isOutputToInputObject": true
            }, date.getFullYear(), date.getMonth() - 1, date.getDate(), date.getHours(), date.getMinutes());
        }
    };

    var nextMonth = function($obj) {
        var $picker = getParentPickerObject($obj);
        var date = getPickedDate($picker);
        var targetMonth_lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        if (targetMonth_lastDay < date.getDate()) {
            date.setDate(targetMonth_lastDay);
        }
        draw($picker, {
            "isAnim": true,
            "isOutputToInputObject": true
        }, date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes());
    };

    var getDateFormat = function(format, locale, is_date_only) {
        if (format == "default"){
            // Default format
            format = translate(locale,'format');
            if (is_date_only) {
                // Convert the format to date-only (ex: YYYY/MM/DD)
                format = format.substring(0, format.search(' '));
            }
        }
        return format; // Return date-format
    };

    var normalizeYear = function (year) {
        if (year < 99) { // change year for 4 digits
            var date = new Date();
            return parseInt(year) + parseInt(date.getFullYear().toString().substr(0, 2) + "00");
        }
        return year;
    };

    var parseDate = function (str, opt_date_format) {
        if(opt_date_format != null){
            // Parse date & time with date-format

            // Match a string with date format
            var df = opt_date_format.replace(/(-|\/)/g, '[-\/]')
                .replace(/YYYY/gi, '(\\d{2,4})')
                .replace(/(YY|MM|DD|hh|mm)/g, '(\\d{1,2})')
                .replace(/(M|D|h|m)/g, '(\\d{1,2})');
            var re = new RegExp(df);
            var m = re.exec(str);
            if( m != null){

                // Generate the formats array (convert-table)
                var formats = new Array();
                var format_buf = '';
                var format_before_c = '';
                var df = opt_date_format;
                while (df != null && 0 < df.length) {
                    var format_c = df.substring(0, 1); df = df.substring(1, df.length);
                    if (format_before_c != format_c) {
                        if(/(YYYY|YY|MM|DD|mm|dd|M|D|h|m)/.test(format_buf)){
                            formats.push( format_buf );
                            format_buf = '';
                        } else {
                            format_buf = '';
                        }
                    }
                    format_buf += format_c;
                    format_before_c = format_c;
                }
                if (format_buf != '' && /(YYYY|YY|MM|DD|mm|dd|M|D|h|m)/.test(format_buf)){
                    formats.push( format_buf );
                }

                // Convert a string (with convert-table) to a date object
                var date = new Date();
                var is_successful = false;
                for(var i = 0; i < formats.length; i++){
                    if(m.length < i){
                        break;
                    }

                    var f = formats[i];
                    var d = m[i+1]; // Matched part of date

                    if(f == 'YYYY'){
                        date.setFullYear(normalizeYear(d));
                        is_successful = true;
                    } else if(f == 'YY'){
                        date.setYear(d);
                        is_successful = true;
                    } else if(f == 'MM' || f == 'M'){
                        date.setMonth(parseInt(d) - 1);
                        is_successful = true;
                    } else if(f == 'DD' || f == 'D'){
                        date.setDate(d);
                        is_successful = true;
                    } else if(f == 'hh' || f == 'h'){
                        date.setHours(d);
                        is_successful = true;
                    } else if(f == 'mm' || f == 'm'){
                        date.setMinutes(d);
                        is_successful = true;
                    }
                }

                if(is_successful == true && isNaN(date) == false && isNaN(date.getDate()) == false){ // Parse successful
                    return date;
                }
            }
        }

        // Parse date & time with common format
        var re = /^(\d{2,4})[-\/](\d{1,2})[-\/](\d{1,2}) (\d{1,2}):(\d{1,2})$/;
        var m = re.exec(str);
        if (m !== null) {
            m[1] = normalizeYear(m[1]);
            date = new Date(m[1], m[2] - 1, m[3], m[4], m[5]);
        } else {
            // Parse for date-only
            re = /^(\d{2,4})[-\/](\d{1,2})[-\/](\d{1,2})$/;
            m = re.exec(str);
            if(m !== null) {
                m[1] = normalizeYear(m[1]);
                date = new Date(m[1], m[2] - 1, m[3]);
            }
        }

        if(isNaN(date) == false && isNaN(date.getDate()) == false){ // Parse successful
            return date;
        }
        return false;
    };

    var getFormattedDate = function(date, date_format) {
        if(date == null){
            date = new Date();
        }

        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var hou = date.getHours();
        var min = date.getMinutes();

        var date_format = date_format.replace(/YYYY/gi, y)
            .replace(/YY/g, y - 2000)/* century */
            .replace(/MM/g, zpadding(m))
            .replace(/M/g, m)
            .replace(/DD/g, zpadding(d))
            .replace(/D/g, d)
            .replace(/hh/g, zpadding(hou))
            .replace(/h/g, hou)
            .replace(/mm/g, zpadding(min))
            .replace(/m/g, min);
        return date_format;
    };

    var outputToInputObject = function($picker) {
        var $inp = getPickersInputObject($picker);
        if ($inp == null) {
            return;
        }
        var date = getPickedDate($picker);
        var locale = $picker.data("locale");
        var format = getDateFormat($picker.data("dateFormat"), locale, $picker.data('dateOnly'));

        var old = $inp.val();
        $inp.val(getFormattedDate(date, format));
        if (old != $inp.val()) { // only trigger if it actually changed to avoid a nasty loop condition
            $inp.trigger("change");
        }
    };

    var getPickedDate = function($obj) {
        var $picker = getParentPickerObject($obj);
        return $picker.data("pickedDate");
    };

    var zpadding = function(num) {
        num = ("0" + num).slice(-2);
        return num;
    };

    var draw_date = function($picker, option, date) {
        draw($picker, option, date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
    };
    var translate = function(locale, s) {
        if (typeof lang[locale][s] !== "undefined"){
            return lang[locale][s];
        }
        return lang.en[s];
    };
    var draw = function($picker, option, year, month, day, hour, min) {
        var date = new Date();

        if (hour != null) {
            date = new Date(year, month, day, hour, min, 0);
        } else if (year != null) {
            date = new Date(year, month, day);
        } else {
            date = new Date();
        }
        //console.log("dtpicker - draw()..." + year + "," + month + "," + day + " " + hour + ":" + min + " -> " + date);

        /* Read options */
        var isTodayButton = $picker.data("todayButton");
        var isScroll = option.isAnim; /* It same with isAnim */
        if($picker.data("timelistScroll") == false) {// If disabled by user option.
            isScroll = false;
        }

        var isAnim = option.isAnim;
        if($picker.data("animation") == false){ // If disabled by user option.
            isAnim = false;
        }

        var isFutureOnly = $picker.data("futureOnly");
        var minDate = $picker.data("minDate");
        var maxDate = $picker.data("maxDate");

        var isOutputToInputObject = option.isOutputToInputObject;

        var minuteInterval = $picker.data("minuteInterval");
        var firstDayOfWeek = $picker.data("firstDayOfWeek");

        var minTime = $picker.data("minTime");
        var maxTime = $picker.data("maxTime");

        /* Read locale option */
        var locale = $picker.data("locale");
        if (!lang.hasOwnProperty(locale)) {
            locale = 'en';
        }

        /* Calculate dates */
        var todayDate = new Date();
        var firstWday = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - firstDayOfWeek;
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        var beforeMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        var dateBeforeMonth = new Date(date.getFullYear(), date.getMonth(), 0);
        var dateNextMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0);
        var isCurrentYear = todayDate.getFullYear() == date.getFullYear();
        var isCurrentMonth = isCurrentYear && todayDate.getMonth() == date.getMonth();
        var isCurrentDay = isCurrentMonth && todayDate.getDate() == date.getDate();
        var isPastMonth = false;
        if (date.getFullYear() < todayDate.getFullYear() || (isCurrentYear && date.getMonth() < todayDate.getMonth())) {
            isPastMonth = true;
        }

        /* Collect each part */
        var $header = $picker.children('.datepicker_header');
        var $inner = $picker.children('.datepicker_inner_container');
        var $calendar = $picker.children('.datepicker_inner_container').children('.datepicker_calendar');
        var $table = $calendar.children('.datepicker_table');
        var $timelist = $picker.children('.datepicker_inner_container').children('.datepicker_timelist');

        /* Grasp a point that will be changed */
        var changePoint = "";
        var oldDate = getPickedDate($picker);
        if(oldDate != null){
            if(oldDate.getMonth() != date.getMonth() || oldDate.getDate() != date.getDate()){
                changePoint = "calendar";
            } else if (oldDate.getHours() != date.getHours() || oldDate.getMinutes() != date.getMinutes()){
                if(date.getMinutes() == 0 || date.getMinutes() % minuteInterval == 0){
                    changePoint = "timelist";
                }
            }
        }

        /* Save newly date to Picker data */
        $($picker).data("pickedDate", date);

        /* Fade-out animation */
        if (isAnim == true) {
            if(changePoint == "calendar"){
                $calendar.stop().queue([]);
                $calendar.fadeTo("fast", 0.8);
            }else if(changePoint == "timelist"){
                $timelist.stop().queue([]);
                $timelist.fadeTo("fast", 0.8);
            }
        }
        /* Remind timelist scroll state */
        var drawBefore_timeList_scrollTop = $timelist.scrollTop();

        /* New timelist  */
        var timelist_activeTimeCell_offsetTop = -1;

        /* Header ----- */
        $header.children().remove();

        var cDate =  new Date(date.getTime());
        cDate.setMinutes(59);
        cDate.setHours(23);
        cDate.setSeconds(59);
        cDate.setDate(0); // last day of previous month

        if ((!isFutureOnly || !isCurrentMonth)
            && ((minDate == null) || (minDate < cDate.getTime()))
            ) {
            var $link_before_month = $('<a>');
            $link_before_month.text('<');
            $link_before_month.prop('alt', translate(locale,'prevMonth'));
            $link_before_month.prop('title', translate(locale,'prevMonth') );
            $link_before_month.click(function() {
                beforeMonth($picker);
            });
            $picker.data('stateAllowBeforeMonth', true);
        } else {
            $picker.data('stateAllowBeforeMonth', false);
        }

        cDate.setMinutes(0);
        cDate.setHours(0);
        cDate.setSeconds(0);
        cDate.setDate(1); // First day of next month
        cDate.setMonth(date.getMonth() + 1);

        var $now_month = $('<span>');
        $now_month.text(date.getFullYear() + " " + translate(locale, 'sep') + " " + translate(locale, 'months')[date.getMonth()]);

        if ((maxDate == null) || (maxDate > cDate.getTime())) {
            var $link_next_month = $('<a>');
            $link_next_month.text('>');
            $link_next_month.prop('alt', translate(locale,'nextMonth'));
            $link_next_month.prop('title', translate(locale,'nextMonth'));
            $link_next_month.click(function() {
                nextMonth($picker);
            });
        }

        if (isTodayButton) {
            var $link_today = $('<a/>');
            /*
             This icon resource from a part of "FontAwesome" by Dave Gandy - http://fontawesome.io".
             http://fortawesome.github.io/Font-Awesome/license/
             Thankyou.
             */
            $link_today.html( decodeURIComponent('%3c%3fxml%20version%3d%221%2e0%22%20encoding%3d%22UTF%2d8%22%20standalone%3d%22no%22%3f%3e%3csvg%20%20xmlns%3adc%3d%22http%3a%2f%2fpurl%2eorg%2fdc%2felements%2f1%2e1%2f%22%20%20xmlns%3acc%3d%22http%3a%2f%2fcreativecommons%2eorg%2fns%23%22%20xmlns%3ardf%3d%22http%3a%2f%2fwww%2ew3%2eorg%2f1999%2f02%2f22%2drdf%2dsyntax%2dns%23%22%20%20xmlns%3asvg%3d%22http%3a%2f%2fwww%2ew3%2eorg%2f2000%2fsvg%22%20xmlns%3d%22http%3a%2f%2fwww%2ew3%2eorg%2f2000%2fsvg%22%20%20version%3d%221%2e1%22%20%20width%3d%22100%25%22%20%20height%3d%22100%25%22%20viewBox%3d%220%200%2010%2010%22%3e%3cg%20transform%3d%22translate%28%2d5%2e5772299%2c%2d26%2e54581%29%22%3e%3cpath%20d%3d%22m%2014%2e149807%2c31%2e130932%20c%200%2c%2d0%2e01241%200%2c%2d0%2e02481%20%2d0%2e0062%2c%2d0%2e03721%20L%2010%2e57723%2c28%2e153784%207%2e0108528%2c31%2e093719%20c%200%2c0%2e01241%20%2d0%2e0062%2c0%2e02481%20%2d0%2e0062%2c0%2e03721%20l%200%2c2%2e97715%20c%200%2c0%2e217084%200%2e1798696%2c0%2e396953%200%2e3969534%2c0%2e396953%20l%202%2e3817196%2c0%200%2c%2d2%2e38172%201%2e5878132%2c0%200%2c2%2e38172%202%2e381719%2c0%20c%200%2e217084%2c0%200%2e396953%2c%2d0%2e179869%200%2e396953%2c%2d0%2e396953%20l%200%2c%2d2%2e97715%20m%201%2e383134%2c%2d0%2e427964%20c%200%2e06823%2c%2d0%2e08063%200%2e05582%2c%2d0%2e210882%20%2d0%2e02481%2c%2d0%2e279108%20l%20%2d1%2e358324%2c%2d1%2e128837%200%2c%2d2%2e530576%20c%200%2c%2d0%2e111643%20%2d0%2e08683%2c%2d0%2e198477%20%2d0%2e198477%2c%2d0%2e198477%20l%20%2d1%2e190859%2c0%20c%20%2d0%2e111643%2c0%20%2d0%2e198477%2c0%2e08683%20%2d0%2e198477%2c0%2e198477%20l%200%2c1%2e209467%20%2d1%2e513384%2c%2d1%2e265289%20c%20%2d0%2e2605%2c%2d0%2e217083%20%2d0%2e682264%2c%2d0%2e217083%20%2d0%2e942764%2c0%20L%205%2e6463253%2c30%2e42386%20c%20%2d0%2e080631%2c0%2e06823%20%2d0%2e093036%2c0%2e198476%20%2d0%2e024809%2c0%2e279108%20l%200%2e3845485%2c0%2e458976%20c%200%2e031012%2c0%2e03721%200%2e080631%2c0%2e06203%200%2e1302503%2c0%2e06823%200%2e055821%2c0%2e0062%200%2e1054407%2c%2d0%2e01241%200%2e1488574%2c%2d0%2e04342%20l%204%2e2920565%2c%2d3%2e578782%204%2e292058%2c3%2e578782%20c%200%2e03721%2c0%2e03101%200%2e08063%2c0%2e04342%200%2e13025%2c0%2e04342%200%2e0062%2c0%200%2e01241%2c0%200%2e01861%2c0%200%2e04962%2c%2d0%2e0062%200%2e09924%2c%2d0%2e03101%200%2e130251%2c%2d0%2e06823%20l%200%2e384549%2c%2d0%2e458976%22%20%2f%3e%3c%2fg%3e%3c%2fsvg%3e') );
            $link_today.addClass('icon-home');
            $link_today.prop('alt', translate(locale,'today'));
            $link_today.prop('title', translate(locale,'today'));
            $link_today.click(function() {
                setToNow($picker);
            });
            $header.append($link_today);
        }

        $header.append($link_before_month);
        $header.append($now_month);
        $header.append($link_next_month);

        /* Calendar > Table ----- */
        $table.children().remove();
        var $tr = $('<tr>');
        $table.append($tr);

        /* Output wday cells */
        var firstDayDiff = 7 + firstDayOfWeek;
        var daysOfWeek = translate(locale,'days');
        for (var i = 0; i < 7; i++) {
            var $td = $('<th>');
            $td.text(daysOfWeek[((i + firstDayDiff) % 7)]);
            $tr.append($td);
        }

        /* Output day cells */
        var cellNum = Math.ceil((firstWday + lastDay) / 7) * 7;
        var i = 0;
        if(firstWday < 0){
            i = -7;
        }
        var realDayObj =  new Date(date.getTime());
        realDayObj.setHours(0);
        realDayObj.setMinutes(0);
        realDayObj.setSeconds(0);
        for (var zz = 0; i < cellNum; i++) {
            var realDay = i + 1 - firstWday;

            var isPast = isPastMonth || (isCurrentMonth && realDay < todayDate.getDate()+1);

            if (i % 7 == 0) {
                $tr = $('<tr>');
                $table.append($tr);
            }

            var $td = $('<td>');
            $td.data("day", realDay);

            $tr.append($td);

            if (firstWday > i) {/* Before months day */
                $td.text(beforeMonthLastDay + realDay);
                $td.addClass('day_another_month');
                $td.data("dateStr", dateBeforeMonth.getFullYear() + "/" + (dateBeforeMonth.getMonth() + 1) + "/" + (beforeMonthLastDay + realDay));
                realDayObj.setDate(beforeMonthLastDay + realDay);
                realDayObj.setMonth(dateBeforeMonth.getMonth() );
                realDayObj.setYear(dateBeforeMonth.getFullYear() );
            } else if (i < firstWday + lastDay) {/* Now months day */
                $td.text(realDay);
                $td.data("dateStr", (date.getFullYear()) + "/" + (date.getMonth() + 1) + "/" + realDay);
                realDayObj.setDate( realDay );
                realDayObj.setMonth( date.getMonth()  );
                realDayObj.setYear( date.getFullYear() );
            } else {/* Next months day */
                $td.text(realDay - lastDay);
                $td.addClass('day_another_month');
                $td.data("dateStr", dateNextMonth.getFullYear() + "/" + (dateNextMonth.getMonth() + 1) + "/" + (realDay - lastDay));
                realDayObj.setDate( realDay - lastDay );
                realDayObj.setMonth( dateNextMonth.getMonth() );
                realDayObj.setYear( dateNextMonth.getFullYear() );
            }

            if (((i + firstDayDiff) % 7) == 0) {/* Sunday */
                $td.addClass('wday_sun');
            } else if (((i + firstDayDiff) % 7) == 6) {/* Saturday */
                $td.addClass('wday_sat');
            }

            if (realDay == date.getDate()) {/* selected day */
                $td.addClass('active');
            }

            if (isCurrentMonth && realDay == todayDate.getDate()) {/* today */
                $td.addClass('day_in_past');
            }

            /* Set event-handler to day cell */

            var realDayObjMN =  new Date(realDayObj.getTime());
            realDayObjMN.setHours(23);
            realDayObjMN.setMinutes(59);
            realDayObjMN.setSeconds(59);

            if (
                ((minDate != null) && (minDate > realDayObjMN.getTime())) // compare to 23:59:59 on the current day (if MIN is 1pm, then we still need to show this day
                    || ((maxDate != null) && (maxDate < realDayObj.getTime())) // compare to 00:00:00
                ) {
                $td.addClass('out_of_range');
            } else if (isFutureOnly && isPast) {
                $td.addClass('day_in_past');
            } else {
                $td.click(function() {
                    if ($(this).hasClass('hover')) {
                        $(this).removeClass('hover');
                    }

                    $(this).addClass('active');

                    var $picker = getParentPickerObject($(this));
                    var targetDate = new Date($(this).data("dateStr"));
                    var selectedDate = getPickedDate($picker);
                    draw($picker, {
                        "isAnim": false,
                        "isOutputToInputObject": true
                    }, targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), selectedDate.getHours(), selectedDate.getMinutes());
                    if ($picker.data("dateOnly") == true && $picker.data("isInline") == false && $picker.data("closeOnSelected")){
                        // Close a picker
                        ActivePickerId = -1;
                        $picker.hide();
                    }
                });


                $td.hover(function() {
                    if ((! $(this).hasClass('active')) && (! $(this).hasClass('day_in_past'))) {
                        $(this).addClass('hover');
                    }
                }, function() {
                    if ($(this).hasClass('hover')) {
                        $(this).removeClass('hover');
                    }
                });
            }
        }

        if ($picker.data("dateOnly") == true) {
            /* dateOnly mode */
            $timelist.css("display", "none");
        } else {
            /* Timelist ----- */
            $timelist.children().remove();

            /* Set height to Timelist (Calendar innerHeight - Calendar padding) */
            if ($calendar.innerHeight() > 0) {
                $timelist.css("height", $calendar.innerHeight() - 10 + 'px');
            }

            realDayObj =  new Date(date.getTime());
            $timelist.css("height", $calendar.innerHeight() - 10 + 'px');

            /* Output time cells */
            var hour = minTime[0];
            var min = minTime[1];

            while( hour*100+min < maxTime[0]*100+maxTime[1] ){

                var $o = $('<div>');
                var isPastTime = hour < todayDate.getHours() || (hour == todayDate.getHours() && min < todayDate.getMinutes());
                var isPast = isCurrentDay && isPastTime;

                $o.addClass('timelist_item');
                $o.text(zpadding(hour) + ":" + zpadding(min));

                $o.data("hour", hour);
                $o.data("min", min);

                $timelist.append($o);

                realDayObj.setHours(hour);
                realDayObj.setMinutes(min);

                if (
                    ((minDate != null) && (minDate > realDayObj.getTime()))
                        || ((maxDate != null) && (maxDate < realDayObj.getTime()))
                    ) {
                    $o.addClass('out_of_range');
                } else if (isFutureOnly && isPast) {
                    $o.addClass('time_in_past');
                } else {
                    $o.click(function() {
                        if ($(this).hasClass('hover')) {
                            $(this).removeClass('hover');
                        }
                        $(this).addClass('active');

                        var $picker = getParentPickerObject($(this));
                        var date = getPickedDate($picker);
                        var hour = $(this).data("hour");
                        var min = $(this).data("min");
                        draw($picker, {
                            "isAnim": false,
                            "isOutputToInputObject": true
                        }, date.getFullYear(), date.getMonth(), date.getDate(), hour, min);

                        if ($picker.data("isInline") == false && $picker.data("closeOnSelected")){
                            // Close a picker
                            ActivePickerId = -1;
                            $picker.hide();
                        }
                    });

                    $o.hover(function() {
                        if (! $(this).hasClass('active')) {
                            $(this).addClass('hover');
                        }
                    }, function() {
                        if ($(this).hasClass('hover')) {
                            $(this).removeClass('hover');
                        }
                    });
                }

                if (hour == date.getHours() && min == date.getMinutes()) {/* selected time */
                    $o.addClass('active');
                    timelist_activeTimeCell_offsetTop = $o.offset().top;
                }

                /* Set event handler to time cell */

                if (isFutureOnly && isPast) {
                    $o.addClass('time_in_past');
                } else {
                    $o.click(function() {
                        if ($(this).hasClass('hover')) {
                            $(this).removeClass('hover');
                        }
                        $(this).addClass('active');

                        var $picker = getParentPickerObject($(this));
                        var date = getPickedDate($picker);
                        var hour = $(this).data("hour");
                        var min = $(this).data("min");
                        draw($picker, {
                            "isAnim": false,
                            "isOutputToInputObject": true
                        }, date.getFullYear(), date.getMonth(), date.getDate(), hour, min);

                        if ($picker.data("isInline") == false && $picker.data("closeOnSelected")){
                            // Close a picker
                            ActivePickerId = -1;
                            $picker.hide();
                        }
                    });

                    $o.hover(function() {
                        if (! $(this).hasClass('active')) {
                            $(this).addClass('hover');
                        }
                    }, function() {
                        if ($(this).hasClass('hover')) {
                            $(this).removeClass('hover');
                        }
                    });
                }
                min += minuteInterval;
                if(min >= 60){
                    min=min-60;
                    hour++;
                }
            }

            /* Scroll the timelist */
            if(isScroll == true){
                /* Scroll to new active time-cell position */
                $timelist.scrollTop(timelist_activeTimeCell_offsetTop - $timelist.offset().top);
            }else{
                /* Scroll to position that before redraw. */
                $timelist.scrollTop(drawBefore_timeList_scrollTop);
            }
        }

        /* Fade-in animation */
        if (isAnim == true) {
            if(changePoint == "calendar"){
                $calendar.fadeTo("fast", 1.0);
            }else if(changePoint == "timelist"){
                $timelist.fadeTo("fast", 1.0);
            }
        }

        /* Output to InputForm */
        if (isOutputToInputObject == true) {
            outputToInputObject($picker);
        }


    };

    var init = function($obj, opt) {
        /* Container */
        var $picker = $('<div>');

        $picker.destroy = function() {
            window.alert('destroy!');
        };

        $picker.addClass('datepicker');
        $obj.append($picker);

        function getTomorrow(d,offset) {
            if (!offset) { offset = 1 }
            return new Date(new Date().setDate(d.getDate() + offset));
        }

        /* Set current date */
        if(!opt.current) {
            var today = new Date();
            opt.current = getTomorrow(today);
        } else {
            var format = getDateFormat(opt.dateFormat, opt.locale, opt.dateOnly);
            var date = parseDate(opt.current, format);
            if (date) {
                opt.current = date;
            } else {
                opt.current = new Date();
            }
        }

        /* Set options data to container object  */
        if (opt.inputObjectId != null) {
            $picker.data("inputObjectId", opt.inputObjectId);
        }
        $picker.data("dateOnly", opt.dateOnly);
        $picker.data("pickerId", PickerObjects.length);
        $picker.data("dateFormat", opt.dateFormat);
        $picker.data("locale", opt.locale);
        $picker.data("firstDayOfWeek", opt.firstDayOfWeek);
        $picker.data("animation", opt.animation);
        $picker.data("closeOnSelected", opt.closeOnSelected);
        $picker.data("timelistScroll", opt.timelistScroll);
        $picker.data("calendarMouseScroll", opt.calendarMouseScroll);
        $picker.data("todayButton", opt.todayButton);
        $picker.data('futureOnly', opt.futureOnly);
        $picker.data('onShow', opt.onShow);
        $picker.data('onHide', opt.onHide);

        var minDate = Date.parse(opt.minDate);
        if (isNaN(minDate)) { // invalid date?
            $picker.data('minDate', null); // set to null
        } else {
            $picker.data('minDate', minDate);
        }

        var maxDate = Date.parse(opt.maxDate);
        if (isNaN(maxDate)) { // invalid date?
            $picker.data('maxDate', null);  // set to null
        } else {
            $picker.data('maxDate', maxDate);
        }
        $picker.data("state", 0);

        if( 5 <= opt.minuteInterval && opt.minuteInterval <= 60 ){
            $picker.data("minuteInterval", opt.minuteInterval);
        } else {
            $picker.data("minuteInterval", 30);
        }
        opt.minTime = opt.minTime.split(':');
        opt.maxTime = opt.maxTime.split(':');

        if(! ((opt.minTime[0] >= 0 ) && (opt.minTime[0] <24 ))){
            opt.minTime[0]="00";
        }
        if(! ((opt.maxTime[0] >= 0 ) && (opt.maxTime[0] <24 ))){
            opt.maxTime[0]="23";
        }
        if(! ((opt.minTime[1] >= 0 ) && (opt.minTime[1] <60 ))){
            opt.minTime[1]="00";
        }
        if(! ((opt.maxTime[1] >= 0 ) && (opt.maxTime[1] <24 ))){
            opt.maxTime[1]="59";
        }
        opt.minTime[0]=parseInt(opt.minTime[0]);
        opt.minTime[1]=parseInt(opt.minTime[1]);
        opt.maxTime[0]=parseInt(opt.maxTime[0]);
        opt.maxTime[1]=parseInt(opt.maxTime[1]);
        $picker.data('minTime', opt.minTime);
        $picker.data('maxTime', opt.maxTime);


        /* Header */
        var $header = $('<div>');
        $header.addClass('datepicker_header');
        $picker.append($header);
        /* InnerContainer*/
        var $inner = $('<div>');
        $inner.addClass('datepicker_inner_container');
        $picker.append($inner);
        /* Calendar */
        var $calendar = $('<div>');
        $calendar.addClass('datepicker_calendar');
        var $table = $('<table>');
        $table.addClass('datepicker_table');
        $calendar.append($table);
        $inner.append($calendar);
        /* Timelist */
        var $timelist = $('<div>');
        $timelist.addClass('datepicker_timelist');
        $inner.append($timelist);

        /* Set event handler to picker */
        $picker.hover(
            function(){
                ActivePickerId = $(this).data("pickerId");
            },
            function(){
                ActivePickerId = -1;
            }
        );

        /* Set event-handler to calendar */
        if (opt.calendarMouseScroll) {
            if (window.sidebar) { // Mozilla Firefox
                $calendar.bind('DOMMouseScroll', function(e){ // Change a month with mouse wheel scroll for Fx
                    var $picker = getParentPickerObject($(this));

                    // up,left [delta < 0] down,right [delta > 0]
                    var delta = e.originalEvent.detail;
                    /*
                     // this code need to be commented - it's seems to be unnecessary
                     // normalization (/3) is not needed as we move one month back or forth
                     if(e.originalEvent.axis !== undefined && e.originalEvent.axis == e.originalEvent.HORIZONTAL_AXIS){
                     e.deltaX = delta;
                     e.deltaY = 0;
                     } else {
                     e.deltaX = 0;
                     e.deltaY = delta;
                     }
                     e.deltaX /= 3;
                     e.deltaY /= 3;
                     */
                    if(delta > 0) {
                        nextMonth($picker);
                    } else {
                        beforeMonth($picker);
                    }
                    return false;
                });
            } else { // Other browsers
                $calendar.bind('mousewheel', function(e){ // Change a month with mouse wheel scroll
                    var $picker = getParentPickerObject($(this));
                    // up [delta > 0] down [delta < 0]
                    if(e.originalEvent.wheelDelta /120 > 0) {
                        beforeMonth($picker);
                    } else {
                        nextMonth($picker);
                    }
                    return false;
                });
            }
        }

        PickerObjects.push($picker);

        draw_date($picker, {
            "isAnim": true,
            "isOutputToInputObject": opt.autodateOnStart
        }, opt.current);
    };

    var getDefaults = function() {
        return {
            "current": null,
            "dateFormat": "default",
            "locale": "en",
            "animation": true,
            "minuteInterval": 30,
            "firstDayOfWeek": 0,
            "closeOnSelected": false,
            "timelistScroll": true,
            "calendarMouseScroll": true,
            "todayButton": true,
            "dateOnly": false,
            "futureOnly": false,
            "minDate" : null,
            "maxDate" : null,
            "autodateOnStart": true,
            "minTime":"00:00",
            "maxTime":"23:59",
            "onShow": null,
            "onHide": null
        };
    };

    /**
     * Initialize dtpicker
     */
    $.fn.dtpicker = function(config) {
        var date = new Date();
        var defaults = getDefaults();

        defaults.inputObjectId = undefined;
        var options = $.extend(defaults, config);

        return this.each(function(i) {
            init($(this), options);
        });
    };

    /**
     * Initialize dtpicker, append to Text input field
     * */
    $.fn.appendDtpicker = function(config) {
        var date = new Date();
        var defaults = getDefaults();

        defaults.inline = false;
        var options = $.extend(defaults, config);

        return this.each(function(i) {

            /* Add input-field with inputsObjects array */
            var input = this;
            var inputObjectId = InputObjects.length;
            InputObjects.push(input);

            options.inputObjectId = inputObjectId;

            /* Current date */
            var date, strDate, strTime;
            if($(input).val() != null && $(input).val() != ""){
                options.current = $(input).val();
            }

            /* Make parent-div for picker */
            var $d = $('<div>');
            if(options.inline == false){
                /* float mode */
                $d.css("position","absolute");
            }
            $d.insertAfter(input);

            /* Initialize picker */

            var pickerId = PickerObjects.length;

            var $picker_parent = $($d).dtpicker(options); // call dtpicker() method

            var $picker = $picker_parent.children('.datepicker');

            /* Link input-field with picker*/
            $(input).data('pickerId', pickerId);

            /* Set event handler to input-field */

            $(input).keyup(function() {
                var $input = $(this);
                var $picker = $(PickerObjects[$input.data('pickerId')]);
                if ($input.val() != null && (
                    $input.data('beforeVal') == null ||
                        ( $input.data('beforeVal') != null && $input.data('beforeVal') != $input.val())	)
                    ) { /* beforeValue == null || beforeValue != nowValue  */
                    var format = getDateFormat($picker.data('dateFormat'), $picker.data('locale'), $picker.data('dateOnly'));
                    var date = parseDate($input.val(), format);
                    if (date) {
                        draw_date($picker, {
                            "isAnim":true,
                            "isOutputToInputObject":false
                        }, date);
                    }
                }
                $input.data('beforeVal',$input.val())
            });

            $(input).change(function(){
                $(this).trigger('keyup');
            });

            if(options.inline == true){
                /* inline mode */
                $picker.data('isInline',true);
            }else{
                /* float mode */
                $picker.data('isInline',false);
                $picker_parent.css({
                    "zIndex": 100
                });
                $picker.css("width","auto");

                /* Hide this picker */
                $picker.hide();

                /* Set onClick event handler for input-field */
                $(input).click(function(){
                    var $input = $(this);
                    var $picker = $(PickerObjects[$input.data('pickerId')]);
                    ActivePickerId = $input.data('pickerId');

                    // Show a picker
                    var handler = new PickerHandler($picker, $input);
                    handler.show();

                    // Call a event-hanlder
                    var func = $picker.data('onShow');
                    if (func != null) {
                        func(handler);
                    }
                });
            }
        });
    };

    /* Set event handler to Body element, for hide a floated-picker */

    $(function(){
        $('body').click(function(){
            for(var i=0;i<PickerObjects.length;i++){
                var $picker = $(PickerObjects[i]);
                if(ActivePickerId != i){	/* if not-active picker */
                    if($picker.data("inputObjectId") != null && $picker.data("isInline") == false && $picker.css('display') != 'none'){
                        /* if append input-field && float picker */

                        // Hide a picker
                        var $input = InputObjects[$picker.data("inputObjectId")];
                        var handler = new PickerHandler($picker, $input);
                        handler.hide();
                    }
                }
            }
        });
    });

})(jQuery);












/**
 * progressButton.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {

    'use strict';

    // https://gist.github.com/edankwan/4389601
    Modernizr.addTest('csstransformspreserve3d', function () {
        var prop = Modernizr.prefixed('transformStyle');
        var val = 'preserve-3d';
        var computedStyle;
        if(!prop) return false;

        prop = prop.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

        Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function (el, rule) {
            computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
        });

        return (computedStyle === val);
    });

    function extend( a, b ) {
        for( var key in b ) {
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }

    // support
    var support = { transitions : Modernizr.csstransitions, transforms3d : Modernizr.csstransforms3d && Modernizr.csstransformspreserve3d },
    // transition end event name
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

    function ProgressButton( el, options ) {
        this.button = el;
        this.options = extend( {}, this.options );
        extend( this.options, options );
        this._init();
    }

    ProgressButton.prototype.options = {
        // time in ms that the status (success or error will be displayed)
        // during this time the button will be disabled
        statusTime : 10000
    };

    ProgressButton.prototype._init = function() {
        this._validate();
        // create structure
        this._create();
        // init events
        this._initEvents();
    };

    ProgressButton.prototype._validate = function() {
        // we will consider the fill/horizontal as default
        if( this.button.getAttribute( 'data-style' ) === null ) {
            this.button.setAttribute( 'data-style', 'fill' );
        }
        if( this.button.getAttribute( 'data-vertical' ) === null && this.button.getAttribute( 'data-horizontal' ) === null ) {
            this.button.setAttribute( 'data-horizontal', '' );
        }
        if( !support.transforms3d && this.button.getAttribute( 'data-perspective' ) !== null ) {
            this.button.removeAttribute( 'data-perspective' );
            this.button.setAttribute( 'data-style', 'fill' );
            this.button.removeAttribute( 'data-vertical' );
            this.button.setAttribute( 'data-horizontal', '' );
        }
    };

    ProgressButton.prototype._create = function() {
        var textEl = document.createElement( 'span' );
        textEl.className = 'content';
        textEl.innerHTML = this.button.innerHTML;
        var progressEl = document.createElement( 'span' );
        progressEl.className = 'progress';

        var progressInnerEl = document.createElement( 'span' );
        progressInnerEl.className = 'progress-inner';
        progressEl.appendChild( progressInnerEl );
        // clear content
        this.button.innerHTML = '';

        if( this.button.getAttribute( 'data-perspective' ) !== null ) {
            var progressWrapEl = document.createElement( 'span' );
            progressWrapEl.className = 'progress-wrap';
            progressWrapEl.appendChild( textEl );
            progressWrapEl.appendChild( progressEl );
            this.button.appendChild( progressWrapEl );
        }
        else {
            this.button.appendChild( textEl );
            this.button.appendChild( progressEl );
        }

        // the element that serves as the progress bar
        this.progress = progressInnerEl;

        // property to change on the progress element
        if( this.button.getAttribute( 'data-horizontal' ) !== null ) {
            this.progressProp = 'width';
        }
        else if( this.button.getAttribute( 'data-vertical' ) !== null ) {
            this.progressProp = 'height';
        }
        this._enable();
    };

    ProgressButton.prototype._setProgress = function( val ) {
        this.progress.style[ this.progressProp ] = 100 * val + '%';
    };

    ProgressButton.prototype._initEvents = function() {
        var self = this;
        this.button.addEventListener( 'click', function() {
            // disable the button
            self.button.setAttribute( 'disabled', '' );
            // add class state-loading to the button (applies a specific transform to the button depending which data-style is defined - defined in the stylesheets)
            classie.remove( self.progress, 'notransition' );
            classie.add( this, 'state-loading' );

            setTimeout( function() {
                    if( typeof self.options.callback === 'function' ) {
                        self.options.callback( self );
                    }
                    else {
                        self._setProgress( 1 );
                        var onEndTransFn = function( ev ) {
                            if( support.transitions && ev.propertyName !== self.progressProp ) return;
                            this.removeEventListener( transEndEventName, onEndTransFn );
                            self._stop();
                        };

                        if( support.transitions ) {
                            self.progress.addEventListener( transEndEventName, onEndTransFn );
                        }
                        else {
                            onEndTransFn.call();
                        }

                    }
                },
                self.button.getAttribute( 'data-style' ) === 'fill' ||
                    self.button.getAttribute( 'data-style' ) === 'top-line' ||
                    self.button.getAttribute( 'data-style' ) === 'lateral-lines' ? 0 : 200 ); // TODO: change timeout to transitionend event callback
        } );
    };

    ProgressButton.prototype._stop = function( status ) {
        var self = this;

        setTimeout( function() {
            // fade out progress bar
            self.progress.style.opacity = 0;
            var onEndTransFn = function( ev ) {
                if( support.transitions && ev.propertyName !== 'opacity' ) return;
                this.removeEventListener( transEndEventName, onEndTransFn );
                classie.add( self.progress, 'notransition' );
                self.progress.style[ self.progressProp ] = '0%';
                self.progress.style.opacity = 1;
            };

            if( support.transitions ) {
                self.progress.addEventListener( transEndEventName, onEndTransFn );
            }
            else {
                onEndTransFn.call();
            }


            // add class state-success to the button
            if( typeof status === 'number' ) {
                var statusClass = status >= 0 ? 'state-success' : 'state-error';
                classie.add( self.button, statusClass );
                // after options.statusTime remove status
                setTimeout( function() {
                    classie.remove( self.button, statusClass );
                    self._enable();
                }, self.options.statusTime );
            }
            else {
                self._enable();
            }

            // remove class state-loading from the button
            classie.remove( self.button, 'state-loading' );
        }, 100 );
    };

    // enable button
    ProgressButton.prototype._enable = function() {
        this.button.removeAttribute( 'disabled' );
    }

    // add to global namespace
    window.ProgressButton = ProgressButton;

})( window );











/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

    'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    }
    else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

// transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( classie );
    } else {
        // browser global
        window.classie = classie;
    }

})( window );













/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2013, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

;(function($){

    var plugin = {};

    var defaults = {

        // GENERAL
        mode: 'horizontal',
        slideSelector: '',
        infiniteLoop: true,
        hideControlOnEnd: false,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: false,
        captions: false,
        ticker: false,
        tickerHover: false,
        adaptiveHeight: false,
        adaptiveHeightSpeed: 500,
        video: false,
        useCSS: true,
        preloadImages: 'visible',
        responsive: true,

        // TOUCH
        touchEnabled: true,
        swipeThreshold: 50,
        oneToOneTouch: true,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: false,

        // PAGER
        pager: true,
        pagerType: 'full',
        pagerShortSeparator: ' / ',
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,

        // CONTROLS
        controls: true,
        nextText: 'Next',
        prevText: 'Prev',
        nextSelector: null,
        prevSelector: null,
        autoControls: false,
        startText: 'Start',
        stopText: 'Stop',
        autoControlsCombine: false,
        autoControlsSelector: null,

        // AUTO
        auto: false,
        pause: 4000,
        autoStart: true,
        autoDirection: 'next',
        autoHover: false,
        autoDelay: 0,

        // CAROUSEL
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,

        // CALLBACKS
        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {}
    }

    $.fn.bxSlider = function(options){

        if(this.length == 0) return this;

        // support mutltiple elements
        if(this.length > 1){
            this.each(function(){$(this).bxSlider(options)});
            return this;
        }

        // create a namespace to be used throughout the plugin
        var slider = {};
        // set a reference to our slider element
        var el = this;
        plugin.el = this;

        /**
         * Makes slideshow responsive
         */
        // first get the original window dimens (thanks alot IE)
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();



        /**
         * ===================================================================================
         * = PRIVATE FUNCTIONS
         * ===================================================================================
         */

        /**
         * Initializes namespace settings to be used throughout plugin
         */
        var init = function(){
            // merge user-supplied options with the defaults
            slider.settings = $.extend({}, defaults, options);
            // parse slideWidth setting
            slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
            // store the original children
            slider.children = el.children(slider.settings.slideSelector);
            // check if actual number of slides is less than minSlides / maxSlides
            if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
            if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
            // if random start, set the startSlide setting to random number
            if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
            // store active slide information
            slider.active = { index: slider.settings.startSlide }
            // store if the slider is in carousel mode (displaying / moving multiple slides)
            slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
            // if carousel, force preloadImages = 'all'
            if(slider.carousel) slider.settings.preloadImages = 'all';
            // calculate the min / max width thresholds based on min / max number of slides
            // used to setup and update carousel slides dimensions
            slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
            slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
            // store the current state of the slider (if currently animating, working is true)
            slider.working = false;
            // initialize the controls object
            slider.controls = {};
            // initialize an auto interval
            slider.interval = null;
            // determine which property to use for transitions
            slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
            // determine if hardware acceleration can be used
            slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
                // create our test div element
                var div = document.createElement('div');
                // css transition properties
                var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                // test for each property
                for(var i in props){
                    if(div.style[props[i]] !== undefined){
                        slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
                        slider.animProp = '-' + slider.cssPrefix + '-transform';
                        return true;
                    }
                }
                return false;
            }());
            // if vertical mode always make maxSlides and minSlides equal
            if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
            // save original style data
            el.data("origStyle", el.attr("style"));
            el.children(slider.settings.slideSelector).each(function() {
                $(this).data("origStyle", $(this).attr("style"));
            });
            // perform all DOM / CSS modifications
            setup();
        }

        /**
         * Performs all DOM and CSS modifications
         */
        var setup = function(){
            // wrap el in a wrapper
            el.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');
            // store a namspace reference to .bx-viewport
            slider.viewport = el.parent();
            // add a loading div to display while images are loading
            slider.loader = $('<div class="bx-loading" />');
            slider.viewport.prepend(slider.loader);
            // set el to a massive width, to hold any needed slides
            // also strip any margin and padding from el
            el.css({
                width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
                position: 'relative'
            });
            // if using CSS, add the easing property
            if(slider.usingCSS && slider.settings.easing){
                el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
                // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
            }else if(!slider.settings.easing){
                slider.settings.easing = 'swing';
            }
            var slidesShowing = getNumberSlidesShowing();
            // make modifications to the viewport (.bx-viewport)
            slider.viewport.css({
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
            });
            slider.viewport.parent().css({
                maxWidth: getViewportMaxWidth()
            });
            // make modification to the wrapper (.bx-wrapper)
            if(!slider.settings.pager) {
                slider.viewport.parent().css({
                    margin: '0 auto 0px'
                });
            }
            // apply css to all slider children
            slider.children.css({
                'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
                listStyle: 'none',
                position: 'relative'
            });
            // apply the calculated width after the float is applied to prevent scrollbar interference
            slider.children.css('width', getSlideWidth());
            // if slideMargin is supplied, add the css
            if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
            if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
            // if "fade" mode, add positioning and z-index CSS
            if(slider.settings.mode == 'fade'){
                slider.children.css({
                    position: 'absolute',
                    zIndex: 0,
                    display: 'none'
                });
                // prepare the z-index on the showing element
                slider.children.eq(slider.settings.startSlide).css({zIndex: 50, display: 'block'});
            }
            // create an element to contain all slider controls (pager, start / stop, etc)
            slider.controls.el = $('<div class="bx-controls" />');
            // if captions are requested, add them
            if(slider.settings.captions) appendCaptions();
            // check if startSlide is last slide
            slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
            // if video is true, set up the fitVids plugin
            if(slider.settings.video) el.fitVids();
            // set the default preload selector (visible)
            var preloadSelector = slider.children.eq(slider.settings.startSlide);
            if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
            // only check for control addition if not in "ticker" mode
            if(!slider.settings.ticker){
                // if pager is requested, add it
                if(slider.settings.pager) appendPager();
                // if controls are requested, add them
                if(slider.settings.controls) appendControls();
                // if auto is true, and auto controls are requested, add them
                if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
                // if any control option is requested, add the controls wrapper
                if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
                // if ticker mode, do not allow a pager
            }else{
                slider.settings.pager = false;
            }
            // preload all images, then perform final DOM / CSS modifications that depend on images being loaded
            loadElements(preloadSelector, start);
        }

        var loadElements = function(selector, callback){
            var total = selector.find('img, iframe').length;
            if (total == 0){
                callback();
                return;
            }
            var count = 0;
            selector.find('img, iframe').each(function(){
                $(this).one('load', function() {
                    if(++count == total) callback();
                }).each(function() {
                        if(this.complete) $(this).load();
                    });
            });
        }

        /**
         * Start the slider
         */
        var start = function(){
            // if infinite loop, prepare additional slides
            if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
                var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
                var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
                var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
                el.append(sliceAppend).prepend(slicePrepend);
            }
            // remove the loading DOM element
            slider.loader.remove();
            // set the left / top position of "el"
            setSlidePosition();
            // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
            if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
            // set the viewport height
            slider.viewport.height(getViewportHeight());
            // make sure everything is positioned just right (same as a window resize)
            el.redrawSlider();
            // onSliderLoad callback
            slider.settings.onSliderLoad(slider.active.index);
            // slider has been fully initialized
            slider.initialized = true;
            // bind the resize call to the window
            if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
            // if auto is true, start the show
            if (slider.settings.auto && slider.settings.autoStart) initAuto();
            // if ticker is true, start the ticker
            if (slider.settings.ticker) initTicker();
            // if pager is requested, make the appropriate pager link active
            if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
            // check for any updates to the controls (like hideControlOnEnd updates)
            if (slider.settings.controls) updateDirectionControls();
            // if touchEnabled is true, setup the touch events
            if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
        }

        /**
         * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
         */
        var getViewportHeight = function(){
            var height = 0;
            // first determine which children (slides) should be used in our height calculation
            var children = $();
            // if mode is not "vertical" and adaptiveHeight is false, include all children
            if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
                children = slider.children;
            }else{
                // if not carousel, return the single active child
                if(!slider.carousel){
                    children = slider.children.eq(slider.active.index);
                    // if carousel, return a slice of children
                }else{
                    // get the individual slide index
                    var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
                    // add the current slide to the children
                    children = slider.children.eq(currentIndex);
                    // cycle through the remaining "showing" slides
                    for (i = 1; i <= slider.settings.maxSlides - 1; i++){
                        // if looped back to the start
                        if(currentIndex + i >= slider.children.length){
                            children = children.add(slider.children.eq(i - 1));
                        }else{
                            children = children.add(slider.children.eq(currentIndex + i));
                        }
                    }
                }
            }
            // if "vertical" mode, calculate the sum of the heights of the children
            if(slider.settings.mode == 'vertical'){
                children.each(function(index) {
                    height += $(this).outerHeight();
                });
                // add user-supplied margins
                if(slider.settings.slideMargin > 0){
                    height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
                }
                // if not "vertical" mode, calculate the max height of the children
            }else{
                height = Math.max.apply(Math, children.map(function(){
                    return $(this).outerHeight(false);
                }).get());
            }
            return height;
        }

        /**
         * Returns the calculated width to be used for the outer wrapper / viewport
         */
        var getViewportMaxWidth = function(){
            var width = '100%';
            if(slider.settings.slideWidth > 0){
                if(slider.settings.mode == 'horizontal'){
                    width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
                }else{
                    width = slider.settings.slideWidth;
                }
            }
            return width;
        }

        /**
         * Returns the calculated width to be applied to each slide
         */
        var getSlideWidth = function(){
            // start with any user-supplied slide width
            var newElWidth = slider.settings.slideWidth;
            // get the current viewport width
            var wrapWidth = slider.viewport.width();
            // if slide width was not supplied, or is larger than the viewport use the viewport width
            if(slider.settings.slideWidth == 0 ||
                (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
                slider.settings.mode == 'vertical'){
                newElWidth = wrapWidth;
                // if carousel, use the thresholds to determine the width
            }else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
                if(wrapWidth > slider.maxThreshold){
                    // newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
                }else if(wrapWidth < slider.minThreshold){
                    newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
                }
            }
            return newElWidth;
        }

        /**
         * Returns the number of slides currently visible in the viewport (includes partially visible slides)
         */
        var getNumberSlidesShowing = function(){
            var slidesShowing = 1;
            if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
                // if viewport is smaller than minThreshold, return minSlides
                if(slider.viewport.width() < slider.minThreshold){
                    slidesShowing = slider.settings.minSlides;
                    // if viewport is larger than minThreshold, return maxSlides
                }else if(slider.viewport.width() > slider.maxThreshold){
                    slidesShowing = slider.settings.maxSlides;
                    // if viewport is between min / max thresholds, divide viewport width by first child width
                }else{
                    var childWidth = slider.children.first().width();
                    slidesShowing = Math.floor(slider.viewport.width() / childWidth);
                }
                // if "vertical" mode, slides showing will always be minSlides
            }else if(slider.settings.mode == 'vertical'){
                slidesShowing = slider.settings.minSlides;
            }
            return slidesShowing;
        }

        /**
         * Returns the number of pages (one full viewport of slides is one "page")
         */
        var getPagerQty = function(){
            var pagerQty = 0;
            // if moveSlides is specified by the user
            if(slider.settings.moveSlides > 0){
                if(slider.settings.infiniteLoop){
                    pagerQty = slider.children.length / getMoveBy();
                }else{
                    // use a while loop to determine pages
                    var breakPoint = 0;
                    var counter = 0
                    // when breakpoint goes above children length, counter is the number of pages
                    while (breakPoint < slider.children.length){
                        ++pagerQty;
                        breakPoint = counter + getNumberSlidesShowing();
                        counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
                    }
                }
                // if moveSlides is 0 (auto) divide children length by sides showing, then round up
            }else{
                pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
            }
            return pagerQty;
        }

        /**
         * Returns the number of indivual slides by which to shift the slider
         */
        var getMoveBy = function(){
            // if moveSlides was set by the user and moveSlides is less than number of slides showing
            if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
                return slider.settings.moveSlides;
            }
            // if moveSlides is 0 (auto)
            return getNumberSlidesShowing();
        }

        /**
         * Sets the slider's (el) left or top position
         */
        var setSlidePosition = function(){
            // if last slide, not infinite loop, and number of children is larger than specified maxSlides
            if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
                if (slider.settings.mode == 'horizontal'){
                    // get the last child's position
                    var lastChild = slider.children.last();
                    var position = lastChild.position();
                    // set the left position
                    setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.width())), 'reset', 0);
                }else if(slider.settings.mode == 'vertical'){
                    // get the last showing index's position
                    var lastShowingIndex = slider.children.length - slider.settings.minSlides;
                    var position = slider.children.eq(lastShowingIndex).position();
                    // set the top position
                    setPositionProperty(-position.top, 'reset', 0);
                }
                // if not last slide
            }else{
                // get the position of the first showing slide
                var position = slider.children.eq(slider.active.index * getMoveBy()).position();
                // check for last slide
                if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
                // set the repective position
                if (position != undefined){
                    if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
                    else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
                }
            }
        }

        /**
         * Sets the el's animating property position (which in turn will sometimes animate el).
         * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
         *
         * @param value (int)
         *  - the animating property's value
         *
         * @param type (string) 'slider', 'reset', 'ticker'
         *  - the type of instance for which the function is being
         *
         * @param duration (int)
         *  - the amount of time (in ms) the transition should occupy
         *
         * @param params (array) optional
         *  - an optional parameter containing any variables that need to be passed in
         */
        var setPositionProperty = function(value, type, duration, params){
            // use CSS transform
            if(slider.usingCSS){
                // determine the translate3d value
                var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
                // add the CSS transition-duration
                el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
                if(type == 'slide'){
                    // set the property value
                    el.css(slider.animProp, propValue);
                    // bind a callback method - executes when CSS transition completes
                    el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
                        // unbind the callback
                        el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                        updateAfterSlideTransition();
                    });
                }else if(type == 'reset'){
                    el.css(slider.animProp, propValue);
                }else if(type == 'ticker'){
                    // make the transition use 'linear'
                    el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
                    el.css(slider.animProp, propValue);
                    // bind a callback method - executes when CSS transition completes
                    el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
                        // unbind the callback
                        el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                        // reset the position
                        setPositionProperty(params['resetValue'], 'reset', 0);
                        // start the loop again
                        tickerLoop();
                    });
                }
                // use JS animate
            }else{
                var animateObj = {};
                animateObj[slider.animProp] = value;
                if(type == 'slide'){
                    el.animate(animateObj, duration, slider.settings.easing, function(){
                        updateAfterSlideTransition();
                    });
                }else if(type == 'reset'){
                    el.css(slider.animProp, value)
                }else if(type == 'ticker'){
                    el.animate(animateObj, speed, 'linear', function(){
                        setPositionProperty(params['resetValue'], 'reset', 0);
                        // run the recursive loop after animation
                        tickerLoop();
                    });
                }
            }
        }

        /**
         * Populates the pager with proper amount of pages
         */
        var populatePager = function(){
            var pagerHtml = '';
            var pagerQty = getPagerQty();
            // loop through each pager item
            for(var i=0; i < pagerQty; i++){
                var linkContent = '';
                // if a buildPager function is supplied, use it to get pager link value, else use index + 1
                if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
                    linkContent = slider.settings.buildPager(i);
                    slider.pagerEl.addClass('bx-custom-pager');
                }else{
                    linkContent = i + 1;
                    slider.pagerEl.addClass('bx-default-pager');
                }
                // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
                // add the markup to the string
                pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
            };
            // populate the pager element with pager links
            slider.pagerEl.html(pagerHtml);
        }

        /**
         * Appends the pager to the controls element
         */
        var appendPager = function(){
            if(!slider.settings.pagerCustom){
                // create the pager DOM element
                slider.pagerEl = $('<div class="bx-pager" />');
                // if a pager selector was supplied, populate it with the pager
                if(slider.settings.pagerSelector){
                    $(slider.settings.pagerSelector).html(slider.pagerEl);
                    // if no pager selector was supplied, add it after the wrapper
                }else{
                    slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
                }
                // populate the pager
                populatePager();
            }else{
                slider.pagerEl = $(slider.settings.pagerCustom);
            }
            // assign the pager click binding
            slider.pagerEl.delegate('a', 'click', clickPagerBind);
        }

        /**
         * Appends prev / next controls to the controls element
         */
        var appendControls = function(){
            slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
            slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
            // bind click actions to the controls
            slider.controls.next.bind('click', clickNextBind);
            slider.controls.prev.bind('click', clickPrevBind);
            // if nextSlector was supplied, populate it
            if(slider.settings.nextSelector){
                $(slider.settings.nextSelector).append(slider.controls.next);
            }
            // if prevSlector was supplied, populate it
            if(slider.settings.prevSelector){
                $(slider.settings.prevSelector).append(slider.controls.prev);
            }
            // if no custom selectors were supplied
            if(!slider.settings.nextSelector && !slider.settings.prevSelector){
                // add the controls to the DOM
                slider.controls.directionEl = $('<div class="bx-controls-direction" />');
                // add the control elements to the directionEl
                slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
                // slider.viewport.append(slider.controls.directionEl);
                slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
            }
        }

        /**
         * Appends start / stop auto controls to the controls element
         */
        var appendControlsAuto = function(){
            slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
            slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
            // add the controls to the DOM
            slider.controls.autoEl = $('<div class="bx-controls-auto" />');
            // bind click actions to the controls
            slider.controls.autoEl.delegate('.bx-start', 'click', clickStartBind);
            slider.controls.autoEl.delegate('.bx-stop', 'click', clickStopBind);
            // if autoControlsCombine, insert only the "start" control
            if(slider.settings.autoControlsCombine){
                slider.controls.autoEl.append(slider.controls.start);
                // if autoControlsCombine is false, insert both controls
            }else{
                slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
            }
            // if auto controls selector was supplied, populate it with the controls
            if(slider.settings.autoControlsSelector){
                $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
                // if auto controls selector was not supplied, add it after the wrapper
            }else{
                slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
            }
            // update the auto controls
            updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
        }

        /**
         * Appends image captions to the DOM
         */
        var appendCaptions = function(){
            // cycle through each child
            slider.children.each(function(index){
                // get the image title attribute
                var title = $(this).find('img:first').attr('title');
                // append the caption
                if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
            });
        }

        /**
         * Click next binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickNextBind = function(e){
            // if auto show is running, stop it
            if (slider.settings.auto) el.stopAuto();
            el.goToNextSlide();
            e.preventDefault();
        }

        /**
         * Click prev binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickPrevBind = function(e){
            // if auto show is running, stop it
            if (slider.settings.auto) el.stopAuto();
            el.goToPrevSlide();
            e.preventDefault();
        }

        /**
         * Click start binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickStartBind = function(e){
            el.startAuto();
            e.preventDefault();
        }

        /**
         * Click stop binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickStopBind = function(e){
            el.stopAuto();
            e.preventDefault();
        }

        /**
         * Click pager binding
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickPagerBind = function(e){
            // if auto show is running, stop it
            if (slider.settings.auto) el.stopAuto();
            var pagerLink = $(e.currentTarget);
            var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
            // if clicked pager link is not active, continue with the goToSlide call
            if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
            e.preventDefault();
        }

        /**
         * Updates the pager links with an active class
         *
         * @param slideIndex (int)
         *  - index of slide to make active
         */
        var updatePagerActive = function(slideIndex){
            // if "short" pager type
            var len = slider.children.length; // nb of children
            if(slider.settings.pagerType == 'short'){
                if(slider.settings.maxSlides > 1) {
                    len = Math.ceil(slider.children.length/slider.settings.maxSlides);
                }
                slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
                return;
            }
            // remove all pager active classes
            slider.pagerEl.find('a').removeClass('active');
            // apply the active class for all pagers
            slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
        }

        /**
         * Performs needed actions after a slide transition
         */
        var updateAfterSlideTransition = function(){
            // if infinte loop is true
            if(slider.settings.infiniteLoop){
                var position = '';
                // first slide
                if(slider.active.index == 0){
                    // set the new position
                    position = slider.children.eq(0).position();
                    // carousel, last slide
                }else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
                    position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
                    // last slide
                }else if(slider.active.index == slider.children.length - 1){
                    position = slider.children.eq(slider.children.length - 1).position();
                }
                if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0);; }
                else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0);; }
            }
            // declare that the transition is complete
            slider.working = false;
            // onSlideAfter callback
            slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
        }

        /**
         * Updates the auto controls state (either active, or combined switch)
         *
         * @param state (string) "start", "stop"
         *  - the new state of the auto show
         */
        var updateAutoControls = function(state){
            // if autoControlsCombine is true, replace the current control with the new state
            if(slider.settings.autoControlsCombine){
                slider.controls.autoEl.html(slider.controls[state]);
                // if autoControlsCombine is false, apply the "active" class to the appropriate control
            }else{
                slider.controls.autoEl.find('a').removeClass('active');
                slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
            }
        }

        /**
         * Updates the direction controls (checks if either should be hidden)
         */
        var updateDirectionControls = function(){
            if(getPagerQty() == 1){
                slider.controls.prev.addClass('disabled');
                slider.controls.next.addClass('disabled');
            }else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
                // if first slide
                if (slider.active.index == 0){
                    slider.controls.prev.addClass('disabled');
                    slider.controls.next.removeClass('disabled');
                    // if last slide
                }else if(slider.active.index == getPagerQty() - 1){
                    slider.controls.next.addClass('disabled');
                    slider.controls.prev.removeClass('disabled');
                    // if any slide in the middle
                }else{
                    slider.controls.prev.removeClass('disabled');
                    slider.controls.next.removeClass('disabled');
                }
            }
        }

        /**
         * Initialzes the auto process
         */
        var initAuto = function(){
            // if autoDelay was supplied, launch the auto show using a setTimeout() call
            if(slider.settings.autoDelay > 0){
                var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
                // if autoDelay was not supplied, start the auto show normally
            }else{
                el.startAuto();
            }
            // if autoHover is requested
            if(slider.settings.autoHover){
                // on el hover
                el.hover(function(){
                    // if the auto show is currently playing (has an active interval)
                    if(slider.interval){
                        // stop the auto show and pass true agument which will prevent control update
                        el.stopAuto(true);
                        // create a new autoPaused value which will be used by the relative "mouseout" event
                        slider.autoPaused = true;
                    }
                }, function(){
                    // if the autoPaused value was created be the prior "mouseover" event
                    if(slider.autoPaused){
                        // start the auto show and pass true agument which will prevent control update
                        el.startAuto(true);
                        // reset the autoPaused value
                        slider.autoPaused = null;
                    }
                });
            }
        }

        /**
         * Initialzes the ticker process
         */
        var initTicker = function(){
            var startPosition = 0;
            // if autoDirection is "next", append a clone of the entire slider
            if(slider.settings.autoDirection == 'next'){
                el.append(slider.children.clone().addClass('bx-clone'));
                // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
            }else{
                el.prepend(slider.children.clone().addClass('bx-clone'));
                var position = slider.children.first().position();
                startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
            }
            setPositionProperty(startPosition, 'reset', 0);
            // do not allow controls in ticker mode
            slider.settings.pager = false;
            slider.settings.controls = false;
            slider.settings.autoControls = false;
            // if autoHover is requested
            if(slider.settings.tickerHover && !slider.usingCSS){
                // on el hover
                slider.viewport.hover(function(){
                    el.stop();
                }, function(){
                    // calculate the total width of children (used to calculate the speed ratio)
                    var totalDimens = 0;
                    slider.children.each(function(index){
                        totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
                    });
                    // calculate the speed ratio (used to determine the new speed to finish the paused animation)
                    var ratio = slider.settings.speed / totalDimens;
                    // determine which property to use
                    var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
                    // calculate the new speed
                    var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
                    tickerLoop(newSpeed);
                });
            }
            // start the ticker loop
            tickerLoop();
        }

        /**
         * Runs a continuous loop, news ticker-style
         */
        var tickerLoop = function(resumeSpeed){
            speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
            var position = {left: 0, top: 0};
            var reset = {left: 0, top: 0};
            // if "next" animate left position to last child, then reset left to 0
            if(slider.settings.autoDirection == 'next'){
                position = el.find('.bx-clone').first().position();
                // if "prev" animate left position to 0, then reset left to first non-clone child
            }else{
                reset = slider.children.first().position();
            }
            var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
            var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
            var params = {resetValue: resetValue};
            setPositionProperty(animateProperty, 'ticker', speed, params);
        }

        /**
         * Initializes touch events
         */
        var initTouch = function(){
            // initialize object to contain all touch values
            slider.touch = {
                start: {x: 0, y: 0},
                end: {x: 0, y: 0}
            }
            slider.viewport.bind('touchstart', onTouchStart);
        }

        /**
         * Event handler for "touchstart"
         *
         * @param e (event)
         *  - DOM event object
         */
        var onTouchStart = function(e){
            if(slider.working){
                e.preventDefault();
            }else{
                // record the original position when touch starts
                slider.touch.originalPos = el.position();
                var orig = e.originalEvent;
                // record the starting touch x, y coordinates
                slider.touch.start.x = orig.changedTouches[0].pageX;
                slider.touch.start.y = orig.changedTouches[0].pageY;
                // bind a "touchmove" event to the viewport
                slider.viewport.bind('touchmove', onTouchMove);
                // bind a "touchend" event to the viewport
                slider.viewport.bind('touchend', onTouchEnd);
            }
        }

        /**
         * Event handler for "touchmove"
         *
         * @param e (event)
         *  - DOM event object
         */
        var onTouchMove = function(e){
            var orig = e.originalEvent;
            // if scrolling on y axis, do not prevent default
            var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
            var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
            // x axis swipe
            if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
                e.preventDefault();
                // y axis swipe
            }else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
                e.preventDefault();
            }
            if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
                var value = 0;
                // if horizontal, drag along x axis
                if(slider.settings.mode == 'horizontal'){
                    var change = orig.changedTouches[0].pageX - slider.touch.start.x;
                    value = slider.touch.originalPos.left + change;
                    // if vertical, drag along y axis
                }else{
                    var change = orig.changedTouches[0].pageY - slider.touch.start.y;
                    value = slider.touch.originalPos.top + change;
                }
                setPositionProperty(value, 'reset', 0);
            }
        }

        /**
         * Event handler for "touchend"
         *
         * @param e (event)
         *  - DOM event object
         */
        var onTouchEnd = function(e){
            slider.viewport.unbind('touchmove', onTouchMove);
            var orig = e.originalEvent;
            var value = 0;
            // record end x, y positions
            slider.touch.end.x = orig.changedTouches[0].pageX;
            slider.touch.end.y = orig.changedTouches[0].pageY;
            // if fade mode, check if absolute x distance clears the threshold
            if(slider.settings.mode == 'fade'){
                var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
                if(distance >= slider.settings.swipeThreshold){
                    slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
                    el.stopAuto();
                }
                // not fade mode
            }else{
                var distance = 0;
                // calculate distance and el's animate property
                if(slider.settings.mode == 'horizontal'){
                    distance = slider.touch.end.x - slider.touch.start.x;
                    value = slider.touch.originalPos.left;
                }else{
                    distance = slider.touch.end.y - slider.touch.start.y;
                    value = slider.touch.originalPos.top;
                }
                // if not infinite loop and first / last slide, do not attempt a slide transition
                if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
                    setPositionProperty(value, 'reset', 200);
                }else{
                    // check if distance clears threshold
                    if(Math.abs(distance) >= slider.settings.swipeThreshold){
                        distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
                        el.stopAuto();
                    }else{
                        // el.animate(property, 200);
                        setPositionProperty(value, 'reset', 200);
                    }
                }
            }
            slider.viewport.unbind('touchend', onTouchEnd);
        }

        /**
         * Window resize event callback
         */
        var resizeWindow = function(e){
            // get the new window dimens (again, thank you IE)
            var windowWidthNew = $(window).width();
            var windowHeightNew = $(window).height();
            // make sure that it is a true window resize
            // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
            // are resized. Can you just die already?*
            if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
                // set the new window dimens
                windowWidth = windowWidthNew;
                windowHeight = windowHeightNew;
                // update all dynamic elements
                el.redrawSlider();
            }
        }

        /**
         * ===================================================================================
         * = PUBLIC FUNCTIONS
         * ===================================================================================
         */

        /**
         * Performs slide transition to the specified slide
         *
         * @param slideIndex (int)
         *  - the destination slide's index (zero-based)
         *
         * @param direction (string)
         *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
         */
        el.goToSlide = function(slideIndex, direction){
            // if plugin is currently in motion, ignore request
            if(slider.working || slider.active.index == slideIndex) return;
            // declare that plugin is in motion
            slider.working = true;
            // store the old index
            slider.oldIndex = slider.active.index;
            // if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
            if(slideIndex < 0){
                slider.active.index = getPagerQty() - 1;
                // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
            }else if(slideIndex >= getPagerQty()){
                slider.active.index = 0;
                // set active index to requested slide
            }else{
                slider.active.index = slideIndex;
            }
            // onSlideBefore, onSlideNext, onSlidePrev callbacks
            slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            if(direction == 'next'){
                slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            }else if(direction == 'prev'){
                slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            }
            // check if last slide
            slider.active.last = slider.active.index >= getPagerQty() - 1;
            // update the pager with active class
            if(slider.settings.pager) updatePagerActive(slider.active.index);
            // // check for direction control update
            if(slider.settings.controls) updateDirectionControls();
            // if slider is set to mode: "fade"
            if(slider.settings.mode == 'fade'){
                // if adaptiveHeight is true and next height is different from current height, animate to the new height
                if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
                    slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                // fade out the visible child and reset its z-index value
                slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
                // fade in the newly requested slide
                slider.children.eq(slider.active.index).css('zIndex', 51).fadeIn(slider.settings.speed, function(){
                    $(this).css('zIndex', 50);
                    updateAfterSlideTransition();
                });
                // slider mode is not "fade"
            }else{
                // if adaptiveHeight is true and next height is different from current height, animate to the new height
                if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
                    slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                var moveBy = 0;
                var position = {left: 0, top: 0};
                // if carousel and not infinite loop
                if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
                    if(slider.settings.mode == 'horizontal'){
                        // get the last child position
                        var lastChild = slider.children.eq(slider.children.length - 1);
                        position = lastChild.position();
                        // calculate the position of the last slide
                        moveBy = slider.viewport.width() - lastChild.outerWidth();
                    }else{
                        // get last showing index position
                        var lastShowingIndex = slider.children.length - slider.settings.minSlides;
                        position = slider.children.eq(lastShowingIndex).position();
                    }
                    // horizontal carousel, going previous while on first slide (infiniteLoop mode)
                }else if(slider.carousel && slider.active.last && direction == 'prev'){
                    // get the last child position
                    var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
                    var lastChild = el.children('.bx-clone').eq(eq);
                    position = lastChild.position();
                    // if infinite loop and "Next" is clicked on the last slide
                }else if(direction == 'next' && slider.active.index == 0){
                    // get the last clone position
                    position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
                    slider.active.last = false;
                    // normal non-zero requests
                }else if(slideIndex >= 0){
                    var requestEl = slideIndex * getMoveBy();
                    position = slider.children.eq(requestEl).position();
                }

                /* If the position doesn't exist
                 * (e.g. if you destroy the slider on a next click),
                 * it doesn't throw an error.
                 */
                if ("undefined" !== typeof(position)) {
                    var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
                    // plugin values to be animated
                    setPositionProperty(value, 'slide', slider.settings.speed);
                }
            }
        }

        /**
         * Transitions to the next slide in the show
         */
        el.goToNextSlide = function(){
            // if infiniteLoop is false and last page is showing, disregard call
            if (!slider.settings.infiniteLoop && slider.active.last) return;
            var pagerIndex = parseInt(slider.active.index) + 1;
            el.goToSlide(pagerIndex, 'next');
        }

        /**
         * Transitions to the prev slide in the show
         */
        el.goToPrevSlide = function(){
            // if infiniteLoop is false and last page is showing, disregard call
            if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
            var pagerIndex = parseInt(slider.active.index) - 1;
            el.goToSlide(pagerIndex, 'prev');
        }

        /**
         * Starts the auto show
         *
         * @param preventControlUpdate (boolean)
         *  - if true, auto controls state will not be updated
         */
        el.startAuto = function(preventControlUpdate){
            // if an interval already exists, disregard call
            if(slider.interval) return;
            // create an interval
            slider.interval = setInterval(function(){
                slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
            }, slider.settings.pause);
            // if auto controls are displayed and preventControlUpdate is not true
            if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
        }

        /**
         * Stops the auto show
         *
         * @param preventControlUpdate (boolean)
         *  - if true, auto controls state will not be updated
         */
        el.stopAuto = function(preventControlUpdate){
            // if no interval exists, disregard call
            if(!slider.interval) return;
            // clear the interval
            clearInterval(slider.interval);
            slider.interval = null;
            // if auto controls are displayed and preventControlUpdate is not true
            if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
        }

        /**
         * Returns current slide index (zero-based)
         */
        el.getCurrentSlide = function(){
            return slider.active.index;
        }

        /**
         * Returns number of slides in show
         */
        el.getSlideCount = function(){
            return slider.children.length;
        }

        /**
         * Update all dynamic slider elements
         */
        el.redrawSlider = function(){
            // resize all children in ratio to new screen size
            slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
            // adjust the height
            slider.viewport.css('height', getViewportHeight());
            // update the slide position
            if(!slider.settings.ticker) setSlidePosition();
            // if active.last was true before the screen resize, we want
            // to keep it last no matter what screen size we end on
            if (slider.active.last) slider.active.index = getPagerQty() - 1;
            // if the active index (page) no longer exists due to the resize, simply set the index as last
            if (slider.active.index >= getPagerQty()) slider.active.last = true;
            // if a pager is being displayed and a custom pager is not being used, update it
            if(slider.settings.pager && !slider.settings.pagerCustom){
                populatePager();
                updatePagerActive(slider.active.index);
            }
        }

        /**
         * Destroy the current instance of the slider (revert everything back to original state)
         */
        el.destroySlider = function(){
            // don't do anything if slider has already been destroyed
            if(!slider.initialized) return;
            slider.initialized = false;
            $('.bx-clone', this).remove();
            slider.children.each(function() {
                $(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
            });
            $(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
            $(this).unwrap().unwrap();
            if(slider.controls.el) slider.controls.el.remove();
            if(slider.controls.next) slider.controls.next.remove();
            if(slider.controls.prev) slider.controls.prev.remove();
            if(slider.pagerEl) slider.pagerEl.remove();
            $('.bx-caption', this).remove();
            if(slider.controls.autoEl) slider.controls.autoEl.remove();
            clearInterval(slider.interval);
            if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
        }

        /**
         * Reload the slider (revert all DOM changes, and re-initialize)
         */
        el.reloadSlider = function(settings){
            if (settings != undefined) options = settings;
            el.destroySlider();
            init();
        }

        init();

        // returns the current jQuery object
        return this;
    }

})(jQuery);













// Nod v.1.0.5 Frontend validation jQuery plugin https://github.com/casperin/nod
(function($){


    var Checker,
        __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

    Checker = (function() {

        function Checker($el, field) {
            this.run = __bind(this.run, this);

            var sel;
            sel = field[0], this.metric = field[1];
            this.getVal = this.makeGetVal($el, sel);
        }

        Checker.prototype.run = function() {
            return this.verify(this.metric, this.getVal());
        };

        Checker.prototype.makeGetVal = function($el, sel) {
            var inputs, name, type;
            type = $el.attr('type');
            if (type === 'checkbox') {
                return function() {
                    return $el.is(':checked');
                };
            } else if (type === 'radio') {
                name = $el.attr('name');
                return function() {
                    return $('[name="' + name + '"]').filter(':checked').val();
                };
            } else {
                if (this.metric === 'one-of') {
                    inputs = $(sel);
                    return function() {
                        return inputs.map(function() {
                            return $.trim(this.value);
                        }).get().join('');
                    };
                } else {
                    return function() {
                        return $.trim($el.val());
                    };
                }
            }
        };

        Checker.prototype.verify = function(m, v) {
            var arg, sec, type, _ref;
            if (!!(m && m.constructor && m.call && m.apply)) {
                return m(v);
            }
            if (m instanceof RegExp) {
                return m.test(v);
            }
            _ref = $.map(m.split(':'), $.trim), type = _ref[0], arg = _ref[1], sec = _ref[2];
            if (type === 'same-as' && $(arg).length !== 1) {
                throw new Error('same-as selector must target one and only one element');
            }
            if (!v && type !== 'presence' && type !== 'one-of') {
                return true;
            }
            switch (type) {
                case 'presence':
                    return !!v;
                case 'one-of':
                    return !!v;
                case 'exact':
                    return v === arg;
                case 'not':
                    return v !== arg;
                case 'same-as':
                    return v === $(arg).val();
                case 'min-num':
                    return +v >= +arg;
                case 'max-num':
                    return +v <= +arg;
                case 'between-num':
                    return +v >= +arg && +v <= +sec;
                case 'min-length':
                    return v.length >= +arg;
                case 'max-length':
                    return v.length <= +arg;
                case 'exact-length':
                    return v.length === +arg;
                case 'between':
                    return v.length >= +arg && v.length <= +sec;
                case 'integer':
                    return /^\s*\d+\s*$/.test(v);
                case 'float':
                    return /^[-+]?[0-9]+(\.[0-9]+)?$/.test(v);
                case 'email':
                    return this.email(v);
                default:
                    throw new Error('I don\'t know ' + type + ', sorry.');
            }
        };

        Checker.prototype.email = function(v) {
            var RFC822;
            RFC822 = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
            return RFC822.test(v);
        };

        return Checker;

    })();

    var Listener,
        __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

    Listener = (function() {

        function Listener(el, get, field) {
            this.get = get;
            this.field = field;
            this.change_status = __bind(this.change_status, this);

            this.runCheck = __bind(this.runCheck, this);

            this.delayedCheck = __bind(this.delayedCheck, this);

            this.events = __bind(this.events, this);

            this.$el = $(el);
            this.delayId = "";
            this.status = null;
            this.checker = new Checker(this.$el, this.field);
            this.msg = new Msg(this.$el, this.get, this.field);
            this.events();
        }

        Listener.prototype.events = function() {
            if (this.$el.attr('type') === 'radio') {
                return $('[name="' + this.$el.attr("name") + '"]').on('change', this.runCheck);
            } else {
                this.$el.on('change', this.runCheck);
                this.$el.on('blur', this.runCheck);
                if (this.field[1] === 'one-of') {
                    $(window).on('nod-run-one-of', this.runCheck);
                }
                if (this.get.delay) {
                    return this.$el.on('keyup', this.delayedCheck);
                }
            }
        };

        Listener.prototype.delayedCheck = function() {
            clearTimeout(this.delayId);
            return this.delayId = setTimeout(this.runCheck, this.get.delay);
        };

        Listener.prototype.runCheck = function() {
            return $.when(this.checker.run()).then(this.change_status);
        };

        Listener.prototype.change_status = function(status) {
            var isCorrect;
            try {
                status = eval(status);
            } catch (_error) {}
            isCorrect = !!status;
            if (this.status === isCorrect) {
                return;
            }
            this.status = isCorrect;
            this.msg.toggle(this.status);
            $(this).trigger('nod_toggle');
            if (this.field[1] === 'one-of' && status) {
                return $(window).trigger('nod-run-one-of');
            }
        };

        return Listener;

    })();

    var Msg,
        __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

    Msg = (function() {

        function Msg($el, get, field) {
            this.$el = $el;
            this.get = get;
            this.createShowMsg = __bind(this.createShowMsg, this);

            this.toggle = __bind(this.toggle, this);

            this.createMsg = __bind(this.createMsg, this);

            this.$msg = this.createMsg(field[2]);
            this.showMsg = this.createShowMsg();
        }

        Msg.prototype.createMsg = function(msg) {
            return $('<span/>', {
                'html': msg,
                'class': this.get.helpSpanDisplay + ' ' + this.get.errorClass
            });
        };

        Msg.prototype.toggle = function(status) {
            if (status) {
                return this.$msg.remove();
            } else {
                this.showMsg();
                if (this.get.broadcastError) {
                    return this.broadcast();
                }
            }
        };

        Msg.prototype.createShowMsg = function() {
            var pos, type;
            type = this.$el.attr('type');
            if (type === 'checkbox' || type === 'radio') {
                return function() {
                    return this.$el.parent().append(this.$msg);
                };
            } else {
                pos = this.findPos(this.$el);
                return function() {
                    return pos.after(this.$msg);
                };
            }
        };

        Msg.prototype.findPos = function($el) {
            if (this.elHasClass('parent', $el)) {
                return this.findPos($el.parent());
            }
            if (this.elHasClass('next', $el)) {
                return this.findPos($el.next());
            }
            return $el;
        };

        Msg.prototype.elHasClass = function(dir, $el) {
            var sel, _i, _len, _ref;
            _ref = this.get.errorPosClasses;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                sel = _ref[_i];
                if ($el[dir](sel).length) {
                    return true;
                }
            }
            return false;
        };

        Msg.prototype.broadcast = function() {
            return $(window).trigger('nod_error_fired', {
                el: this.$el,
                msg: this.$msg.html()
            });
        };

        return Msg;

    })();

    var Nod,
        __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

    Nod = (function() {

        function Nod(form, fields, options) {
            this.form = form;
            this.formIsErrorFree = __bind(this.formIsErrorFree, this);

            this.submitForm = __bind(this.submitForm, this);

            this.toggleSubmitBtnText = __bind(this.toggleSubmitBtnText, this);

            this.toggleSubmitBtn = __bind(this.toggleSubmitBtn, this);

            this.toggleGroupClass = __bind(this.toggleGroupClass, this);

            this.toggle_status = __bind(this.toggle_status, this);

            this.massCheck = __bind(this.massCheck, this);

            this.listenForEnter = __bind(this.listenForEnter, this);

            this.events = __bind(this.events, this);

            this.createListeners = __bind(this.createListeners, this);

            if (!fields) {
                return;
            }
            this.form[0].__nod = this;
            this.get = $.extend({
                'delay': 700,
                'disableSubmitBtn': true,
                'helpSpanDisplay': 'help-inline',
                'groupClass': 'error',
                'submitBtnSelector': '[type=submit]',
                'metricsSplitter': ':',
                'errorPosClasses': ['.help-inline', '.add-on', 'button', '.input-append'],
                'silentSubmit': false,
                'broadcastError': false,
                'errorClass': 'nod_msg',
                'groupSelector': '.control-group'
            }, options);
            this.listeners = this.createListeners(fields);
            this.submit = this.form.find(this.get.submitBtnSelector);
            this.checkIfElementsExist(this.form, this.submit, this.get.disableSubmitBtn);
            this.events();
        }

        Nod.prototype.createListeners = function(fields) {
            var el, field, listeners, _i, _j, _len, _len1, _ref;
            listeners = [];
            for (_i = 0, _len = fields.length; _i < _len; _i++) {
                field = fields[_i];
                if (field.length !== 3) {
                    this["throw"]('field', field);
                }
                _ref = this.form.find(field[0]);
                for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                    el = _ref[_j];
                    listeners.push(new Listener(el, this.get, field));
                }
            }
            return listeners;
        };

        Nod.prototype.events = function() {
            var l, _i, _len, _ref;
            _ref = this.listeners;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                l = _ref[_i];
                $(l).on('nod_toggle', this.toggle_status);
            }
            if (this.submit.length) {
                return this.submit.on('click', this.massCheck);
            } else {
                return this.form.on('keyup', this.listenForEnter);
            }
        };

        Nod.prototype.listenForEnter = function(event) {
            if (event.keyCode === 13) {
                return this.massCheck();
            }
        };

        Nod.prototype.massCheck = function(event) {
            var checks, l, _i, _len, _ref;
            if (event != null) {
                event.preventDefault();
            }
            checks = [];
            _ref = this.listeners;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                l = _ref[_i];
                checks.push(l.runCheck());
            }
            this.toggleSubmitBtnText();
            return $.when.apply($, checks).then(this.submitForm).then(this.toggleSubmitBtnText);
        };

        Nod.prototype.toggle_status = function(event) {
            this.toggleGroupClass(event.target.$el.parents(this.get.groupSelector));
            if (this.get.disableSubmitBtn) {
                return this.toggleSubmitBtn();
            }
        };

        Nod.prototype.toggleGroupClass = function($group) {
            if ($group.find('.' + this.get.errorClass).length) {
                return $group.addClass(this.get.groupClass);
            } else {
                return $group.removeClass(this.get.groupClass);
            }
        };

        Nod.prototype.toggleSubmitBtn = function() {
            if (this.formIsErrorFree()) {
                return this.submit.removeClass('disabled').removeAttr('disabled');
            } else {
                return this.submit.addClass('disabled').attr('disabled', 'disabled');
            }
        };

        Nod.prototype.toggleSubmitBtnText = function() {
            var tmp;
            tmp = this.submit.attr('data-loading-text');
            if (tmp) {
                this.submit.attr('data-loading-text', this.submit.html());
                return this.submit.html(tmp);
            }
        };

        Nod.prototype.submitForm = function() {
            var $form;
            if (!this.formIsErrorFree()) {
                return;
            }
            if (this.get.silentSubmit) {
                $form = $(this.form);
                return $form.trigger('silentSubmit', $form.serialize());
            } else {
                return this.form.submit();
            }
        };

        Nod.prototype.formIsErrorFree = function() {
            return !$(this.listeners).filter(function() {
                if (this.status === null) {
                    this.runCheck();
                }
                return !this.status;
            }).length;
        };

        Nod.prototype.checkIfElementsExist = function(form, submit, disableSubmitBtn) {
            if (!form.selector || !form.length) {
                this["throw"]('form', form);
            }
            if (!submit.length && disableSubmitBtn) {
                return this["throw"]('submit', submit);
            }
        };

        Nod.prototype["throw"] = function(type, el) {
            var txt;
            switch (type) {
                case 'form':
                    txt = 'Couldn\'t find form: ';
                    break;
                case 'submit':
                    txt = 'Couldn\'t find submit button: ';
                    break;
                case 'field':
                    txt = 'Metrics for each field must have three parts: ';
            }
            throw new Error(txt + el);
        };

        return Nod;

    })();


    $.fn.nod = function(fields, settings) {
        if (!(fields || settings)) {
            return this[0].__nod;
        }
        new Nod(this, fields, settings);
        return this;
    };

})(jQuery);














/*
 Masked Input plugin for jQuery
 Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.3.1
 */
(function($) {
    function getPasteEvent() {
        var el = document.createElement('input'),
            name = 'onpaste';
        el.setAttribute(name, '');
        return (typeof el[name] === 'function') ? 'paste' : 'input';
    }

    var pasteEventName = getPasteEvent() + ".mask",
        ua = navigator.userAgent,
        iPhone = /iphone/i.test(ua),
        android = /android/i.test(ua),
        caretTimeoutId;

    $.mask = {
        //Predefined character definitions
        definitions: {
            '9': "[0-9]",
            'a': "[A-Za-z]",
            '*': "[A-Za-z0-9]"
        },
        dataName: "rawMaskFn",
        placeholder: '_'
    };

    $.fn.extend({
        //Helper Function for Caret positioning
        caret: function(begin, end) {
            var range;

            if (this.length === 0 || this.is(":hidden")) {
                return;
            }

            if (typeof begin == 'number') {
                end = (typeof end === 'number') ? end : begin;
                return this.each(function() {
                    if (this.setSelectionRange) {
                        this.setSelectionRange(begin, end);
                    } else if (this.createTextRange) {
                        range = this.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', end);
                        range.moveStart('character', begin);
                        range.select();
                    }
                });
            } else {
                if (this[0].setSelectionRange) {
                    begin = this[0].selectionStart;
                    end = this[0].selectionEnd;
                } else if (document.selection && document.selection.createRange) {
                    range = document.selection.createRange();
                    begin = 0 - range.duplicate().moveStart('character', -100000);
                    end = begin + range.text.length;
                }
                return {
                    begin: begin,
                    end: end
                };
            }
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(mask, settings) {
            var input,
                defs,
                tests,
                partialPosition,
                firstNonMaskPos,
                len;

            if (!mask && this.length > 0) {
                input = $(this[0]);
                return input.data($.mask.dataName)();
            }
            settings = $.extend({
                placeholder: $.mask.placeholder, // Load default placeholder
                completed: null
            }, settings);


            defs = $.mask.definitions;
            tests = [];
            partialPosition = len = mask.length;
            firstNonMaskPos = null;

            $.each(mask.split(""), function(i, c) {
                if (c == '?') {
                    len--;
                    partialPosition = i;
                } else if (defs[c]) {
                    tests.push(new RegExp(defs[c]));
                    if (firstNonMaskPos === null) {
                        firstNonMaskPos = tests.length - 1;
                    }
                } else {
                    tests.push(null);
                }
            });

            return this.trigger("unmask").each(function() {
                var input = $(this),
                    buffer = $.map(
                        mask.split(""),
                        function(c, i) {
                            if (c != '?') {
                                return defs[c] ? settings.placeholder : c;
                            }
                        }),
                    focusText = input.val();

                function seekNext(pos) {
                    while (++pos < len && !tests[pos]);
                    return pos;
                }

                function seekPrev(pos) {
                    while (--pos >= 0 && !tests[pos]);
                    return pos;
                }

                function shiftL(begin, end) {
                    var i,
                        j;

                    if (begin < 0) {
                        return;
                    }

                    for (i = begin, j = seekNext(end); i < len; i++) {
                        if (tests[i]) {
                            if (j < len && tests[i].test(buffer[j])) {
                                buffer[i] = buffer[j];
                                buffer[j] = settings.placeholder;
                            } else {
                                break;
                            }

                            j = seekNext(j);
                        }
                    }
                    writeBuffer();
                    input.caret(Math.max(firstNonMaskPos, begin));
                }

                function shiftR(pos) {
                    var i,
                        c,
                        j,
                        t;

                    for (i = pos, c = settings.placeholder; i < len; i++) {
                        if (tests[i]) {
                            j = seekNext(i);
                            t = buffer[i];
                            buffer[i] = c;
                            if (j < len && tests[j].test(t)) {
                                c = t;
                            } else {
                                break;
                            }
                        }
                    }
                }

                function keydownEvent(e) {
                    var k = e.which,
                        pos,
                        begin,
                        end;

                    //backspace, delete, and escape get special treatment
                    if (k === 8 || k === 46 || (iPhone && k === 127)) {
                        pos = input.caret();
                        begin = pos.begin;
                        end = pos.end;

                        if (end - begin === 0) {
                            begin = k !== 46 ? seekPrev(begin) : (end = seekNext(begin - 1));
                            end = k === 46 ? seekNext(end) : end;
                        }
                        clearBuffer(begin, end);
                        shiftL(begin, end - 1);

                        e.preventDefault();
                    } else if (k == 27) { //escape
                        input.val(focusText);
                        input.caret(0, checkVal());
                        e.preventDefault();
                    }
                }

                function keypressEvent(e) {
                    var k = e.which,
                        pos = input.caret(),
                        p,
                        c,
                        next;

                    if (e.ctrlKey || e.altKey || e.metaKey || k < 32) { //Ignore
                        return;
                    } else if (k) {
                        if (pos.end - pos.begin !== 0) {
                            clearBuffer(pos.begin, pos.end);
                            shiftL(pos.begin, pos.end - 1);
                        }

                        p = seekNext(pos.begin - 1);
                        if (p < len) {
                            c = String.fromCharCode(k);
                            if (tests[p].test(c)) {
                                shiftR(p);

                                buffer[p] = c;
                                writeBuffer();
                                next = seekNext(p);

                                if (android) {
                                    setTimeout($.proxy($.fn.caret, input, next), 0);
                                } else {
                                    input.caret(next);
                                }

                                if (settings.completed && next >= len) {
                                    settings.completed.call(input);
                                }
                            }
                        }
                        e.preventDefault();
                    }
                }

                function clearBuffer(start, end) {
                    var i;
                    for (i = start; i < end && i < len; i++) {
                        if (tests[i]) {
                            buffer[i] = settings.placeholder;
                        }
                    }
                }

                function writeBuffer() {
                    input.val(buffer.join(''));
                }

                function checkVal(allow) {
                    //try to place characters where they belong
                    var test = input.val(),
                        lastMatch = -1,
                        i,
                        c;

                    for (i = 0, pos = 0; i < len; i++) {
                        if (tests[i]) {
                            buffer[i] = settings.placeholder;
                            while (pos++ < test.length) {
                                c = test.charAt(pos - 1);
                                if (tests[i].test(c)) {
                                    buffer[i] = c;
                                    lastMatch = i;
                                    break;
                                }
                            }
                            if (pos > test.length) {
                                break;
                            }
                        } else if (buffer[i] === test.charAt(pos) && i !== partialPosition) {
                            pos++;
                            lastMatch = i;
                        }
                    }
                    if (allow) {
                        writeBuffer();
                    } else if (lastMatch + 1 < partialPosition) {
                        input.val("");
                        clearBuffer(0, len);
                    } else {
                        writeBuffer();
                        input.val(input.val().substring(0, lastMatch + 1));
                    }
                    return (partialPosition ? i : firstNonMaskPos);
                }

                input.data($.mask.dataName, function() {
                    return $.map(buffer, function(c, i) {
                        return tests[i] && c != settings.placeholder ? c : null;
                    }).join('');
                });

                if (!input.attr("readonly"))
                    input
                        .one("unmask", function() {
                            input
                                .unbind(".mask")
                                .removeData($.mask.dataName);
                        })
                        .bind("focus.mask", function() {
                            clearTimeout(caretTimeoutId);
                            var pos,
                                moveCaret;

                            focusText = input.val();
                            pos = checkVal();

                            caretTimeoutId = setTimeout(function() {
                                writeBuffer();
                                if (pos == mask.length) {
                                    input.caret(0, pos);
                                } else {
                                    input.caret(pos);
                                }
                            }, 10);
                        })
                        .bind("blur.mask", function() {
                            checkVal();
                            if (input.val() != focusText)
                                input.change();
                        })
                        .bind("keydown.mask", keydownEvent)
                        .bind("keypress.mask", keypressEvent)
                        .bind(pasteEventName, function() {
                            setTimeout(function() {
                                var pos = checkVal(true);
                                input.caret(pos);
                                if (settings.completed && pos == input.val().length)
                                    settings.completed.call(input);
                            }, 0);
                        });
                checkVal(); //Perform initial check for existing values
            });
        }
    });




})(jQuery);


/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery hashchange event
//
// *Version: 1.3, Last updated: 7/21/2010*
//
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
//
// About: License
//
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
//
// About: Examples
//
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
//
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
//
// About: Support and Testing
//
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
//
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
//
// About: Known issues
//
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
//
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
//
// Also note that should a browser natively support the window.onhashchange
// event, but not report that it does, the fallback polling loop will be used.
//
// About: Release History
//
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

(function($, window, undefined) {
    '$:nomunge'; // Used by YUI compressor.

    // Reused string.
    var str_hashchange = 'hashchange',

    // Method / object references.
        doc = document,
        fake_onhashchange,
        special = $.event.special,

    // Does the browser support window.onhashchange? Note that IE8 running in
    // IE7 compatibility mode reports true for 'onhashchange' in window, even
    // though the event isn't supported, so also test document.documentMode.
        doc_mode = doc.documentMode,
        supports_onhashchange = 'on' + str_hashchange in window && (doc_mode === undefined || doc_mode > 7);

    // Get location.hash (or what you'd expect location.hash to be) sans any
    // leading #. Thanks for making this necessary, Firefox!

    function get_fragment(url) {
        url = url || location.href;
        return '#' + url.replace(/^[^#]*#?(.*)$/, '$1');
    };

    // Method: jQuery.fn.hashchange
    //
    // Bind a handler to the window.onhashchange event or trigger all bound
    // window.onhashchange event handlers. This behavior is consistent with
    // jQuery's built-in event handlers.
    //
    // Usage:
    //
    // > jQuery(window).hashchange( [ handler ] );
    //
    // Arguments:
    //
    //  handler - (Function) Optional handler to be bound to the hashchange
    //    event. This is a "shortcut" for the more verbose form:
    //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
    //    all bound window.onhashchange event handlers will be triggered. This
    //    is a shortcut for the more verbose
    //    jQuery(window).trigger( 'hashchange' ). These forms are described in
    //    the <hashchange event> section.
    //
    // Returns:
    //
    //  (jQuery) The initial jQuery collection of elements.

    // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
    // $(elem).hashchange() for triggering, like jQuery does for built-in events.
    $.fn[str_hashchange] = function(fn) {
        return fn ? this.bind(str_hashchange, fn) : this.trigger(str_hashchange);
    };

    // Property: jQuery.fn.hashchange.delay
    //
    // The numeric interval (in milliseconds) at which the <hashchange event>
    // polling loop executes. Defaults to 50.

    // Property: jQuery.fn.hashchange.domain
    //
    // If you're setting document.domain in your JavaScript, and you want hash
    // history to work in IE6/7, not only must this property be set, but you must
    // also set document.domain BEFORE jQuery is loaded into the page. This
    // property is only applicable if you are supporting IE6/7 (or IE8 operating
    // in "IE7 compatibility" mode).
    //
    // In addition, the <jQuery.fn.hashchange.src> property must be set to the
    // path of the included "document-domain.html" file, which can be renamed or
    // modified if necessary (note that the document.domain specified must be the
    // same in both your main JavaScript as well as in this file).
    //
    // Usage:
    //
    // jQuery.fn.hashchange.domain = document.domain;

    // Property: jQuery.fn.hashchange.src
    //
    // If, for some reason, you need to specify an Iframe src file (for example,
    // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
    // do so using this property. Note that when using this property, history
    // won't be recorded in IE6/7 until the Iframe src file loads. This property
    // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
    // compatibility" mode).
    //
    // Usage:
    //
    // jQuery.fn.hashchange.src = 'path/to/file.html';

    $.fn[str_hashchange].delay = 50;
    /*
     $.fn[ str_hashchange ].domain = null;
     $.fn[ str_hashchange ].src = null;
     */

    // Event: hashchange event
    //
    // Fired when location.hash changes. In browsers that support it, the native
    // HTML5 window.onhashchange event is used, otherwise a polling loop is
    // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
    // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
    // compatibility" mode), a hidden Iframe is created to allow the back button
    // and hash-based history to work.
    //
    // Usage as described in <jQuery.fn.hashchange>:
    //
    // > // Bind an event handler.
    // > jQuery(window).hashchange( function(e) {
    // >   var hash = location.hash;
    // >   ...
    // > });
    // >
    // > // Manually trigger the event handler.
    // > jQuery(window).hashchange();
    //
    // A more verbose usage that allows for event namespacing:
    //
    // > // Bind an event handler.
    // > jQuery(window).bind( 'hashchange', function(e) {
    // >   var hash = location.hash;
    // >   ...
    // > });
    // >
    // > // Manually trigger the event handler.
    // > jQuery(window).trigger( 'hashchange' );
    //
    // Additional Notes:
    //
    // * The polling loop and Iframe are not created until at least one handler
    //   is actually bound to the 'hashchange' event.
    // * If you need the bound handler(s) to execute immediately, in cases where
    //   a location.hash exists on page load, via bookmark or page refresh for
    //   example, use jQuery(window).hashchange() or the more verbose
    //   jQuery(window).trigger( 'hashchange' ).
    // * The event can be bound before DOM ready, but since it won't be usable
    //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
    //   to bind it inside a DOM ready handler.

    // Override existing $.event.special.hashchange methods (allowing this plugin
    // to be defined after jQuery BBQ in BBQ's source code).
    special[str_hashchange] = $.extend(special[str_hashchange], {

        // Called only when the first 'hashchange' event is bound to window.
        setup: function() {
            // If window.onhashchange is supported natively, there's nothing to do..
            if (supports_onhashchange) {
                return false;
            }

            // Otherwise, we need to create our own. And we don't want to call this
            // until the user binds to the event, just in case they never do, since it
            // will create a polling loop and possibly even a hidden Iframe.
            $(fake_onhashchange.start);
        },

        // Called only when the last 'hashchange' event is unbound from window.
        teardown: function() {
            // If window.onhashchange is supported natively, there's nothing to do..
            if (supports_onhashchange) {
                return false;
            }

            // Otherwise, we need to stop ours (if possible).
            $(fake_onhashchange.stop);
        }

    });

    // fake_onhashchange does all the work of triggering the window.onhashchange
    // event for browsers that don't natively support it, including creating a
    // polling loop to watch for hash changes and in IE 6/7 creating a hidden
    // Iframe to enable back and forward.
    fake_onhashchange = (function() {
        var self = {},
            timeout_id,

        // Remember the initial hash so it doesn't get triggered immediately.
            last_hash = get_fragment(),

            fn_retval = function(val) {
                return val;
            },
            history_set = fn_retval,
            history_get = fn_retval;

        // Start the polling loop.
        self.start = function() {
            timeout_id || poll();
        };

        // Stop the polling loop.
        self.stop = function() {
            timeout_id && clearTimeout(timeout_id);
            timeout_id = undefined;
        };

        // This polling loop checks every $.fn.hashchange.delay milliseconds to see
        // if location.hash has changed, and triggers the 'hashchange' event on
        // window when necessary.

        function poll() {
            var hash = get_fragment(),
                history_hash = history_get(last_hash);

            if (hash !== last_hash) {
                history_set(last_hash = hash, history_hash);

                $(window).trigger(str_hashchange);

            } else if (history_hash !== last_hash) {
                location.href = location.href.replace(/#.*/, '') + history_hash;
            }

            timeout_id = setTimeout(poll, $.fn[str_hashchange].delay);
        };

        return self;
    })();

})(jQuery, this);