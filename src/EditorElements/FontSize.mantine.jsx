import { Select } from '@mantine/core';
import { useState } from 'react';

function FontSizeMantine(props) {
  const [value, setValue] = useState('16');

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
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '12', label: '12' },
        { value: '14', label: '14' },
        { value: '16', label: '16' },
        { value: '18', label: '18' },
        { value: '24', label: '24' },
        { value: '30', label: '30' },
        { value: '36', label: '36' },
        { value: '48', label: '48' },
        { value: '60', label: '60' },
        { value: '72', label: '72' },
        { value: '96', label: '96' },
      ]}
    />
  );
}

export default FontSizeMantine;
