// Use consts to fail fast on any typos
const DEVICE_TYPE = 'Device Type';
const MODEL_NUMBER = 'Model Number';

const DEVICE_TYPE_DIMMER = 'Dimmer';
const DEVICE_TYPE_SENSOR = 'Sensor';

const DEVICES = {
  'RRD-6NA': {
    [DEVICE_TYPE]: DEVICE_TYPE_DIMMER,
  },
  'LRF2-OCR2B-P': {
    [DEVICE_TYPE]: DEVICE_TYPE_SENSOR,
  },
  'LRF2-VCR2B-P': {
    [DEVICE_TYPE]: DEVICE_TYPE_SENSOR,
  },
};

export const COLS = {
  [DEVICE_TYPE]: [],
  [MODEL_NUMBER]: [],
};

Object.entries(DEVICES).forEach(([deviceModelNum, deviceData]) => {
  Object.keys(COLS).forEach(colName => {
    if (colName === MODEL_NUMBER) {
      COLS[MODEL_NUMBER].push([deviceModelNum, deviceModelNum]);
    } else {
      COLS[colName].push([deviceModelNum, deviceData[colName]]);
    }
  });
});
