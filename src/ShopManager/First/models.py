from django.db import models


class Shop(models.Model):
    name = models.CharField(max_length=20, help_text="Shop's name")
    balance = models.IntegerField(help_text="Shop's balance")
    date_of_create = models.DateField(help_text='Date of creating')
    type_of_shop = models.CharField(max_length=10,)


    def __str__(self):
        return self.name


class Director(models.Model):
    name = models.CharField(max_length=10, help_text="Director's name")
    surname = models.CharField(max_length=10, help_text="Director's surname")
    age = models.IntegerField(help_text="Director's age")


class Personal(models.Model):
    name = models.CharField(max_length=10, help_text="Your's name")
    age = models.IntegerField(help_text="Your's age")
    experiance = models.IntegerField(help_text="Your's experiance")
    want_earn = models.IntegerField(help_text="How many do you want earn")
    type_of_work = models.CharField(max_length=10, help_text="What kind of job do you want do")
    # choice(name, experiance,
    #        want_earn, type_of_work)

# def choice(name, experiance,
#            want_earn, type_of_work):
#         if type_of_work == 'shop assistant':
#             if experiance >=5:
#                 if want_earn <= 2500:
#                      get_job = True
#                      salary = want_earn
#                      message =  print(f'Продавець - Вітаю ,{name},вас прийнято.Ваша заробітня плата {want_earn}')
#                 else:
#                  message = print(f"Продавець - Нас не влаштовує запропонована вам  заробітня плата!")
#             else:
#                 message = print(f'Продавець - Ваш досвіт роботи: {experiance} ,нам не підходить')
#         elif type_of_work == "loader":
#             if want_earn <= 1500:
#                     get_job = True
#                     salary = want_earn
#                     message =  print(f'Гружчик - Вітаю ,{name},вас прийнято.Ваша заробітня плата {want_earn}')
#             else:
#                 message= print(f"Гружчик - Нас не влаштовує запропонована вам  заробітня плата!")
#
#         elif type_of_work == "guardian":
#             if want_earn <= 2500:
#                 get_job = True
#                 salary = want_earn
#                 message = print(f'Охоронець - Вітаю ,{name},вас прийнято.Ваша заробітня плата {want_earn}')
#             else:
#                 massage = print(f"Охоронець - Нас не влаштовує запропонована вам  заробітня плата!")
#         elif type_of_work == "administrator":
#             if experiance >=10:
#                 if want_earn <= 3500:
#                    get_job = True
#                    salary = want_earn
#                    message = print(f'Адміністратор - Вітаю ,{name},вас прийнято.Ваша заробітня плата {want_earn}')
#                 else:
#                     message = print(f"Адміністратор - Нас не влаштовує запропонована вам  заробітня плата!")
#             else:
#                 message = print(f'Адміністратор - Ваш досвіт роботи: {experiance} ,нам не підходить')
#
#         else:
#             message = print("Дана ваканція на даний момент не потрібна")