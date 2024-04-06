const quizzes = [
  {
    coding: [
      {
        html: [
          {
            id: 1,
            question: 'What does HTML stand for ?',
            options: ['HighText Machine Language', 'Hyperlinks Text Markup Language', 'HyperText Markup Language', 'None of these'],
            correct: 'HyperText Markup Language'
          },
          {
            id: 2,
            question: 'Which of the following tag is used to insert a line-break in HTML?',
            options: ['<a>', '<br>', '<p>', '<div>'],
            correct: '<br>'
          },
          {
            id: 3,
            question: 'How to insert an image in HTML ?',
            options: ['<img href = "jtp.png" />', '<img url = "jtp.png" />', '<img link = "jtp.png" />', '<img src = "jtp.png" />'],
            correct: '<img src = "jtp.png" />'
          },
          {
            id: 4,
            question: 'what type of <input> ?',
            options: ['format tag', 'empty tag', 'all of the above', 'none of the above'],
            correct: 'empty tag'
          },
          {
            id: 5,
            question: 'Which of the following attribute is used to provide a unique name to an element ?',
            options: ['class', 'unique', 'id', 'none of the above'],
            correct: 'id'
          },
          {
            id: 6,
            question: 'What is the font-size of the h1 heading tag?',
            options: ['3.5 em', '2.17 em', '2 em', '1.5 em'],
            correct: '2 em'
          },
          {
            id: 7,
            question: 'What is the purpose of using div tags in HTML?',
            options: ['For creating Different styles', 'For creating different sections', 'For adding titles', 'For adding headings'],
            correct: 'For creating different sections'
          },
          {
            id: 8,
            question: 'Which of the following attributes is used to open an hyperlink in new tab?',
            options: ['tab', 'href', 'target', 'ref'],
            correct: 'target'
          },
          {
            id: 9,
            question: 'Which tag is used for creating a drop-down selection list?',
            options: ['<select>', '<option>', '<dropdown>', '<list>'],
            correct: '<select>'
          },
          {
            id: 10,
            question: 'Which of the following elements can be used in HTML to create a table?',
            options: ['<table> , <tbody> , <trow>', '<table> , <tb> , <trow>', '<table> , <tbody> , <tr>', 'All of the above'],
            correct: '<table> , <tbody> , <tr>'
          },
          {
            id: 11,
            question: 'Who is the father of HTML?',
            options: ['Rasmus Lerdorf', 'Tim Berners-Lee', 'Brendan Eich', 'Sergey Brin'],
            correct: 'Tim Berners-Lee'
          },
        ],
        css: [
          {
            id: 1,
            question: 'What does CSS stand for ?',
            options: ['Colorful Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
            correct: 'Cascading Style Sheets'
          },
          {
            id: 2,
            question: 'The HTML attribute used to define the inline styles is -',
            options: ['<script>', '<link>', ' <style>', 'style'],
            correct: 'style'
          },
          {
            id: 3,
            question: 'The CSS property used to specify the transparency of an element is -',
            options: ['filter', 'visibility', 'opacity', 'overlay'],
            correct: 'opacity'
          },
          {
            id: 4,
            question: 'Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter ?',
            options: ['text-transform : capitalize;', 'text-transform : capital;', 'transform : capitalize;', 'text-style : capital;'],
            correct: 'text-transform : capitalize;'
          },
          {
            id: 5,
            question: 'Which of the following CSS property is used to specify whether the table cells share the common or separate border ?',
            options: ['border-radius', 'border-collapse', 'border-spacing', 'None of the above'],
            correct: 'border-collapse'
          },
          {
            id: 6,
            question: 'Which of the following is the correct syntax to select the p siblings of a div element?',
            options: ['p', 'div + p', 'div p', 'div ~ p'],
            correct: 'div ~ p'
          },
          {
            id: 7,
            question: 'Which of the following selector in CSS is used to select the elements that do not match the selectors?',
            options: [':! selector', ':not selector', ':empty selector', 'None of the above'],
            correct: ':not selector'
          },
          {
            id: 8,
            question: 'Which of the following is not a type of combinator?',
            options: ['>', '~', '+', '*'],
            correct: '*'
          },
          {
            id: 9,
            question: 'Which if the following CSS function allows us to perform calculations?',
            options: ['calc() function', 'calculator() function', 'calculate() function', 'cal() function'],
            correct: 'calc() function'
          },
          {
            id: 10,
            question: 'The CSS property used to specify whether the text is written in the horizontal or vertical direction?',
            options: ['writing-mode', 'text-indent', 'word-break', 'word-break'],
            correct: 'writing-mode'
          },
        ],
        js: [
          {
            id: 1,
            question: 'Which type of JavaScript language is ___',
            options: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level'],
            correct: 'Object-Based'
          },
          {
            id: 2,
            question: 'Which one of the following also known as Conditional Expression:',
            options: ['Alternative to if-else', 'Switch statement', 'If-then-else statement', 'immediate if'],
            correct: 'immediate if'
          },
          {
            id: 3,
            question: 'Which of the following variables takes precedence over the others if the names are the same?',
            options: ['Global variable', 'The local element', 'The two of the above', 'None of the above'],
            correct: 'The local element'
          },
          {
            id: 4,
            question: 'Which one of the following is the correct way for calling the JavaScript code?',
            options: ['Preprocessor', 'Triggering Event', 'RMI', 'Function/Method'],
            correct: 'Function/Method'
          },
          {
            id: 5,
            question: 'Which of the following number object function returns the value of the number?',
            options: ['toString()', 'valueOf()', 'toLocaleString()', 'toPrecision()'],
            correct: 'valueOf()'
          },
        ],
        java: [
          {
            id: 1,
            question: 'Which of the following is not a Java features?',
            options: ['Dynamic', 'Architecture Neutral', 'Use of pointers', 'Object-oriented'],
            correct: 'Use of pointers'
          },
          {
            id: 2,
            question: '_____ is used to find and fix bugs in the Java programs.',
            options: ['JVM', 'JRE', 'JDK', 'JDB'],
            correct: 'JDB'
          },
          {
            id: 3,
            question: 'What is the return type of the hashCode() method in the Object class?',
            options: ['Object', 'int', 'long', 'void'],
            correct: 'int'
          },
          {
            id: 4,
            question: 'Which of the following is a valid long literal?',
            options: ['ABH8097', 'L990023', '904423', '0xnf029L'],
            correct: '0xnf029L'
          },
          {
            id: 5,
            question: 'Which method of the Class.class is used to determine the name of a class represented by the class object as a String?',
            options: ['getClass()', 'valueOf()', 'getName()', 'toString()'],
            correct: 'getName()'
          },
        ],
        python: [
          {
            id: 1,
            question: 'What is the maximum possible length of an identifier?',
            options: ['16', '32', '64', 'None of these above'],
            correct: 'None of these above'
          },
          {
            id: 2,
            question: ' Who developed the Python language?',
            options: ['Zim Den', 'Guido van Rossum', 'Niene Stom', 'Wick van Rossum'],
            correct: 'Guido van Rossum'
          },
          {
            id: 3,
            question: 'In which language is Python written?',
            options: ['English', 'PHP', 'C', 'All of the above'],
            correct: 'C'
          },
          {
            id: 4,
            question: 'What do we use to define a block of code in Python language?',
            options: ['Indentation', 'Key', 'Brackets', 'None of these'],
            correct: 'Indentation'
          },
          {
            id: 5,
            question: 'What is the method inside the class in python language?',
            options: ['Object', 'Function', 'Argument', 'Attribute'],
            correct: 'Function'
          },
        ],
        c: [
          {
            id: 1,
            question: 'Who is the father of C language?',
            options: ['Steve Jobs', 'James Gosling', 'Dennis Ritchie', 'Rasmus Lerdorf'],
            correct: 'Dennis Ritchie'
          },
          {
            id: 2,
            question: 'Which keyword is used to prevent any changes in the variable within a C program?',
            options: ['immutable', 'mutable', 'const', 'volatile'],
            correct: 'const'
          },
          {
            id: 3,
            question: ' What is an example of iteration in C?',
            options: ['do-while', 'for', 'while', 'all of the mentioned'],
            correct: 'all of the mentioned'
          },
          {
            id: 4,
            question: 'What is #include <stdio.h>?',
            options: ['Preprocessor directive', 'Inclusion directive', 'File inclusion directive', 'None of the mentioned'],
            correct: 'Preprocessor directive'
          },
          {
            id: 5,
            question: 'Which of the following is not possible statically in C language?',
            options: ['Jagged Array', 'Rectangular Array', 'Cuboidal Array', 'Multidimensional Array'],
            correct: 'Jagged Array'
          },
        ],
      }
    ],
    general: [
      {
        kid: [
          {
            id: 1,
            question: 'What is the color of blood inside our body?',
            options: ['Yellow', 'White', 'Red', 'Green'],
            correct: 'Red'
          },
          {
            id: 2,
            question: 'Which is the fastest bird in the world?',
            options: ['Bald Eagle', 'Peregrine Falcon', 'Hummingbird', 'Raven'],
            correct: 'Peregrine Falcon'
          },
          {
            id: 3,
            question: 'What is the tallest waterfall in the world?',
            options: ['Angel Falls, Venezuela', 'Niagara Falls, New York', 'Wailua Falls, Hawaii', 'Sutherland Falls, New Zealand'],
            correct: 'Angel Falls, Venezuela'
          },
          {
            id: 4,
            question: 'Which of these foods will never spoil?',
            options: ['Honey', 'Beef Jerky', 'Cereal', 'Beans'],
            correct: 'Honey'
          },
          {
            id: 5,
            question: 'What is the capital city of Canada?',
            options: ['Vancouver ', 'Vancouver', 'Ottawa', 'Vancouver'],
            correct: 'Ottawa'
          },
        ],
        young: [
          {
            id: 1,
            question: 'What is the color of blood inside our body?',
            options: ['Yellow', 'White', 'Red', 'Green'],
            correct: 'Red'
          },
          {
            id: 2,
            question: 'Which is the fastest bird in the world?',
            options: ['Bald Eagle', 'Peregrine Falcon', 'Hummingbird', 'Raven'],
            correct: 'Peregrine Falcon'
          },
          {
            id: 3,
            question: 'What is the tallest waterfall in the world?',
            options: ['Angel Falls, Venezuela', 'Niagara Falls, New York', 'Wailua Falls, Hawaii', 'Sutherland Falls, New Zealand'],
            correct: 'Angel Falls, Venezuela'
          },
          {
            id: 4,
            question: 'Which of these foods will never spoil?',
            options: ['Honey', 'Beef Jerky', 'Cereal', 'Beans'],
            correct: 'Honey'
          },
          {
            id: 5,
            question: 'What is the capital city of Canada?',
            options: ['Vancouver ', 'Vancouver', 'Ottawa', 'New York'],
            correct: 'Ottawa'
          },
        ],
      }
    ],
  }
]

export default quizzes


// {
//   id: ,
//   question: '',
//   options: ['', '', '', ''],
//   correct: ''
// },


// general: [
  //   {
  //     kid: [
  //       {
  //         id: 1,
  //         question: 'What is the color of blood inside our body?',
  //         options: ['Yellow', 'White', 'Red', 'Green'],
  //         correct: 'Red'
  //       },
  //       {
  //         id: 2,
  //         question: 'Which is the fastest bird in the world?',
  //         options: ['Bald Eagle', 'Peregrine Falcon', 'Hummingbird', 'Raven'],
  //         correct: 'Peregrine Falcon'
  //       },
  //       {
  //         id: 3,
  //         question: 'What is the tallest waterfall in the world?',
  //         options: ['Angel Falls, Venezuela', 'Niagara Falls, New York', 'Wailua Falls, Hawaii', 'Sutherland Falls, New Zealand'],
  //         correct: 'Angel Falls, Venezuela'
  //       },
  //       {
  //         id: 4,
  //         question: 'Which of these foods will never spoil?',
  //         options: ['Honey', 'Beef Jerky', 'Cereal', 'Beans'],
  //         correct: 'Honey'
  //       },
  //       {
  //         id: 5,
  //         question: 'What is the capital city of Canada?',
  //         options: ['Vancouver ', 'Vancouver', 'Ottawa', 'Vancouver'],
  //         correct: 'Ottawa'
  //       },
  //     ],
  //   }
  //   ],