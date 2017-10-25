import uuid from 'uuid'

const coffees = [
  {
    guid: uuid.v4(),
    name: 'Frappé Latte',
    description: '',
    img: 'https://78.media.tumblr.com/a264ccab4c116d2d6a697387c5d42af7/tumblr_ojbcafeHX61uzpzg5o1_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Original',
    description: 'The unmistakable taste and aroma that we all know and love is still as good as ever.',
    img: 'https://78.media.tumblr.com/f64dce76d94e02419fdce4cc81eec7c2/tumblr_nqpzvs4uJX1uzpzg5o1_r2_400.png'
  },
  {
    guid: uuid.v4(),
    name: '3in1 Coffee Mixes',
    description: 'Our NESCAFÉ 3in1 Coffee Mixes let you enjoy the same authentic taste and aroma…',
    img: 'https://78.media.tumblr.com/5243a19ce3efa7b87da35036720afcec/tumblr_nqpzvtziK61uzpzg5o1_r3_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Original Decaf',
    description: 'Enjoy the taste of NESCAFÉ without the caffeine.',
    img: 'https://78.media.tumblr.com/425739f17566cd5c57b9228451bcae64/tumblr_nqpzvtTmzN1uzpzg5o1_r2_400.png'
  },
  {
    guid: uuid.v4(),
    name: '2in1 Coffee Mixes',
    description: 'Our NESCAFÉ 2in1 Coffee Mixes let you enjoy the authentic taste of NESCAFÉ in a smooth and creamy white coffee.',
    img: 'https://78.media.tumblr.com/5ae9577753661819bf46dbebc09d56cf/tumblr_nqpzvuA5TQ1uzpzg5o1_r2_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Gold Blend Decaf',
    description: 'All the qualities of the coffee you love, without the caffeine.',
    img: 'https://78.media.tumblr.com/1c503c1b74522ad05310d23053734d47/tumblr_nqpzvwOhX01uzpzg5o1_r1_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Gold Blend Barista Style',
    description: 'Now you can enjoy a coffee-shop cup of coffee in the cosiness of your own home.',
    img: 'https://78.media.tumblr.com/5da7d557bc92e89ef88f93b8fb2cc9fb/tumblr_nqpzvv9ugW1uzpzg5o1_r1_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Gold Blend',
    description: 'We blend Arabica and a handful of Robusta beans together for a rich, yet smooth and rounded taste.',
    img: 'https://78.media.tumblr.com/7bc492ad6b2aac5715ae0616415fe51a/tumblr_nqpzvuyZMR1uzpzg5o1_r2_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Gold Blend Crema',
    description: 'NESCAFÉ Gold Blend Crema is carefully crafted to create a more refined and silkier taste',
    img: 'https://78.media.tumblr.com/73621e06e53d129a28a89b544f206cf6/tumblr_nqpzvwoImI1uzpzg5o1_r3_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Espresso',
    description: 'Our NESCAFÉ Espresso is made from 100% Arabica beans grown in the finest coffee regions.',
    img: 'https://78.media.tumblr.com/1e32defdede43a91ec157c8527b134e1/tumblr_nqpzvyewYb1uzpzg5o1_r3_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Cap Colombie',
    description: 'We lightly roast 100% Arabica beans from the finest coffee regions in South America…',
    img: 'https://78.media.tumblr.com/910a54195bc2cb9078802636e1adaf8c/tumblr_nqpzvxHuB81uzpzg5o1_r2_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Alta Rica',
    description: 'Meet the darkest roast of NESCAFÉ – Alta Rica…',
    img: 'https://78.media.tumblr.com/3233589ccdf63d8b5d9e5a7b80cbfe83/tumblr_nqpzvxT0sK1uzpzg5o1_r2_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Azera',
    description: 'Enjoy the pleasure of a barista style coffee easily with our NESCAFÉ Azera range. ',
    img: 'https://78.media.tumblr.com/c94494f01e22d1a54f7fade0c9cc5937/tumblr_nqpzvz1CJF1uzpzg5o1_r1_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Café Parisien',
    description: 'We’ve blended fine Arabica and Robusta beans to create a taste of true Parisien excellence.',
    img: 'https://78.media.tumblr.com/2280598b948a99fda5f57ed6c5431e45/tumblr_nqpzvzJar31uzpzg5o1_r2_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Cappuccino',
    description: 'We blend Arabica and a handful of Robusta beans together…',
    img: 'https://78.media.tumblr.com/5c64014d71ab6a99817ff56202490f11/tumblr_nqpzvzK2uF1uzpzg5o1_r1_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Latte',
    description: 'Enjoy a real coffee shop experience in the comfort of your home with NESCAFÉ Latte.',
    img: 'https://78.media.tumblr.com/4b072cbe09ea9e18326ffdc55715f44d/tumblr_nqq0b0PZ4Z1uzpzg5o1_r4_400.png'
  },
  {
    guid: uuid.v4(),
    name: 'Mocha',
    description: 'Add a little chocolate to your coffee-shop at home experience with NESCAFÉ Mocha.',
    img: 'https://78.media.tumblr.com/d282bfe4a81dc468e04e2060c01caf52/tumblr_nqq0b1hNB81uzpzg5o1_r1_400.png'
  }
]

export const fetchCoffees = () => {
  return coffees
}
