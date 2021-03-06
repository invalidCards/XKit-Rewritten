(function () {
  let languageData;

  /**
   * @param {string} rootString - The English string to translate
   * @returns {string} - The translated string in the current Tumblr locale
   */
  const translate = async function (rootString) {
    if (!languageData) {
      const { getLanguageData } = await fakeImport('/src/util/tumblr_helpers.js');
      languageData = await getLanguageData();
    }

    return languageData.translations[rootString] || rootString;
  };

  return { translate };
})();
