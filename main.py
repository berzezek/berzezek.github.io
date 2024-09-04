from seleniumwire import webdriver

# Настройка браузера
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=options)

# Переход на нужную страницу
driver.get('https://www.google.com/')

# Перехват запросов
# Перехват запросов
for request in driver.requests:
    if request.response:
        content_type = request.response.headers['Content-Type']

        # Проверяем, что ответ содержит JSON (или другой текстовый формат)
        if 'application/json' in content_type:
            try:
                # Сохраняем JSON как текст
                with open('response.json', 'w', encoding='utf-8') as f:
                    f.write(request.response.body.decode('utf-8'))
                print("JSON файл сохранен как 'response.json'")
            except UnicodeDecodeError as e:
                print(f"Ошибка декодирования JSON: {e}")
        
        # Если нужно сохранить другой тип файла, например, бинарный файл (например, изображение)
        else:
            file_extension = content_type.split('/')[-1]
            file_name = f'response.{file_extension}'

            # Сохраняем файл как бинарный
            with open(file_name, 'wb') as f:
                f.write(request.response.body)
            print(f"Файл сохранен как '{file_name}'")

# Закрываем браузер
driver.quit()