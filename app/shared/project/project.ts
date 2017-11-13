import {JsonProperty, deserialize} from 'json-typescript-mapper';

export class Info {
    projectName: string;
    station: string;
    diskUsage: number;
    batteryUsage: number;

    constructor() {
        this.projectName = undefined;
        this.station = undefined;
        this.diskUsage = undefined;
        this.batteryUsage = undefined;
    }    
}

export class Recording {
    enable: boolean;
    timeFrom: Date;
    timeTo: Date;

    constructor() {
        this.enable = undefined;
        this.timeFrom = undefined;
        this.timeTo = undefined;
    } 
}

export class Schedule {
    startDate: Date;
    @JsonProperty({clazz: Recording})
    days: Recording[];

    constructor() {
        this.startDate = undefined;
        this.days = undefined;
    }
}

export class Project {
    isRunning: boolean;
    @JsonProperty({clazz: Info})
    info: Info;
    @JsonProperty({clazz: Schedule})
    schedule: Schedule;

    constructor() {
        this.isRunning = void 0;
        this.info = void 0;
        this.schedule = void 0;
    }
}
