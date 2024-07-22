'use strict';

/**
 * quotes router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::quotes.quotes');
