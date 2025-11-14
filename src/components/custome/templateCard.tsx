import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface TemplateCardProps {
  title: string
  description: string
  onUse: () => void
}

export function TemplateCard({ title, description, onUse }: TemplateCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="text-xl font-bold truncate">{title}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3 h-[60px]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
       
        <Button onClick={onUse} className="bg-primary hover:bg-primary/90">
          Use Template
        </Button>
      </CardFooter>
    </Card>
  )
}