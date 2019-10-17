import { h, Component } from 'preact';

interface IProps {
    checked: boolean,
    name: string,
    id: number,
    onChange: (event: any) => void
}

export default class TODO extends Component<IProps> {
    render({ checked, id, onChange, name }: IProps) {
        return <div className={"todo" + (checked ? "" : " disabled")} >
            <input type="checkbox" data-id={id} checked={checked} onChange={onChange}></input>
            <span>{name}</span>
        </div>
    }
}
