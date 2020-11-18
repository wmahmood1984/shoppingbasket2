import { ProductItem } from '../global'

const INITIAL_STATE: ProductItem[] = [
  {
    id: '123',
    title: 'Blue t-shirt',
    description: 'No fancy sizing charts here, one t-shirt size to rule them all',
    imageUrl: 'https://www.escales-paris.com/media/catalog/product/cache/51088ad1ba675ab5d90fc9c63940817a/h/1/h191701-tshirt-bleu-homme-love-escales-2.jpg',
    price: 399
  },
  {
    id: '456',
    title: 'Yellow t-shirt',
    description:
      'This unique t-shirt is guaranteed to fit nobody, not even new born babies',
    imageUrl: 'https://cf.shopee.com.my/file/191c33d2d7c634dc3326d61a2ec1d3ef ',
    price: 499
  },
  {
    id: '789',
    title: 'Red t-shirt',
    description: 'The only product on our site that might actually be worth buying',
    imageUrl: 'https://explosiontshirt.com/wp-content/uploads/2018/10/men-red-tshirt-gildan-adult-front1.jpg',
    price: 799
  }
]

export { INITIAL_STATE }