'use strict';

const Homey = require('homey');

class VisionGarageSensor extends Homey.Driver {

	async onMeshInit() {
		this.registerCapability('alarm_contact', 'NOTIFICATION', {
			getOpts: {
				getOnOnline: true,
			},
		});
		this.registerCapability('measure_battery', 'BATTERY');

	}

}

module.exports = VisionGarageSensor;
