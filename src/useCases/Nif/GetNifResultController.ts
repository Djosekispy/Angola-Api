import { Request, Response } from "express";
import { IGetNifResultUseCase } from "./IGetNifResultUseCase";
import { getNifData } from "./GetNifResultUseCase";

export class GetNifResultController {
  constructor() {}

  async execute(request: Request, response: Response): Promise<Response> {
    const { nif } = request.params;

    const nifDataResult = await getNifData(nif);

    if (!nifDataResult) {
      return response.status(404).json({ Message: "Nif não encotrado" });
    }

    return response.status(200).json(nifDataResult);
  }
}
