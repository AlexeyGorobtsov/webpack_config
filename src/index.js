import './index.css';
import {getValue} from './utils/getValue';

const content =
    {
        name: 'project',
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


// function getComponent() {
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _}) => {
//         const element = document.createElement('div');
//
//         element.innerHTML = _.join(['Hello!!', 'webpack'], ' ');
//
//         return element;
//
//     }).catch(error => 'An error occurred while loading the component');
// }
//
// getComponent().then(component => {
//     document.body.appendChild(component);
// });

function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;

        print();
    });

    return element;
}

document.body.appendChild(component());