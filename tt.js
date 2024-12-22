	let left_player = [null,null,null,null,null];
	let blue_score = 0;
	let right_player = [null,null,null,null,null];
	let red_score = 0;
	let field = [null,null,null,null,null,null,null,null,null];
	let turn_player = 0;
	let turn_count = 1;
	let com = 0;
	let mod = 0;
	
	 function Move(player, hand, field_pos) {
		let card = null;
		let atk = null;
		let def = null;
		if(player == 'left') {
			card = left_player[hand];
			left_player[hand] = null;
			atk = 'blue';
			def = 'red';
		}
		if(player == 'right') {
			card = right_player[hand];
			right_player[hand] = null;
			atk = 'red';
			def = 'blue';
		}
		card.field_pos = field_pos;
		field[field_pos] = card;
		if(mod == 1)
			PlusFlipper(card, atk, def);
		else if(mod == 2)
			SameFlipper(card, atk, def);
		else
			Flipper(card, atk, def);
		const newPromise = new Promise( (resolve, reject) => setTimeout(() => { resolve("Move Done"); }, 10) );
	}
	
	function SameFlipper(card, atk, def) {
		let {left, right, top, bottom} = GetNeighbors(Number(card.field_pos));
		if(left != null && right != null) {
			if(left.right == card.left && right.left == card.right && (left.color == def || right.color == def)) {
				if(left.color == def) {
					left.color = atk;
					left.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(left, atk, def);
				}
				if (right.color == def) {
					right.color = atk;
					right.animation = 'animation-name: rightspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(right, atk, def);
				}
			}
		}
		if(left != null && top != null) {
			if(left.right == card.left && top.bottom == card.top && (left.color == def || top.color == def)) {
				if(left.color == def) {
					left.color = atk;
					left.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(left, atk, def);
				}
				if (top.color == def) {
					top.color = atk;
					top.animation = 'animation-name: topspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(top, atk, def);
				}
			}
		}
		if(left != null && bottom != null) {
			if(left.right == card.left && bottom.top == card.bottom && (left.color == def || bottom.color == def)) {
				if(left.color == def) {
					left.color = atk;
					left.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(left, atk, def);
				}
				if (bottom.color == def) {
					bottom.color = atk;
					bottom.animation = 'animation-name: topspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(bottom, atk, def);
				}
			}
		}
		if(right != null && top != null) {
			if(right.left == card.right && top.bottom == card.top && (right.color == def || top.color == def)) {
				if(right.color == def) {
					right.color = atk;
					right.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(right, atk, def);
				}
				if (top.color == def) {
					top.color = atk;
					top.animation = 'animation-name: topspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(top, atk, def);
				}
			}
		}
		if(right != null && bottom != null) {
			if(right.left == card.right && bottom.top == card.bottom && (right.color == def || bottom.color == def)) {
				if(right.color == def) {
					right.color = atk;
					right.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(right, atk, def);
				}
				if (bottom.color == def) {
					bottom.color = atk;
					bottom.animation = 'animation-name: topspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(bottom, atk, def);
				}
			}
		}
		if(top != null && bottom != null) {
			if(top.bottom == card.top && bottom.top == card.bottom && (top.color == def || bottom.color == def)) {
				if(top.color == def) {
					top.color = atk;
					top.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(top, atk, def);
				}
				if (bottom.color == def) {
					bottom.color = atk;
					bottom.animation = 'animation-name: topspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(bottom, atk, def);
				}
			}
		}
		 Flipper(card, atk, def, doCombo = 0);
		const newPromise = new Promise( (resolve, reject) => setTimeout(() => { resolve("Same Flipper Done"); }, 10) );
	}
	
	function PlusFlipper(card, atk, def) {
		let {left, right, top, bottom} = GetNeighbors(Number(card.field_pos));
		if(left != null && right != null) {
			if(left.right + card.left == right.left + card.right && (left.color == def || right.color == def)) {
				if(left.color == def) {
					left.color = atk;
					left.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(left, atk, def);
				}
				if (right.color == def) {
					right.color = atk;
					right.animation = 'animation-name: rightspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(right, atk, def);
				}
			}
		}
		if(left != null && top != null) {
			if(left.right + card.left == top.bottom + card.top && (left.color == def || top.color == def)) {
				if(left.color == def) {
					left.color = atk;
					left.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(left, atk, def);
				}
				if (top.color == def) {
					top.color = atk;
					top.animation = 'animation-name: topspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(top, atk, def);
				}
			}
		}
		if(left != null && bottom != null) {
			if(left.right + card.left == bottom.top + card.bottom && (left.color == def || bottom.color == def)) {
				if(left.color == def) {
					left.color = atk;
					left.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(left, atk, def);
				}
				if (bottom.color == def) {
					bottom.color = atk;
					bottom.animation = 'animation-name: topspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(bottom, atk, def);
				}
			}
		}
		if(right != null && top != null) {
			if(right.left + card.right == top.bottom + card.top && (right.color == def || top.color == def)) {
				if(right.color == def) {
					right.color = atk;
					right.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(right, atk, def);
				}
				if (top.color == def) {
					top.color = atk;
					top.animation = 'animation-name: topspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(top, atk, def);
				}
			}
		}
		if(right != null && bottom != null) {
			if(right.left + card.right == bottom.top + card.bottom && (right.color == def || bottom.color == def)) {
				if(right.color == def) {
					right.color = atk;
					right.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(right, atk, def);
				}
				if (bottom.color == def) {
					bottom.color = atk;
					bottom.animation = 'animation-name: topspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(bottom, atk, def);
				}
			}
		}
		if(top != null && bottom != null) {
			if(top.bottom + card.top == bottom.top + card.bottom && (top.color == def || bottom.color == def)) {
				if(top.color == def) {
					top.color = atk;
					top.animation = 'animation-name: leftspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(top, atk, def);
				}
				if (bottom.color == def) {
					bottom.color = atk;
					bottom.animation = 'animation-name: topspin; animation-duration: 2s';
					if(com == 1)
						 Flipper(bottom, atk, def);
				}
			}
		}
		 Flipper(card, atk, def, doCombo = 0);
		const newPromise = new Promise( (resolve, reject) => setTimeout(() => { resolve("Same Flipper Done"); }, 10) );
	}
	
	 function Flipper(card, atk, def, doCombo = 1) {
		let {left, right, top, bottom} = GetNeighbors(Number(card.field_pos));
		if(left != null) {
			if(left.right < card.left && left.color == def) {
				left.color = atk;
				left.animation = 'animation-name: leftspin; animation-duration: 2s';
				if(com == 1 && doCombo == 1)
					 Flipper(left, atk, def);
			}
		}
		if(top != null) {
			if(top.bottom < card.top && top.color == def) {
				top.color = atk;
				top.animation = 'animation-name: topspin; animation-duration: 2s';
				if(com == 1 && doCombo == 1)
					 Flipper(top, atk, def);
			}
		}
		if(right != null) {
			if(right.left < card.right && right.color == def) {
				right.color = atk;
				right.animation = 'animation-name: rightspin; animation-duration: 1s';
				if(com == 1 && doCombo == 1)
					 Flipper(right, atk, def);
			}
		}
		if(bottom != null) {
			if(bottom.top < card.bottom && bottom.color == def) {
				bottom.color = atk;
				bottom.animation = 'animation-name: bottomspin; animation-duration: 1s';
				if(com == 1 && doCombo == 1)
					 Flipper(bottom, atk, def);
			}
		}
		const newPromise = new Promise( (resolve, reject) => setTimeout(() => { resolve("Flipper Done"); }, 10) );

	}
	
	function Draw() {
		left_player.forEach((card, index) => {
			if(card != null) {
				let doc = document.getElementsByClassName('left-card-' + (card.order+1))[0];
				doc.innerHTML = '<img src="' + card.image + '">';
			}
			else {
				let doc = document.getElementsByClassName('left-card-' + (index+1))[0];
				doc.innerHTML = '';
			}
		});
		right_player.forEach((card, index) => {
			if(card != null) {
				let doc = document.getElementsByClassName('right-card-' + (card.order+1))[0];
				doc.innerHTML = '<img src="' + card.image + '">';
			}
			else {
				let doc = document.getElementsByClassName('right-card-' + (index+1))[0];
				doc.innerHTML = '';
			}
		});
		field.forEach((card, index) => {
			if(card != null) {
				let doc = document.getElementsByClassName('field-card-' + (index+1))[0];
				if(card.animation != '') {
					doc.style.animationName = (card.color == 'blue') ? 'rtb' : 'btr';
					doc.style.animationDuration = '1s';
					doc.style.animationFillMode = "forwards";
				}
				else {
					doc.style.backgroundColor = (card.color == 'blue') ? 'SlateBlue' : 'IndianRed';
					doc.style.animationName = '';
					doc.style.animationDuration = '';
					doc.style.animationFillMode = '';
				}
				doc.innerHTML = '<img src="' + card.image + '" style="mix-blend-mode: luminosity; '+ card.animation +'">';
				card.animation = '';
				//doc.style.backgroundImage = "url('" + card.image + "')";
				
			}
			else {
				let doc = document.getElementsByClassName('field-card-' + (index+1))[0];
				doc.innerHTML = '';
			}
		});
		const newPromise = new Promise( (resolve, reject) => setTimeout(() => { resolve("Flipper Done"); }, 10) );
	}
	
	async function GetCards() {
		left_player = [null,null,null,null,null];
		right_player = [null,null,null,null,null];
		field = [null,null,null,null,null,null,null,null,null];
		for(let i = 0; i <= 4; i++) {
			let lcard = null;
			let lran = Math.floor(Math.random()*405) + 1;
			await fetch("https://ffxivcollect.com/api/triad/cards/" + lran).then(response => response.json()).then(data => {
				lcard = new card(lran, data.stats.numeric.top, data.stats.numeric.right, data.stats.numeric.left, data.stats.numeric.bottom, i, data.image, 'blue');
				left_player[i] = lcard;
			});
			
			let rcard = null;
			let rran = Math.floor(Math.random()*405) + 1;
			await fetch("https://ffxivcollect.com/api/triad/cards/" + rran).then(response => response.json()).then(data => {
				rcard = new card(rran, data.stats.numeric.top, data.stats.numeric.right, data.stats.numeric.left, data.stats.numeric.bottom, i, data.image, 'red');
				right_player[i] = rcard;
			});
		}
	}
	
	 function SameCalcFlipper(card, atk, def, findex) {
		let score = 0;
		let {left, right, top, bottom} = GetNeighbors(findex);
		if(left != null && right != null) {
			if(left.right == card.left && right.left == card.right && (left.color == def || right.color == def)) {
				if(left.color == def) {
					score += (left.left + left.right + left.top + left.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).left != null || GetCalcNeighbors(card.field_pos).left == "wall")
						score += (10 - card.left)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(left, atk, def, findex);
				}
				if (right.color == def) {
					score += (right.left + right.right + right.top + right.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).right != null || GetCalcNeighbors(card.field_pos).right == "wall")
						score += (10 - card.right)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(right, atk, def, findex);
				}
			}
		}
		if(left != null && top != null) {
			if(left.right == card.left && top.bottom == card.top && (left.color == def || top.color == def)) {
				if(left.color == def) {
					score += (left.left + left.right + left.top + left.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).left != null || GetCalcNeighbors(card.field_pos).left == "wall")
						score += (10 - card.left)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(left, atk, def, findex);
				}
				if (top.color == def) {
					score += (top.left + top.right + top.top + top.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).top != null || GetCalcNeighbors(card.field_pos).top == "wall")
						score += (10 - card.top)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(top, atk, def, findex);
				}
			}
		}
		if(left != null && bottom != null) {
			if(left.right == card.left && bottom.top == card.bottom && (left.color == def || bottom.color == def)) {
				if(left.color == def) {
					score += (left.left + left.right + left.top + left.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).left != null || GetCalcNeighbors(card.field_pos).left == "wall")
						score += (10 - card.left)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(left, atk, def, findex);
				}
				if (bottom.color == def) {
					score += (bottom.left + bottom.right + bottom.top + bottom.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).bottom != null || GetCalcNeighbors(card.field_pos).bottom == "wall")
						score += (10 - card.bottom)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(bottom, atk, def, findex);
				}
			}
		}
		if(right != null && top != null) {
			if(right.left == card.right && top.bottom == card.top && (right.color == def || top.color == def)) {
				if(right.color == def) {
					score += (right.left + right.right + right.top + right.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).right != null || GetCalcNeighbors(card.field_pos).right == "wall")
						score += (10 - card.right)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(right, atk, def, findex);
				}
				if (top.color == def) {
					score += (top.left + top.right + top.top + top.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).top != null || GetCalcNeighbors(card.field_pos).top == "wall")
						score += (10 - card.top)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(top, atk, def, findex);
				}
			}
		}
		if(right != null && bottom != null) {
			if(right.left == card.right && bottom.top == card.bottom && (right.color == def || bottom.color == def)) {
				if(right.color == def) {
					score += (right.left + right.right + right.top + right.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).right != null || GetCalcNeighbors(card.field_pos).right == "wall")
						score += (10 - card.right)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(right, atk, def, findex);
				}
				if (bottom.color == def) {
					score += (bottom.left + bottom.right + bottom.top + bottom.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).bottom != null || GetCalcNeighbors(card.field_pos).bottom == "wall")
						score += (10 - card.bottom)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(bottom, atk, def, findex);
				}
			}
		}
		if(top != null && bottom != null) {
			if(top.bottom == card.top && bottom.top == card.bottom && (top.color == def || bottom.color == def)) {
				if(top.color == def) {
					score += (top.left + top.right + top.top + top.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).top != null || GetCalcNeighbors(card.field_pos).top == "wall")
						score += (10 - card.top)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(top, atk, def, findex);
				}
				if (bottom.color == def) {
					score += (bottom.left + bottom.right + bottom.top + bottom.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).bottom != null || GetCalcNeighbors(card.field_pos).bottom == "wall")
						score += (10 - card.bottom)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(bottom, atk, def, findex);
				}
			}
		}
		score +=  CalcFlipper(card, atk, def, findex, doCombo = 0);
		const newPromise = new Promise( (resolve, reject) => setTimeout(() => { resolve("Same Flipper Done"); }, 10) );
		return score;
	}
	
	function PlusCalcFlipper(card, atk, def, findex) {
		let score = 0;
		let {left, right, top, bottom} = GetNeighbors(findex);
		if(left != null && right != null) {
			if(left.right + card.left == right.left + card.right && (left.color == def || right.color == def)) {
				if(left.color == def) {
					score += (left.left + left.right + left.top + left.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).left != null || GetCalcNeighbors(card.field_pos).left == "wall")
						score += (10 - card.left)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(left, atk, def, findex);
				}
				if (right.color == def) {
					score += (right.left + right.right + right.top + right.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).right != null || GetCalcNeighbors(card.field_pos).right == "wall")
						score += (10 - card.right)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(right, atk, def, findex);
				}
			}
		}
		if(left != null && top != null) {
			if(left.right + card.left == top.bottom + card.top && (left.color == def || top.color == def)) {
				if(left.color == def) {
					score += (left.left + left.right + left.top + left.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).left != null || GetCalcNeighbors(card.field_pos).left == "wall")
						score += (10 - card.left)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(left, atk, def, findex);
				}
				if (top.color == def) {
					score += (top.left + top.right + top.top + top.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).top != null || GetCalcNeighbors(card.field_pos).top == "wall")
						score += (10 - card.top)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(top, atk, def, findex);
				}
			}
		}
		if(left != null && bottom != null) {
			if(left.right + card.left == bottom.top + card.bottom && (left.color == def || bottom.color == def)) {
				if(left.color == def) {
					score += (left.left + left.right + left.top + left.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).left != null || GetCalcNeighbors(card.field_pos).left == "wall")
						score += (10 - card.left)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(left, atk, def, findex);
				}
				if (bottom.color == def) {
					score += (bottom.left + bottom.right + bottom.top + bottom.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).bottom != null || GetCalcNeighbors(card.field_pos).bottom == "wall")
						score += (10 - card.bottom)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(bottom, atk, def, findex);
				}
			}
		}
		if(right != null && top != null) {
			if(right.left + card.right == top.bottom + card.top && (right.color == def || top.color == def)) {
				if(right.color == def) {
					score += (right.left + right.right + right.top + right.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).right != null || GetCalcNeighbors(card.field_pos).right == "wall")
						score += (10 - card.right)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(right, atk, def, findex);
				}
				if (top.color == def) {
					score += (top.left + top.right + top.top + top.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).top != null || GetCalcNeighbors(card.field_pos).top == "wall")
						score += (10 - card.top)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(top, atk, def, findex);
				}
			}
		}
		if(right != null && bottom != null) {
			if(right.left + card.right == bottom.top + card.bottom && (right.color == def || bottom.color == def)) {
				if(right.color == def) {
					score += (right.left + right.right + right.top + right.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).right != null || GetCalcNeighbors(card.field_pos).right == "wall")
						score += (10 - card.right)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(right, atk, def, findex);
				}
				if (bottom.color == def) {
					score += (bottom.left + bottom.right + bottom.top + bottom.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).bottom != null || GetCalcNeighbors(card.field_pos).bottom == "wall")
						score += (10 - card.bottom)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(bottom, atk, def, findex);
				}
			}
		}
		if(top != null && bottom != null) {
			if(top.bottom + card.top == bottom.top + card.bottom && (top.color == def || bottom.color == def)) {
				if(top.color == def) {
					score += (top.left + top.right + top.top + top.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).top != null || GetCalcNeighbors(card.field_pos).top == "wall")
						score += (10 - card.top)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(top, atk, def, findex);
				}
				if (bottom.color == def) {
					score += (bottom.left + bottom.right + bottom.top + bottom.bottom)*(Math.floor(Math.random() * 2)+1);
					if(GetCalcNeighbors(card.field_pos).bottom != null || GetCalcNeighbors(card.field_pos).bottom == "wall")
						score += (10 - card.bottom)*(Math.floor(Math.random() * 2)+1);
					if(com == 1)
						score +=  CalcFlipper(bottom, atk, def, findex);
				}
			}
		}
		score +=  CalcFlipper(card, atk, def, findex, doCombo = 0);
		const newPromise = new Promise( (resolve, reject) => setTimeout(() => { resolve("Same Flipper Done"); }, 10) );
		return score;
	}
	
	 function CalcFlipper(card, atk, def, findex, doCombo = 1) {
		let score = 0;
		let {left, right, top, bottom} = GetNeighbors(findex);
		if(left != null) {
			if(left.right < card.left && left.color == def) {
				score += (left.left + left.right + left.top + left.bottom)*(Math.floor(Math.random() * 2)+1);
				if(GetCalcNeighbors(card.field_pos).left != null || GetCalcNeighbors(card.field_pos).left == "wall")
					score += (10 - card.left)*(Math.floor(Math.random() * 2)+1);
				if(com == 1 && doCombo == 1)
					score +=  CalcFlipper(left, atk, def);
			}
		}
		else {
			if(findex != 0 && findex != 3 && findex != 6)
				score -= (10 - card.left)*(Math.floor(Math.random() * 2)+1);
		}
		if(top != null) {
			if(top.bottom < card.top && top.color == def) {
				score += (top.left + top.right + top.top + top.bottom)*(Math.floor(Math.random() * 2)+1);
				if(GetCalcNeighbors(card.field_pos).top != null|| GetCalcNeighbors(card.field_pos).top == "wall")
					score += (10 - card.top)*(Math.floor(Math.random() * 2)+1);
				if(com == 1 && doCombo == 1)
					score +=  CalcFlipper(top, atk, def);
			}
		}
		else {
			if(findex != 0 && findex != 1 && findex != 2)
				score -= (10 - card.top)*(Math.floor(Math.random() * 2)+1);
		}
		if(right != null) {
			if(right.left < card.right && right.color == def) {
				score += (right.left + right.right + right.top + right.bottom)*(Math.floor(Math.random() * 2)+1);
				if(GetCalcNeighbors(card.field_pos).right != null || GetCalcNeighbors(card.field_pos).right == "wall")
					score += (10 - card.right)*(Math.floor(Math.random() * 2)+1);
				if(com == 1 && doCombo == 1)
					score +=  CalcFlipper(right, atk, def);
			}
		}
		else {
			if(findex != 2 && findex != 5 && findex != 8)
				score -= (10 - card.right)*(Math.floor(Math.random() * 2)+1);
		}
		if(bottom != null) {
			if(bottom.top < card.bottom && bottom.color == def) {
				score += (bottom.left + bottom.right + bottom.top + bottom.bottom)*(Math.floor(Math.random() * 2)+1);
				if(GetCalcNeighbors(card.field_pos).bottom != null || GetCalcNeighbors(card.field_pos).bottom == "wall")
					score += (10 - card.bottom)*(Math.floor(Math.random() * 2)+1);
				if(com == 1 && doCombo == 1)
					score +=  CalcFlipper(bottom, atk, def);
			}
		}
		else {
			if(findex != 6 && findex != 7 && findex != 8)
				score -= (10 - card.bottom)*(Math.floor(Math.random() * 2)+1);
		}
		const newPromise = new Promise( (resolve, reject) => setTimeout(() => { resolve("Calc Done"); }, 10) );
		return score;
	}
	
	function GetNeighbors(field_pos) {
		var left = null;
		var right = null;
		var top = null;
		var bottom = null;
		if(field_pos > 0 && field_pos != 3 && field_pos != 6) {
			let i = field_pos-1;
			left = field[i];
		}
		if(field_pos > 2) {
			let i = field_pos-3;
			top = field[i];
		}
		if(field_pos < 8 && field_pos != 2 && field_pos != 5) {
			let i = field_pos+1;
			right = field[i];
		}
		if(field_pos < 6) {
			let i = field_pos+3;
			bottom = field[i];
		}
		return {left, right, top, bottom};
	}
	
	function GetCalcNeighbors(field_pos) {
		var left = null;
		var right = null;
		var top = null;
		var bottom = null;
		if(field_pos > 0 && field_pos != 3 && field_pos != 6) {
			let i = field_pos-1;
			left = field[i];
		}
		if(field_pos == 0 || field_pos == 3 || field_pos == 6) {
			left = "wall";
		}
		if(field_pos > 2) {
			let i = field_pos-3;
			top = field[i];
		}
		if(field_pos == 0 || field_pos == 1 || field_pos == 2) {
			top = "wall";
		}
		if(field_pos < 8 && field_pos != 2 && field_pos != 5) {
			let i = field_pos+1;
			right = field[i];
		}
		if(field_pos == 2 || field_pos == 5 || field_pos == 8) {
			right = "wall";
		}
		if(field_pos < 6) {
			let i = field_pos+3;
			bottom = field[i];
		}
		if(field_pos == 6 || field_pos == 7 || field_pos == 8) {
			bottom = "wall";
		}
		return {left, right, top, bottom};
	}
	
	 function CalcMove(player) {
		let hand = right_player;
		let map = new Map();
		let atk = 'red';
		let def = 'blue';
		if(player == 'left') {
			hand = left_player;
			atk = 'blue';
			def = 'red';
		}
		for(let i=0; i < hand.length; i++) {
			let card = hand[i];
			if(card != null)
				for(let j=0; j<field.length; j++) {
					let f = field[j];
					if(f == null) {
						let score = 0;
						if (mod == 1)
							score = PlusCalcFlipper(card, atk, def, j);
						else if(mod == 2)
							score =  SameCalcFlipper(card, atk, def, j);
						else
							score =  CalcFlipper(card, atk, def, j);
						map.set(i + '|' + j, score);
					}
				}
		}
		highest = -10000;
		keypick = '';
		for (const [key, value] of map) {
			if(value > highest) {
				keypick = key;
				highest = value;
			}
			if(value == highest && Math.floor(Math.random() * 2) == 0) {
				keypick = key;
				highest = value;
			}
		}
		const newPromise = new Promise( (resolve, reject) => setTimeout(() => { resolve("Calc Done"); }, 10) );
		return keypick;
	}
	
	async function StartGame(combo = 0, mode = '') {
		com = combo;
		if(mode == 'plus')
			mod = 1;
		else if(mode == 'same')
			mod = 2;
		else
			mod = 0;
		for(let i = 0; i < 9; i++) {
			let doc = document.getElementsByClassName('field-card-' + (i+1))[0];
			doc.innerHtml = '';
			doc.style.animationName = '';
			doc.style.animationDuration = '';
			doc.style.animationFillMode = '';
			if(i%2==0) {
				doc.style.backgroundColor = '#AAAAAA';
			}
			else {
				doc.style.backgroundColor = '#DDDDDD';
			}
		}
		await GetCards();
		turn_player = (Math.floor(Math.random()*2) == 0) ? 'left' : 'right';
		turn_count = 1;
		 Draw();
	}
	
	 function nextMove() {
		let keypick =  CalcMove(turn_player);
		 Move(turn_player, keypick.split('|')[0], keypick.split('|')[1]);
		 Draw();
		turn_player = (turn_player == 'left') ? 'right' : 'left';
	}
	
	function getWinner() {
		let blue_score = 0;
		let red_score = 0;
		field.forEach((card) => {
			if(card.color == 'red')
				red_score += 1;
			else
				blue_score += 1;
		});
		left_player.forEach((card) => {
			if(card != null)
				blue_score += 1;
		});
		right_player.forEach((card) => {
			if(card != null)
				red_score += 1;
		});
		if(blue_score > red_score)
			document.cookie = 'WinnerTT=blue; path=/';
		else if(red_score > blue_score)
			document.cookie = 'WinnerTT=red; path=/';
		else
			document.cookie = 'WinnerTT=tie; path=/';
	}
	
	class card {
		constructor(n, t, r, l, b, o, i, c) {
			this.number = n;
			this.top = t;
			this.right = r;
			this.left = l;
			this.bottom = b;
			this.order = o;
			this.image = i;
			this.color = c;
			this.animation = '';
		}
	}