(function () {
  /**
   * @param {...any} args - arguments to pass to window.tumblr.apiFetch()
   * @see {@link https://github.com/tumblr/docs/blob/master/web-platform.md#apifetch}
   * @returns {Promise} - resolves or rejects with result of window.tumblr.apiFetch()
   */
  const apiFetch = async function (...args) {
    const { inject } = await fakeImport('/src/util/inject.js');
    return inject(
      async (resource, init) => window.tumblr.apiFetch(resource, init),
      args,
    );
  };

  /**
   * @see {@link https://github.com/tumblr/docs/blob/master/web-platform.md#getcssmap}
   * @returns {Promise} - resolves with the result of window.tumblr.getCssMap()
   */
  const getCssMap = async function () {
    const { inject } = await fakeImport('/src/util/inject.js');
    return inject(async () => window.tumblr.getCssMap());
  };

  /**
   * @see {@link https://github.com/tumblr/docs/blob/master/web-platform.md#languagedata}
   * @returns {object} - the window.tumblr.languageData object
   */
  const getLanguageData = async function () {
    const { inject } = await fakeImport('/src/util/inject.js');
    return inject(async () => window.tumblr.languageData);
  };

  return { apiFetch, getCssMap, getLanguageData };
})();
