let statusCode = function(code){
  switch(code){
    case 200:
      return 'OK — Запрос выполнен успешно';
      break;
    case 201:
      return 'Created — Ресурс был создан успешно';
      break;
    case 204:
      return 'No Content — Запрос выполнен успешно, но нет содержимого';
      break;
    case 400:
      return 'Bad Request — Неверный запрос';
      break;
    case 401:
      return 'Unauthorized — Неавторизованный доступ';
      break;
    case 403:
      return 'Forbidden — Доступ запрещен';
      break;
    case 404:
      return 'Not Found — Ресурс не найден';
      break;
    case 500:
      return 'Internal Server Error — Внутренняя ошибка сервера';
      break;
    case 502:
      return 'Bad Gateway — Неверный шлюз';
      break;
    case 503:
      return 'Service Unavailable';
      break;
    default:
      return 'Неизвестный статус-код';
      
   }
}
console.log(statusCode(200)); // Ожидаемый вывод: "OK: Запрос выполнен успешно"
console.log(statusCode(404)); // Ожидаемый вывод: "Not Found: Ресурс не найден"
console.log(statusCode(500)); // Ожидаемый вывод: "Internal Server Error: Внутренняя ошибка сервера"
console.log(statusCode(123)); // Ожидаемый вывод: "Unknown Status Code: Неизвестный статус-код"
