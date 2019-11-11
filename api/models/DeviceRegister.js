/**
 * DeviceRegister.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'devices',
  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    reportToEmail: {
      type: 'string',
      required: true
    },
    reportToMobile: {
      type: 'string',
      required: false
    },
    deviceId: {
      type: 'string',
      required: true
    },
    deviceName: {
      type: 'string',
      required: false
    },
    deviceIMEI: {
      type: 'string',
      required: true
    },
    deviceOS: {
      type: 'string',
      required: false
    },
    deviceModel: {
      type: 'string',
      required: false
    },
    deviceProduct: {
      type: 'string',
      required: false
    },
    deviceIMSI: {
      type: 'string',
      required: false
    },
    deviceSDK: {
      type: 'string',
      required: false
    },
    deviceDisplay: {
      type: 'string',
      required: false
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

