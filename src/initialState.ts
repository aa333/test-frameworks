import 'ts-polyfill'

export interface ITodoData {
    enabled: boolean,
    name: string
}

export interface IState {
    time: string,
    items: string[],
    selectedItem: string | null,
    error?: string,
    requestInFlight: boolean,
    todos: ITodoData[]
}

const TIME_FORMAT = /^(\d*)[:.]?(\d*)?[:.]?(\d*)?$/
export function getHoursMinutesSecondsFromString(val: string, maxHours: number = Infinity, zeroSeconds = false) {
    if (!val) return { h: 0, m: 0, s: 0 }
    const match = val.match(TIME_FORMAT)
    if (!match) return null
    let h = match[1] ? parseInt(match[1]) : 0
    let m = match[2] ? parseInt(match[2]) : 0
    let s = !zeroSeconds && match[3] ? parseInt(match[3]) : 0

    m += Math.trunc(s / 60)
    s = s % 60
    h += Math.trunc(m / 60)
    m = m % 60

    if (h >= maxHours)
        return { h: maxHours, m: 0, s: 0 }

    return { h, m, s }
}

const InitialState: IState = {
    time: '0',
    items: ["Develop", "QA", "Meetings", "Management", "Other", "Estimates", "Bugfix"],
    selectedItem: null,
    requestInFlight: false,
    todos: Array(100).fill(null).map((_, i) => ({ enabled: Math.random() > 0.5, name: `Item ${i}` }))
}

export function delay(time: number) {
    return new Promise((res) => setTimeout(res, time))
}

export default InitialState