var i18next = require('i18next');

var count = 1; // 1

i18next.init({
    lng: 'en', // current locale, validated
    resources: {
        en: {
            translation: {
                "I have sg": "I haz {{sg}}",
                "flat": "wun flat",
                "flat_plural": "{{count}} flatz"
            }
        }
    }
}, function () {
    console.log(i18next.t('I have sg', {sg: '$t(flat)', count: count}));
});
