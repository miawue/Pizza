'use client'

import { Api } from '@/services/api-client'

import { Ingredient } from '@prisma/client'

import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

type IngredientItem = Pick<Ingredient, 'id' | 'name'>

interface ReturnProps {
  ingredients: IngredientItem[]
  loading: boolean
  selectedIds: Set<string>
  onAddId: (id: string) => void
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<ReturnProps['ingredients']>([])
  const [loading, setLoading] = useState(false)

  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  useEffect(() => {
    async function getIngredients() {
      try {
        setLoading(true)

        const ingredients = await Api.ingredients.getAll()

        setIngredients(
          ingredients.map((ingredient) => ({
            id: ingredient.id,

            name: ingredient.name,
          }))
        )
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getIngredients()
  }, [])

  return { ingredients, loading, selectedIds, onAddId: toggle }
}
