import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../../store/hooks';
import './styles.scss';

const Form = observer(() => {
  const { form } = useStores()

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    form.setTime(event.target.value);
  }, [form])

  const handleClick = useCallback((): void => {
    form.setSubmitedTime(form.time);
  }, [form])

  return (
    <div className="form">
      <input
        value={form.time}
        onChange={handleChange}
        className={`input ${!form.isValid && 'input-error'}`}
        type="text"
      />

      {!form.isValid && <span className="error">Invalid time format</span>}

      <button
        className="button"
        onClick={handleClick}
        disabled={form.isRequest}
      >
        {form.isRequest ? 'Processing' : 'Submit'}
      </button>
    </div>
  );
});

export default Form;
