var Jed = require('jed');

var i18n = new Jed({
    locale_data: {
        "messages": {
            ""         : {
                "domain"      : "messages",
                "lang"        : "lo",
                "plural_forms": "nplurals=2; plural=(n != 1);"
            },
            "I have %s": ["I haz %s"],
            "%d flat"  : ["wun flat", "%d flatz"]
        }
    },
    "domain"   : "messages"
});

var count = 1; // 1

console.log(
    i18n.translate("I have %s")
        .fetch(i18n.translate("%d flat")
            .ifPlural(count, "%d flats")
            .fetch(count)));
