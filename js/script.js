var myObj = {
    createMyElement: function() {

        var div = document.createElement('div');
        div.className = 'master';
        div.style.width = '500px';
        div.style.marginTop = '100px';
        div.style.marginLeft = 'auto';
        div.style.marginRight = 'auto';
        div.style.fontSize = '18px';
        var wrapper = document.querySelector('.wrapper');
        wrapper.appendChild(div);


        var h1 = document.createElement('h1');
        h1.innerHTML = 'Тест по программированию';
        h1.className = 'header';
        h1.style.fontSize = '20px';
        h1.style.marginBottom = '45px';
        h1.style.textAlign = 'center';
        h1.style.fontWeight = 'normal';
        document.querySelector('.div');
        div.appendChild(h1);

        var div = document.createElement('div');
        div.className = 'question';
        div.style.width = '160px';
        div.style.display = 'block';
        div.style.marginLeft = '1000px';
        document.querySelector('.wrapper');
        wrapper.appendChild(div);

        var h2 = document.createElement('h2');
        h2.innerHTML = '1. Вопрос №1';
        h2.style.fontWeight = 'normal';
        h2.style.fontSize = '20px';
        document.querySelector('.div');
        div.appendChild(h2);

        var input = document.createElement('input');
        input.className = 'checkbox';
        input.type = 'checkbox';
        input.style.marginRight = '7px';
        document.querySelector('.div');
        div.appendChild(input);

        var label = document.createElement('label');
        label.className = 'label';
        label.innerHTML = 'Вариант ответа №1';
        document.querySelector('.div');
        div.appendChild(label);

        var input = document.createElement('input');
        input.className = 'checkbox';
        input.type = 'checkbox';
        input.style.marginRight = '7px';
        document.querySelector('.div');
        div.appendChild(input);

        var label = document.createElement('label');
        label.className = 'label';
        label.innerHTML = 'Вариант ответа №2';
        document.querySelector('.div');
        div.appendChild(label);

        var input = document.createElement('input');
        input.className = 'checkbox';
        input.type = 'checkbox';
        input.style.marginRight = '7px';
        document.querySelector('.div');
        div.appendChild(input);

        var label = document.createElement('label');
        label.className = 'label';
        label.innerHTML = 'Вариант ответа №3';
        document.querySelector('.div');
        div.appendChild(label);

        var h2 = document.createElement('h2');
        h2.innerHTML = '2. Вопрос №2';
        h2.style.fontWeight = 'normal';
        h2.style.fontSize = '20px';
        document.querySelector('.div');
        div.appendChild(h2);

        var input = document.createElement('input');
        input.className = 'checkbox';
        input.type = 'checkbox';
        input.style.marginRight = '7px';
        document.querySelector('.div');
        div.appendChild(input);

        var label = document.createElement('label');
        label.className = 'label';
        label.innerHTML = 'Вариант ответа №1';
        document.querySelector('.div');
        div.appendChild(label);

        var input = document.createElement('input');
        input.className = 'checkbox';
        input.type = 'checkbox';
        input.style.marginRight = '7px';
        document.querySelector('.div');
        div.appendChild(input);

        var label = document.createElement('label');
        label.className = 'label';
        label.innerHTML = 'Вариант ответа №2';
        document.querySelector('.div');
        div.appendChild(label);

        var input = document.createElement('input');
        input.className = 'checkbox';
        input.type = 'checkbox';
        input.style.marginRight = '7px';
        document.querySelector('.div');
        div.appendChild(input);

        var label = document.createElement('label');
        label.className = 'label';
        label.innerHTML = 'Вариант ответа №3';
        document.querySelector('.div');
        div.appendChild(label);

        var h2 = document.createElement('h2');
        h2.innerHTML = '3. Вопрос №3';
        h2.style.fontWeight = 'normal';
        h2.style.fontSize = '20px';
        document.querySelector('.div');
        div.appendChild(h2);

        var input = document.createElement('input');
        input.className = 'checkbox';
        input.type = 'checkbox';
        input.style.marginRight = '7px';
        document.querySelector('.div');
        div.appendChild(input);

        var label = document.createElement('label');
        label.className = 'label';
        label.innerHTML = 'Вариант ответа №1';
        document.querySelector('.div');
        div.appendChild(label);

        var input = document.createElement('input');
        input.className = 'checkbox';
        input.type = 'checkbox';
        input.style.marginRight = '7px';
        document.querySelector('.div');
        div.appendChild(input);

        var label = document.createElement('label');
        label.className = 'label';
        label.innerHTML = 'Вариант ответа №2';
        document.querySelector('.div');
        div.appendChild(label);

        var input = document.createElement('input');
        input.className = 'checkbox';
        input.type = 'checkbox';
        input.style.marginRight = '7px';
        document.querySelector('.div');
        div.appendChild(input);

        var label = document.createElement('label');
        label.className = 'label';
        label.innerHTML = 'Вариант ответа №3';
        document.querySelector('.div');
        div.appendChild(label);

        var button = document.createElement('button');
        button.className = 'myButton';
        button.innerHTML = 'Проверить мои результаты';
        button.style.width = '325px';
        button.style.marginTop = '100px';
        button.style.marginLeft = '1144px';
        button.style.marginRight = 'auto';
        button.style.fontSize = '18px';
        button.style.paddingTop = '15px';
        button.style.paddingLeft = '30px';
        button.style.paddingRight = '30px';
        button.style.paddingBottom = '15px';
        button.style.backgroundColor = '#cfe2f3';
        button.style.border = '2px solid #000107';
        document.querySelector('.wrapper');
        wrapper.appendChild(button);


    }
};

myObj.createMyElement();
