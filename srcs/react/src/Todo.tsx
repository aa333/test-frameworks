import * as React from 'react'

interface IProps {
    checked: boolean,
    name: string,
    id: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TODO({ checked, name, onChange, id }: IProps) {
    return (
        <div className={"todo" + (checked ? "" : " disabled")} >
            <input type="checkbox" data-id={id} checked={checked} onChange={onChange}></input>
            <span>{name}</span>
        </div>
    )
}
