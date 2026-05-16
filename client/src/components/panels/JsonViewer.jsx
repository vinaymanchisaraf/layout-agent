import useLayoutStore from '../../store/useLayoutStore'

export default function JsonViewer() {
  const { layout } = useLayoutStore()

  return (
    <pre className="text-xs overflow-auto whitespace-pre-wrap">
      {JSON.stringify(layout, null, 2)}
    </pre>
  )
}