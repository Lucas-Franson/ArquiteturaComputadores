import time 

def main():
    num = input("Insira o número fatorial: ")
    ini = time.time()
    fatorial = 1 
    for numero in range(int(num)):
        fatorial = fatorial * (numero+1)
    fim = time.time()
    print("----------------------")
    print(f"Resultado do fatorial de {num} é {fatorial}")
    print(f"Tempo de execução... {fim-ini} nanossegundos")

if __name__ == "__main__":
    main()