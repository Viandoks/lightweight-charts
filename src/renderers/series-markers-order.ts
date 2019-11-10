import { Coordinate } from '../model/coordinate';

import { hitTestSquare } from './series-markers-square';
import { shapeSize } from './series-markers-utils';

export function drawOrder(
	up: boolean,
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	color: string,
	size: number
): void {
	const arrowSize = shapeSize('orderBuy', size);
	const halfArrowSize = (arrowSize - 1) / 2;
	ctx.fillStyle = color;
	ctx.beginPath();
	if (up) {
		ctx.moveTo(centerX, centerY);
		ctx.lineTo(centerX - halfArrowSize, centerY + halfArrowSize);
		ctx.lineTo(centerX + halfArrowSize, centerY + halfArrowSize);
	} else {
		ctx.moveTo(centerX, centerY);
		ctx.lineTo(centerX - halfArrowSize, centerY - halfArrowSize);
		ctx.lineTo(centerX + halfArrowSize, centerY - halfArrowSize);
	}
	ctx.fill();
}

export function hitTestOrder(
	up: boolean,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	// TODO: implement arrow hit test
	return hitTestSquare(centerX, centerY, size, x, y);
}
