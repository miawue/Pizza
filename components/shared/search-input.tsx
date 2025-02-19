'use client'

import { Search } from 'lucide-react'
import { Input } from '../ui'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Api } from '@/services/api-client'
import { Product } from '@prisma/client'
import { useDebounce } from 'react-use'

interface Props {
  className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  useDebounce(
    async () => {
    try {
      Api.products.search(searchQuery).then(setProducts)
    } catch (error) {
      console.log(error)
    }
  }, 250, [searchQuery])

  const onClickProduct = (id: number) => {
    setSearchQuery('');
    setProducts([]);
  }

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}

      <div
        className={'flex rounded-2xl flex-1 justify-between relative h-11 z-30'}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <Input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30 ',
            focused && 'visible opacity-100 top-12'
          )}
        >
          {!!products.length && products.map((product) => (
            <Link
              onClick={() => onClickProduct(product.id)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-primary/10 cursor-pointer"
              href={`/product/${product.id}`}
              key={product.id}
            >
              <img
                className="rounded-sm h-8 w-8"
                src={product.imageUrl}
                alt={product.name}
              />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
