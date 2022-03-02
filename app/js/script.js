import fullpage from 'fullpage.js';

$(document).ready(function() {
	new fullpage('#fullpage', {
		autoscrolling: true,
		licenseKey: 'EA7FE4A9-A6FB4913-9371EA41-A7671B9E',
		lockAnchors: true,
		loopBottom: true,
		loopTop: true,
		//menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['El Mago', 'La Sacerdotisa', 'La Emperatriz', 'El Emperador', 'El Papa', 'El Enamorado', 'El Carro', 'La Justicia', 'El Hermitaño', 'La Rueda de la Fortuna', 'La Fuerza', 'El Colgado', 'La Muerte', 'Templanza', 'El Diablo', 'La Casa de Dios', 'La Estrella', 'La Luna', 'El Sol', 'El juicio', 'El Mundo', 'El Loco'],
		scrollOverflow: true,
		showActiveTooltip: true
	});
});
