// next-i18next.config.js
const { i18n } = require('./next.config');

module.exports = {
    i18n,
    defaultNS: 'common',
    react: {
        useSuspense: false,
    },
};
