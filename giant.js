require('giant-i18n');
§
'locale/lo-OL'.toDocument()
    .setPluralFormula('nplurals=2; plural=(n != 1);')
    .setTranslations({
        "I have sg": "I haz {{sg}}",
        "flat"     : ["wun flat", "{{count}} flatz"]
    });

'lo-OL'.toLocale().setAsCurrentLocale();

var count = 1; // 1

var template = "I have sg".toTranslatable()
    .toLiveTemplate()
    .setParameterValues({
        '{{sg}}': "flat".toTranslatable()
            .setMultiplicity(count),
        '{{count}}': count
    });

console.log(template + "");
