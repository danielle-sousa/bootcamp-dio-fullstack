L = int(input("Digite o número de lesmas:"))
maior = 0
erro = False
if (1 <= L <= 100):
    for linha in range(L):
        Vi = int(input("Digite a velocidade da lesma:"))
        if (1 <= Vi <= 50):
            if (maior < Vi):
                maior = Vi
        else:
            erro = True
    if (not erro):
        if (maior < 10):
            print(1)
        elif (maior < 20):
            print(2)
        else:
            print(3)
else:
    print("Valor inválido na linha 1.")