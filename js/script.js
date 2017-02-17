var doc = document;

var container = document.createElement('div');
container.className = 'container';


var tests = {
    questions: ['Вопрос №1',
        'Вопрос №2',
        'Вопрос №3'
    ],

    answers: ['Вариант ответа №1',
        'Вариант ответа №2',
        'Вариант ответа №3'
    ],

    container: container,

    addHeader: function() {
        var header = document.createElement('h1');
        header.innerHTML = 'Тест по программированию';
        this.container.appendChild(header);

        return header;
    },

    addList: function() {
        var list = document.createElement('ol');
        for (var i = 0; i < this.questions.length; i++) {
            var listItem = document.createElement('li');
            list.appendChild(listItem);
            this.container.appendChild(list);

            var question = document.createElement('p');
            question.innerHTML = this.questions[i];
            listItem.appendChild(question);

            var answer = document.createElement('ul');
            for (var j = 0; j < this.answers.length; j++) {
                var answersItem = document.createElement('li');
                answer.appendChild(answersItem);
                listItem.appendChild(answer);
                answersItem.className = 'checkbox';

                var input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                answersItem.appendChild(input);

                var textAnswer = document.createElement('span');
                answersItem.appendChild(textAnswer);
                textAnswer.innerHTML = this.answers[j];
            }
        }
    },

    addButton: function() {
        var button = document.createElement('button');
        button.className = 'button';
        button.innerHTML = 'Проверить мои результаты';
        this.container.appendChild(button);

        return button;
    }
};

tests.addHeader();
tests.addList();
tests.addButton();
doc.body.appendChild(container);
