import asyncio
from telegram import Bot

async def send_message(bot_token, chat_id, message):
    bot = Bot(token=bot_token)
    await bot.send_message(chat_id=chat_id, text=message)

async def main():
    # Зчитайте токен бота з оточення або введіть його прямо тут:
    bot_token = "6512384426:AAF1RfvTRtN1hvC9RaVljJwMfXsaVTFRecc"

    # Ваш ID чату (ваш Telegram user ID). Ви можете отримати його з бота @userinfobot у Телеграмі.
    chat_id = "750157735"

    # Відкрийте файл з повідомленнями та відправте кожен рядок як окреме повідомлення
    with open("messages.txt", "r") as file:
        messages = file.readlines()
    
    # Використайте асинхронний цикл для відправки кожного повідомлення
    for message in messages:
        message = message.strip()
        await send_message(bot_token, chat_id, message)

if __name__ == "__main__":
    asyncio.run(main())
