const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());


const quizzes = [
    {
        "quizzes": [
          {
            "language": "english",
            "quizId": 1,
            "title": "Vocabulary Basics",
            "description": "Test your basic English vocabulary",
            "questions": [
              {
                "questionId": 1,
                "question": "What is the English word for 'perro'?",
                "options": ["Dog", "Cat", "Horse", "Bird"],
                "correctAnswer": "Dog"
              },
              {
                "questionId": 2,
                "question": "What is the English word for 'gato'?",
                "options": ["Dog", "Cat", "Horse", "Bird"],
                "correctAnswer": "Cat"
              }
            ]
          },
          {
                "language": "spanish",
                "quizId": 2,
                "title": "Vocabulario Básico",
                "description": "Prueba tu vocabulario básico en español",
                "questions": [
                  {
                    "questionId": 1,
                    "question": "¿Cómo se dice 'Dog' en español?",
                    "options": ["Perro", "Gato", "Caballo", "Pájaro"],
                    "correctAnswer": "Perro"
                  },
                  {
                    "questionId": 2,
                    "question": "¿Cómo se dice 'Cat' en español?",
                    "options": ["Perro", "Gato", "Caballo", "Pájaro"],
                    "correctAnswer": "Gato"
                  }
                ]
              },
              {
                "language": "french",
                "quizId": 3,
                "title": "Vocabulaire de Base",
                "description": "Testez votre vocabulaire de base en français",
                "questions": [
                  {
                    "questionId": 1,
                    "question": "Quel est le mot français pour 'Dog'?",
                    "options": ["Chien", "Chat", "Cheval", "Oiseau"],
                    "correctAnswer": "Chien"
                  },
                  {
                    "questionId": 2,
                    "question": "Quel est le mot français pour 'Cat'?",
                    "options": ["Chien", "Chat", "Cheval", "Oiseau"],
                    "correctAnswer": "Chat"
                  }
                ]
              }
        ]
      }
      
];


app.get('/', (req, res) => {
  res.json(quizzes);
});

app.get('/quizzes/:language', (req, res) => {
  const language = req.params.language;
  const quiz = quizzes.find(q => q.language === language);

  if (quiz) {
    res.json(quiz);
  } else {
    res.status(404).json({ message: `Quiz not found for language: ${language}` });
  }
});

app.listen(port, () => {
  console.log(`Quiz API running on http://localhost:${port}`);
});
