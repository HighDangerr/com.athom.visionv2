'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class VisionDoorSensor extends ZwaveDevice {

	async onMeshInit() {
		this.registerCapability('alarm_contact', 'BASIC', {
			getOpts: {
				getOnOnline: true,
			},
		});
		this.registerCapability('measure_battery', 'BATTERY');

	}

}

module.exports = VisionDoorSensor;
