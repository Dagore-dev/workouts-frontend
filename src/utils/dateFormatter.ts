import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import es from 'date-fns/locale/es'

export default function (timestamp: string): string {
  return formatDistanceToNow(new Date(timestamp), {
    addSuffix: true,
    locale: es
  })
}
