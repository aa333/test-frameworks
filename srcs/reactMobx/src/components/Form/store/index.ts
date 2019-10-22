import { observable, action } from 'mobx';
import { getHoursMinutesSecondsFromString, delay } from '../../../../../shared/initialState';

export interface FormInterface {
  time: string;
  submitedTime: string;
  isValid: boolean;
  isRequest: boolean;
  setTime: (time: string) => void;
  setSubmitedTime: (time: string) => void;
  toggleIsRequest: () => void;
  setIsValid: (time: string) => void;
}

export class FormStore implements FormInterface {
  @observable
  time = ''

  @observable
  submitedTime = ''

  @observable
  isValid = true

  @observable
  isRequest = false

  @action
  setTime (time: string): void {
    this.time = time;
  }

  @action
  async setSubmitedTime (time: string): Promise<void> {
    this.setIsValid(time);
    if (this.isValid) {
      this.toggleIsRequest();
      await delay(2000);
      this.time = '';
      this.submitedTime = time;
      this.toggleIsRequest();
    }
  }

  @action
  toggleIsRequest (): void {
    this.isRequest = !this.isRequest;
  }

  @action
  setIsValid (time: string): void {
    this.isValid = !!getHoursMinutesSecondsFromString(time);
  }
}
