#ex1/3
idade = int(input("Digite sua idade: "))
if idade >= 18:
    print("Voto obrigatório!")
elif idade < 16:
    print("Você não pode votar!")
else:
    print("Voto opcional")

 #ex2/3   
senha = int(input("Crie uma senha de até 5 números: "))
senha_user = int(input("Confirme a senha: "))
if senha_user == senha:
    print('Senha configurada.')
else:
    print('Você digitou uma senha diferente da primeira.')

#ex3/3
notebook = 3820.0
salario = float(input("Digite quanto você ganha: "))
if salario >= notebook:
    print("A compra foi aprovada")
elif salario < 2500.0:
    print("Compra Recusada.")
else:
    print("Entre em contato com nossa equipe para verificar as formas de negociação")

#ex extra
idade1 = int(input("Digite sua idade: "))
if idade1 > 70 or idade1 >= 16 and idade1 < 18:
    print("Voto Facultativo.")
elif idade1 >= 18 and idade1 <= 70:
    print("Voto Obrigatório!")
else:
    print("Você não pode votar.") 