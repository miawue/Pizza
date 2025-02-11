'use client'

import React, {useEffect, useRef} from 'react';
import {Title} from "@/components/shared/title";
import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/product-card";
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/store/category";

interface Props {
	title: string
	products: any[];
	className?: string
	listClassName?: string
	categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({ className, title, products, listClassName, categoryId}) => {
	const { setActiveId } = useCategoryStore()
	
	const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
      threshold: 0.4,
    });
    
    useEffect(() => {
      if (intersection?.isIntersecting) {
        setActiveId(categoryId)
      }
    }, [categoryId, intersection?.isIntersecting, setActiveId, title])


	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size={'lg'} className={'font-extrabold mb-5'} />

			<div className={cn('grid grid-cols-3 gap-[50px] grid-flow-row')}>
				{
					products.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.items[0].price}
							imageUrl={product.imageUrl}
							description={product.description}
						/>
					))
				}
			</div>
		</div>
	)
}