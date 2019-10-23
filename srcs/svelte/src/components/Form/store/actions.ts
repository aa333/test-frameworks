import { time, submitedTime, isValid, isRequest } from './store';
import { getHoursMinutesSecondsFromString, delay } from '../../../../../shared/initialState';

export const setTime = (value: string): void => {
  time.set(value);
}

export const setSubmitedTime = (value: string): void => {
  submitedTime.set(value);
}

export const setIsValid = (timeString: string): void => {
  const isValidValue = !!getHoursMinutesSecondsFromString(timeString);
  isValid.set(isValidValue);
}

export const toogleIsRequest = (): void => {
  isRequest.update(isRequestValue => !isRequestValue);
}

export const submitTime = async(value: string): Promise<void> => {
  setIsValid(value);

  let valid;
  isValid.subscribe(isValidValue => valid = isValidValue);

  if (valid) {
    toogleIsRequest();

    await delay(2000);

    setSubmitedTime(value);

    time.set('');

    toogleIsRequest();
  }
}
