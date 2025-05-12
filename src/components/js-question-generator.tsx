"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"
import { jsQuestions } from "@/data/js-questions"

export function JSQuestionGenerator() {
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const getSecureRandomIndex = (length: number) => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % length;
  };

  const generateQuestion = () => {
    let newIndex;
    do {
      newIndex = getSecureRandomIndex(jsQuestions.length);
    } while (newIndex === currentQuestion);

    setCurrentQuestion(newIndex);
    setShowAnswer(false);
  };


  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <Card className="w-full max-w-3xl">
      {currentQuestion === null ?
        <CardHeader>
          <CardTitle className="text-2xl">JavaScript Quiz</CardTitle>
          <CardDescription>Test your JavaScript knowledge with random questions</CardDescription>
        </CardHeader> : ''
      }
      <CardContent>
        {currentQuestion !== null ? (
          <div className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium">Question:</h3>
              <p className="mt-2">{jsQuestions[currentQuestion].question}</p>
            </div>

            {showAnswer && (
              <div className="rounded-lg bg-primary/10 p-4">
                <h3 className="font-medium">Answer:</h3>
                <p className="mt-2">{jsQuestions[currentQuestion].answer}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-32 items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
              <Lightbulb className="h-10 w-10" />
              <p>Click the button below to generate a random JavaScript question</p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={generateQuestion}>Generate Question</Button>
        {currentQuestion !== null && (
          <Button variant="outline" onClick={toggleAnswer}>
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
