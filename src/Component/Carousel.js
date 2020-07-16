import React, { Component } from 'react';
import blog from '../Assets/Images/blog.jpeg'
import github from '../Assets/Images/github.jpg'
import  Card  from './Card';
import { Container,Row } from 'react-bootstrap';

class Carousel extends Component {
	state = {
		items: [
			// {
			//     id: 0,
			//     title: '',
			//     subTitle: '',
			//     imgSrc: '',
			//     link: '',
			//     selected: false
			// },
			{
				id: 0,
				title: 'Amir Shariff',
				subTitle: 'Blog',
				imgSrc: blog,
				link: 'www.youtube.com',
				selected: false,
			},
			{
				id: 1,
				title: 'github',
				subTitle: 'github',
				imgSrc: github,
				link: 'https://github.com/amirshariff',
				selected: false,
			},
		],
	};

    handleCardClick = (id, card) => {
		let items = [...this.state.items];

		items[id].selected = items[id].selected ? false : true;

		items.forEach((item) => {
			if (item.id !== id) {
				item.selected = false;
			}
		});

		this.setState({
			items,
		});
	};

	makeItems = (items) => {
        return items.map((item) => {
            
            return (
                
				<Card
					item={item}
					click={(e) => this.handleCardClick(item.id, e)}
					key={item.id}
				/>
			);
		});
	};

	render() {
		return (
			<Container fluid={true}>
				<Row className="justify-content-around">
					{this.makeItems(this.state.items)}
				</Row>
			</Container>
		);
	}
}

export default Carousel;
