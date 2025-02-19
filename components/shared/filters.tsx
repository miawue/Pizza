'use client'

import React from 'react'
import { Title } from '@/components/shared/title'
import { FilterCheckbox } from '@/components/shared/filter-checkbox'
import { Input, RangeSlider } from '@/components/ui'
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients()

	const items = ingredients.map((ingredient) => ({
		text: ingredient.name,
		value: ingredient.id.toString(),
	}))

  return (
    <div className={className}>
      <Title text={'Фильтрация'} size={'sm'} className={'mb-5 font-bold'} />

      <div className={'flex flex-col gap-4'}>
        <FilterCheckbox name='can-collect' text={'Можно собирать'} value={'1'} />
        <FilterCheckbox name='new' text={'Новинки'} value={'2'} />
      </div>

      <div className={'mt-5 border-y border-y-neutral-100 py-6 pb-7'}>
        <p className={'font-bold mb-3'}>Цена от и до:</p>
        <div className={'flex gap-3 mb-5'}>
          <Input
            type={'number'}
            placeholder={'0'}
            min={0}
            max={1500}
            defaultValue={0}
          />
          <Input type={'number'} placeholder={'1500'} min={100} max={1500} />
        </div>

        <RangeSlider min={0} max={1500} step={10} value={[0, 1500]} />
      </div>

      <CheckboxFiltersGroup
        title={'Ингридиенты'}
        className={'mt-5'}
				name='ingredients'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				selectedIds={selectedIds}
      />
    </div>
  )
}
