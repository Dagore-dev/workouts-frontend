import './styles.css'

interface Props {
  id: string
  label: string
  value: string
  type: 'text' | 'number'
  setter: React.Dispatch<React.SetStateAction<string>>
  emptyFields: string[]
}

export default function WorkoutsFormField (props: Props): JSX.Element {
  const { id, label, value, type, setter, emptyFields } = props

  return (
    <>
      <label htmlFor={id}>{`${label}: `}</label>
      <input
        id={id}
        type={type}
        onChange={e => setter(e.target.value)}
        value={value}
        className={emptyFields.includes(id) ? 'error' : ''}
        min={0}
      />
    </>
  )
}
