import {Container, Filters, ProductCard, ProductsGroupList, Title, TopBar} from "@/components/shared";

const pizzaProducts = [
    {
        id: 1,
        name: 'Цыпленок барбекю',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6110059795842D40396BCF1E73.avif',
        price: 520,
        items: [{ price: 520 }],
        description: 'Цыпленок, моцарелла, сыры цеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок, говнок'
    },
    {
        id: 2,
        name: 'Бургер-пицца',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
        price: 489,
        items: [{ price: 489 }],
        description: 'Цыпленок, моцарелла, сыры цеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок, говнок'

    },
    {
        id: 3,
        name: 'Пепперони',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
        price: 489,
        items: [{ price: 489 }],
        description: 'Цыпленок, моцарелла, сыры цеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок, говнок'
    },
    {
        id: 4,
        name: 'Диабло 🌶️🌶️',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
        price: 609,
        items: [{ price: 609 }],
        description: 'Цыпленок, моцарелла, сыры цеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок, говнок'
    },
]

const breakfastProducts = [
    {
        id: 10,
        name: 'Кофе в зернах - фирменная смесь',
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970353D9A598FC83916C8EEC0B5.avif',
        price: 955,
        items: [{ price: 955 }]
    },
]

export default function Home() {
  return (
    <>
      <Container className={'mt-10'}>
        <Title text={'Все пиццы'} size={'lg'} className={'font-extrabold'} />
      </Container>

      <TopBar />

      <Container className={'mt-10 pb-14'}>
        <div className={'flex gap-[60px]'}>

          <div className={'w-[250px]'}>
            <Filters />
          </div>

          <div className={'flex-1'}>
            <div className={'flex flex-col gap-16'}>
                <ProductsGroupList title={'Пиццы'} products={pizzaProducts} categoryId={1} />
                <ProductsGroupList title={'Комбо'} products={breakfastProducts} categoryId={2} />
            </div>
          </div>

        </div>
      </Container>
    </>
  );
}
