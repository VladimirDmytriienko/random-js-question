import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 space-y-4">
        <h1 className="text-3xl font-bold">JavaScript Learning Resources</h1>
        <p className="text-muted-foreground">Here are some helpful resources to further your JavaScript knowledge.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ResourceCard
          title="MDN Web Docs"
          description="Comprehensive documentation and guides for JavaScript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <ResourceCard
          title="JavaScript.info"
          description="Modern JavaScript tutorial with simple explanations"
          link="https://javascript.info/"
        />
        <ResourceCard
          title="Eloquent JavaScript"
          description="A book about JavaScript, programming, and the wonders of the digital"
          link="https://eloquentjavascript.net/"
        />
        <ResourceCard
          title="You Don't Know JS"
          description="Series of books diving deep into the core mechanisms of JavaScript"
          link="https://github.com/getify/You-Dont-Know-JS"
        />
        <ResourceCard
          title="JavaScript30"
          description="30 Day Vanilla JS Coding Challenge by Wes Bos"
          link="https://javascript30.com/"
        />
        <ResourceCard
          title="FreeCodeCamp"
          description="Free JavaScript curriculum with interactive challenges"
          link="https://www.freecodecamp.org/"
        />
      </div>
    </div>
  )
}

function ResourceCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          Visit Resource →
        </Link>
      </CardContent>
    </Card>
  )
}
