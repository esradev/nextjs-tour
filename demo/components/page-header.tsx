interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">{title}</h1>
      <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{description}</p>
    </div>
  )
}
