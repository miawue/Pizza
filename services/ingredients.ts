import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getAll = async (): Promise<Ingredient[]> => {
  try {
    const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)
    return data
  } catch (error) {
    console.error('Error fetching ingredients:', error)
    return []
  }
}
