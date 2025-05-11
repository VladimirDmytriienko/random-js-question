import { JSQuestionGenerator } from "@/components/js-question-generator"

export default function Home() {
  return (
    <div className="container py-10 px-4 text-center block mx-auto">
      <div className="hidden sm:block mb-10 space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">JavaScript Quiz Challenge</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Test your JavaScript knowledge with randomly generated questions. Click the button below to get started!
        </p>
      </div>

      <div className="flex justify-center">
        <JSQuestionGenerator />
      </div>
    </div>
  )
}