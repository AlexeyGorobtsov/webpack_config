import './index.css';
import {getValue} from './utils/getValue';

const content =
    { name: 'project',
        group: {
            instance: {id: 3},
            id: '1',
            active: true
        },
    };
const keys = [
    'group.id',
    'group.active',
];

const res = getValue(content, 'group.instance.id');
console.log(res);