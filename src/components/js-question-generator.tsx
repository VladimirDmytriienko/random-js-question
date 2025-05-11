"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

// Sample JavaScript questions
const jsQuestions = [
  // Junior
  // Загальні:
  {
    "id": 1,
    "question": "Які методи HTTP-запитів ви знаєте?",
    "answer": "Основні методи HTTP-запитів: GET (отримання даних), POST (відправка даних), PUT (оновлення ресурсу), DELETE (видалення ресурсу), PATCH (часткове оновлення ресурсу), OPTIONS (отримання дозволених методів для ресурсу), HEAD (отримання заголовків без тіла відповіді)."
  },
  {
    "id": 2,
    "question": "Які версії HTTP-протоколу вам відомі?",
    "answer": "Відомі версії HTTP-протоколу: HTTP/1.0, HTTP/1.1, HTTP/2, HTTP/3. HTTP/1.1 — найпоширеніший, HTTP/2 покращує продуктивність за рахунок мультиплексування, а HTTP/3 використовує протокол QUIC замість TCP."
  },
  {
    "id": 3,
    "question": "Які знаєте коди відповіді (стану) HTTP?",
    "answer": "HTTP-коди стану поділяються на групи: 1xx (інформаційні), 2xx (успішні), 3xx (перенаправлення), 4xx (помилки клієнта), 5xx (помилки сервера). Наприклад, 200 OK, 301 Moved Permanently, 404 Not Found, 500 Internal Server Error."
  },
  {
    "id": 4,
    "question": "Що таке Cross-Origin Resource Sharing? Як усунути проблеми з CORS?",
    "answer": "CORS (Cross-Origin Resource Sharing) — це механізм безпеки, що дозволяє або забороняє веб-сайтам запитувати ресурси з іншого домену. Щоб усунути проблему CORS, сервер повинен додати відповідні заголовки (наприклад, Access-Control-Allow-Origin)."
  },
  {
    "id": 5,
    "question": "Що таке cookie?",
    "answer": "Cookie — це невеликий фрагмент даних, що зберігається у браузері та використовується для аутентифікації, збереження сесій, налаштувань користувача тощо."
  },
  {
    "id": 6,
    "question": "Який максимальний розмір cookie?",
    "answer": "Максимальний розмір одного cookie — 4KB, загальна кількість cookie на домен зазвичай обмежена 50-100."
  },
  {
    "id": 7,
    "question": "Що означає директива use strict?",
    "answer": "'use strict' — це директива, що включає строгий режим у JavaScript. Він допомагає уникати помилок, забороняючи використання небезпечних конструкцій (наприклад, використання змінних без оголошення)."
  },
  {
    "id": 8,
    "question": "Чим JS відрізняється під час роботи на front-end і back-end?",
    "answer": "У front-end JavaScript використовується для динамічної зміни контенту, взаємодії з DOM і обробки подій. У back-end (наприклад, на Node.js) він працює з серверами, базами даних і обробляє запити."
  },
  {
    "id": 9,
    "question": "Що таке статична і динамічна типізації?",
    "answer": "Статична типізація передбачає, що типи змінних визначаються на етапі компіляції (наприклад, у TypeScript, Java). Динамічна типізація (як у JavaScript) означає, що типи визначаються під час виконання коду."
  },
  {
    "id": 10,
    "question": "Як клієнт взаємодіє із сервером?",
    "answer": "Клієнт взаємодіє із сервером через HTTP-запити (REST API, GraphQL), WebSockets, AJAX, Fetch API. Запит містить метод, URL, заголовки, а сервер обробляє запит і відправляє відповідь."
  },
  {
    "id": 11,
    "question": "Що таке REST?",
    "answer": "REST (Representational State Transfer) — це стиль архітектури веб-сервісів, що базується на використанні HTTP-запитів для отримання та модифікації даних. Основні принципи REST: клієнт-серверна архітектура, відсутність стану, кешування, єдиний інтерфейс та багаторівнева система."
  },
  {
    "id": 12,
    "question": "Поясніть поняття мутабельність / іммутабельність? Які типи є мутабельними й навпаки?",
    "answer": "Мутабельність — це здатність змінювати стан об'єкта після його створення. У JavaScript примітивні типи (Number, String, Boolean, null, undefined, Symbol, BigInt) є іммутабельними, тобто їх значення не можна змінювати. Об'єкти (Object, Array, Function, Map, Set) є мутабельними, їхні властивості можуть змінюватися."
  },
  {
    "id": 13,
    "question": "Як шукати помилки в коді? Чи використовуєте дебагер?",
    "answer": "Для пошуку помилок у коді можна використовувати: console.log() для виведення значень змінних, інструменти розробника у браузерах (DevTools), дебагер (debugger), unit-тестування (Jest, Mocha), статичний аналіз коду (ESLint, TypeScript). Так, дебагер дозволяє покроково виконувати код і аналізувати значення змінних."
  },
  {
    "id": 14,
    "question": "Яких відомих людей зі світу JS знаєте?",
    "answer": "Деякі відомі люди зі світу JavaScript: Brendan Eich (створив JavaScript), Douglas Crockford (автор JSON та книги 'JavaScript: The Good Parts'), Dan Abramov (React, Redux), Ryan Dahl (Node.js), Kyle Simpson (автор серії книг 'You Don't Know JS')."
  },
  //JS Core
  {
    "id": 15,
    "question": "Які існують типи даних у JS?",
    "answer": "Примітивні типи: string, number, boolean, null, undefined, symbol, bigint. Об'єктні типи: Object, Array, Function, Date, RegExp тощо."
  },
  {
    "id": 16,
    "question": "Як перевірити, чи об’єкт є масивом?",
    "answer": "За допомогою Array.isArray(obj)."
  },
  {
    "id": 17,
    "question": "Як перевірити, чи число є скінченним?",
    "answer": "За допомогою функції isFinite(number)."
  },
  {
    "id": 18,
    "question": "Як перевірити, що змінна рівна NaN?",
    "answer": "За допомогою функції Number.isNaN(value)."
  },
  {
    "id": 19,
    "question": "Чим відрізняється поведінка isNaN() та Number.isNaN()?",
    "answer": "isNaN() намагається перетворити аргумент на число перед перевіркою, а Number.isNaN() перевіряє значення напряму."
  },
  {
    "id": 20,
    "question": "Порівняйте ключові слова var, let, const.",
    "answer": "var - функціональна область видимості, піднімається (hoisting); let - блочна область видимості, не можна повторно оголошувати; const - аналогічний let, але значення не можна змінювати."
  },
  {
    "id": 21,
    "question": "Що таке область видимості?",
    "answer": "Область видимості (scope) визначає, де змінна доступна в коді. Буває глобальна, функціональна та блочна."
  },
  {
    "id": 22,
    "question": "Що таке деструктуризація?",
    "answer": "Це синтаксис, що дозволяє витягати значення з масивів або об'єктів у окремі змінні."
  },
  {
    "id": 23,
    "question": "Для чого призначені методи setTimeout і setInterval?",
    "answer": "setTimeout виконує код через заданий час один раз, а setInterval повторює код через вказані інтервали часу."
  },
  {
    "id": 24,
    "question": "Порівняйте підходи роботи з асинхронним кодом: сallbacks vs promises vs async/await.",
    "answer": "Callbacks можуть викликати \"callback hell\". Promises надають зручний синтаксис, але можуть бути вкладеними. async/await робить код читабельнішим, працюючи поверх Promises."
  },
  {
    "id": 25,
    "question": "Чи можна записувати нові властивості / функції в прототипи стандартних класів (Array, Object тощо)? Чому ні?",
    "answer": "Можна, але не рекомендується, оскільки це може призвести до конфліктів з вбудованими методами або майбутніми змінами в стандарті JS."
  },
  {
    "id": 26,
    "question": "Назвіть методи масивів, які пам’ятаєте, і скажіть, для чого вони потрібні.",
    "answer": "Методи масивів у JavaScript: push(), pop(), shift(), unshift(), slice(), splice(), forEach(), map(), filter(), reduce(), some(), every(), find(), findIndex(), includes(), indexOf(), sort(), reverse(). Вони використовуються для маніпуляцій з елементами масиву, пошуку, фільтрації, сортування тощо."
  },
  {
    "id": 27,
    "question": "Які перебираючі методи масиву знаєте? У чому їхня відмінність?",
    "answer": "Основні перебираючі методи масивів: forEach() - виконує функцію для кожного елемента без повернення значення; map() - створює новий масив із результатами виклику функції для кожного елемента; filter() - створює новий масив, включаючи лише елементи, що задовольняють умову; reduce() - агрегує значення масиву в одне; some() - перевіряє, чи хоча б один елемент відповідає умові; every() - перевіряє, чи всі елементи відповідають умові."
  },
  {
    "id": 28,
    "question": "Як працюють оператори присвоєння / порівняння / рядкові / арифметичні / бітові тощо?",
    "answer": "Оператори присвоєння (=, +=, -=, *=, /=) змінюють значення змінних. Оператори порівняння (==, ===, !=, !==, >, <, >=, <=) використовуються для перевірки рівності чи порядку. Рядкові оператори (+) об'єднують строки. Арифметичні (+, -, *, /, %, **) виконують математичні операції. Бітові (&, |, ^, ~, <<, >>, >>>) працюють з бітами чисел."
  },
  {
    "id": 29,
    "question": "Опишіть призначення і принципи роботи з колекціями Map і Set.",
    "answer": "Map - структура даних для збереження пар ключ-значення, причому ключ може бути будь-якого типу. Set - структура для збереження унікальних значень. Map дозволяє швидкий доступ до значень за ключами, а Set зручно використовувати для видалення дублікатів."
  },
  {
    "id": 30,
    "question": "Що означає глибока (deep) та поверхнева (shallow) копія об’єкта? Як зробити кожну з них?",
    "answer": "Поверхнева копія (shallow copy) копіює лише верхній рівень об'єкта, залишаючи вкладені об'єкти за посиланням (Object.assign(), spread-оператор ...). Глибока копія (deep copy) створює повну копію всіх рівнів вкладеності (JSON.parse(JSON.stringify(obj)), structuredClone(), бібліотеки lodash)."
  },
  // Функції:
  {
    "id": 31,
    "question": "Яка різниця між декларацією функції (function declaration) та функціональним виразом (function expression)?",
    "answer": "Function declaration оголошується окремим рядком і доступна у всій області видимості. Function expression створює функцію всередині виразу і може бути використана тільки після оголошення."
  },
  {
    "id": 32,
    "question": "Що таке анонімна функція?",
    "answer": "Анонімна функція – це функція без імені. Зазвичай використовується в колбеках або функціональних виразах."
  },
  {
    "id": 33,
    "question": "Розкажіть про стрілкові функції (arrow function). В чому полягають відмінності стрілкових функцій від звичайних?",
    "answer": "Arrow function має коротший синтаксис, не має власного this, arguments, super та new.target, тому не змінює контекст виконання."
  },
  {
    "id": 34,
    "question": "Що таке і для чого використовують IIFE (Immediately Invoked Function Expression)?",
    "answer": "IIFE – це самовиконувана функція, що виконується одразу після оголошення. Використовується для ізоляції змінних та уникнення конфліктів."
  },
  {
    "id": 35,
    "question": "Що таке hoisting, як він працює для змінних і функцій?",
    "answer": "Hoisting – це механізм, за якого оголошення змінних та функцій \"піднімаються\" на початок області видимості. Function declarations піднімаються повністю, а var змінні – без значення."
  },
  {
    "id": 36,
    "question": "Що таке замикання (closure) і які сценарії його використання?",
    "answer": "Замикання – це функція, яка \"запам'ятовує\" область видимості, в якій вона була створена. Використовується для створення приватних змінних та функціонального програмування."
  },
  {
    "id": 37,
    "question": "Як ви розумієте замикання? Що буде виведено в консолі в цьому випадку?",
    "answer": "Виведе 2, тому що setTimeout виконується асинхронно, і до моменту його виклику змінна f вже містить нову функцію."
  },
  {
    "id": 38,
    "question": "Що таке рекурсія?",
    "answer": "Рекурсія – це виклик функції самою собою. Використовується для обходу структур даних або вирішення задач, що розбиваються на підзадачі."
  },
  {
    "id": 39,
    "question": "Що означає ключове слово this?",
    "answer": "this – це посилання на контекст виклику функції. Його значення залежить від способу виклику функції."
  },
  {
    "id": 40,
    "question": "Що таке втрата контексту, коли відбувається і як їй запобігти?",
    "answer": "Втрата контексту відбувається, коли функція передається як колбек або присвоюється змінній. Запобігти можна за допомогою bind, arrow functions або збереження this у змінній."
  },
  {
    "id": 41,
    "question": "Методи функцій bind / call / apply — навіщо і в чому різниця?",
    "answer": "bind створює нову функцію з прив'язаним контекстом. call та apply викликають функцію негайно, різниця між ними – apply приймає аргументи у вигляді масиву."
  }
]

export function JSQuestionGenerator() {
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * jsQuestions.length)
    setCurrentQuestion(randomIndex)
    setShowAnswer(false)
  }

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-2xl">JavaScript Quiz</CardTitle>
        <CardDescription>Test your JavaScript knowledge with random questions</CardDescription>
      </CardHeader>
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
