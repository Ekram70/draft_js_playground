import { ColorPicker } from '@mantine/core';
import { useState } from 'react';
import { BxPalette } from '../icons/';

function CustomPickerMantine(props) {
  const [value, setValue] = useState('#ffffff');
  const [expanded, setExpanded] = useState(false);

  const onChange = (value) => {
    const { onChange } = props;
    setValue(value);
    onChange('color', value);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="rdw-colorpicker-wrapper">
      <div onClick={handleClick} className="rdw-option-wrapper">
        <img src={BxPalette} alt="" />
      </div>
      {expanded ? (
        <ColorPicker
          className="rdw-colorpicker-modal"
          value={value}
          onChange={onChange}
          format="hex"
          swatchesPerRow={7}
          swatches={[
            '#25262b',
            '#868e96',
            '#fa5252',
            '#e64980',
            '#be4bdb',
            '#7950f2',
            '#4c6ef5',
            '#228be6',
            '#15aabf',
            '#12b886',
            '#40c057',
            '#82c91e',
            '#fab005',
            '#fd7e14',
          ]}
        />
      ) : undefined}
    </div>
  );
}

export default CustomPickerMantine;
