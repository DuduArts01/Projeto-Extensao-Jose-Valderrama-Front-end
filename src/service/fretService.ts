export interface FretData {
  traste: number;
  distancia_pestana: number;  // Alterado para bater com o Clojure
  tamanho_traste: number;     // Alterado para bater com o Clojure
  distancia_ponte: number;    // Alterado para bater com o Clojure
}

export async function searchForFretMap(scale: number, numberOfFrets: number): Promise<FretData[]> {
  try {
    const baseURL = import.meta.env.VITE_API_URL;
    const url = `${baseURL}/calcular?escala=${scale}&trastes=${numberOfFrets}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error: Cannot connect with API');
    }

    const data = await response.json();
    
    // Como seu Clojure envelopa o array dentro de :mapa_de_trastes, acessamos a chave correta:
    return data.mapa_de_trastes || [];
    
  } catch (error) {
    console.error("Error in service provision: ", error);
    return [];
  }
}