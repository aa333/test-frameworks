import { time, submitedTime, isValid, isRequest } from './store';
import { getHoursMinutesSecondsFromString, delay } from '../../../../../shared/initialState';

export const setTime = (value: string): void => {
  time.set(value);
  setIsValid(value);
}

export const setSubmitedTime = (value: string): void => {
  submitedTime.set(value);
}

export const setIsValid = (timeString: string): void => {
  const isValidValue = !!getHoursMinutesSecondsFromString(timeString);
  isValid.set(isValidValue);
}

export const setIsRequest = (value: boolean): void => {
  isRequest.set(value);
}

export const submitTime = async(valid: boolean, value: string): Promise<void> => {
  console.log('valid', valid)
  if (valid) {
    setIsRequest(true);

    await delay(2000);

    setSubmitedTime(value);

    time.set('');

    setIsRequest(false);
  }
}
