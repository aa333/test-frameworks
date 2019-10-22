import React, { useCallback } from 'react';

import './styles.scss';

export interface IProps {
  checked: boolean;
  label: string;
  index: number;
  onChange: (checked: boolean, index: number) => void;
}

const TodoList: React.FC<IProps> = ({ checked, label, onChange, index }) => {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.checked, index)
  },[])

  return (
    <label className={`todo-item ${ checked && 'selected' }`}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {label}
    </label>
  );
};

export default React.memo<IProps>(TodoList);
