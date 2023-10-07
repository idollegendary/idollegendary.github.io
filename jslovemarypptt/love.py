import time

# Функція для відправки повідомлення
def send_message(number, text):
    print(f"{number}. {text}")

# Головна функція
def main():
    # Задаємо повідомлення
    message = "Маріна, я люблю тебе"
    
    # Відправка 100 повідомлень
    for i in range(1, 101):
        send_message(i, message)
        time.sleep(1)  # Затримка 1 секунда між повідомленнями

if __name__ == "__main__":
    main()
