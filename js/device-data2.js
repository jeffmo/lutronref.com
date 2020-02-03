const cCFL = 'CFL';
const cEND_OF_GANG = 'End Of Gang';
const cHALOGEN = 'HALOGEN';
const cHAS_NEUTRAL = 'Has Neutral';
const cINCAND = 'Incandescent';
const cLED = 'LED';
const cMAX_LOAD = 'Max Load';
const cMIDDLE_OF_GANG = 'Middle Of Gang';
const cMIN_LOAD = 'Min Load';
const cMLV = 'Magnetic Low Voltage (MLV)';
const cNOT_GANGED = 'Not Ganged';
const cNOT_SUPPORTED = 'Not Supported';
const cPOWER = 'Power';
const cSEE_SPEC_SHEET = 'See Spec Sheet';
const cDEPENDS_ON_LAMP = 'Depends On Lamp';

export const DIMMERS = [
    {
      'RRD-6CL': {
        [cHAS_NEUTRAL]: false,
        [cMAX_LOAD]: {
          [cCFL]: cSEE_SPEC_SHEET,
          [cHALOGEN]: cSEE_SPEC_SHEET,
          [cINCAND]: cSEE_SPEC_SHEET,
          [cLED]: cSEE_SPEC_SHEET,
          [cMLV]: {
            [cEND_OF_GANG]: '400 W/500 VA',
            [cMIDDLE_OF_GANG]: '300 W/400 VA',
            [cNOT_GANGED]: '450 W/600 VA',
          },
        },
        [cMIN_LOAD]: {
          [cCFL]: cSEE_SPEC_SHEET,
          [cHALOGEN]: cSEE_SPEC_SHEET,
          [cINCAND]: cSEE_SPEC_SHEET,
          [cLED]: cSEE_SPEC_SHEET,
          [cMLV]: '50 W/VA',
        },
        [cPOWER]: '120 V~ 50/60 Hz',
      },

      'RRD-6ND': {
        [cHAS_NEUTRAL]: true,
        [cMAX_LOAD]: {
          [cCFL]: cNOT_SUPPORTED,
          [cHALOGEN]: {
            [cNOT_GANGED]: '600 W ',
            [cEND_OF_GANG]: '500 W',
            [cMIDDLE_OF_GANG]: '400 W',
          },
          [cINCAND]: {
            [cNOT_GANGED]: '600 W ',
            [cEND_OF_GANG]: '500 W',
            [cMIDDLE_OF_GANG]: '400 W',
          },
          [cLED]: {
            [cNOT_GANGED]: '150 W',
            [cEND_OF_GANG]: '150 W',
            [cMIDDLE_OF_GANG]: '150 W',
          },
          [cMLV]: {
            [cEND_OF_GANG]: '400 W/500 VA',
            [cMIDDLE_OF_GANG]: '300 W/400 VA',
            [cNOT_GANGED]: '450 W/600 VA',
          },
        },
        [cMIN_LOAD]: {
          [cCFL]: cNOT_SUPPORTED,
          [cHALOGEN]: '10 W',
          [cINCAND]: '10 W',
          [cLED]: cDEPENDS_ON_LAMP,
          [cMLV]: '10 W/VA',
        },
        [cPOWER]: '120 V~ 50/60 Hz',
      },

      'RRD-10D': {
        [cHAS_NEUTRAL]: false,
        [cMAX_LOAD]: {
          [cCFL]: cNOT_SUPPORTED,
          [cHALOGEN]: {
            [cNOT_GANGED]: '1000 W ',
            [cEND_OF_GANG]: '800 W',
            [cMIDDLE_OF_GANG]: '650 W',
          },
          [cINCAND]: {
            [cNOT_GANGED]: '1000 W ',
            [cEND_OF_GANG]: '800 W',
            [cMIDDLE_OF_GANG]: '650 W',
          },
          [cLED]: cNOT_SUPPORTED,
          [cMLV]: {
            [cEND_OF_GANG]: '600 W/800 VA',
            [cMIDDLE_OF_GANG]: '500 W/650 VA',
            [cNOT_GANGED]: '800 W/1000 VA',
          },
        },
        [cMIN_LOAD]: {
          [cCFL]: cNOT_SUPPORTED,
          [cHALOGEN]: '50 W',
          [cINCAND]: '50 W',
          [cLED]: cNOT_SUPPORTED,
          [cMLV]: '50 W/VA',
        },
        [cPOWER]: '120 V~ 50/60 Hz',
      },

      'RRD-10ND': {
        [cHAS_NEUTRAL]: true,
        [cMAX_LOAD]: {
          [cCFL]: cNOT_SUPPORTED,
          [cHALOGEN]: {
            [cNOT_GANGED]: '1000 W',
            [cEND_OF_GANG]: '800 W',
            [cMIDDLE_OF_GANG]: '650 W',
          },
          [cINCAND]: {
            [cNOT_GANGED]: '1000 W',
            [cEND_OF_GANG]: '800 W',
            [cMIDDLE_OF_GANG]: '650 W',
          },
          [cLED]: {
            [cNOT_GANGED]: '150 W',
            [cEND_OF_GANG]: '150 W',
            [cMIDDLE_OF_GANG]: '150 W',
          },
          [cMLV]: {
            [cNOT_GANGED]: '800 W/1000 VA',
            [cEND_OF_GANG]: '600 W/800 VA',
            [cMIDDLE_OF_GANG]: '500 W/650 VA',
          },
        },
        [cMIN_LOAD]: {
          [cCFL]: cNOT_SUPPORTED,
          [cHALOGEN]: '10 W',
          [cINCAND]: '10 W',
          [cLED]: cDEPENDS_ON_LAMP,
          [cMLV]: '10 W/VA',
        },
        [cPOWER]: '120 V~ 50/60 Hz',
      },
    },
];

export const KEYPADS = [
];
