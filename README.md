#### GitHub OAuth Client
Этот проект представляет собой клиентское приложение для авторизации через GitHub OAuth и работы с GitHub данными, написанное на React (TypeScript) с использованием современных инструментов и библиотек.

🚀 Технологии
- React (TypeScript)

- Redux + Redux Persist (хранение токена и состояния)

- Sass (стилизация)

- Express (микросервис для получения токена)

- Craco (поддержка алиасов @)

- React Router DOM (навигация)

- Axios (HTTP-запросы + кастомный instance)

- Concurrently (Для параллельной работы двух сервисов)

<br/>
<br/>

⚙️ Установка и запуск
<br/>
<br/>
Требования
<br/>
- Node.js 20.17
- npm 10.9.0

1. Клонирование репозитория
```
git clone git@github.com:xrisent/attractor_task.git
cd attractor_task
```
2. Установка зависимостей
```
npm install
```
3. Настройка GitHub OAuth
Перейдите в GitHub Developer Settings.
```
https://github.com/settings/developers
```

- Создайте New OAuth App:

- Application name: Любое название (например, My OAuth App)

- Homepage URL: http://localhost:3000

- Authorization callback URL: http://localhost:3000/login

- Скопируйте Client ID и сгенерируйте Client Secret.

4. Создание .env файла
В корне проекта создайте файл .env и заполните его:
```
REACT_APP_CLIENT_ID=ваш_client_id
REACT_APP_SECRET=ваш_client_secret
REACT_APP_CALLBACK=http://localhost:3000/login
REACT_APP_BACK_URL=http://localhost:5000
```
5. Запуск проекта
```
npm run start
```
Приложение будет доступно по адресу: http://localhost:3000

