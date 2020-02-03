import {COLS} from '/js/device-data.js';
import {
  DIMMERS,
  KEYPADS,
} from '/js/device-data2.js';

export function SearchTable(props) {
  const cols = Object.entries(COLS).map(([colName, colVals]) => {
    const header = el(
      'div',
      {className: 'SearchTableColHeader', key:'header:'},
      colName,
    );

    return el('div', {className: 'SearchTableCol', key: colName}, [header].concat(
      colVals.map(([modelNum, v], idx) => {
        const className =
          idx % 2 === 0
          ? 'SearchTableColValueEven'
          : 'SearchTableColValueOdd';

        return el('div', {className, key: 'value:' + modelNum}, v)
      })
    ));
  });

  return el('div', {className: 'SearchTableContainer'}, cols);
};
