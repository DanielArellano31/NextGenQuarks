def obtener_especificaciones():
    print("\nBienvenido al chatbot de especificaciones para autobuses.")
    print("Por favor, responde las siguientes preguntas:")
    
    try:
        horas_operacion = int(input("\n¿Cuántas horas continuas operará el autobús? "))
        dificultad_terreno = int(input("¿Cuál es la dificultad del terreno? (1: fácil, 5: difícil) "))
        
        especificaciones = {
            "ExpectedHours": horas_operacion,
            "TerrainDifficulty": dificultad_terreno,
        }
        print("\nEspecificaciones capturadas exitosamente.")
        return especificaciones

    except ValueError:
        print("Por favor ingresa valores válidos.")
        return None
