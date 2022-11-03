import { Select } from '@mantine/core';
import { useState } from 'react';
import '../App.css';

function BlockTypeMantine(props) {
  const [value, setValue] = useState('Normal');

  const onChange = (value) => {
    const { onChange } = props;
    setValue(value);
    onChange(value);
  };

  return (
    <Select
      className="m_dropdowns"
      value={value}
      onChange={onChange}
      size="xs"
      data={[
        { value: 'Normal', label: 'Normal' },
        { value: 'H1', label: 'H1' },
        { value: 'H2', label: 'H2' },
        { value: 'H3', label: 'H3' },
        { value: 'H4', label: 'H4' },
        { value: 'H5', label: 'H5' },
        { value: 'H6', label: 'H6' },
        { value: 'Blockquote', label: 'Blockquote' },
        { value: 'Code', label: 'Code' },
      ]}
    />
  );
}

export default BlockTypeMantine;
