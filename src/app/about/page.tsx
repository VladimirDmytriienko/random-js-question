export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold">About JS Quiz</h1>
        <p>
          JS Quiz is a platform designed to help developers test and improve their JavaScript knowledge through randomly
          generated questions covering various aspects of the language.
        </p>
        <p>
          Whether you're preparing for a technical interview, brushing up on your skills, or just curious about
          JavaScript's quirks and features, our quiz can help you learn something new.
        </p>
        <h2 className="text-2xl font-semibold pt-4">Our Mission</h2>
        <p>
          Our mission is to make learning JavaScript fun and accessible to everyone. We believe that regular practice
          and exposure to different concepts is key to mastering the language.
        </p>
        <h2 className="text-2xl font-semibold pt-4">How It Works</h2>
        <p>
          Simply visit the home page and click the "Generate Question" button to get a random JavaScript question. Think
          about your answer, then click "Show Answer" to see if you were right!
        </p>
      </div>
    </div>
  )
}
