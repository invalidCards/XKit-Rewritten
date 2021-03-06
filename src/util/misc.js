(function () {
  /**
   * @param {...object[]} arrays - one or more arrays
   * @returns {object[]} The Cartesian product of the arrays
   */
  const cartesian = (...arrays) => {
    let product = arrays.shift().map(x => [x]);

    for (const currentArray of arrays) {
      const newProduct = [];

      for (const currentValue of currentArray) {
        for (const x of product) {
          newProduct.push([...x, currentValue]);
        }
      }

      product = newProduct;
    }

    return product;
  };

  return { cartesian };
})();
