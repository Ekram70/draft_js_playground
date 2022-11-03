import { Select } from '@mantine/core';
import { useState } from 'react';

function FontFamilyMantine(props) {
  const [value, setValue] = useState('Times New Roman');

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
        { value: 'Arial', label: 'Arial' },
        { value: 'Georgia', label: 'Georgia' },
        { value: 'Impact', label: 'Impact' },
        { value: 'Tahoma', label: 'Tahoma' },
        { value: 'Times New Roman', label: 'Times New Roman' },
        { value: 'Verdana', label: 'Verdana' },
      ]}
    />
  );
}

export default FontFamilyMantine;
