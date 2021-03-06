'use strict';

exports.ExceptionResponse = require('./ExceptionResponse');
exports.ReadCoilsRequest = require('./ReadCoilsRequest');
exports.ReadCoilsResponse = require('./ReadCoilsResponse');
exports.ReadDiscreteInputsRequest = require('./ReadDiscreteInputsRequest');
exports.ReadDiscreteInputsResponse = require('./ReadDiscreteInputsResponse');
exports.ReadHoldingRegistersRequest = require('./ReadHoldingRegistersRequest');
exports.ReadHoldingRegistersResponse =
  require('./ReadHoldingRegistersResponse');
exports.ReadInputRegistersRequest = require('./ReadInputRegistersRequest');
exports.ReadInputRegistersResponse = require('./ReadInputRegistersResponse');
exports.WriteSingleCoilRequest = require('./WriteSingleCoilRequest');
exports.WriteSingleCoilResponse = require('./WriteSingleCoilResponse');
exports.WriteSingleRegisterRequest = require('./WriteSingleRegisterRequest');
exports.WriteSingleRegisterResponse = require('./WriteSingleRegisterResponse');
exports.WriteMultipleCoilsRequest = require('./WriteMultipleCoilsRequest');
exports.WriteMultipleCoilsResponse = require('./WriteMultipleCoilsResponse');
exports.WriteMultipleRegistersRequest =
  require('./WriteMultipleRegistersRequest');
exports.WriteMultipleRegistersResponse =
  require('./WriteMultipleRegistersResponse');
exports.ReadFileRecordRequest = require('./ReadFileRecordRequest');
exports.ReadFileRecordResponse = require('./ReadFileRecordResponse');
exports.WriteFileRecordRequest = require('./WriteFileRecordRequest');
exports.WriteFileRecordResponse = require('./WriteFileRecordResponse');

exports[0x01] = exports.ReadCoilsRequest;
exports[0x02] = exports.ReadDiscreteInputsRequest;
exports[0x03] = exports.ReadHoldingRegistersRequest;
exports[0x04] = exports.ReadInputRegistersRequest;
exports[0x05] = exports.WriteSingleCoilRequest;
exports[0x06] = exports.WriteSingleRegisterRequest;
exports[0x0F] = exports.WriteMultipleCoilsRequest;
exports[0x10] = exports.WriteMultipleRegistersRequest;
exports[0x14] = exports.ReadFileRecordRequest;
exports[0x15] = exports.WriteFileRecordRequest;
