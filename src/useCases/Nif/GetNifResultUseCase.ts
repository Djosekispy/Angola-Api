import { Nif } from "src/entities/Nif";

import { consultarNif } from "src/services/implementations/Nif";

export async function getNifData(nif: string): Promise<Nif> {
    
  return await consultarNif(nif);
}
