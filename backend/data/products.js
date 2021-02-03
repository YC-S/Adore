const products = [
	{
		_id: '1',
		name: 'Monday Rocks',
		image: '/images/Monday_Rocks.jpg',
		description:
			'DIY kit & 4-8 stems of premium fresh flowers picked and perfectly designed to put on a small working desk! They have the magic to fresh up your Mondays and be your rock for a hectic week!',
		brand: 'Adore',
		category: 'Flowers',
		price: '4.99/week',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '2',
		name: 'Adore Classics',
		image: '/images/Adore_Classics.jpg',
		description:
			'DIY kit & 6-12 stems of premium fresh flowers picked and perfectly designed to create classic table flowers! Start your week with these beauties blooming and stretching in the air!',
		brand: 'Adore',
		category: 'Flowers',
		price: '9.99/week',
		countInStock: 100,
		rating: 4.5,
		numReviews: 56,
	},
	{
		_id: '3',
		name: 'Brightest Bloom',
		image: '/images/Brightest_Bloom.jpg',
		description:
			'DIY kit & 12-24 stems of premium fresh flowers picked and designed to create a large bouquet, perfect to decorate a spacious living room!',
		brand: 'Adore',
		category: 'Flowers',
		price: '19.99/week',
		countInStock: 100,
		rating: 5,
		numReviews: 3,
	},
	{
		_id: '4',
		name: "Dora Bud Vase 5.5'",
		image: '/images/vases/dora_bud_vase.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '9.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '5',
		name: "Hurricane Glass Vase 6.5'",
		image: '/images/vases/hurricane_glass_vase.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '7.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '6',
		name: "Sleeping Beauty Mini Pot'",
		image: '/images/vases/sleeping_beauty_mini_pot.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '9.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '7',
		name: 'Blue Mini Footed Pot',
		image: '/images/vases/blue_mini_footed_pot.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '9.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '8',
		name: "Mini 3.15' Ceramic Pot",
		image: '/images/vases/mini_ceramic_pot.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '7.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '9',
		name: "Modern Creative Cube 3'",
		image: '/images/vases/modern_creative_cube.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '7.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '10',
		name: 'Pink Mini Footed Pot',
		image: '/images/vases/pink_mini_footed_pot.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '9.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '11',
		name: 'Handmade Wood Cube',
		image: '/images/vases/Handmade_wood_cube.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '9.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '12',
		name: 'Birch Bark Cube',
		image: '/images/vases/birch_bark_cube.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '12.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '13',
		name: 'Wood Drawer Cube',
		image: '/images/vases/wood_drawer_cube.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '17.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
	{
		_id: '14',
		name: 'White Ceramic Pot',
		image: '/images/vases/white_ceramic_pot.jpg',
		description:
			'Available only to Adore Flower Subscribers.Clear glass vase, perfect for Monday Rocks.',
		dimension: '5.5” (H) x 3” (W) x 1.75',
		brand: 'Adore',
		category: 'Vases',
		price: '7.99',
		countInStock: 100,
		rating: 4,
		numReviews: 120,
	},
]

module.exports = products