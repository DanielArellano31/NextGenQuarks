# -*- coding: utf-8 -*-
"""
Created on Fri Mar 28 23:42:10 2025

@author: ant45
"""
import pandas as pd
import numpy as np

def calcular_eficiencia():
    # Simulación de datos
    data = {
        "BusID": [f"Bus{i}" for i in range(1, 11)],  # ID de autobuses
        "KilometersDriven": np.random.randint(50000, 200000, 10),  # Kilometraje
        "LastMaintenance": np.random.randint(30, 365, 10),  # Días desde el último mantenimiento
        "FuelEfficiency": np.random.uniform(2.5, 5.0, 10),  # Km por litro
        "ComponentHealth": np.random.randint(70, 100, 10),  # Salud del 70% al 100%
        "TerrainDifficulty": np.random.randint(1, 5, 10),  # Dificultad del terreno: 1 (fácil) a 5 (difícil)
    }

    df = pd.DataFrame(data)

    # Calcular el puntaje de eficiencia
    df["EfficiencyScore"] = (
        df["FuelEfficiency"] * 0.4 +
        df["ComponentHealth"] * 0.3 -
        df["KilometersDriven"] * 0.2 -
        df["TerrainDifficulty"] * 0.1
    )

    # Ordenar por puntaje de eficiencia
    df = df.sort_values(by="EfficiencyScore", ascending=False)
    return df


