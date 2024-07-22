'use strict';

/**
 * quotes controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::quotes.quotes');
