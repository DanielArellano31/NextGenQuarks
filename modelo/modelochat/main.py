from modelo import calcular_eficiencia
from chatbot import obtener_especificaciones

def main():
    # Obtener especificaciones del usuario
    especificaciones = obtener_especificaciones()
    if not especificaciones:
        print("\nNo se pudieron procesar las especificaciones.")
        return

    # Calcular la eficiencia de los autobuses
    df = calcular_eficiencia()

    # Filtrar según especificaciones
    print("\nAutobuses disponibles con puntajes de eficiencia:")
    print(df[["BusID", "EfficiencyScore"]])

    # Mostrar el autobús con el mejor puntaje
    mejor_bus = df.iloc[0]
    print(f"\nEl autobús más eficiente para esta operación es: {mejor_bus['BusID']}")
    print(f"Puntaje de eficiencia: {mejor_bus['EfficiencyScore']:.2f}")

if __name__ == "__main__":
    main()
