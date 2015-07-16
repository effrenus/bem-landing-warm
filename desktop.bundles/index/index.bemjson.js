({
	block: 'page',
	mix: { block: 'base' },
  title: 'Теплые окна',
  favicon: '../../favicon.png',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=1024, initial-scale=1' } },
      { elem: 'css', url: 'index.css' }
  ],
  scripts: [{ elem: 'js', url: '_index.js' }],
  content: [
		{
			block: 'header',
			content: [
				{
					block: 'image',
					mix: { block: 'header', elem: 'logo' },
					url: '../../images/logo.png',
					alt: 'Теплые окна',
					width: 158,
					height: 74
				},
				{
					block: 'contact',
					mix: { block: 'header', elem: 'contact' },
					content: [
						{ elem: 'tel', content: '8&nbsp;800&nbsp;333&nbsp;19&nbsp;63'},
						{ block: 'link', mix: { block: 'contact', elem: 'link' }, mods: {pseudo: true}, content: 'Заказать звонок'}
					]
				},
				{ elem: 'foundation', content: 'Основан в 2007 году'},
			]
		},
		{
			block: 's-intro',
			content: [
				{
					elem: 'header',
					content: [
						{
							elem: 'title',
							content: 'Заработайте 2&nbsp;000&nbsp;000&nbsp;<br> чистой прибыли'
						},
						{
							elem: 'text',
							content: 'Франшиза от профессионалов строительного бизнеса. Эксклюзивные условия от производителей VEKA и REHAU, безукоризненная репутация (98% довольных клиентов), минимальные инвестиции (440 000 a) выведут Вас на новый уровень доходов'
						}
					]
				},
				{
					block: 'form-request',
					mods: { inline: true },
					mix: { block: 's-intro', elem: 'form' }
				}
			]
		},
		{
			block: 's-profit',
			content: [
				{ elem: 'title', mix: {block: 's-profit', elem: 'title'}, content: 'Бизнес, который подходит именно Вам:' },
				{ elem: 'text', mix: {block: 's-profit', elem: 'text'}, content: '<b>Франшиза компании «Теплые окна»</b> — это доходный бизнес, проверенный на 8-летнем опыте ее руководителей и сотрудников, c минимальными инвестициями, гарантированным сроком окупаемости от 2 до 5 месяцев и возможностью постоянно увеличивать свой доход за счет добавления новых товаров.' },
				{ block: 'profit-grid' }
			]
		},
		{
			block: 's-partners',
			content: [
				{ elem: 'title', content: 'Наши партнеры'},
				{
					elem: 'list',
					content: [
						{ block: 'partner', mix: { block: 's-partners', elem: 'item' }, text: 'Мировой лидер профильных систем по производству пластиковых окон.', image: '../../images/logos/veka.png'},
						{ block: 'partner', mix: { block: 's-partners', elem: 'item' }, text: 'Международный лидер в области товаров для ремонта и строительства.', image: '../../images/logos/leroy.png'},
						{ block: 'partner', mix: { block: 's-partners', elem: 'item' }, text: 'Международный производитель, сочетающий в себе чистокровные немецкие технологии и их качество.', image: '../../images/logos/rehau.png'}
					]
				},
				{ block: 'button', mods: { submit: true, size: 'big', upper: true }, type: 'submit', text: 'Начать свой бизнес' }
			]
		},
		{
			block: 'our-office',
			content: [
				{ elem: 'title', content: 'Как реально выглядит этот бизнес'},
				{
					block: 'section',
					elem: 'container',
					content: {
						block: 'gallery',
						mix: { block: 'our-office', elem: 'gallery' },
						images: ['../../images/gal/1.png', '../../images/gal/2.png', '../../images/gal/3.png', '../../images/gal/4.png']
					}
				},
				{
					elem: 'footer',
					content: [
						{ block: 'button', mods: { submit: true, size: 'big', upper: true }, type: 'submit', text: 'Открыть такой же офис' }
					]
				}
			]
		},
		{
			block: 'client-who',
			content: [
				{ elem: 'title', content: 'Кто будет вашим клиентом' },
				{ block: 'client-card', mix: { block: 'client-who', elem: 'cards' } },
				{ block: 'button', mods: { submit: true, size: 'big', upper: true }, type: 'submit', text: 'Узнать подробности' }
			]
		},
		{
			block: 'profit',
			mix: { block: 'section' },
			content: [
				{ elem: 'title', mix: { block: 'section', elem: 'title' }, content: 'Почему это выгодно' },
				{
					elem: 'cols',
					content: [
						{ block: 'merits', mods: { large: true }, title: 'Высокий спрос на рынке:', text: 'от <b>9 000</b> до <b>14 000</b> запросов потребителей в месяц в одном городе (с населением от 500 до 700 тысяч)' },
						{ block: 'merits', mods: { large: true }, title: 'Большой объем продаж:', text: 'от <b>434 000</b> до <b>1 299 000</b> на один офис' },
						{ block: 'merits', mods: { icon: 'wallet' }, title: 'Высокий средний чек:', text: 'от <b>24 000</b> до <b>59 000</b>' },
						{ block: 'merits', mods: { icon: 'paper' }, title: 'Короткий цикл сделки:', text: 'от <b>1</b> до <b>5</b> дней' },
						{ block: 'merits', mods: { icon: 'money' }, title: 'Высокая наценка:', text: 'от <b>30</b> до <b>40%</b>' },
						{ block: 'merits', mods: { icon: 'calendar' }, title: 'Быстрый цикл оказания услуг:', text: 'от <b>2</b> до <b>10</b> дней' }
					]
				},
				{
					block: 'form-request',
					mix: { block: 'profit', elem: 'form' }
				}
			]
		},
		{
			block: 's-income',
			mix: { block: 'section' },
			content: [
				{
					block: 'section',
					elem: 'container',
					content: { block: 'income-ladder' }
				},
				{ block: 'income-calculator' },
				{
					block: 'income-side',
					content: [
						{ elem: 'title', content: 'Кроме этого, Вы можете получить доход от' },
						{
							elem: 'items',
							content: [
								{
									elem: 'item',
									mods: { ico: true, ico_type: '1' },
									content: 'Установки окон по ГОСТ'
								},
								{
									elem: 'item',
									mods: { ico: true, ico_type: '2' },
									content: 'Утепления откосов'
								},
								{
									elem: 'item',
									mods: { ico: true, ico_type: '3' },
									content: 'Обшивки балконов'
								},
								{
									elem: 'item',
									mods: { ico: true, ico_type: '4' },
									content: 'Продажи и установки жалюзи'
								},
								{
									elem: 'item',
									mods: { ico: true, ico_type: '5' },
									content: 'Продажи алюминиевых конструкций'
								}
							]
						},
						{
							block: 'button',
							mods: { submit: true, size: 'big', upper: true },
							content: 'Объясните, как?'
						}
					]
				}
			]
		},
		{
			block: 's-projects',
			content: [
				{ elem: 'title', mix: { block: 'section', elem: 'title' }, content: 'Выполненные проекты'},
				{
					block: 'done-project',
					mods: { bg: 'g' },
					head: { title: 'Многоквартирный дом', text: 'Остекление новотройки'},
					images: ['../../images/projects/1_1.png', '../../images/projects/1_2.png', '../../images/projects/1_3.png'],
					price: '1 200 000',
					profit: '364 000'
				},
				{
					block: 'done-project',
					head: { title: 'Многоквартирный дом', text: 'Остекление новотройки'},
					images: ['../../images/projects/2_1.png', '../../images/projects/2_2.png', '../../images/projects/2_3.png'],
					price: '1 200 000',
					profit: '364 000'
				},
				{
					block: 'done-project',
					mods: { bg: 'g' },
					head: { title: 'Многоквартирный дом', text: 'Остекление новотройки'},
					images: ['../../images/projects/3_1.png', '../../images/projects/3_2.png', '../../images/projects/3_3.png'],
					price: '1 200 000',
					profit: '364 000'
				}
			]
		}
  ]
})
