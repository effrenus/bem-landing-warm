(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "content") {
        if ($$mods && $$mods["shrink"] === true && $$block.indexOf("section") === 0) {
            return {
                elem: "container",
                content: __$ctx.ctx.content
            };
        }
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "tag") {
        if ($$mods && $$mods["shrink"] === true && $$block.indexOf("section") === 0) {
            return "section";
        }
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b72(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 256) === 0) {
                            var __$r = __$b73(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b74(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
        } else if (__$t === "link") {
            if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
                var __$r = __$b75(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "input") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b76(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b77(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "link") {
            var __$t = !$$elem;
            if (__$t) {
                var __$t = $$mods;
                if (__$t) {
                    if ($$mods["pseudo"] === true) {
                        return true;
                    }
                    if ($$mods["disabled"] === true && (__$ctx.__$a0 & 32) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$36() {
                            var __$r__$37;
                            var __$l0__$38 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 32;
                            __$r__$37 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$38;
                            return __$r__$37;
                        }(), {
                            url: __$ctx.ctx.url
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                }
                return true;
            }
        } else if (__$t === "gallery") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "input") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 8) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$25() {
                        var __$r__$26;
                        var __$l0__$27 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 8;
                        __$r__$26 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$27;
                        return __$r__$26;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b90(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b91(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b92(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b93(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b94(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_input"] = undefined;
        ctx["_ieCommented"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b5(__$ctx, __$ref) {
    var content__$11 = [];
    var images__$12 = __$ctx.ctx.images || [];
    content__$11.push({
        elem: "head",
        content: [ {
            elem: "title",
            content: __$ctx.ctx.head.title
        }, {
            elem: "text",
            content: __$ctx.ctx.head.text
        } ]
    });
    content__$11.push({
        elem: "sidebar",
        content: [ {
            elem: "price",
            content: "<b>" + __$ctx.ctx.price + "</b> сумма сделки"
        }, {
            elem: "profit",
            content: "<b>" + __$ctx.ctx.price + "</b> прибыль сделки"
        }, {
            block: "button",
            mods: {
                submit: true
            },
            content: "Узнать подробности"
        } ]
    });
    images__$12.length && content__$11.push({
        elem: "images",
        content: images__$12.map(function(imagePath) {
            return {
                block: "image",
                url: imagePath
            };
        })
    });
    return {
        elem: "container",
        content: content__$11
    };
}

function __$b10(__$ctx, __$ref) {
    var blocks__$13 = [ {
        image: "../../images/client-cards/1.png",
        title: "Частные лица",
        text: "Остекление квартир и коттеджей",
        price: "27&nbsp;000"
    }, {
        image: "../../images/client-cards/2.png",
        title: "Строительные компании",
        text: "Остекление жилых и коммерческих объектов недвижимости",
        price: "700&nbsp;000"
    }, {
        image: "../../images/client-cards/3.png",
        title: "Государственные организации",
        text: "Остекление детских садов, больниц, бюджетных организаций",
        price: "1&nbsp;100&nbsp;000"
    } ];
    return blocks__$13.map(function(item) {
        return {
            elem: "card",
            content: [ {
                block: "image",
                mix: {
                    block: "client-card",
                    elem: "image"
                },
                url: item.image
            }, {
                elem: "title",
                content: item.title
            }, {
                elem: "text",
                content: item.text
            }, {
                elem: "price",
                content: "Средний чек <b>" + item.price + "&nbsp;P</b>"
            } ]
        };
    });
}

function __$b11(__$ctx, __$ref) {
    var content__$14 = [], images__$15 = __$ctx.ctx.images || [];
    images__$15.forEach(function(imagePath) {
        content__$14.push({
            block: "image",
            url: imagePath
        });
    });
    return content__$14;
}

function __$b12(__$ctx, __$ref) {
    var content__$16 = [];
    content__$16.push({
        elem: "text",
        content: __$ctx.ctx.text
    });
    return content__$16;
}

function __$b19(__$ctx, __$ref) {
    var ctx__$28 = __$ctx.ctx, content__$29 = [ ctx__$28.icon ];
    "text" in ctx__$28 && content__$29.push({
        elem: "text",
        content: ctx__$28.text
    });
    return content__$29;
}

function __$b54(__$ctx, __$ref) {
    var attrs__$50 = {};
    if (__$ctx.ctx.url) {
        attrs__$50.src = __$ctx.ctx.url;
    } else if (__$ctx._nonceCsp) {
        attrs__$50.nonce = __$ctx._nonceCsp;
    }
    return attrs__$50;
}

function __$b56(__$ctx, __$ref) {
    var ctx__$39 = __$ctx.ctx, attrs__$40 = {}, tabIndex__$41;
    if (!$$mods.disabled) {
        if (ctx__$39.url) {
            attrs__$40.href = ctx__$39.url;
            tabIndex__$41 = ctx__$39.tabIndex;
        } else {
            tabIndex__$41 = ctx__$39.tabIndex || 0;
        }
    }
    typeof tabIndex__$41 === "undefined" || (attrs__$40.tabindex = tabIndex__$41);
    ctx__$39.title && (attrs__$40.title = ctx__$39.title);
    ctx__$39.target && (attrs__$40.target = ctx__$39.target);
    return attrs__$40;
}

function __$b58(__$ctx, __$ref) {
    var input__$17 = __$ctx._input, attrs__$18 = {
        id: input__$17.id,
        name: input__$17.name,
        value: input__$17.val,
        maxlength: input__$17.maxLength,
        tabindex: input__$17.tabIndex,
        placeholder: input__$17.placeholder
    };
    input__$17.autocomplete === false && (attrs__$18.autocomplete = "off");
    $$mods.disabled && (attrs__$18.disabled = "disabled");
    return attrs__$18;
}

function __$b59(__$ctx, __$ref) {
    var ctx__$30 = __$ctx.ctx, attrs__$31 = {
        type: $$mods.type || "button",
        name: ctx__$30.name,
        value: ctx__$30.val
    };
    $$mods.disabled && (attrs__$31.disabled = "disabled");
    return __$ctx.extend(function __$lb__$32() {
        var __$r__$33;
        var __$l0__$34 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16;
        __$r__$33 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$34;
        return __$r__$33;
    }(), attrs__$31);
}

function __$b60(__$ctx, __$ref) {
    var ctx__$35 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$35.tabIndex,
        id: ctx__$35.id,
        title: ctx__$35.title
    };
}

function __$b61(__$ctx, __$ref) {
    var ctx__$46 = __$ctx.ctx;
    return __$ctx.extend(function __$lb__$47() {
        var __$r__$48;
        var __$l0__$49 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 128;
        __$r__$48 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$49;
        return __$r__$48;
    }(), {
        src: ctx__$46.url,
        width: ctx__$46.width,
        height: ctx__$46.height,
        alt: ctx__$46.alt,
        title: ctx__$46.title
    });
}

function __$b72(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx;
    __$ctx._nonceCsp = ctx__$3.nonce;
    var __$r__$5;
    var __$l0__$6 = $$mode;
    $$mode = "";
    var __$l1__$7 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$3.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, ctx__$3.uaCompatible === false ? "" : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: ctx__$3.uaCompatible || "IE=edge"
                }
            }, {
                tag: "title",
                content: ctx__$3.title
            }, {
                block: "ua",
                attrs: {
                    nonce: ctx__$3.nonce
                }
            }, ctx__$3.head, ctx__$3.styles, ctx__$3.favicon ? {
                elem: "favicon",
                url: ctx__$3.favicon
            } : "" ]
        }, ctx__$3 ]
    } ];
    var __$r__$9;
    var __$l2__$10 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$9 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$10;
    __$r__$5 = __$r__$9;
    $$mode = __$l0__$6;
    __$ctx.ctx = __$l1__$7;
    return;
}

function __$b73(__$ctx, __$ref) {
    var url__$51 = __$ctx.ctx.url;
    var __$r__$53;
    var __$l0__$54 = $$mode;
    $$mode = "";
    var __$l1__$55 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$51 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$57;
    var __$l2__$58 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$57 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$58;
    __$r__$53 = __$r__$57;
    $$mode = __$l0__$54;
    __$ctx.ctx = __$l1__$55;
    return;
}

function __$b74(__$ctx, __$ref) {
    var ie__$59 = __$ctx.ctx.ie, hideRule__$60 = !ie__$59 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$59 === "!IE" ? [ ie__$59, "<!-->", "<!--" ] : [ ie__$59, "", "" ];
    var __$r__$62;
    var __$l0__$63 = $$mode;
    $$mode = "";
    var __$l3__$64 = __$ctx.ctx;
    var __$l1__$65 = __$l3__$64._ieCommented;
    __$l3__$64._ieCommented = true;
    var __$l2__$66 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$60[0] + "]>" + hideRule__$60[1], __$ctx.ctx, hideRule__$60[2] + "<![endif]-->" ];
    __$r__$62 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$63;
    __$l3__$64._ieCommented = __$l1__$65;
    __$ctx.ctx = __$l2__$66;
    return;
}

function __$b75(__$ctx, __$ref) {
    var ctx__$42 = __$ctx.ctx;
    typeof ctx__$42.url === "object" && (ctx__$42.url = __$ctx.reapply(ctx__$42.url));
    var __$r__$44;
    var __$l0__$45 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$44 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$45;
    return;
}

function __$b76(__$ctx, __$ref) {
    var __$r__$20;
    var __$l0__$21 = __$ctx._input;
    __$ctx._input = __$ctx.ctx;
    var __$r__$23;
    var __$l1__$24 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$23 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$24;
    __$r__$20 = __$r__$23;
    __$ctx._input = __$l0__$21;
    return;
}

function __$b77(__$ctx, __$ref) {
    var BEM_INTERNAL__$67 = __$ctx.BEM.INTERNAL, ctx__$68 = __$ctx.ctx, isBEM__$69, tag__$70, res__$71;
    var __$r__$73;
    var __$l0__$74 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$75 = $$block;
    var __$r__$77;
    var __$l1__$78 = $$mode;
    $$mode = "tag";
    __$r__$77 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$78;
    tag__$70 = __$r__$77;
    typeof tag__$70 !== "undefined" || (tag__$70 = ctx__$68.tag);
    typeof tag__$70 !== "undefined" || (tag__$70 = "div");
    if (tag__$70) {
        var jsParams__$79, js__$80;
        if (vBlock__$75 && ctx__$68.js !== false) {
            var __$r__$81;
            var __$l2__$82 = $$mode;
            $$mode = "js";
            __$r__$81 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$82;
            js__$80 = __$r__$81;
            js__$80 = js__$80 ? __$ctx.extend(ctx__$68.js, js__$80 === true ? {} : js__$80) : ctx__$68.js === true ? {} : ctx__$68.js;
            js__$80 && ((jsParams__$79 = {})[BEM_INTERNAL__$67.buildClass(vBlock__$75, ctx__$68.elem)] = js__$80);
        }
        __$ctx._str += "<" + tag__$70;
        var __$r__$83;
        var __$l3__$84 = $$mode;
        $$mode = "bem";
        __$r__$83 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$84;
        isBEM__$69 = __$r__$83;
        typeof isBEM__$69 !== "undefined" || (isBEM__$69 = typeof ctx__$68.bem !== "undefined" ? ctx__$68.bem : ctx__$68.block || ctx__$68.elem);
        var __$r__$86;
        var __$l4__$87 = $$mode;
        $$mode = "cls";
        __$r__$86 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$87;
        var cls__$85 = __$r__$86;
        cls__$85 || (cls__$85 = ctx__$68.cls);
        var addJSInitClass__$88 = ctx__$68.block && jsParams__$79 && !ctx__$68.elem;
        if (isBEM__$69 || cls__$85) {
            __$ctx._str += ' class="';
            if (isBEM__$69) {
                __$ctx._str += BEM_INTERNAL__$67.buildClasses(vBlock__$75, ctx__$68.elem, ctx__$68.elemMods || ctx__$68.mods);
                var __$r__$90;
                var __$l5__$91 = $$mode;
                $$mode = "mix";
                __$r__$90 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$91;
                var mix__$89 = __$r__$90;
                ctx__$68.mix && (mix__$89 = mix__$89 ? [].concat(mix__$89, ctx__$68.mix) : ctx__$68.mix);
                if (mix__$89) {
                    var visited__$92 = {}, visitedKey__$93 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$92[visitedKey__$93(vBlock__$75, $$elem)] = true;
                    __$ctx.isArray(mix__$89) || (mix__$89 = [ mix__$89 ]);
                    for (var i__$94 = 0; i__$94 < mix__$89.length; i__$94++) {
                        var mixItem__$95 = mix__$89[i__$94], hasItem__$96 = mixItem__$95.block && (vBlock__$75 !== ctx__$68.block || mixItem__$95.block !== vBlock__$75) || mixItem__$95.elem, mixBlock__$97 = mixItem__$95.block || mixItem__$95._block || $$block, mixElem__$98 = mixItem__$95.elem || mixItem__$95._elem || $$elem;
                        hasItem__$96 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$67[hasItem__$96 ? "buildClasses" : "buildModsClasses"](mixBlock__$97, mixItem__$95.elem || mixItem__$95._elem || (mixItem__$95.block ? undefined : $$elem), mixItem__$95.elemMods || mixItem__$95.mods);
                        if (mixItem__$95.js) {
                            (jsParams__$79 || (jsParams__$79 = {}))[BEM_INTERNAL__$67.buildClass(mixBlock__$97, mixItem__$95.elem)] = mixItem__$95.js === true ? {} : mixItem__$95.js;
                            addJSInitClass__$88 || (addJSInitClass__$88 = mixBlock__$97 && !mixItem__$95.elem);
                        }
                        if (hasItem__$96 && !visited__$92[visitedKey__$93(mixBlock__$97, mixElem__$98)]) {
                            visited__$92[visitedKey__$93(mixBlock__$97, mixElem__$98)] = true;
                            var __$r__$100;
                            var __$l6__$101 = $$mode;
                            $$mode = "mix";
                            var __$l7__$102 = $$block;
                            $$block = mixBlock__$97;
                            var __$l8__$103 = $$elem;
                            $$elem = mixElem__$98;
                            __$r__$100 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$101;
                            $$block = __$l7__$102;
                            $$elem = __$l8__$103;
                            var nestedMix__$99 = __$r__$100;
                            if (nestedMix__$99) {
                                for (var j__$104 = 0; j__$104 < nestedMix__$99.length; j__$104++) {
                                    var nestedItem__$105 = nestedMix__$99[j__$104];
                                    if (!nestedItem__$105.block && !nestedItem__$105.elem || !visited__$92[visitedKey__$93(nestedItem__$105.block, nestedItem__$105.elem)]) {
                                        nestedItem__$105._block = mixBlock__$97;
                                        nestedItem__$105._elem = mixElem__$98;
                                        mix__$89.splice(i__$94 + 1, 0, nestedItem__$105);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$85 && (__$ctx._str += isBEM__$69 ? " " + cls__$85 : cls__$85);
            __$ctx._str += addJSInitClass__$88 ? ' i-bem"' : '"';
        }
        if (isBEM__$69 && jsParams__$79) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$79)) + '"';
        }
        var __$r__$107;
        var __$l9__$108 = $$mode;
        $$mode = "attrs";
        __$r__$107 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$108;
        var attrs__$106 = __$r__$107;
        attrs__$106 = __$ctx.extend(attrs__$106, ctx__$68.attrs);
        if (attrs__$106) {
            var name__$109, attr__$110;
            for (name__$109 in attrs__$106) {
                attr__$110 = attrs__$106[name__$109];
                if (typeof attr__$110 === "undefined") continue;
                __$ctx._str += " " + name__$109 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$110) ? attr__$110 : __$ctx.reapply(attr__$110)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$70)) {
        __$ctx._str += "/>";
    } else {
        tag__$70 && (__$ctx._str += ">");
        var __$r__$112;
        var __$l10__$113 = $$mode;
        $$mode = "content";
        __$r__$112 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$113;
        var content__$111 = __$r__$112;
        if (content__$111 || content__$111 === 0) {
            isBEM__$69 = vBlock__$75 || $$elem;
            var __$r__$114;
            var __$l11__$115 = $$mode;
            $$mode = "";
            var __$l12__$116 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$117 = __$ctx.position;
            __$ctx.position = isBEM__$69 ? 1 : __$ctx.position;
            var __$l14__$118 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$69 ? 1 : __$ctx._listLength;
            var __$l15__$119 = __$ctx.ctx;
            __$ctx.ctx = content__$111;
            __$r__$114 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$115;
            __$ctx._notNewList = __$l12__$116;
            __$ctx.position = __$l13__$117;
            __$ctx._listLength = __$l14__$118;
            __$ctx.ctx = __$l15__$119;
        }
        tag__$70 && (__$ctx._str += "</" + tag__$70 + ">");
    }
    res__$71 = __$ctx._str;
    __$r__$73 = undefined;
    __$ctx._str = __$l0__$74;
    __$ctx._buf.push(res__$71);
    return;
}

function __$b90(__$ctx, __$ref) {
    var __$r__$121;
    var __$l0__$122 = $$mode;
    $$mode = "";
    var __$l1__$123 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$125;
    var __$l2__$126 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$125 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$126;
    __$r__$121 = __$r__$125;
    $$mode = __$l0__$122;
    __$ctx.ctx = __$l1__$123;
    return;
}

function __$b91(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$127 = __$ctx.ctx;
    if (ctx__$127 && ctx__$127 !== true || ctx__$127 === 0) {
        __$ctx._str += ctx__$127 + "";
    }
    return;
}

function __$b92(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b93(__$ctx, __$ref) {
    var ctx__$128 = __$ctx.ctx, len__$129 = ctx__$128.length, i__$130 = 0, prevPos__$131 = __$ctx.position, prevNotNewList__$132 = __$ctx._notNewList;
    if (prevNotNewList__$132) {
        __$ctx._listLength += len__$129 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$129;
    }
    __$ctx._notNewList = true;
    while (i__$130 < len__$129) (function __$lb__$133() {
        var __$r__$134;
        var __$l0__$135 = __$ctx.ctx;
        __$ctx.ctx = ctx__$128[i__$130++];
        __$r__$134 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$135;
        return __$r__$134;
    })();
    prevNotNewList__$132 || (__$ctx.position = prevPos__$131);
    return;
}

function __$b94(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$136 = __$ctx.ctx.block, vElem__$137 = __$ctx.ctx.elem, block__$138 = __$ctx._currBlock || $$block;
    var __$r__$140;
    var __$l0__$141 = $$mode;
    $$mode = "default";
    var __$l1__$142 = $$block;
    $$block = vBlock__$136 || (vElem__$137 ? block__$138 : undefined);
    var __$l2__$143 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$136 || vElem__$137 ? undefined : block__$138;
    var __$l3__$144 = $$elem;
    $$elem = vElem__$137;
    var __$l4__$145 = $$mods;
    $$mods = vBlock__$136 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$146 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$140 = undefined;
    $$mode = __$l0__$141;
    $$block = __$l1__$142;
    __$ctx._currBlock = __$l2__$143;
    $$elem = __$l3__$144;
    $$mods = __$l4__$145;
    $$elemMods = __$l5__$146;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "form-request") {
        if (!$$elem) {
            return [ {
                block: "input",
                mix: {
                    block: "form-request",
                    elem: "input"
                },
                size: "s",
                type: "search",
                placeholder: "Ваше имя"
            }, {
                block: "input",
                mix: {
                    block: "form-request",
                    elem: "input"
                },
                size: "s",
                type: "search",
                placeholder: "Ваше телефон"
            }, {
                block: "input",
                mix: {
                    block: "form-request",
                    elem: "input"
                },
                size: "s",
                type: "search",
                placeholder: "Ваш E-mail"
            }, {
                block: "button",
                mods: {
                    submit: true,
                    upper: true
                },
                mix: {
                    block: "form-request",
                    elem: "button"
                },
                type: "submit",
                text: "Получите бизнес план"
            } ];
        }
    } else if (__$t === "page") {
        if (!$$elem && (__$ctx.__$a0 & 1) === 0) {
            return [ function __$lb__$0() {
                var __$r__$1;
                var __$l0__$2 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 1;
                __$r__$1 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$2;
                return __$r__$1;
            }(), __$ctx.ctx.scripts ];
        }
    } else if (__$t === "link") {
        if (!$$elem && $$mods && $$mods["contact"] === true) {
            return __$ctx.ctx.content;
        }
    } else if (__$t === "done-project") {
        if (!$$elem) {
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "income-calculator") {
        if (!$$elem) {
            return [ {
                elem: "title",
                content: "Узнайте, сколько Вы заработаете<br> на продаже окон"
            }, {
                elem: "label",
                content: "Количество проданных&nbsp;окон"
            }, {
                block: "input",
                mods: {
                    rounded: true,
                    size: "s"
                },
                mix: {
                    block: "income-calculator",
                    elem: "input"
                },
                val: 40
            }, {
                block: "button",
                mods: {
                    submit: true
                },
                mix: {
                    block: "income-calculator",
                    elem: "button"
                },
                text: "Узнать заработок"
            }, {
                elem: "label",
                content: "Заработок"
            }, {
                block: "input",
                mods: {
                    rounded: true,
                    size: "s"
                },
                mix: {
                    block: "income-calculator",
                    elem: "input"
                },
                val: 40
            } ];
        }
    } else if (__$t === "income-ladder") {
        if (!$$elem) {
            return [ {
                elem: "step",
                mods: {
                    lv: 1
                },
                content: [ "<b>2,15 млн</b> Выручка (в месяц)" ]
            }, {
                elem: "step",
                mods: {
                    lv: 2
                },
                content: [ "<b>1,85 млн</b> Затраты (ВСЕ)" ]
            }, {
                elem: "step",
                mods: {
                    lv: 3
                },
                content: [ "<b>14%</b> Рентабельность" ]
            }, {
                elem: "step",
                mods: {
                    lv: 4
                },
                content: [ "<b>300 000</b> Чистая прибыль" ]
            } ];
        }
    } else if (__$t === "merits") {
        if (!$$elem) {
            return [ {
                elem: "title",
                content: __$ctx.ctx.title
            }, {
                elem: "text",
                content: __$ctx.ctx.text
            } ];
        }
    } else if (__$t === "profit") {
        if ($$elem === "em") {
            return [ {
                elem: "item",
                content: __$ctx.ctx.content[0]
            }, {
                elem: "item",
                content: __$ctx.ctx.content[1]
            } ];
        }
    } else if (__$t === "client-card") {
        if (!$$elem) {
            var __$r = __$b10(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "gallery") {
        if (!$$elem) {
            var __$r = __$b11(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "partner") {
        if (!$$elem) {
            var __$r = __$b12(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "profit-grid") {
        var __$t = $$elem;
        if (__$t === "row") {
            var __$t = $$elemMods;
            if (__$t) {
                var __$t = $$elemMods["n"];
                if (__$t === 3) {
                    return [ {
                        elem: "cell"
                    }, {
                        elem: "cell",
                        elemMods: {
                            type: "partner"
                        },
                        content: "Постоянное сотрудничество с государственными органами"
                    }, {
                        elem: "cell",
                        elemMods: {
                            type: "quality"
                        },
                        content: "Высокое качество продукции, гарантированное лидерами рынка VEKA и REHAU"
                    }, {
                        elem: "cell",
                        elemMods: {
                            type: "hitech"
                        },
                        content: "Технологии автоматизированного управления бизнесом"
                    }, {
                        elem: "cell",
                        elemMods: {
                            last: true
                        }
                    } ];
                } else if (__$t === 2) {
                    return [ {
                        elem: "cell",
                        elemMods: {
                            type: "org"
                        },
                        content: "Опытная и амбициозная команда предпринимателей"
                    }, {
                        elem: "cell",
                        elemMods: {
                            type: "best"
                        },
                        content: "Первоклассный сервис"
                    }, {
                        elem: "cell",
                        elemMods: {
                            type: "exclusive"
                        },
                        content: "Эксклюзивные условия от производителей"
                    }, {
                        elem: "cell",
                        elemMods: {
                            type: "trend"
                        },
                        content: "Управление бизнесом по показателям"
                    }, {
                        elem: "cell",
                        elemMods: {
                            type: "aim",
                            last: true
                        },
                        content: "Адресная доставка товара"
                    } ];
                } else if (__$t === 1) {
                    return [ {
                        elem: "cell"
                    }, {
                        elem: "cell",
                        elemMods: {
                            type: "wallet"
                        },
                        content: "Рентабельность бизнеса 14%"
                    }, {
                        elem: "cell",
                        elemMods: {
                            type: "mess"
                        },
                        content: "Постоянное сопровождение по всем вопросам от Головного офиса"
                    }, {
                        elem: "cell",
                        elemMods: {
                            type: "money"
                        },
                        content: "Наценка на услуги 40%"
                    }, {
                        elem: "cell",
                        elemMods: {
                            last: true
                        }
                    } ];
                }
            }
        }
        if (!$$elem) {
            return [ {
                elem: "container",
                content: [ {
                    elem: "row",
                    elemMods: {
                        n: 1
                    }
                }, {
                    elem: "row",
                    elemMods: {
                        n: 2
                    }
                }, {
                    elem: "row",
                    elemMods: {
                        n: 3,
                        last: true
                    }
                } ]
            } ];
        }
    } else if (__$t === "input") {
        if (!$$elem) {
            return {
                elem: "box",
                content: {
                    elem: "control"
                }
            };
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b19(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "s-intro") {
        if (!$$elem) {
            return {
                elem: "container",
                content: __$ctx.ctx.content
            };
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "form-request") {
        if (!$$elem) {
            return "form";
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "favicon") {
            return "link";
        } else if (__$t === "link") {
            return "link";
        } else if (__$t === "meta") {
            return "meta";
        } else if (__$t === "head") {
            return "head";
        }
        if (!$$elem) {
            return "body";
        }
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        }
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["pseudo"];
                if (__$t === true) {
                    return "b";
                    if (!__$ctx.ctx.url) {
                        return "span";
                    }
                }
            }
            return "a";
        }
    } else if (__$t === "done-project") {
        if ($$elem === "title") {
            return "h1";
        }
        if (!$$elem) {
            return "article";
        }
    } else if (__$t === "income-calculator") {
        if ($$elem === "label") {
            return "label";
        }
        if (!$$elem) {
            return "form";
        }
    } else if (__$t === "merits") {
        var __$t = $$elem;
        if (__$t === "title") {
            return "span";
        } else if (__$t === "text") {
            return "span";
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "s-intro") {
        if (!$$elem) {
            return "section";
        }
    } else if (__$t === "image") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content === "undefined") {
                return "img";
            }
            return "span";
        }
    } else if (__$t === "header") {
        if (!$$elem) {
            return "header";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    }
    return undefined;
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "favicon") {
            return {
                rel: "shortcut icon",
                href: __$ctx.ctx.url
            };
        } else if (__$t === "js") {
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return {
                    rel: "stylesheet",
                    href: __$ctx.ctx.url
                };
            }
        }
    } else if (__$t === "link") {
        if (!$$elem) {
            var __$r = __$b56(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "partner") {
        if (!$$elem) {
            return {
                style: "background-image: url(" + __$ctx.ctx.image + ")"
            };
        }
    } else if (__$t === "input") {
        if ($$elem === "control") {
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b59(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "image") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content === "undefined" && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b61(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            return {
                role: "img"
            };
        }
    }
    return undefined;
    return __$ref;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);