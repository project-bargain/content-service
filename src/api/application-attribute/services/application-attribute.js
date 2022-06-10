'use strict';

/**
 * application-attribute service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::application-attribute.application-attribute');
