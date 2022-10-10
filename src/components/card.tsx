import Link from 'next/link'

export default function Card(props: { title: string, detail: string, link: string }) {
  return (
    <a href={ props.link } className="w-96 p-4 m-2 border-2 box-border">
      <h2 className="font-mono font-semibold text-lg text-green">{ props.title } &rarr;</h2>
      <div className="font-mono font-semibold text-sm">{ props.detail }</div>
    </a>
  )
}