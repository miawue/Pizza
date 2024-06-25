import React from 'react';
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input, RangeSlider} from "@/components/ui";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";

interface Props {
    className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
          <Title text={'Фильтрация'} size={'sm'} className={'mb-5 font-bold'} />

          <div className={'flex flex-col gap-4'}>
						<FilterCheckbox text={'Можно собирать'} value={'1'} />
						<FilterCheckbox text={'Новинки'} value={'2'} />
          </div>

					<div className={'mt-5 border-y border-y-neutral-100 py-6 pb-7'}>
						<p className={'font-bold mb-3'}>Цена от и до:</p>
						<div className={'flex gap-3 mb-5'}>
							<Input type={"number"} placeholder={'0'} min={0} max={1500} defaultValue={0} />
							<Input type={'number'} placeholder={'1500'} min={100} max={1500} />
						</div>

						<RangeSlider min={0} max={1500} step={10} value={[0, 1500]} />
					</div>
					
					<CheckboxFiltersGroup
						title={'Ингридиенты'}
						className={'mt-5'}
						limit={6}
						defaultItems={[{text: 'Сырный соус', value: '1'}, {text: 'Моцарелла', value: '2'}, {text: 'Чеснок', value: '3'}, {text: 'Соленные огурчики', value: '4'}, {text: 'Писи', value: '5'}, {text: 'Попы', value: '6'}, {text: 'Какашки', value: '7'}, ]}
						items={[{text: 'Сырный соус', value: '1'}, {text: 'Моцарелла', value: '2'}, {text: 'Чеснок', value: '3'}, {text: 'Соленные огурчики', value: '4'}, {text: 'Писи', value: '5'}, {text: 'Попы', value: '6'}, {text: 'Какашки', value: '7'}, ]}
					/>
        </div>
    )
}